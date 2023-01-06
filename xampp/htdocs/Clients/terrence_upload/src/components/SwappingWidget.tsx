import React, { useEffect, useState, useRef } from "react";
// import { SwapWidget, Theme, darkTheme, lightTheme } from '@uniswap/widgets';
import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  TabPanel,
} from "@chakra-ui/react";
// import {
//     ChevronDownIcon,
//     EmailIcon,
//     PhoneIcon,
//     AddIcon,
//     MinusIcon,
//     CheckIcon,
//   } from '@chakra-ui/icons';
import Web3 from "web3";
import eventBus from "../eventBus";
import { useStateValue } from "./../StateProvider.js";
import { GearFill } from "react-bootstrap-icons";
import {
  useColorModeValue,
  // useColorMode,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { getInitialProps } from "react-i18next";
import { ChainId } from "@usedapp/core";

const OverlayTwo = () => (
  <ModalOverlay
    bg="#101b26bd"
    backdropFilter="opacity(20%)"
    backdropInvert="10%"
    backdropBlur="2px"
  />
);
const qs = require("qs");
const { ethereum } = window;

const walletconnect = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/00ca1859789d4b40bce01f4104844224",
    4: "https://rinkeby.arbitrum.io/rpc",
    5: "https://rpc.goerli.mudit.blog/",
    137: "https://polygon-rpc.com/",
  },
  qrcode: true,
});

