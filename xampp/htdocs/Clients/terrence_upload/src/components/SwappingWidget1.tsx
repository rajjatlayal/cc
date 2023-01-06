import React,{useEffect,useState,useRef} from 'react';
import { SwapWidget, Theme, darkTheme, lightTheme } from '@uniswap/widgets';
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
} from "@chakra-ui/react";
import {
    ChevronDownIcon,
    EmailIcon,
    PhoneIcon,
    AddIcon,
    MinusIcon,
    CheckIcon,
  } from '@chakra-ui/icons';
import { ethers } from 'ethers';
import eventBus from "../eventBus";
import { useStateValue } from './../StateProvider.js';
import { GearFill} from 'react-bootstrap-icons';
import {
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
const OverlayTwo = () => (
    <ModalOverlay
      bg='#101b26bd'
      backdropFilter= 'opacity(20%)'
      backdropInvert='10%'
      backdropBlur='2px'
    />
  )
const qs = require('qs');

function SwappingWidget1(){
    const fromInput = useRef(null);
    const [{ global }, dispatch] = useStateValue();
    const [theme, setTheme] = useState('');
    const [darkMode, setThemeMode] = useState(true);
    const [currentTab, setCurrentTab] = useState('swap');
    const [currentFlashTab, setCurrentFlashTab] = useState('mint');
    const [slipage_box, showSlipageBox] = useState(false);
    const [wallet_provider, setProvider] = useState(undefined);
    const [showBtn, setShowBtn] = useState(true);
    const [showFlashBtn, setShowFlashBtn] = useState(true);
    const [overlay, setOverlay] = React.useState(<OverlayTwo />)
    const { 
        isOpen: isOpenFromTokenModal, 
        onOpen: onOpenFromTokenModal, 
        onClose: onCloseFromTokenModal,
    } = useDisclosure()
    const { 
        isOpen: isOpenToTokenModal, 
        onOpen: onOpenToTokenModal, 
        onClose: onCloseToTokenModal,
    } = useDisclosure()

    const getToValue = async (e:any) =>{
        if(e.target.value!==''){
            setShowBtn(false);
        }
        const amount=e.target.value;
        const params = {
          // Not all token symbols are supported. The address of the token can be used instead.
          sellToken: 'ETH',
          buyToken: '0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84',
          // Note that the DAI token uses 18 decimal places, so `sellAmount` is `100 * 10^18`.
          sellAmount: amount*1000000000000000000,
        }
        
        const response = await fetch(
            `https://api.0x.org/swap/v1/quote?${qs.stringify(params)}`
        );
        // console.log(await response.json());
      }
    // useEffect(() => {
    //     console.log('get store value',global.token)
    // },[]);
    // let providerr;
    // useEffect(() => {
    //     eventBus.on("viewWalletAddress", (data: any) =>{
    //         console.log('changeddddd',data);
    //         if(data.message!==undefined){
    //           setProvider(data.message)
    //         }else{
    //           setProvider(undefined);
    //         }
    //         // console.log('get provider',window.ethereum);
    //         // console.log('localstorage provider',JSON.stringify(localStorage.getItem('provider')))
    //         // setProvider(undefined);
    //     });
    // },[wallet_provider]);
    
     useEffect(() => {
        if(localStorage.getItem('theme')==='dark'){
            setTheme('light');
          }else if(localStorage.getItem('theme')==='light'){
            setTheme('dark');
          }
      
          if(localStorage.getItem('theme')==='dark'){
            setThemeMode(false);
          }else if(localStorage.getItem('theme')==='light'){
              setThemeMode(true);
          }
         eventBus.on("changeTheme", (data: any) =>{
            if(data.message==='dark'){
              setTheme('light');
              setThemeMode(false);
            }else if(data.message==='light'){
              setTheme('dark');
              setThemeMode(true);
            }
          });
    },[theme]);
        return(
        <div className={theme==='light' ? 'swapping_widget' : 'dark_swapping_widget'}>
            <Box className="row" style={theme==='light' ? {width:"100%",margin:"0",background:'#f7f7f7'} : {width:"100%",margin:"0",background:'rgb(27, 36, 41)'}}>
                <Box className={theme==='light' ? 'col-xl-5 inner_swapping_widget' : 'col-xl-5 dark_inner_swapping_widget'}>
                    <div className="row" style={{width:"100%",margin:"0"}}>
                        <div className={theme==='light' ? 'col-xl-6 tabs' : 'col-xl-6 dark_tabs'}>
                            {/* <p>Swap</p> */}
                            <ul>
                                <li className={currentTab==='swap' ? 'currentTab' : ''} onClick={() => {setCurrentTab('swap')}}>Swap</li>
                                <li className={currentTab==='flash' ? 'currentTab' : ''} onClick={() => {setCurrentTab('flash')}}>Flash Mint</li>
                            </ul>
                        </div>
                        <div className="col-xl-6 gear_icon">
                            <span style={{position:"relative",cursor:"pointer"}}>
                                <GearFill size={24} color={theme==='light' ? '#000000' : '#ffffff'} onClick={() => {showSlipageBox(!slipage_box)}}/>

                                {slipage_box &&
                                (<div className={theme==='light' ? 'chakra-popover__popper css-1qq679y slipage_box' : 'chakra-popover__popper css-1qq679y dark_slipage_box'}data-popper-placement="bottom-end">
                                    <section id="popover-content-:r1:" role="dialog" className="chakra-popover__content css-1jzofsu" aria-describedby="popover-body-:r1:">
                                        <div id="popover-body-:r1:" className="chakra-popover__body css-1ews2c8">
                                            <p className="chakra-text css-10inx2m">Slippage Settings</p>
                                            <div className="css-1k5h581">
                                                <button type="button" className="chakra-button css-5905ue">Auto</button>
                                                <div className="css-984u8e">
                                                    <input placeholder="1" type="number" className="chakra-input css-19leetl" defaultValue="1" />
                                                    <p className="chakra-text css-5cm1aq">%</p>
                                                </div>
                                            </div>
                                            <p className="chakra-text css-1mm63xf">Make sure to know what you're doing when entering custom slippage values.</p>
                                         </div>
                                    </section>
                                </div>)}
                                
                            </span>
                        </div>
                    </div>
                    
                    {currentTab==='swap' &&
                    (<div className={theme==='light' ? 'row from_widget' : 'row dark_from_widget'} style={{width:"100%",margin:"0"}}>
                        <label>From:</label>
                        <div className={theme==='light' ? 'css-1eu4lo3 col-xl-12' : 'dark_css-1eu4lo3 col-xl-12'}>
                                <div className="css-16j8xl6">
                                    <input placeholder="0.0" type="number" className={theme==='light' ? 'chakra-input css-viub38' : 'chakra-input dark_css-viub38'}/>
                                    <div className="css-11d4svj" onClick={() => {
                                            setOverlay(<OverlayTwo />)
                                            onOpenFromTokenModal()
                                        }}>
                                        <div className="css-1mydd1o">
                                            <img alt="ETH logo" src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" className="chakra-image css-18puooo" />
                                        </div>
                                        <p className="chakra-text css-1alhqum">ETH</p>
                                        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1boqucc">
                                            <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="css-wb5hcv">
                                    <div className="css-k008qs"><p className="chakra-text css-1khja9b" style={theme==='light' ? {color:'#000000'} : {color:'#ffffff'}}>$0.00</p></div>
                                    <div className="css-1e2veb8"><p className="chakra-text css-ex8ofk" style={theme==='light' ? {color:'#000000'} : {color:'#ffffff'}}>Balance: 0.00</p>
                                    <div className="css-1ygf6z7"></div>
                                </div>
                            </div>
                        </div>

                        <div className="css-1r5t1bu" style={{position:"relative"}}><button type="button" className={theme==='light' ? 'chakra-button css-1rr3z1e' : 'chakra-button dark_css-1rr3z1e'} aria-label="Search database"><svg viewBox="-1 -1 9 11" focusable="false" className="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"></path></svg></button></div>


                        <div className="css-j7qwjs" onClick={() => {
                                setOverlay(<OverlayTwo />)
                                onOpenToTokenModal()
                            }}>
                                <p className={theme==='light' ? 'chakra-text css-e4l232' : 'chakra-text dark_css-e4l232'}>To</p>
                                <div className={theme==='light' ? 'css-1eu4lo3' : 'dark_css-1eu4lo3'}>
                                    <div className="css-16j8xl6">
                                        <input placeholder="0.0" type="number" step="any" aria-readonly="true" className={theme==='light' ? 'chakra-input css-viub38' : 'chakra-input dark_css-viub38'} value="0.0127" />
                                        <div className="css-11d4svj">
                                            <div className="css-1mydd1o">
                                                <img alt="icETH logo" src="./../images/iceth.png" className="chakra-image css-18puooo" />
                                            </div>
                                            <p className="chakra-text css-1alhqum">icETH</p>
                                            <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1boqucc"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                        </div>
                                    </div>
                                <div className="css-wb5hcv">
                                <div className="css-k008qs">
                                    <p className="chakra-text css-1khja9b" style={theme==='light' ? {color:'#000000'} : {color:'#ffffff'}}>$0.00</p>
                                </div>
                                <div className="css-1e2veb8">
                                    <p className="chakra-text css-ex8ofk" style={theme==='light' ? {color:'#000000'} : {color:'#ffffff'}}>Balance: 0.00</p>
                                </div>
                            </div>
                        </div>
                        </div>

                        <button disabled={showBtn ? true : false} type="button" className="chakra-button css-11m5wvn">Review Swap</button>
                    </div>)}


                    {currentTab==='flash' &&
                    (<div className={theme==='light' ? 'row from_widget' : 'row dark_from_widget'} style={{width:"100%",margin:"0"}}>
                       
                        <div className="css-h5fkc8">
                            <div className="css-k008qs">
                                <div className="css-i8zn9k">
                                    <p className={currentFlashTab==='mint' ? 'chakra-text css-1kzdb37' : 'chakra-text css-aqloyo'} onClick={() => {setCurrentFlashTab('mint')}}>Mint</p>
                                    <p className={currentFlashTab==='redeem' ? 'chakra-text css-1kzdb37' : 'chakra-text css-aqloyo'} onClick={() => {setCurrentFlashTab('redeem')}}>Redeem</p>
                                </div>
                            </div>
                            <div className="css-ni9vdh">
                                <div className="css-j7qwjs">
                                    <p className="chakra-text css-e4l232"></p>
                                    <div className="css-1eu4lo3">
                                        <div className="css-16j8xl6">
                                            <input type="number" className="chakra-input css-t8evlo" defaultValue="0.0" onChange={() => {setShowFlashBtn(false)}}/>
                                                <div className="css-11d4svj"  onClick={() => {
                                                    setOverlay(<OverlayTwo />)
                                                    onOpenToTokenModal()
                                                }}>
                                                    <div className="css-1mydd1o">
                                                        <img alt="icETH logo" src="./../images/iceth.png" className="chakra-image css-18puooo" />
                                                    </div>
                                                    <p className="chakra-text css-1alhqum">icETH</p>
                                                    <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1boqucc"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                                </div>
                                            </div>
                                            <div className="css-wb5hcv">
                                                <div className="css-k008qs">
                                                    <p className="chakra-text css-1khja9b"></p>
                                                </div>
                                                <div className="css-1e2veb8">
                                                    <p className="chakra-text css-ex8ofk">Balance: 0.00</p>
                                                    <div className="css-1ygf6z7">
                                                        <p className="chakra-text css-17y5qzx">MAX</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {currentFlashTab==='mint' &&
                                    (<p className="chakra-text css-178zphn">Estimated ETH required for mint (inc. slippage)</p>)}
                                     {currentFlashTab==='redeem' &&
                                    (<p className="chakra-text css-178zphn">Estimated ETH output for redemption (inc. slippage)</p>)}
                                    <div className="css-4juikq">
                                        <div className="css-f5v9hf" onClick={() => {
                                            setOverlay(<OverlayTwo />)
                                            onOpenFromTokenModal()
                                        }}>
                                            <img alt="Ethereum logo" src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" className="chakra-image css-c2uxn6" />
                                            <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1boqucc">
                                                <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">
                                                </path>
                                            </svg>
                                        </div>
                                        <p className="chakra-text css-62ldx4">0.00</p>
                                    </div>
                                    <p className="chakra-text css-dufg65">ETH Balance: 0.00</p>
                            </div>
                            <div className="css-j7qwjs">
                                <button disabled={showFlashBtn ? true : false} type="button" className="chakra-button css-11m5wvn">Review Swap</button>
                            </div>
                        </div>
                    </div>)}


                </Box>
            </Box>

            <Modal  isCentered isOpen={isOpenFromTokenModal} onClose={onCloseFromTokenModal}>
        {overlay}
          <ModalContent
            borderColor={"#55c3e7"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #55c3e7;"
            borderRadius="14px"
            textAlign={'center'}
            width="480px"
            className={theme==='light' ? "light_wallet_modal" : "dark_wallet_modal"}
            bg={useColorModeValue('#000c16', 'gray.800')}>
            <ModalHeader
            color={'#fff'} 
            paddingBottom='50px'
            textAlign={'left'}
            paddingTop="20px"
          
            >Select Token</ModalHeader>
            <ModalCloseButton 
            marginTop="10px"
            borderColor={'none'}
            color={"#fff"}
            fontWeight={800}
            fontSize='16px'
            />
            <ModalBody >
              <React.Fragment>
                <div className="css-16hpbyo">
                    <p className="chakra-text css-1mm63xf">Quantity Owned</p>
                </div>
                <div className="css-1atqk0p">
                    <div className="css-70qvj9">
                        <img alt="ETH logo" src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" className="chakra-image css-1ngw63v" />
                        <div className="css-y6ta9y">
                            <p className="chakra-text css-1bimbha">ETH</p>
                            <p className="chakra-text css-1mm63xf">Ethereum</p>
                        </div>
                    </div>
                    <div className="css-1dlrb3z">
                        <p className="chakra-text css-10inx2m">0.000</p>
                        <p className="chakra-text css-1mm63xf"></p>
                    </div>
                </div>
                <div className="css-1atqk0p">
                    <div className="css-70qvj9">
                        <img alt="stETH logo" src="https://assets.coingecko.com/coins/images/13442/small/steth_logo.png?1608607546" className="chakra-image css-1ngw63v" />
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
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal  isCentered isOpen={isOpenToTokenModal} onClose={onCloseToTokenModal}>
        {overlay}
          <ModalContent
            borderColor={"#55c3e7"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #55c3e7;"
            borderRadius="14px"
            textAlign={'center'}
            width="480px"
            className={theme==='light' ? "light_wallet_modal" : "dark_wallet_modal"}
            bg={useColorModeValue('#000c16', 'gray.800')}>
            <ModalHeader
            color={'#fff'} 
            paddingBottom='50px'
            textAlign={'left'}
            paddingTop="20px"
          
            >Select Token</ModalHeader>
            <ModalCloseButton 
            marginTop="10px"
            borderColor={'none'}
            color={"#fff"}
            fontWeight={800}
            fontSize='16px'
            />
            <ModalBody >
              <React.Fragment>
                <div className="css-16hpbyo">
                    <p className="chakra-text css-1mm63xf">Quantity Owned</p>
                </div>
                <div className="css-1atqk0p"><div className="css-70qvj9"><img alt="icETH logo" src="../images/iceth.png" className="chakra-image css-1ngw63v" /><div className="css-y6ta9y"><p className="chakra-text css-1bimbha">icETH</p><p className="chakra-text css-1mm63xf">Interest Compounding ETH Index</p></div></div><div className="css-1dlrb3z"><p className="chakra-text css-10inx2m">0.000</p><p className="chakra-text css-1mm63xf"></p></div></div>

                <div className="css-1atqk0p"><div className="css-70qvj9"><img alt="DPI logo" src="https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg" className="chakra-image css-1ngw63v" /><div className="css-y6ta9y"><p className="chakra-text css-1bimbha">DPI</p><p className="chakra-text css-1mm63xf">DeFi Pulse Index</p></div></div><div className="css-1dlrb3z"><p className="chakra-text css-10inx2m">0.000</p><p className="chakra-text css-1mm63xf"></p></div></div>

                <div className="css-1atqk0p"><div className="css-70qvj9"><img alt="MVI logo" src="https://set-core.s3.amazonaws.com/img/portfolios/mvi.svg" className="chakra-image css-1ngw63v" /><div className="css-y6ta9y"><p className="chakra-text css-1bimbha">MVI</p><p className="chakra-text css-1mm63xf">Metaverse Index</p></div></div><div className="css-1dlrb3z"><p className="chakra-text css-10inx2m">0.000</p><p className="chakra-text css-1mm63xf"></p></div></div>
                
                <div className="css-1atqk0p"><div className="css-70qvj9"><img alt="GMI logo" src="../images/gmi.png" className="chakra-image css-1ngw63v" /><div className="css-y6ta9y"><p className="chakra-text css-1bimbha">GMI</p><p className="chakra-text css-1mm63xf">Bankless DeFi Innovation Index</p></div></div><div className="css-1dlrb3z"><p className="chakra-text css-10inx2m">0.000</p><p className="chakra-text css-1mm63xf"></p></div></div>

              </React.Fragment>
            </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

        </div>
        );
    
}

export default SwappingWidget1;