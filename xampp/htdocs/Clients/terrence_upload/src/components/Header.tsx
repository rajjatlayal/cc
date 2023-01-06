/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import eventBus from "../eventBus";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";
import { ethers } from "ethers";
import { useStateValue } from "./../StateProvider.js";
import Web3 from "web3";
import { useHistory} from "react-router-dom";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
  useDisclosure,
  Container,
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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MdGroupWork, MdSettings } from "react-icons/md";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
const { ethereum } = window;
var web3 = new Web3();
const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 5, 137],
});

const coininjected = new WalletLinkConnector({
  url: "",
  appName: "web3",
  supportedChainIds: [1, 4, 5, 137],
});

const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },
  ethereum: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://mainnet.infura.io/v3/"],
    blockExplorerUrls: ["https://etherscan.io"]
  }
};

const walletconnect = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/00ca1859789d4b40bce01f4104844224",
    4: "https://rinkeby.arbitrum.io/rpc",
    5: "https://rpc.goerli.mudit.blog/",
    137: "https://polygon-rpc.com/",
  },
  qrcode: true,
});

const GlobeIcon = ({ width = 28, height = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
);

const languages = [
  {
    code: "zh",
    name: "Chinese",
    country_code: "cn",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "ja",
    name: "Japanese",
    country_code: "jp",
  },
  {
    code: "ko",
    name: "Korean",
    country_code: "kr",
  },
  {
    code: "ru",
    name: "Russian",
    country_code: "ru",
  },
  {
    code: "es",
    name: "Spanish",
    country_code: "es",
  },
  {
    code: "vi",
    name: "Vietnamese",
    dir: "ltr",
    country_code: "vi",
  },
];

export default function WithSubnavigation() {
  const history = useHistory();
  const [{ global }, dispatch] = useStateValue();
  const { colorMode, toggleColorMode } = useColorMode();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const [theme, setTheme] = useState("");
  const [walletProvider, setWalletProvider] = useState(undefined);
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: t("menu1"),
      href: "#",
    },
    {
      label: t("menu2"),
      href: "#",
    },
    {
      label: t("menu3"),
      href: "#",
    },
  ];
  React.useEffect(() => {
    eventBus.dispatch("changeTheme", { message: colorMode });
    localStorage.setItem("theme", colorMode);
  }, [colorMode]);

  // React.useEffect(()=>{
  //   Check();
  // },[])

  const DesktopNav = () => {
    const linkColor = useColorModeValue("white", "gray.600");
    const linkHoverColor = useColorModeValue("#c5c5c5", "#333");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
      <Stack direction={"row"} spacing={4} paddingLeft="0px">
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };

  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
        {/* <Button
              color="#fff"
              transition="all 0.2s ease-in-out"
              boxShadow="-1px 0px 10px #0088fe;"
              onClick={() => {
              setOverlay(<OverlayTwo />)
              onOpenWalletModal()
              }}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              
              fontWeight={600}
          
              borderRadius={50}
              bg={'#0088fe'}
              href={'#'}
              _hover={{
              bg: '#0088fe',
              }}>
              Connect Wallet
          </Button> */}
      </Stack>
    );
  };

  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>

          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  const { active, account, library, connector, chainId, activate, deactivate } =
    useWeb3React();

  const activateInjectedProvider = (providerName: any) => {
    // console.log("meta", providerName);
    // if (ethereum?.providers) {
    //   return undefined;
    // }
    let provider;
    switch (providerName) {
      case "MetaMask":
        provider = ethereum.providers.find(({ isMetaMask }: any) => isMetaMask);
        break;
    }
    if (provider) {
      ethereum.setSelectedProvider(provider);
    }
  };

  const OverlayTwo = () => (
    <ModalOverlay
      bg="#101b26bd"
      backdropFilter="opacity(20%)"
      backdropInvert="10%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isOpenWalletModal,
    onOpen: onOpenWalletModal,
    onClose: onCloseWalletModal,
  } = useDisclosure();

  const {
    isOpen: isOpenNetworkModal,
    onOpen: onOpenNetworkModal,
    onClose: onCloseNetworkModal,
  } = useDisclosure();

  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  async function checkNetwork() {
    if (library !== undefined) {
      try {
        if (!window.ethereum) throw new Error("No crypto wallet found");
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [networks.polygon,networks.ethereum],
        });
        get_balance(account);
      } catch (err:any) {
        console.log(err);
      }
    }
  }

  const connectInjected = async () => {
    onCloseWalletModal();
    try {
      if (ethereum?.providers) {
        activateInjectedProvider("MetaMask");
        activate(injected);
        onCloseWalletModal();
      } else {
        activate(injected);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const connectCoinInjected = async () => {
    onCloseWalletModal();
    try {
      // activateInjectedProvider('CoinBase');
      await activate(coininjected);
      onCloseWalletModal();
    } catch (ex) {
      console.log(ex);
    }
  };

  const connectWalletConnect = async () => {
    try {
      await activate(walletconnect);
    } catch (ex) {
      console.log(ex);
    }
  };

  async function disconnect() {
    try {
      deactivate();
      setWalletProvider(undefined);
      dispatch({
        type: "changeWalletProvider",
        newWalletProvider: { walletProvider: undefined },
      });
      dispatch({
        type: "changeWalletAddress",
        newWalletAddress: { walletAddress: "" },
      });
    } catch (ex) {
      console.log(ex);
    }
  }
  async function get_balance(address:any){
    window.ethereum.sendAsync({
      method: 'eth_getBalance',
      params: [address, "latest"]
    }, function(err:any, result:any){
      if(err){
        console.error(err)
      } else {
        const balanceInEth = ethers.utils.formatEther(result.result);
        var final_balance;
        if(parseFloat(balanceInEth) > 1){
          final_balance = parseFloat(balanceInEth).toFixed(2);
        }else{
          final_balance = parseFloat(balanceInEth).toFixed(5);
        }
        dispatch({
          type: "changeWalletBalance",
          newWalletBalance: { walletBalance: final_balance },
        });
      }
    })

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const balance = await provider.getBalance(address);
    // const balanceInEth = ethers.utils.formatEther(balance);
    // const final_balance = parseFloat(balanceInEth).toFixed(4);
    
  }

  useEffect(() => {
    if (account !== "" && account !== undefined && account !== null) {
      eventBus.dispatch("viewWalletAddress", { message: account });
      dispatch({
        type: "changeWalletAddress",
        newWalletAddress: { walletAddress: account },
      });
      const walletAddress = account;
      get_balance(account);
    }
    setWalletProvider(library);
    dispatch({
      type: "changeWalletProvider",
      newWalletProvider: { walletProvider: library },
    });
  }, [account]);

  useEffect(() => {
    // console.log('set chain id',chainId);
    dispatch({
      type: "changeChainId",
      newChainId: { chainId: chainId },
    });
    if(chainId!==undefined && chainId !== 1 && chainId !== 137){
      checkNetwork();
    }
  },[chainId]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
    } else if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
    }
    eventBus.on("changeTheme", (data: any) => {
      // console.log('header theme changed');
      if (data.message === "dark") {
        setTheme("light");
      } else if (data.message === "light") {
        setTheme("dark");
      }
    });
  }, [theme]);

  useEffect(() => {
    if (currentLanguage !== undefined) {
      document.body.dir = currentLanguage.dir || "ltr";
      document.title = t("app_title");
      // document.content = t('app_content')
    }
  }, [currentLanguage, t]);

  React.useEffect(() => {
    // console.log('show balance:',70142184163791786387/1000000000000000000);
    eventBus.dispatch("changeTheme", { message: colorMode });
    localStorage.setItem("theme", colorMode);
  }, [colorMode]);

  return (
    <Box style={{ background: "#1B2429", paddingBottom: "6px" }}>
      <Container paddingLeft="0px" maxW={"7xl"} className="top_navbar">
        <Flex
          className="navbar"
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            {/* <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            /> */}
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              fontWeight={600}
              color={useColorModeValue('white', 'gray.800')}>
              PRIM
              
              <Text as={'span'} color={'#0088fe'}>
              SWAP
              </Text>
              
            </Text> */}
            <Image
              alt={theme}
              fit={"cover"}
              align={"center"}
              height={"36px"}
              marginTop={"4px"}
              className="header_logo"
              src={"images/logoo.png"}
              onClick={()=>history.push('/')}
              style={{cursor:"pointer"}}
            />
            <span>
              <Button
                onClick={toggleColorMode}
                color={useColorModeValue("#ffffff", "#ffffff")}
                className={
                  colorMode === "light" ? "dark_theme_btn" : "light_theme_btn"
                }
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </span>

            {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex> */}
          </Flex>
          {/* <Icon marginRight='10px' color={useColorModeValue('#fff', '#000')} as={MdSettings} />
          <Icon marginRight='15px'color={useColorModeValue('#fff', '#000')} as={MdGroupWork} /> */}
          <span>
            <div className="language-select">
              <div className="d-flex justify-content-end align-items-center language-select-root">
                <div className="dropdown">
                  {/* <button
                    className={theme==='dark'? "btn btn-link dropdown-toggle globe_icon dark_mode_lang_btn" : "btn btn-link dropdown-toggle globe_icon light_mode_lang_btn"}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <GlobeIcon />
                  </button> */}
                  <ul
                    className={
                      theme === "dark"
                        ? "dropdown-menu dark_mode_lang_div"
                        : "dropdown-menu light_mode_lang_div"
                    }
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <span className="dropdown-item-text">
                        {t("language")}
                      </span>
                    </li>
                    {languages.map(({ code, name, country_code }) => (
                      <li key={country_code}>
                        <a
                          href="#"
                          className={classNames("dropdown-item", {
                            disabled: currentLanguageCode === code,
                          })}
                          onClick={() => {
                            i18next.changeLanguage(code);
                          }}
                        >
                          <span
                            className={`flag-icon flag-icon-${country_code} mx-2`}
                            style={{
                              opacity: currentLanguageCode === code ? 0.5 : 1,
                            }}
                          ></span>
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </span>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            className="wallet_btns"
            spacing={6}
          >
            {account ? (
              <React.Fragment>
                <Button
                  color="#fff"
                  transition="all 0.2s ease-in-out"
                  boxShadow="-1px 0px 10px #55c3e7;"
                  onClick={disconnect}
                  className="disconnect_btn"
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  borderRadius={4}
                  bg={"#55c3e7"}
                  href={"#"}
                  _hover={{
                    bg: "#55c3e7",
                  }}
                >
                  {t("disconnect_wallet")}
                </Button>
                <span
                  style={{color: "white", margin: "auto 12px" }}
                >{`${account.slice(0, 8)}...${account.slice(
                  account.length - 6,
                  account.length
                )}`}</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button
                  className="connect_btn large_screen_btn"
                  color="#fff"
                  transition="all 0.2s ease-in-out"
                  boxShadow="-1px 0px 10px #0088fe;"
                  onClick={() => {
                    setOverlay(<OverlayTwo />);
                    onOpenWalletModal();
                  }}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  borderRadius={50}
                  bg={"#0088fe"}
                  href={"#"}
                  _hover={{
                    bg: "#0088fe",
                  }}
                >
                  {t("connect_wallet")}
                </Button>

                <Button
                  className="connect_btn small_screen_btn"
                  color="#fff"
                  transition="all 0.2s ease-in-out"
                  boxShadow="-1px 0px 10px #0088fe;"
                  onClick={connectWalletConnect}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  borderRadius={50}
                  bg={"#0088fe"}
                  href={"#"}
                  _hover={{
                    bg: "#0088fe",
                  }}
                >
                  {t("connect_wallet")}
                </Button>
              </React.Fragment>
            )}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>

        <Modal
          isCentered
          isOpen={isOpenWalletModal}
          onClose={onCloseWalletModal}
        >
          {overlay}
          <ModalContent
            borderColor={"#55c3e7"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #55c3e7"
            borderRadius="14px"
            textAlign={"center"}
            width="420px"
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
              {t("connect_wallet")}
            </ModalHeader>
            <ModalCloseButton
              marginTop="10px"
              borderColor={"none"}
              color={"#fff"}
              fontWeight={800}
              fontSize="16px"
            />
            <ModalBody>
              {/* <div style={{color:"white"}}>Active: {active ? "true" : "false"}</div> */}

              <React.Fragment>
                <Link
                  href="#"
                  onClick={connectCoinInjected}
                  style={{ lineHeight: "44px" }}
                >
                  <UnorderedList
                    marginLeft={0}
                    listStyleType={"none"}
                    bg={"#101b26"}
                    height="48px"
                    border="1px"
                    borderRadius="10px"
                    borderColor="#445c6d"
                    color={"#fff"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <ListItem style={{ paddingLeft: "11px" }}>
                      Coinbase{" "}
                    </ListItem>
                    <ListItem padding={3}>
                      <Image
                        float={"right"}
                        alt={"Hero Image"}
                        w={"26px"}
                        height={"26px"}
                        src={"images/coinb.png"}
                      />
                    </ListItem>
                  </UnorderedList>
                </Link>
                <Link href="#" onClick={connectInjected}>
                  <UnorderedList
                    marginLeft={0}
                    marginTop={4}
                    listStyleType={"none"}
                    bg={"#101b26"}
                    height="48px"
                    border="1px"
                    borderRadius="10px"
                    borderColor="#445c6d"
                    color={"#fff"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <ListItem padding={3}>Metamask</ListItem>
                    <ListItem padding={3}>
                      <Image
                        float={"right"}
                        alt={"Hero Image"}
                        w={"26px"}
                        height={"26px"}
                        src={"images/6.png"}
                      />
                    </ListItem>
                  </UnorderedList>
                </Link>
                <Link href="#" onClick={connectWalletConnect}>
                  <UnorderedList
                    marginLeft={0}
                    marginTop={4}
                    listStyleType={"none"}
                    bg={"#101b26"}
                    height="48px"
                    border="1px"
                    borderRadius="10px"
                    borderColor="#445c6d"
                    color={"#fff"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <ListItem padding={3}>
                      Trust Wallet | Other Mobile Wallets
                    </ListItem>
                    <ListItem padding={3}>
                      <Image
                        float={"right"}
                        alt={"Hero Image"}
                        w={"60%"}
                        src={"images/wallet.png"}
                      />
                    </ListItem>
                  </UnorderedList>
                </Link>
              </React.Fragment>
            </ModalBody>
            <ModalFooter>
              {/* <Button onClick={onClose}>Close</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* network notification modal */}

        <Modal
          isCentered
          isOpen={isOpenNetworkModal}
          onClose={onCloseNetworkModal}
        >
          {overlay}
          <ModalContent
            borderColor={"#0088fe"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #0088fe;"
            borderRadius="14px"
            textAlign={"center"}
            width="350px"
            className="light_wallet_modal"
            bg={useColorModeValue("#000c16", "gray.800")}
          >
            <ModalHeader
              color={"#fff"}
              textAlign={"left"}
              padding="28px"
            ></ModalHeader>
            <ModalCloseButton
              marginTop="10px"
              borderColor={"none"}
              color={"#fff"}
              fontWeight={800}
              fontSize="16px"
            />
            <ModalBody>
              <React.Fragment>
                <p style={{ fontSize: "22px",color:"black" }}>
                  Please change the network from your wallet.
                </p>
              </React.Fragment>
            </ModalBody>
            <ModalFooter>
              {/* <Button onClick={onClose}>Close</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}