function SwappingWidget() {
  //   const fromInput = useRef(null);
  const [{ global }, dispatch] = useStateValue();
  const [theme, setTheme] = useState("");
  const [darkMode, setThemeMode] = useState(true);
  const [currentTab, setCurrentTab] = useState("swap");
  const [estimateValue, setEstimateValue] = useState("0");
  const [amt, setAmt] = useState(0);
  const [currentFlashTab, setCurrentFlashTab] = useState("mint");
  const [slipage_box, showSlipageBox] = useState(false);
  const [slippageValue, setSlippageValue] = useState(1);
  const [haveFunds, setHaveFunds] = useState(0);
  // const [wallet_provider, setProvider] = useState(undefined);
  const [showBtn, setShowBtn] = useState(true);
  const [error, setError] = useState('');
  const [msz, setMsz] = useState('');
  const [Opacity, setOpacity] = useState('1');
  const [PointerEvents, setPointerEvents] = useState('auto');
  const [Loader, setLoader] = useState(false);
  
  const [showFlashBtn, setShowFlashBtn] = useState(true);
  const [convertedPrice, setConvertedPrice] = useState(0);
  const [flashConvertedPrice, setFlashConvertedPrice] = useState(0);
  const [fromAmount, setFromAmount] = useState(0);
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  
  const [fromAmountt, setFromAmountt] = useState(0);

  const [fromToken, showFromToken] = useState('MATIC');
  const [toToken, showToToken] = useState('DPI');
  const [toTokenBalance, setToTokenBalance] = useState("0");
  const [fromTokenBalance, setFromTokenBalance] = useState(global.walletBalance);
  const [toTokenImage, setToTokenImage] = useState("https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg");
  const [fromTokenImage, setFromTokenImage] = useState("https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912");

  const [dpiTokenBalance, setDpiTokenBalance] = useState("0");
  const [mviTokenBalance, setMviTokenBalance] = useState("0");

  const {
    isOpen: isOpenFromTokenModal,
    onOpen: onOpenFromTokenModal,
    onClose: onCloseFromTokenModal,
  } = useDisclosure();
  const {
    isOpen: isOpenToTokenModal,
    onOpen: onOpenToTokenModal,
    onClose: onCloseToTokenModal,
  } = useDisclosure();

  const getToValue = async (e: any) => {
    var amount = e.target.value;
    amount = parseFloat(amount).toFixed(2);
    // console.log("amount", amount);
    if (
      amount !== "" &&
      amount !== "0" &&
      amount !== 0 &&
      amount !== 0.0 &&
      amount !== "0.00" &&
      amount < global.walletBalance
    ) {
      var sell_token;
      if(global.chainId===137){
        sell_token='MATIC';
      }else if(global.chainId===1){
        sell_token='ETH';
      }
      setShowBtn(false);
      const params = {
        // Not all token symbols are supported. The address of the token can be used instead.
        sellToken: sell_token,
        buyToken: "0x1D607Faa0A51518a7728580C238d912747e71F7a",
        // Note that the DAI token uses 18 decimal places, so `sellAmount` is `100 * 10^18`.
        sellAmount: amount * 1000000000000000000,
        slippagePercentage: slippageValue/100,
      };
      const response = await fetch(
        // `https://api.0x.org/swap/v1/quote?${qs.stringify(params)}`
        `https://polygon.api.0x.org/swap/v1/quote?${qs.stringify(params)}`
      );
      // console.log(await response.json());
      const data = await response.json();
      // console.log('to value',data.buyAmount/1000000000000000000);
      const estimate_valuee = (data.buyAmount / 1000000000000000000).toFixed(2);
      setEstimateValue(estimate_valuee);
    } else {
      console.log("not show btn");
    }
  };

  const setSlippage = async (e:any) =>{
    setSlippageValue(e.target.value)
  } 
  const showTokenModal = async()=>{
    if(toToken!=='MATIC' && toToken!=='ETH') {
      setOverlay(<OverlayTwo />);
      onOpenToTokenModal();
    }
  }

  const showFromTokenModal = async()=>{
    if(fromToken!=='MATIC' && fromToken!=='ETH') {
      setOverlay(<OverlayTwo />);
      onOpenToTokenModal();
    }
  }

  const getMaxAmount = async () =>{
    setFromAmountt(global.walletBalance)
    let amount = global.walletBalance;

    const a = parseFloat(amount);
    // const b = parseFloat(global.walletBalance);
    setHaveFunds(a);
    amount = global.walletBalance * 1000000000000000000;
    setFromAmount(amount);
    setFromAmountt(global.walletBalance);
    setAmt(global.walletBalance);
    setShowBtn(false);
    var from;
    var to;
    var network_url;
    // console.log('totoken:',toToken,'######fromtoken:',fromToken);
    if(global.chainId===137){
      if(fromToken==='MATIC'){
        from = "MATIC";
        if(toToken==='DPI'){
          to="0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        }else{
          to="0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
        }
      }else if(fromToken==='DPI'){
        from = "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        to="MATIC";
      }else if(fromToken==='MVI'){
        from = "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
        to="MATIC";
      }
      network_url=`https://polygon.api.0x.org/swap/v1/quote?sellToken=${from}&buyToken=${to}&sellAmount=${amount}&slippagePercentage=${slippageValue/100}`;
    }else{
      if(fromToken==='ETH'){
        from = "ETH";
        if(toToken==='DPI'){
          to="0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        }else{
          to="0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
        }
      }else if(fromToken==='DPI'){
        from = "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        to="MATIC";
      }else if(fromToken==='MVI'){
        from = "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
        to="MATIC";
      }
      network_url=`https://api.0x.org/swap/v1/quote?sellToken=${from}&buyToken=${to}&sellAmount=${amount}&slippagePercentage=${slippageValue/100}`;
    }
    
    await fetch(
      network_url
    )
    .then((response) => response.json())
    .then((result) => setConvertedPrice(result.buyAmount))
    .catch((error) => console.log("error", error));
  } 

  const swapData = async () =>{
    setConvertedPrice(0);
    setHaveFunds(0);
    var fromtoken=fromToken;
    var fromimage=fromTokenImage;
    var frombalance=global.walletBalance;
    var totoken=toToken;
    var toimage=toTokenImage;
    var tobalance=toTokenBalance;

    // if(fromToken==='DPI'){
      showFromToken(totoken);
      showToToken(fromtoken);
      setToTokenBalance(frombalance);
      setFromTokenBalance(tobalance);
      setFromTokenImage(toimage);
      setToTokenImage(fromimage);
      dispatch({
        type: "changeWalletBalance",
        newWalletBalance: { walletBalance:  tobalance},
      });
  }

  const changeToken = async (tokenname:any,tokenbalance:any,tokenimage:any) => {
    showToToken(tokenname);
    setToTokenBalance(tokenbalance);
    setToTokenImage(tokenimage);
    onCloseToTokenModal();
    if(fromAmountt!==0){
      var from
      var to;
      var network_url;
      if(tokenname==='DPI'){
        to="0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
      }else{
        to="0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
      }
      
      if(fromAmountt>0){
        let amount = fromAmountt * 1000000000000000000;
        if(global.chainId===137){
          from = "MATIC";
          // network_url= `https://polygon.api.0x.org/swap/v1/quote?sellToken=${from}&buyToken=${to}&sellAmount=${amount}&slippagePercentage=${slippageValue/100}`;
          network_url= "'https://polygon.api.0x.org/swap/v1/quote?sellToken='"+from+"'&buyToken='"+to+"'&sellAmount='"+amount+"'&slippagePercentage='"+slippageValue/100;
        }else{
          from = "ETH";
          // network_url= `https://api.0x.org/swap/v1/quote?sellToken=${from}&buyToken=${to}&sellAmount=${amount}&slippagePercentage=${slippageValue/100}`;
          network_url= "'https://api.0x.org/swap/v1/quote?sellToken='"+from+"'&buyToken='"+to+"'&sellAmount='"+amount+"'&slippagePercentage='"+slippageValue/100;
        }
      await fetch(
        network_url
      )
        .then((response) => response.json())
        .then((result) => setConvertedPrice(result.buyAmount))
        .catch((error) => console.log("error", error));
      } else {
        console.log("not show btn");
      }
    }
  }
  const hide_notification=async(tx:any)=>{
    setError('');
    setMsz('');
    updateValues();
  }

  const get_notification=async(tx:any)=>{
    // console.log('get tx',tx);
    const txHash = await ethereum.request({
      method: 'eth_getTransactionReceipt',
      params: [tx],
    });
    // console.log('txHash',txHash);
    if(txHash && txHash!==null){
      setLoader(false);
      setOpacity('1');
      setPointerEvents('auto');
      setError('');
      setMsz('Transaction Submitted.');
      setTimeout(hide_notification, 4000);
    }else{
      window.setTimeout(function () {
        get_notification(tx);
      }, 1000);
    }
    
    // .then((response:any) => {
    //   console.log('responseeeeee',response);
    //   setLoader(false);
    //   setOpacity('1');
    //   setPointerEvents('auto');
    //   setError('');
    //   setMsz('Transaction Submitted.');
    //   setTimeout(hide_notification, 4000);
    // })
    // .catch((error:any) => {
    //   setError('Some problem occured.');
    //   setMsz('');
    //   setLoader(false);
    //   setOpacity('');
    //   setPointerEvents('');
    // });
  }

  const send_transaction = async(transactionParameters:any)=>{
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    const address = accounts[0];
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(address)
    .then((response1:any) => {
      console.log(response1);
    })
    .catch((error1:any) => {
      return false;
    });
    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    }).then((response:any) => {
      // console.log('txHash',response);
      if(response && response!==null){
        get_notification(response);
      }
    })
    .catch((error:any) => {
      console.log('error',error);
      setError(error.message);
      setMsz('');
      setLoader(false);
      setOpacity('');
      setPointerEvents('');
      return false;
    });
  }

  const swap = async () => {
    setError('');
    setLoader(true);
    setOpacity('0.5');
    setPointerEvents('none');
    var params;
    var to;
    var from;
    var network_url;
    if(global.chainId===137){
      if(fromToken==='MATIC'){
        if(toToken==='DPI'){
          to = "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        }else if(toToken==='MVI'){
          to = "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
        }
        
        params = {
          sellToken: "MATIC",
          buyToken: to,
          // Note that the DAI token uses 18 decimal places, so `sellAmount` is `100 * 10^18`.
          sellAmount: fromAmount,
          takerAddress: global.walletAddress,
          slippagePercentage: slippageValue/100,
        };
      }else{
        if(fromToken==='DPI'){
          from = "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        }else if(toToken==='MVI'){
          from = "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
        }
        params = {
          sellToken: from,
          buyToken: "MATIC",
          // Note that the DAI token uses 18 decimal places, so `sellAmount` is `100 * 10^18`.
          sellAmount: fromAmount,
          takerAddress: global.walletAddress,
          slippagePercentage: slippageValue/100,
        };
      }
      network_url="'https://polygon.api.0x.org/swap/v1/quote?'"+qs.stringify(params);
    }else{
      if(fromToken==='ETH'){
        if(toToken==='DPI'){
          to = "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        }else if(toToken==='MVI'){
          to = "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
        }
        
        params = {
          sellToken: "ETH",
          buyToken: to,
          // Note that the DAI token uses 18 decimal places, so `sellAmount` is `100 * 10^18`.
          sellAmount: fromAmount,
          takerAddress: global.walletAddress,
          slippagePercentage: slippageValue/100,
        };
      }else{
        if(fromToken==='DPI'){
          from = "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        }else if(toToken==='MVI'){
          from = "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
        }
        params = {
          sellToken: from,
          buyToken: "ETH",
          // Note that the DAI token uses 18 decimal places, so `sellAmount` is `100 * 10^18`.
          sellAmount: fromAmount,
          takerAddress: global.walletAddress,
          slippagePercentage: slippageValue/100,
        };
      }
      network_url="'https://api.0x.org/swap/v1/quote?'"+qs.stringify(params);
    }
    await fetch(
      network_url
    )
    .then((response) => response.json())
    .then((ResponseData)=>{
      // console.log('ResponseData1',ResponseData);
      const transactionParameters = {
        // nonce: '0x00', // ignored by 
        gas: "246078", // customizable by user during MetaMask confirmation.
        to: ResponseData.to, // Required except during contract publications.
        from: global.walletAddress, // must match user's active address.
        value: ethers.utils.parseEther(String(amt)).toHexString(), // Only required to send ether to the recipient from the initiating external account.
        data: ResponseData.data, // Optional, but used for defining smart contract creation and interaction.
        chainId: ResponseData.chainId, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      };
      send_transaction(transactionParameters);
    }).catch((err)=>{
        // console.log('errorrrrrr',err);
        setError(err);
    }) 
  };

  const getConversion = async (e: any) => {
    let amount = e.target.value;

    const a = parseFloat(amount);
    const b = parseFloat(global.walletBalance);
    setHaveFunds(a);
    if (b>=a){
      amount = e.target.value * 1000000000000000000;
      setFromAmount(amount);
      setFromAmountt(e.target.value);
      setAmt(e.target.value);
      var from;
      var to;
      var network_url;
      if(global.chainId===137){
        if(fromToken==='MATIC'){
          from = "MATIC";
          if(toToken==='DPI'){
            to="0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
          }else{
            to="0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
          }
        }else if(fromToken==='DPI'){
          from = "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
          to="MATIC";
        }else if(fromToken==='MVI'){
          from = "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
          to="MATIC";
        }
        network_url= "'https://polygon.api.0x.org/swap/v1/quote?sellToken='"+from+"'&buyToken='"+to+'"&sellAmount="'+amount+'"slippagePercentage="'+slippageValue/100;
      }else{
        if(fromToken==='ETH'){
          from = "ETH";
          if(toToken==='DPI'){
            to="0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
          }else{
            to="0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
          }
        }else if(fromToken==='DPI'){
          from = "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
          to="ETH";
        }else if(fromToken==='MVI'){
          from = "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
          to="ETH";
        }
        network_url= "'https://api.0x.org/swap/v1/quote?sellToken='"+from+"'&buyToken='"+to+'"&sellAmount="'+amount+'"slippagePercentage="'+slippageValue/100;
      }
      setShowBtn(false);
      await fetch(
        network_url
      )
        .then((response) => response.json())
        .then((result) => setConvertedPrice(result.buyAmount))
        .catch((error) => console.log("error", error));
    } else {
      console.log("not show btn");
    }
  };
  const getFlashConversion = async (e: any) => {
    setShowFlashBtn(false);
    let amount = e.target.value;
    if (
      !isNaN(parseFloat(e.target.value)) &&
      isFinite(e.target.value) == true &&
      amount !== "" &&
      amount !== "0" &&
      amount !== 0 &&
      amount !== 0.0 &&
      amount !== "0.00"
    ) {
      amount = e.target.value * 1000000000000000000;
      setFromAmount(amount);
      setAmt(e.target.value);
      setShowBtn(false);
      // let buyToken,
      // sellToken = "";
      var from;
      if(toToken==='DPI'){
        from="0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
      }else{
        from="0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1";
      }
      if(global.chainId===137){
        var to='MATIC';
      }else{
        var to='ETH';
      }
      if (currentFlashTab === "mint") {
        //sell parameter will be matic
        //buy amount will be passed & sell amount will be received
        // buyToken = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
        // sellToken = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
        var network_url;
        if(global.chainId===137){
          network_url= "'https://polygon.api.0x.org/swap/v1/quote?sellToken='"+from+"'buyToken='"+to+"'&buyAmount='"+amount+'"slippagePercentage="'+slippageValue/100;
        }else{
          network_url= "'https://api.0x.org/swap/v1/quote?sellToken='"+from+"'buyToken='"+to+"'&buyAmount='"+amount+'"slippagePercentage="'+slippageValue/100;
        }

        await fetch(
          network_url
        )
          .then((response) => response.json())
          .then((result) => setFlashConvertedPrice(result.sellAmount))
          .catch((error) => console.log("error", error));
      } else if (currentFlashTab === "redeem") {
        //buy parameter will be matic
        //sell amount will be passed & buy amount will be received
        // sellToken = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
        // buyToken = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";

        var network_url;
        if(global.chainId===137){
          network_url= "'https://polygon.api.0x.org/swap/v1/quote?sellToken='"+from+"'buyToken='"+to+"'&sellAmount='"+amount+'"slippagePercentage="'+slippageValue/100;
        }else{
          network_url= "'https://api.0x.org/swap/v1/quote?sellToken='"+from+"'buyToken='"+to+"'&sellAmount='"+amount+'"slippagePercentage="'+slippageValue/100;
        }

        await fetch(
          network_url
        )
          .then((response) => response.json())
          .then((result) => setFlashConvertedPrice(result.buyAmount))
          .catch((error) => console.log("error", error));
      }
    } else {
      // console.log("not show btn");
    }
  };

  const getInitialData = async () =>{

    if(global.chainId===137){
      showFromToken('MATIC');
      setFromTokenImage('https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912');
    }else{
      showFromToken('ETH');
      setFromTokenImage('https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880');
    }

    var dpi_balance;
    var mvi_balance;
    var url1;

      if(global.chainId===137){
        url1 = 'https://polygon-mainnet.g.alchemy.com/v2/1njiSKZhpK_P7gq-VbUBCtMOoWMDqg3E';
      }else{
        url1 = 'https://eth-mainnet.g.alchemy.com/v2/1uckHdKs5pUccyS9dQJ152ut32qXO2eC';
      }
      const options1 = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({id: 1, jsonrpc: '2.0', method: 'eth_getBalance', params: global.walletAddress.split()})
      };
      fetch(url1, options1)
      .then(res1 => res1.json())
      .then((json1) => {
        // console.log('json1',json1.result);
        const bln=ethers.utils.formatEther(json1.result);
        // console.log('json1',bln);
        if(parseFloat(bln)>=1){
          dispatch({
            type: "changeWalletBalance",
            newWalletBalance: { walletBalance: parseFloat(bln).toFixed(2) },
          });
          setFromTokenBalance(parseFloat(bln).toFixed(2));
        }else{
          dispatch({
            type: "changeWalletBalance",
            newWalletBalance: { walletBalance: parseFloat(bln).toFixed(5) },
          });
          setFromTokenBalance(parseFloat(bln).toFixed(5));
        }

      })
      .catch(err => console.error('error:' + err));


      // const url = 'https://polygon-mainnet.g.alchemy.com/v2/1njiSKZhpK_P7gq-VbUBCtMOoWMDqg3E';
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
      fetch(url1, options)
        .then(res => res.json())
        .then((json) => {
          // console.log('##########',json);
          dpi_balance=ethers.utils.formatEther(json.result.tokenBalances[0].tokenBalance);
          mvi_balance=ethers.utils.formatEther(json.result.tokenBalances[1].tokenBalance);
          if(parseFloat(dpi_balance) >= 1){
            setToTokenBalance(parseFloat(dpi_balance).toFixed(2));
            setDpiTokenBalance(parseFloat(dpi_balance).toFixed(2));
          }else{
            setToTokenBalance(parseFloat(dpi_balance).toFixed(5));
            setDpiTokenBalance(parseFloat(dpi_balance).toFixed(5));
          }
          if(parseFloat(mvi_balance)>=1){
            setMviTokenBalance(parseFloat(mvi_balance).toFixed(2));
          }else{
            setMviTokenBalance(parseFloat(mvi_balance).toFixed(5));
          }
          
        })
      .catch(err => console.error('error:' + err));
  }

  const updateValues=async()=>{
    setEstimateValue("0");
    setAmt(0);
    showSlipageBox(false);
    setHaveFunds(0)
    setConvertedPrice(0);
    setFlashConvertedPrice(0);
    setFromAmount(0);
    setFromAmountt(0);
    if(global.chainId===137){
      showFromToken('MATIC');
    }else{
      showFromToken('ETH');
    }
    showToToken('DPI');
    setToTokenBalance("0");
    setToTokenImage("https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg");
    setFromTokenImage("https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912");
    setDpiTokenBalance("0");
    setMviTokenBalance("0");
    getInitialData();
  }

  useEffect(() =>{
    getInitialData();
  },[global.walletAddress]);

  useEffect(() =>{
    getInitialData();
    updateValues();
  },[global.chainId]);

  useEffect(() => {
    setFromTokenBalance(global.walletBalance);
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
    } else if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
    }

    if (localStorage.getItem("theme") === "dark") {
      setThemeMode(false);
    } else if (localStorage.getItem("theme") === "light") {
      setThemeMode(true);
    }
    eventBus.on("changeTheme", (data: any) => {
      if (data.message === "dark") {
        setTheme("light");
        setThemeMode(false);
      } else if (data.message === "light") {
        setTheme("dark");
        setThemeMode(true);
      }
    });
  }, [theme]);
  return (
    <div
      className={theme === "light" ? "swapping_widget" : "dark_swapping_widget"}
    >
      <Box
        className="row outer_div"
        style={
          theme === "light"
            ? { width: "100%", margin: "0", background: "#f7f7f7",padding:"8px",paddingTop:'30px' }
            : { width: "100%", margin: "0", background: "rgb(27, 36, 41)",padding:"8px",paddingTop:'30px' }
        }
      >
        <Box
          className={
            theme === "light"
              ? "col-xl-5 col-md-10 col-sm-10 inner_swapping_widget"
              : "col-xl-5 col-md-10 col-sm-10 dark_inner_swapping_widget"
          }
        >
          <div className="row" style={{ width: "100%", margin: "0" }}>
            <div
              className={
                theme === "light" ? "col-xl-6 tabs" : "col-xl-6 dark_tabs"
              }
            >
              {/* <p>Swap</p> */}
              <ul>
                <li
                  className={currentTab === "swap" ? "currentTab" : ""}
                  onClick={() => {
                    setCurrentTab("swap");
                  }}
                >
                  Swap
                </li>
                <li
                  className={currentTab === "flash flash_mint" ? "currentTab" : "flash_mint"}
                  onClick={() => {
                    setCurrentTab("flash");
                  }}
                >
                  Flash Mint
                </li>
              </ul>
            </div>
            <div className="col-xl-6 gear_icon">
              <span style={{ position: "relative", cursor: "pointer" }}>
                <GearFill
                  size={24}
                  color={theme === "light" ? "#000000" : "#ffffff"}
                  onClick={() => {
                    showSlipageBox(!slipage_box);
                  }}
                />

                {slipage_box && (
                  <div
                    className={
                      theme === "light"
                        ? "chakra-popover__popper css-1qq679y slipage_box"
                        : "chakra-popover__popper css-1qq679y dark_slipage_box"
                    }
                    data-popper-placement="bottom-end"
                  >
                    <section
                      id="popover-content-:r1:"
                      role="dialog"
                      className="chakra-popover__content css-1jzofsu"
                      aria-describedby="popover-body-:r1:"
                    >
                      <div
                        id="popover-body-:r1:"
                        className="chakra-popover__body css-1ews2c8"
                      >
                        <p className="chakra-text css-10inx2m">
                          Slippage Settings
                        </p>
                        <div className="css-1k5h581">
                          <button
                            type="button"
                            className="chakra-button css-5905ue"
                            onClick={() => {
                              setSlippageValue(1);
                            }}
                          >
                            Auto
                          </button>
                          <div className="css-984u8e">
                            <input
                              placeholder="1"
                              type="number"
                              className="chakra-input css-19leetl"
                              value={slippageValue}
                              onChange={setSlippage}
                            />
                            <p className="chakra-text css-5cm1aq">%</p>
                          </div>
                        </div>
                        <p className="chakra-text css-1mm63xf">
                          Make sure to know what you're doing when entering
                          custom slippage values.
                        </p>
                      </div>
                    </section>
                  </div>
                )}
              </span>
            </div>
          </div>

          {currentTab === "swap" && (
            <div
              className={
                theme === "light" ? "row from_widget" : "row dark_from_widget"
              }
              style={{ width: "100%", margin: "0" }}
            >
              <label>From:</label>
              <div
                className={
                  theme === "light"
                    ? "css-1eu4lo3 col-xl-12"
                    : "dark_css-1eu4lo3 col-xl-12"
                }
              >
                <div className="css-16j8xl6">
                  <input
                    // placeholder="0.0"
                    type="number"
                    value={fromAmountt}
                    className={
                      theme === "light"
                        ? "chakra-input css-viub38"
                        : "chakra-input dark_css-viub38"
                    }
                    onChange={getConversion}
                    disabled={(global.chainId===137 || global.chainId===1) ? false : true}
                  />
                  <div
                    className="css-11d4svj"
                    // onClick={showFromTokenModal}
                  >
                    <div className="css-1mydd1o">
                      <img
                        alt="ETH logo"
                        src={fromTokenImage}
                        className="chakra-image css-18puooo"
                      />
                    </div>
                    <p className="chakra-text css-1alhqum">{fromToken}</p>
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="chakra-icon css-1boqucc"
                    >
                      <path
                        fill="currentColor"
                        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="css-wb5hcv">
                  <div className="css-k008qs">
                    <p
                      className="chakra-text css-1khja9b"
                      style={
                        theme === "light"
                          ? { color: "#000000" }
                          : { color: "#ffffff" }
                      }
                    >
                      {/* $0.00 */}
                    </p>
                  </div>
                  <div className="css-1e2veb8">
                    <p
                      className="chakra-text css-ex8ofk"
                      style={
                        theme === "light"
                          ? { color: "#000000" }
                          : { color: "#ffffff" }
                      }
                    >
                      Balance: {global.walletBalance}
                    </p>
                    <div className="css-1ygf6z7">
                      <p className="chakra-text css-17y5qzx" onClick={getMaxAmount}>MAX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="css-1r5t1bu" style={{ position: "relative" }}>
                <button
                  type="button"
                  className={
                    theme === "light"
                      ? "chakra-button css-1rr3z1e"
                      : "chakra-button dark_css-1rr3z1e"
                  }
                  aria-label="Search database"
                  onClick={swapData}
                >
                  <svg
                    viewBox="-1 -1 9 11"
                    focusable="false"
                    className="chakra-icon css-onkibi"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="css-j7qwjs"
                onClick={showTokenModal}
              >
                <p
                  className={
                    theme === "light"
                      ? "chakra-text css-e4l232"
                      : "chakra-text dark_css-e4l232"
                  }
                >
                  To
                </p>
                <div
                  className={
                    theme === "light" ? "css-1eu4lo3" : "dark_css-1eu4lo3"
                  }
                >
                  <div className="css-16j8xl6">
                    <input
                      placeholder="0.0"
                      type="number"
                      step="any"
                      readOnly={true}
                      className={
                        theme === "light"
                          ? "chakra-input css-viub38"
                          : "chakra-input dark_css-viub38"
                      }
                      //   value={estimateValue}
                      value={(convertedPrice / 1000000000000000000).toFixed(4)}
                    />
                    <div className="css-11d4svj">
                      <div className="css-1mydd1o">
                        <img
                          alt="icETH logo"
                          src={toTokenImage}
                          className="chakra-image css-18puooo"
                        />
                      </div>
                      <p className="chakra-text css-1alhqum">{toToken}</p>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon css-1boqucc"
                      >
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="css-wb5hcv">
                    <div className="css-k008qs">
                      <p
                        className="chakra-text css-1khja9b"
                        style={
                          theme === "light"
                            ? { color: "#000000" }
                            : { color: "#ffffff" }
                        }
                      >
                        {/* $0.00 */}
                      </p>
                    </div>
                    <div className="css-1e2veb8">
                      <p
                        className="chakra-text css-ex8ofk"
                        style={
                          theme === "light"
                            ? { color: "#000000" }
                            : { color: "#ffffff" }
                        }
                      >
                        Balance: {toTokenBalance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button
                disabled={showBtn ? true : false}
                type="button"
                className="chakra-button css-11m5wvn"
                onClick={swap}
                // onClick={reviewSwap}
              >
                Trade
              </button> */}
              {global.walletAddress !== "" && (
                <>
                {convertedPrice===0 &&
                (<div>
                  <button
                    disabled={true}
                    type="button"
                    className="chakra-button css-11m5wvn"
                  >
                    Enter Amount
                  </button>
                </div>)}
                <div>
                {haveFunds!==0 && haveFunds <= global.walletBalance && (
                  <>
                  {error!=='' &&
                  (<p className="error_msz">{error}</p>)}
                  {msz!=='' &&
                  (<p className="success_msz">{msz}</p>)}
                    <button
                      disabled={showBtn ? true : false}
                      type="button"
                      className="chakra-button css-11m5wvn"
                      onClick={swap}
                      style={{opacity:Opacity}}
                    >
                      {Loader ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>): ('')} Trade
                    </button>
                  </>
                )}
                {haveFunds > global.walletBalance && (
                  <button
                    disabled={true}
                    type="button"
                    className="chakra-button css-11m5wvn"
                  >
                    Insufficient funds
                  </button>
                )}
              </div>
              </>
              )}

              {global.walletAddress === "" && (
                <button
                  disabled={true}
                  type="button"
                  className="chakra-button css-11m5wvn"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          )}

          {currentTab === "flash" && (
            <div
              className={
                theme === "light" ? "row from_widget" : "row dark_from_widget"
              }
              style={{ width: "100%", margin: "0" }}
            >
              <div className="css-h5fkc8">
                <div className="css-k008qs">
                  <div className="css-i8zn9k">
                    <p
                      className={
                        currentFlashTab === "mint"
                          ? "chakra-text css-1kzdb37"
                          : "chakra-text css-aqloyo"
                      }
                      onClick={() => {
                        setCurrentFlashTab("mint");
                      }}
                    >
                      Mint
                    </p>
                    <p
                      className={
                        currentFlashTab === "redeem"
                          ? "chakra-text css-1kzdb37"
                          : "chakra-text css-aqloyo"
                      }
                      onClick={() => {
                        setCurrentFlashTab("redeem");
                      }}
                    >
                      Redeem
                    </p>
                  </div>
                </div>
                <div className="css-ni9vdh">
                  <div className="css-j7qwjs">
                    <p className="chakra-text css-e4l232"></p>
                    <div className="css-1eu4lo3">
                      <div className="css-16j8xl6">
                        <input
                          type="number"
                          className="chakra-input css-t8evlo"
                          defaultValue="0.0"
                          onChange={getFlashConversion}
                        />
                        <div
                          className="css-11d4svj"
                          onClick={() => {
                            setOverlay(<OverlayTwo />);
                            onOpenToTokenModal();
                          }}
                        >
                          <div className="css-1mydd1o">
                            <img
                              alt="icETH logo"
                              src={toTokenImage}
                              className="chakra-image css-18puooo"
                            />
                          </div>
                          <p className="chakra-text css-1alhqum">{toToken}</p>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            className="chakra-icon css-1boqucc"
                          >
                            <path
                              fill="currentColor"
                              d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-wb5hcv">
                        <div className="css-k008qs">
                          <p className="chakra-text css-1khja9b"></p>
                        </div>
                        <div className="css-1e2veb8">
                          <p className="chakra-text css-ex8ofk">
                            Balance: {toTokenBalance}
                          </p>
                          <div className="css-1ygf6z7">
                            <p className="chakra-text css-17y5qzx">MAX</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {currentFlashTab === "mint" && (
                    <p className="chakra-text css-178zphn">
                      Estimated MATIC required for mint (inc. slippage)
                    </p>
                  )}
                  {currentFlashTab === "redeem" && (
                    <p className="chakra-text css-178zphn">
                      Estimated MATIC output for redemption (inc. slippage)
                    </p>
                  )}
                  <div className="css-4juikq">
                    <div
                      className="css-f5v9hf"
                      // onClick={() => {
                      //   setOverlay(<OverlayTwo />);
                      //   onOpenFromTokenModal();
                      // }}
                    >
                      <img
                        alt="Ethereum logo"
                        src="https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912"
                        className="chakra-image css-c2uxn6"
                      />
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon css-1boqucc"
                      >
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                        ></path>
                      </svg>
                    </div>
                    <p className="chakra-text css-62ldx4">
                      {(flashConvertedPrice / 1000000000000000000).toFixed(2)}
                    </p>
                  </div>
                  <p className="chakra-text css-dufg65">MATIC Balance: {global.walletBalance}</p>
                </div>
                <div className="css-j7qwjs">
                  <button
                    disabled={showFlashBtn ? true : false}
                    type="button"
                    className="chakra-button css-11m5wvn"
                  >
                    Review Swap
                  </button>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Box>

      <Modal
        isCentered
        isOpen={isOpenFromTokenModal}
        onClose={onCloseFromTokenModal}
      >
        {overlay}
        <ModalContent
          borderColor={"#55c3e7"}
          borderWidth="1px"
          transition="all 0.2s ease-in-out"
          boxShadow="-1px 0px 6px #55c3e7;"
          borderRadius="14px"
          textAlign={"center"}
          width="480px"
          className={
            theme === "light" ? "light_wallet_modal" : "dark_wallet_modal"
          }
          bg={useColorModeValue("#000c16", "gray.800")}
        >
          <ModalHeader
            color={"#fff"}
            paddingBottom="50px"
            textAlign={"left"}
            paddingTop="20px"
          >
            Select Token
          </ModalHeader>
          <ModalCloseButton
            marginTop="10px"
            borderColor={"none"}
            color={"#fff"}
            fontWeight={800}
            fontSize="16px"
          />
          <ModalBody>
            <React.Fragment>
              <div className="css-16hpbyo">
                <p className="chakra-text css-1mm63xf">Quantity Owned</p>
              </div>
              <div className="css-1atqk0p">
                <div className="css-70qvj9">
                  <img
                    alt="ETH logo"
                    src="https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912"
                    className="chakra-image css-1ngw63v"
                  />
                  <div className="css-y6ta9y">
                    <p className="chakra-text css-1bimbha">MATIC</p>
                    <p className="chakra-text css-1mm63xf">Matic</p>
                  </div>
                </div>
                <div className="css-1dlrb3z">
                  <p className="chakra-text css-10inx2m">0.000</p>
                  <p className="chakra-text css-1mm63xf"></p>
                </div>
              </div>
              <div className="css-1atqk0p">
                <div className="css-70qvj9">
                  <img
                    alt="stETH logo"
                    src="https://assets.coingecko.com/coins/images/13442/small/steth_logo.png?1608607546"
                    className="chakra-image css-1ngw63v"
                  />
                  <div className="css-y6ta9y">
                    <p className="chakra-text css-1bimbha">stETH</p>
                    <p className="chakra-text css-1mm63xf">stETH</p>
                  </div>
                </div>
                <div className="css-1dlrb3z">
                  <p className="chakra-text css-10inx2m">0.000</p>
                  <p className="chakra-text css-1mm63xf"></p>
                </div>
              </div>
            </React.Fragment>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        isOpen={isOpenToTokenModal}
        onClose={onCloseToTokenModal}
      >
        {overlay}
        <ModalContent
          borderColor={"#55c3e7"}
          borderWidth="1px"
          transition="all 0.2s ease-in-out"
          boxShadow="-1px 0px 6px #55c3e7;"
          borderRadius="14px"
          textAlign={"center"}
          width="480px"
          className={
            theme === "light" ? "light_wallet_modal" : "dark_wallet_modal"
          }
          bg={useColorModeValue("#000c16", "gray.800")}
        >
          <ModalHeader
            color={"#fff"}
            paddingBottom="50px"
            textAlign={"left"}
            paddingTop="20px"
          >
            Select Token
          </ModalHeader>
          <ModalCloseButton
            marginTop="10px"
            borderColor={"none"}
            color={"#fff"}
            fontWeight={800}
            fontSize="16px"
          />
          <ModalBody>
            <React.Fragment>
              <div className="css-16hpbyo">
                <p className="chakra-text css-1mm63xf">Quantity Owned</p>
              </div>
              {/* <div className="css-1atqk0p">
                <div className="css-70qvj9">
                  <img
                    alt="icETH logo"
                    src="../images/iceth.png"
                    className="chakra-image css-1ngw63v"
                  />
                  <div className="css-y6ta9y">
                    <p className="chakra-text css-1bimbha">icETH</p>
                    <p className="chakra-text css-1mm63xf">
                      Interest Compounding ETH Index
                    </p>
                  </div>
                </div>
                <div className="css-1dlrb3z">
                  <p className="chakra-text css-10inx2m">0.000</p>
                  <p className="chakra-text css-1mm63xf"></p>
                </div>
              </div> */}

              <div className="css-1atqk0p" onClick={()=>{changeToken('DPI',dpiTokenBalance,"https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg")}}>
                <div className="css-70qvj9">
                  <img
                    alt="DPI logo"
                    src="https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg"
                    className="chakra-image css-1ngw63v"
                  />
                  <div className="css-y6ta9y">
                    <p className="chakra-text css-1bimbha">DPI</p>
                    <p className="chakra-text css-1mm63xf">DeFi Pulse Index</p>
                  </div>
                </div>
                <div className="css-1dlrb3z">
                  <p className="chakra-text css-10inx2m">{dpiTokenBalance}</p>
                  <p className="chakra-text css-1mm63xf"></p>
                </div>
              </div>

              <div className="css-1atqk0p" onClick={()=>{changeToken('MVI',mviTokenBalance,"https://set-core.s3.amazonaws.com/img/portfolios/mvi.svg")}}>
                <div className="css-70qvj9">
                  <img
                    alt="MVI logo"
                    src="https://set-core.s3.amazonaws.com/img/portfolios/mvi.svg"
                    className="chakra-image css-1ngw63v"
                  />
                  <div className="css-y6ta9y">
                    <p className="chakra-text css-1bimbha">MVI</p>
                    <p className="chakra-text css-1mm63xf">Metaverse Index</p>
                  </div>
                </div>
                <div className="css-1dlrb3z">
                  <p className="chakra-text css-10inx2m">{mviTokenBalance}</p>
                  <p className="chakra-text css-1mm63xf"></p>
                </div>
              </div>

              {/* <div className="css-1atqk0p">
                <div className="css-70qvj9">
                  <img
                    alt="GMI logo"
                    src="../images/gmi.png"
                    className="chakra-image css-1ngw63v"
                  />
                  <div className="css-y6ta9y">
                    <p className="chakra-text css-1bimbha">GMI</p>
                    <p className="chakra-text css-1mm63xf">
                      Bankless DeFi Innovation Index
                    </p>
                  </div>
                </div>
                <div className="css-1dlrb3z">
                  <p className="chakra-text css-10inx2m">0.000</p>
                  <p className="chakra-text css-1mm63xf"></p>
                </div>
              </div> */}
            </React.Fragment>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SwappingWidget;