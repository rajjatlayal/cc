import React,{useEffect,useState} from 'react';
import { SwapWidget, Theme, darkTheme, lightTheme } from '@uniswap/widgets';
import { Box } from "@chakra-ui/react";
import '@uniswap/widgets/dist/fonts.css';
import { ethers } from 'ethers';
import eventBus from "../eventBus";
import { useStateValue } from './../StateProvider.js';
// import { useSelector } from "react-redux";
// import { NotesState } from "./../reducer";

// const jsonRpcEndpoint = 'https://mainnet.infura.io/v3/a8f5a2aa888c4dcdb73d87c049a8297e';
// const infuraId = 'a8f5a2aa888c4dcdb73d87c049a8297e';
// const JsonRpcEndpoint = `https://mainnet.infura.io/v3/${infuraId}`;
// const JsonRpcProvider = new providers.JsonRpcProvider(JsonRpcEndpoint);
import {
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
// const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const MY_TOKEN_LIST = [
    {
        "chainId": 1,
        "name": "Dai",
        "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "decimals": 18,
        "symbol": "DAI",
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
    },
    {
        "chainId": 1,
        "name": "Maker",
        "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
        "decimals": 18,
        "symbol": "MKR",
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png"
    },
    {
        "chainId": 1,
        "name": "UNI COIN",
        "address": "0xe6877ea9c28fbdec631ffbc087956d0023a76bf2",
        "decimals": 18,
        "symbol": "UNI",
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/4113.png"
    },
    {
        "chainId": 1,
        "name": "WETH",
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "decimals": 18,
        "symbol": "WETH",
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png"
    },
];
const MY_TOKEN_LIST1 = [
    {
        "chainId": 1,
        "name": "PRIMCOIN",
        "address": "0x9dbb6ea24f90bbfa8ed2c8658f6b42993b091aa4",
        "decimals": 18,
        "symbol": "PRIM",
        "logoURI": "../images/prim.png"
    } 
];
const myLightTheme: Theme = {
    ...lightTheme, // Extend the lightTheme
    primary: '#37302D',
    secondary: '#979187',
    interactive: '#D2D8AF',
    container: '#E3E7D7',
    module: '#C9CAAD',
    accent: '#1C006C',
    outline: '#343D3A',
    dialog: '#FEFFFC',
    fontFamily: 'Inter',
    borderRadius: 0.4,
    // primary: '#000',
    // secondary: '#666',
    // interactive: '#AFAFAF',
    // container: '#DADADA',
    // module: '#FFF',
    // accent: '#0018F4',
    // outline: '#000',
    // dialog: '#FFF',
    // fontFamily: 'Inter',
    // borderRadius: 0.4,
  }
  
  const myDarkTheme: Theme = {
    ...darkTheme, // Extend the darkTheme
    primary: '#ffffff',
    secondary: '#ffffff',
    interactive: '#0089EC',
    container: '#000c16',
    module: '#000c16',
    accent: '#0088fe',
    outline: '#ffffff',
    dialog: '#000c16',
    fontFamily: 'Inter',
    success: '#000c16',
    borderRadius: 0.8,
  }
// var darkMode = false // Dynamically toggle dark mode on and off
function UniswapWidget(){
    const [{ global }, dispatch] = useStateValue();
    const [wallet_provider, setProvider] = useState(undefined);
    // const [providerr, setProviderr] = useState(null);
    const [darkMode, setThemeMode] = useState(true);
    const [theme, setTheme] = useState('');
    var defaultProvider;

    const detailsOn = async () =>{
        const { ethereum } = window;
        defaultProvider = new ethers.providers.Web3Provider(ethereum);
    }

    const { ethereum } = window;
    if(!ethereum){
        // console.log("Use Metamask!");
    } else{
        // console.log("Ethereum object found", ethereum);
        detailsOn();
    }
    useEffect(() => {
        console.log('get store value',global.token)
    },[]);
    // let providerr;
    useEffect(() => {
        eventBus.on("viewWalletAddress", (data: any) =>{
            console.log('changeddddd',data);
            if(data.message!==undefined){
              setProvider(data.message)
            }else{
              setProvider(undefined);
            }
            // console.log('get provider',window.ethereum);
            // console.log('localstorage provider',JSON.stringify(localStorage.getItem('provider')))
            // setProvider(undefined);
        });
    },[wallet_provider]);
    
    useEffect(() => {
        if(localStorage.getItem('theme')==='dark'){
            setThemeMode(false);
        }else if(localStorage.getItem('theme')==='light'){
            setThemeMode(true);
        }
        eventBus.on("changeTheme", (data: any) =>{
            if(data.message==='dark'){
                setThemeMode(false);
            }else if(data.message==='light'){
                setThemeMode(true);
            }
        });
    },[theme]);
        return(
        <div className="Uniswap">
            <Box mt={25} />
            {defaultProvider!==undefined ?
            (<SwapWidget provider={defaultProvider} 
            theme={darkMode ? myDarkTheme : myLightTheme} tokenList={MY_TOKEN_LIST}
            />):(<SwapWidget provider={defaultProvider}
                theme={darkMode ? myDarkTheme : myLightTheme} tokenList={MY_TOKEN_LIST1} 
                />)}
        </div>
        );
    
}

export default UniswapWidget;