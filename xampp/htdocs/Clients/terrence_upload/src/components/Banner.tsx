import React,{useState,useEffect} from 'react'
import UniswapWidget from "./UniswapWidget";
import eventBus from "../eventBus";
import Graph from "./Graph";
import { useTranslation } from 'react-i18next'
import { SwapWidget, Theme, darkTheme, lightTheme } from '@uniswap/widgets';
import '@uniswap/widgets/dist/fonts.css';
import { ethers } from 'ethers';
import { useStateValue } from './../StateProvider.js';

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    Link,
    IconButton,
    createIcon,
    IconProps,
    useDisclosure,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  } from '@chakra-ui/react';
  
  // const languages = [
  //   {
  //     code: 'fr',
  //     name: 'Français',
  //     country_code: 'fr',
  //   },
  //   {
  //     code: 'en',
  //     name: 'English',
  //     country_code: 'gb',
  //   },
  //   {
  //     code: 'ar',
  //     name: 'العربية',
  //     dir: 'rtl',
  //     country_code: 'sa',
  //   },
  // ]



//   const MY_TOKEN_LIST = [
//     {
//         "chainId": 1,
//         "name": "Dai",
//         "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
//         "decimals": 18,
//         "symbol": "DAI",
//         "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
//     },
//     {
//         "chainId": 1,
//         "name": "Maker",
//         "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
//         "decimals": 18,
//         "symbol": "MKR",
//         "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png"
//     },
//     {
//         "chainId": 1,
//         "name": "UNI COIN",
//         "address": "0xe6877ea9c28fbdec631ffbc087956d0023a76bf2",
//         "decimals": 18,
//         "symbol": "UNI",
//         "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/4113.png"
//     },
//     {
//         "chainId": 1,
//         "name": "WETH",
//         "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
//         "decimals": 18,
//         "symbol": "WETH",
//         "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png"
//     },
//     {
//         "chainId": 1,
//         "name": "PRIMCOIN",
//         "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756c12",
//         "decimals": 18,
//         "symbol": "PRIM",
//         "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png"
//     } 
// ];

