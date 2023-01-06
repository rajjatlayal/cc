import React, { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useStateValue } from "./../StateProvider.js";
import { ethers } from "ethers";
import { Link,useHistory} from "react-router-dom";
import {
  Box,
  Text,
  VisuallyHidden,
  chakra,
  Image,
  Icon,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  AddIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import { Twitter, Linkedin, Facebook, Discord } from "react-bootstrap-icons";
import "./../style.css";
import eventBus from "../eventBus";

export default function TokenBalance() {
  const history = useHistory();
  const [{ global }, dispatch] = useStateValue();
  const { t } = useTranslation();
  const [theme, setTheme] = useState("");
  const [allData, setAllData] = useState<string[]>([]); 
  const [allTransactions, setAllTransactions] = useState<string[]>([]); 
  const [currentFaq, setCurrentFaq] = useState("");
  const [currentTab, setCurrentTab] = useState("balance");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
    } else if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
    }
    eventBus.on("changeTheme", (data: any) => {
      if (data.message === "dark") {
        setTheme("light");
      } else if (data.message === "light") {
        setTheme("dark");
      }
    });
  }, [theme]);

  const getTransactions = async () =>{
    // console.log('get transactions');
    var url;
    if(global.chainId===137){
        url = 'https://polygon-mainnet.g.alchemy.com/v2/1njiSKZhpK_P7gq-VbUBCtMOoWMDqg3E';
      }else{
        url = 'https://eth-mainnet.g.alchemy.com/v2/1uckHdKs5pUccyS9dQJ152ut32qXO2eC';
      }
      const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
          id: 1,
          jsonrpc: '2.0',
          method: 'alchemy_getAssetTransfers',
          params: [
            {
              fromBlock: '0x0',
              toBlock: 'latest',
              category: ['external'],
              withMetadata: false,
              excludeZeroValue: true,
              maxCount: '0xA',
              order: 'desc',
              fromAddress: global.walletAddress
            }
          ]
        })
      };
      fetch(url, options)
        .then(res => res.json())
        .then((data) => {
        //   console.log('transactions',data);
          setAllTransactions(data.result.transfers);
        })
      .catch(err => console.error('error:' + err));
    }

    const getInitialData = async () =>{
    //   const url = 'https://polygon-mainnet.g.alchemy.com/v2/1njiSKZhpK_P7gq-VbUBCtMOoWMDqg3E';
    var url;
    if(global.chainId===137){
        url = 'https://polygon-mainnet.g.alchemy.com/v2/1njiSKZhpK_P7gq-VbUBCtMOoWMDqg3E';
      }else{
        url = 'https://eth-mainnet.g.alchemy.com/v2/1uckHdKs5pUccyS9dQJ152ut32qXO2eC';
      }
      const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
          id: 1,
          jsonrpc: '2.0',
          method: 'alchemy_getTokenBalances',
          params: global.walletAddress.split()
        })
      };
      fetch(url, options)
        .then(res => res.json())
        .then((json) => {
        //   console.log('balances',json.result.tokenBalances);
        //   setAllData(json.result.tokenBalances);
          const array=json.result.tokenBalances;
        //   console.log('array length',array);

          var arr:any[] = [];
          let new_obj;
          for (let i = 0; i < array.length; i++) {
            (async () => {
                var balance=ethers.utils.formatEther(json.result.tokenBalances[i].tokenBalance);
                // const url1 = 'https://polygon-mainnet.g.alchemy.com/v2/1njiSKZhpK_P7gq-VbUBCtMOoWMDqg3E';
                var url1;
                if(global.chainId===137){
                    url1= 'https://polygon-mainnet.g.alchemy.com/v2/1njiSKZhpK_P7gq-VbUBCtMOoWMDqg3E';
                }else{
                    url1= 'https://eth-mainnet.g.alchemy.com/v2/1uckHdKs5pUccyS9dQJ152ut32qXO2eC';
                }
                const options1 = {
                    method: 'POST',
                    headers: {accept: 'application/json', 'content-type': 'application/json'},
                    body: JSON.stringify({
                    id: 1,
                    jsonrpc: '2.0',
                    method: 'alchemy_getTokenMetadata',
                    params: (array[i]['contractAddress']).split()
                    })
                };
                fetch(url1, options1)
                .then(res1 => res1.json())
                .then((json1) => {
                    // console.log('symbol',json1.result.symbol);
                    new_obj = json1.result;
                    array[i] = Object.assign({}, array[i], {
                        wallet_address:array[i]['contractAddress'],
                        balance: array[i]['tokenBalance'],
                        symbol: new_obj.symbol,
                    });
                    arr.push(JSON.parse(JSON.stringify(array[i])));
                    if(i===array.length-1){
                        // console.log('final array',arr);
                        setAllData(arr);
                        // console.log('allData[0]',arr[0]['wallet_address'])
                    }
                })
                .catch(err => console.error('error:' + err));
            })();
          }
        })
      .catch(err => console.error('error:' + err));
    }

  useEffect(() => {
        getInitialData();
        getTransactions();
  },[global.chainId]);

  return (
    <>
      <Box className={theme==='light' ? "col-xl-10 col-md-10 col-sm-10 inner_swapping_widget css-0 dark_balance_div" : "col-xl-10 col-md-10 col-sm-10 inner_swapping_widget css-0 light_balance_div"}>
        <div className="tabs">
            <ul>
                <li
                    className={currentTab === "balance" ? "currentTab" : ""}
                    onClick={() => {
                    setCurrentTab("balance");
                    }}
                >
                    Balances
                </li>
                <li
                    className={currentTab === "transaction" ? "currentTab" : ""}
                    onClick={() => {
                    setCurrentTab("transaction");
                    }}
                >
                    Transaction History
                </li>
            </ul>
        </div>
        {currentTab === "balance" &&
        (<table>
            <thead>
                <tr>
                    <th>TOKEN</th>
                    <th>ADDRESS</th>
                    <th>BALANCE</th>
                </tr>
            </thead>
            <tbody>

            {allData.length>2 && allData.map(({symbol,wallet_address,balance}: any) => {
                return <tr key={symbol}>
                    {(symbol ==='DPI' || symbol==='MVI') ?
                    (<td><span className="symbol" onClick={()=>history.push('/token_detail#'+symbol)}>{symbol}</span></td>):
                    (<td><span className="symbol">{symbol}</span></td>)}
                    <td>{wallet_address}</td>
                    <td>{parseFloat(ethers.utils.formatEther(balance)).toFixed(5)}</td>
                </tr>;
            })}

            </tbody>
        </table>)}

        {currentTab === "transaction" &&
        (<table>
            <thead>
                <tr>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>TRANSACTION</th>
                    <th>TRANSACTION URL</th>
                </tr>
            </thead>
            <tbody>

            {allTransactions.map(({from,to,value,hash}: any) => {
                return <tr key={from}>
                    <td>{from}</td>
                    <td>{to}</td>
                    <td>{value}</td>
                    {global.chainId===137 ? 
                    (<td style={{cursor:"pointer",color:"#0d6efd"}} onClick={()=>window.open('https://polygonscan.com/tx/'+hash)}>https://polygonscan.com/tx/{hash}</td>):
                    (<td style={{cursor:"pointer",color:"#0d6efd"}} onClick={()=>window.open('https://polygonscan.com/tx/'+hash)}>https://etherscan.io/tx/{hash}</td>)}
                </tr>;
            })}

            </tbody>
        </table>)}

      </Box>
    </>
  );
}