const MY_TOKEN_LIST = [
  {
      "chainId": 4,
      "name": "Dai",
      // "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "address":"0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735",
      "decimals": 18,
      "symbol": "DAI",
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
  },
  {
      "chainId": 4,
      "name": "Maker",
      // "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
      "address": "0xf9ba5210f91d0474bd1e1dcdaec4c58e359aad85",
      "decimals": 18,
      "symbol": "MKR",
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png"
  },
  {
      "chainId": 4,
      "name": "UNI COIN",
      // "address": "0xe6877ea9c28fbdec631ffbc087956d0023a76bf2",
      "address":"0x03E6c12eF405AC3F642B9184eDed8E1322de1a9e",
      "decimals": 18,
      "symbol": "UNI",
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/4113.png"
  },
  {
      "chainId": 4,
      "name": "WETH",
      // "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "address" :"0xc778417e063141139fce010982780140aa0cd5ab",
      "decimals": 18,
      "symbol": "WETH",
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png"
  },
  {
    "chainId": 4,
    "name": "PRIMCOIN",
    "address": "0x9dbb6ea24f90bbfa8ed2c8658f6b42993b091aa4",
    // "address": "0xb878339b5b5dbcb2A342483FF8A907cc04C8393F",
    "decimals": 18,
    "symbol": "PRIM",
    "logoURI": "http://developerssupport.com/yazan/prim.png"
  } 
];
const PRIM = '0x9dbb6ea24f90bbfa8ed2c8658f6b42993b091aa4'


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
    success: 'green',
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
    success: 'green',
    borderRadius: 0.8,
  }

  export default function CallToActionWithVideo() {
    const [{ global }, dispatch] = useStateValue();
    // const [currentLanguageCode, setCurrentLanguageCode] = useState<string>('en')
    // const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    const [wallet_provider, setProvider] = useState(undefined);
    const [theme, setTheme] = useState('');

    const [darkMode, setThemeMode] = useState(true);
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

    const OverlayTwo = () => (
        <ModalOverlay
          bg='#101b26bd'
          backdropFilter= 'opacity(20%)'
          backdropInvert='10%'
          backdropBlur='2px'
        />
      )
      const { 
        isOpen: isOpenWalletModal, 
        onOpen: onOpenWalletModal, 
        onClose: onCloseWalletModal        
    } = useDisclosure()
     
    const [overlay, setOverlay] = React.useState(<OverlayTwo />)

    React.useEffect(() => {
      eventBus.on("viewWalletAddress", (data: any) =>{
        // console.log('get provider',new ethers.providers.Web3Provider(window.ethereum));
        if(data.message!==undefined){
          setProvider(data.message)
        }else{
          setProvider(undefined);
        }
      });
    },[wallet_provider]);

    useEffect(() => {
      console.log('global value',global.walletProvider)
    },[global.walletProvider]);

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
    return (
        <Box
        // backgroundImage={'images/bg.png'}
        >
      <Container maxW={'7xl'}
     
      >
        <Stack
          className="second_section"
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }} w={'full'}
          direction={{ base: 'column', md: 'row' }}>


            
          {/* <Stack  flex={1} spacing={{ base: 5, md: 10 }}>
            <Box className='graph_container'>
              <Graph/>

            </Box>
          </Stack> */}




        <Stack
          className="second_section"
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack  flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading 
            fontFamily={ 'Raleway'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                fontWeight={600}
                color={useColorModeValue('#fff', '#000')}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}>
                PRIM 
              </Text>
              
              <Text
              fontWeight={700}
              as={'span'} color={'#0088fe'}>
                SWAP
              </Text>
            </Heading>
            <Text color={useColorModeValue('#fff', '#000')}
            fontSize={24}
            fontFamily={ 'Raleway'}
            fontWeight={600}
            marginTop='20px !important'
            letterSpacing={'1px'}
            wordSpacing={'5px'}
            >
           {t('banner_text1')} <br/> {t('banner_text2')} <br/> {t('banner_text3')}.</Text>
          </Stack>
        </Stack>




          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'} className="banner">
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
              
            />



            
        <Modal  isCentered isOpen={isOpenWalletModal} onClose={onCloseWalletModal}
   
      
   >
   {overlay}
   <ModalContent
   borderColor={"#0088fe"}
   borderWidth="1px"
   transition="all 0.2s ease-in-out"
         boxShadow="-1px 0px 6px #0088fe;"
   borderRadius="14px"
  textAlign={'center'}
  width="350px"
  
    bg={useColorModeValue('#000c16', 'gray.800')}>
     <ModalHeader
     color={'#fff'} 
     paddingBottom='50px'
     textAlign={'left'}
     paddingTop="20px"
     >Connect Wallet</ModalHeader>
     <ModalCloseButton 
      marginTop="10px"
 borderColor={'none'}
     color={"#fff"}
     fontWeight={800}
     fontSize='16px'
     />
     <ModalBody >
     

    <Link href='#'>   
           <UnorderedList marginLeft={0} listStyleType={'none'}  bg={'#101b26'}  height='48px'
               border='1px'
               borderRadius="10px"
               borderColor='#445c6d' color={"#fff"} display={'flex'} justifyContent={'space-between'} >
           <ListItem
           
           padding={3}
           
           >Coinbase </ListItem>
           <ListItem  padding={3}><Image float={'right'}  alt={'Hero Image'}
                       
                           w={'60%'}
                       
                           src={
                           'images/6.png'
                           }
                       /></ListItem>
           
           </UnorderedList></Link>



       <Link href="#">
           <UnorderedList marginLeft={0} marginTop={4} listStyleType={'none'}  bg={'#101b26'}  height='48px'
       
               border='1px'
               borderRadius="10px"
               borderColor='#445c6d' color={"#fff"} display={'flex'} justifyContent={'space-between'} >
           <ListItem
           
           padding={3}
           
           >Metamask</ListItem>
           <ListItem  padding={3}><Image float={'right'}  alt={'Hero Image'}
                       
                       w={'60%'}
                       
                           src={
                           'images/6.png'
                           }
                       /></ListItem>
           
           </UnorderedList>
           </Link>

           <Link href='#'><UnorderedList  marginLeft={0}  marginTop={4} listStyleType={'none'}  bg={'#101b26'}  height='48px'
               
               border='1px'
               borderRadius="10px"
               borderColor='#445c6d' color={"#fff"} display={'flex'} justifyContent={'space-between'} >
           <ListItem
           
           padding={3}
           
           >Wallet Connect</ListItem>
           <ListItem  padding={3}><Image float={'right'}  alt={'Hero Image'}
                       
                       w={'60%'}
                       
                           src={
                           'images/wallet.png'
                           }
                       /></ListItem>
           
           </UnorderedList>
           </Link>


       <Button  marginTop='40px'
 
       paddingLeft='100px'
       paddingRight='100px'
       transition="all 0.2s ease-in-out"
       boxShadow="-1px 0px 10px #0088fe;"
         display={{ md: 'inline-flex' }}
         fontSize={'sm'}
         fontWeight={600}
         color={'white'}
         borderRadius={50}
         bg={'#0088fe'}
         href={'#'}
         _hover={{
           bg: '#0088fe',
         }}>
        Connect Wallet
       </Button>
     </ModalBody>
     <ModalFooter>
       {/* <Button onClick={onClose}>Close</Button> */}
     </ModalFooter>
   </ModalContent>
 </Modal>
 {/* {'providerrrrrr'+global.walletProvider} */}
         {global.walletProvider!==undefined ?
          (
            <div className="Uniswap">
              <Box mt={25} />
              <SwapWidget 
              provider={global.walletProvider} defaultOutputTokenAddress={PRIM}
              theme={darkMode ? myDarkTheme : myLightTheme} tokenList={MY_TOKEN_LIST}
              />
            </div>
          ):
            (<Box
              position={'relative'}
              
              rounded={'2xl'}
              
              width={'full'}
              overflow={'hidden'}>
          
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
             
                src={
                  theme==='dark' ? 'images/banner.png' : 'images/light_banner.png'
                }
              />
            </Box>)}
          </Flex>
        </Stack>
      </Container>
      </Box>
    );
  }
  
  const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
      'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
  });
  
  export const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };