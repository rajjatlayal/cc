import React, { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import Graph from './Graph'
// import CanvasJSReact from './../canvasjs.stock.react';
// import Chart from "react-google-charts";
import {
  Box,
  // Container,
  // Stack,
  // SimpleGrid,
  Text,
  // Link,
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
  // ChevronDownIcon,
  // EmailIcon,
  // PhoneIcon,
  AddIcon,
  MinusIcon,
  // CheckIcon,
} from "@chakra-ui/icons";
import { Twitter, Linkedin, Facebook, Discord } from "react-bootstrap-icons";
import "./../style.css";
import eventBus from "../eventBus";

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
      fontFamily={"poppins"}
      color={useColorModeValue("#fff", "#000")}
    >
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState("");
  const [currentFaq, setCurrentFaq] = useState("");
  const OverlayTwo = () => (
    <ModalOverlay
      bg="#101b26bd"
      backdropFilter="opacity(20%)"
      backdropInvert="10%"
      backdropBlur="2px"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  // const [toggler, setToggler] = useState(false);
  const {
    isOpen: isOpenPrivacyModal,
    onOpen: onOpenPrivacyModal,
    onClose: onClosePrivacyModal,
  } = useDisclosure();
  const {
    isOpen: isOpenTermsModal,
    onOpen: onOpenTermsModal,
    onClose: onCloseTermsModal,
  } = useDisclosure();
  const {
    isOpen: isOpenAboutModal,
    onOpen: onOpenAboutModal,
    onClose: onCloseAboutModal,
  } = useDisclosure();
  const {
    isOpen: isOpenTokenModal,
    onOpen: onOpenTokenModal,
    onClose: onCloseTokenModal,
  } = useDisclosure();
  const {
    isOpen: isOpenFaqModal,
    onOpen: onOpenFaqModal,
    onClose: onCloseFaqModal,
  } = useDisclosure();
  const {
    isOpen: isOpenContactModal,
    onOpen: onOpenContactModal,
    onClose: onCloseContactModal,
  } = useDisclosure();

  const [widthh, setWidth] = useState(window.innerWidth);

  // const containerProps = {
  //   width: "800px",
  //   height: "400px",
  //   margin: "auto"
  // };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
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
  return (
    <>
      {/* <div className="graph_container">
      <Graph/>
    </div> */}
      <Box
        // backgroundImage={'images/footer.png'}
        // backgroundRepeat={'no-repeat'}
        // backgroundPosition={'center bottom'}
        // backgroundSize={'30%'}

        // backgroundColor={useColorModeValue('#001324', '#f1f1f1')}
        color={useColorModeValue("gray.700", "gray.200")}
        style={{ backgroundColor: "rgb(27, 36, 41)" }}
      >
        <div
          className="container footer p-5"
          style={{
            textAlign: "left",
            paddingBottom: "50px",
            backgroundColor: "#1b2429",
          }}
        >
          <div className="row">
            <div
              className="col-lg-3 footer_logo"
              style={{ float: "left", paddingLeft: "0px" }}
            >
              <img
                style={{ width: "220px !important" }}
                src="../images/white_logo.png"
                alt=""
              />
            </div>

            <div className="col-lg-3" style={{ float: "left" }}>
              <p style={{ paddingTop: "3px" }}>
                The Future of Decentralized Finance
              </p>
            </div>

            <div
              className="col-lg-6 social_iconss"
              style={{ float: "right", paddingTop: "10px" }}
            >
              {/* <a href="https://twitter.com/bitinext"> <i className='fab fa-discord' style='font-size:36px'></i> </a> */}
              <a
                onClick={() =>
                  window.open("https://discord.com/invite/BPFdfGvsfM")
                }
                style={{ float: "right" }}
              >
                <Discord size={24} color="#ffffff" />
              </a>
              {/* <a
                onClick={() =>
                  window.open("https://www.facebook.com/singularcap")
                }
              >
                <Facebook size={24} color="#ffffff" />
              </a>
              <a
                onClick={() =>
                  window.open("https://www.linkedin.com/company/singularcap/")
                }
              >
                <Linkedin size={24} color="#ffffff" />
              </a> */}
              <a onClick={() => window.open("https://twitter.com/singulardao")}>
                <Twitter size={24} color="#ffffff" />
              </a>
            </div>
          </div>

          <hr style={{ color: "white" }} />

          <div className="row other_links" style={{ paddingTop: "40px" }}>
            <div className="col-lg-3">
              <a
                style={{ color: "#999" }}
                onClick={() => {
                  setOverlay(<OverlayTwo />);
                  onOpenPrivacyModal();
                }}
              >
                {" "}
                Privacy Policy{" "}
              </a>
            </div>

            <div className="col-lg-3">
              <a style={{ textAlign: "left", color: "#999" }}> Products </a>{" "}
              <br />
              <a style={{ textAlign: "left", color: "#999" }}>
                {" "}
                Institutional{" "}
              </a>{" "}
              <br />
              <a style={{ textAlign: "left", color: "#999" }}> Token </a>
            </div>

            <div className="col-lg-6">
              <p
                style={{
                  color: "#f7f7f7",
                  float: "right",
                  marginTop: "20px",
                  fontSize: "17px",
                  textTransform: "capitalize",
                }}
              >
                Copyright 2022 Singular Capital{" "}
              </p>
            </div>
          </div>
        </div>

        <Modal
          isCentered
          isOpen={isOpenPrivacyModal}
          onClose={onClosePrivacyModal}
        >
          {overlay}
          <ModalContent
            borderColor={"#55c3e7"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #55c3e7;"
            borderRadius="14px"
            textAlign={"center"}
            width="350px"
            className={
              theme === "light"
                ? "light_privacy_policy privacy_policy"
                : "dark_privacy_policy privacy_policy"
            }
            bg={useColorModeValue("#000c16", "gray.800")}
          >
            <ModalHeader
              color={"#fff"}
              paddingBottom="50px"
              textAlign={"left"}
              paddingTop="20px"
            >
              {t("privacy")}
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
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </React.Fragment>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isCentered isOpen={isOpenTermsModal} onClose={onCloseTermsModal}>
          {overlay}
          <ModalContent
            borderColor={"#55c3e7"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #55c3e7;"
            borderRadius="14px"
            textAlign={"center"}
            width="350px"
            className={
              theme === "light"
                ? "light_privacy_policy privacy_policy"
                : "dark_privacy_policy privacy_policy"
            }
            bg={useColorModeValue("#000c16", "gray.800")}
          >
            <ModalHeader
              color={"#fff"}
              paddingBottom="50px"
              textAlign={"left"}
              paddingTop="20px"
            >
              {t("terms")}
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
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </React.Fragment>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isCentered isOpen={isOpenAboutModal} onClose={onCloseAboutModal}>
          {overlay}
          <ModalContent
            borderColor={"#0088fe"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #0088fe;"
            borderRadius="14px"
            textAlign={"center"}
            width="350px"
            className="light_privacy_policy privacy_policy"
            bg={useColorModeValue("#000c16", "gray.800")}
          >
            <ModalHeader
              color={"#fff"}
              paddingBottom="50px"
              textAlign={"left"}
              paddingTop="20px"
            >
              {t("about-us")}
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
                <p>{t("about1")}</p>
                <p>{t("about2")}</p>
                <p>{t("about3")}</p>
                <p>{t("about4")}</p>
              </React.Fragment>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isCentered isOpen={isOpenTokenModal} onClose={onCloseTokenModal}>
          {overlay}
          <ModalContent
            borderColor={"#0088fe"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #0088fe;"
            borderRadius="14px"
            textAlign={"center"}
            width="350px"
            className={
              theme === "light"
                ? "light_privacy_policy privacy_policy"
                : "dark_privacy_policy privacy_policy"
            }
            bg={useColorModeValue("#000c16", "gray.800")}
          >
            <ModalHeader
              color={"#fff"}
              paddingBottom="0px"
              textAlign={"left"}
              paddingTop="20px"
            >
              {t("token")}
            </ModalHeader>
            <br></br>
            <ModalCloseButton
              marginTop="10px"
              borderColor={"none"}
              color={"#fff"}
              fontWeight={800}
              fontSize="16px"
            />
            <ModalBody paddingTop="0px">
              <React.Fragment>
                {/* <Chart
                width={widthh <= 600 ? "auto" : "100%"}
                // width={"auto"}
                // height={"auto"}
                height={widthh <= 600 ? "auto" : "360px"}
                chartType="PieChart"
                // loader={<div>Loading Pie Chart</div>}
                data={[
                  ["Task", "Hours per Day"],
                  ["Administration and expenses of program", 400000000],
                  ["Redistributed to all holders, proportionately",1000000000],
                  ["Liquidity pool", 1000000000],
                  ["Others", 17600000000],
                ]}
                options={{
                  // title: 'Tokenization',
                  is3D: false,
                  pieHole: 0.4,
                  legend: {
                    textStyle: {
                      color: theme==='light' ? "black": "white",
                      // fontSize: 20,
                      fontSize: widthh <= 600 ? "auto" : 15,
                    },
                    alignment: "center",
                  },
                  backgroundColor: "transparent",
                  colors: [
                    "#6AB187",
                    "#B3C100",
                    "#EA6447",
                    "#4CB5F5",
                  ],
                }}
              /> */}
                <a href="#img1">
                  <img
                    src="../images/tokenomics_final.png"
                    style={{
                      width: "38%",
                      objectFit: "contain",
                      display: "inherit",
                    }}
                    className="tokenomics_img"
                  ></img>
                </a>

                <a href="#" className="lightbox" id="img1">
                  <span
                    style={{
                      backgroundImage: "url('../images/tokenomics_final.png')",
                    }}
                  ></span>
                </a>

                {/* <Box className="row token_data">
                      <Box className="col-xl-6">
                          <h3>{t('token_head1')}</h3>
                          <ul>
                            <li>
                              <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data1')}
                            </li>
                          </ul>
                      </Box>
                      <Box className="col-xl-6">
                        <h3>{t('token_head2')}</h3>
                        <ul>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data2_1')}
                          </li>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data2_2')}
                          </li>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data2_3')}
                          </li>
                        </ul>
                      </Box>
                      <Box className="col-xl-6">
                        <h3>{t('token_head3')}</h3>
                        <ul>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data3_1')}
                          </li>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data3_2')}

                          </li>
                        </ul>
                      </Box>
                      <Box className="col-xl-6">
                        <h3>{t('token_head4')}</h3>
                        <ul>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data4_1')}
                          </li>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data4_2')}
                          </li>
                        </ul>
                      </Box>
                      <Box className="col-xl-6">
                        <h3>{t('token_head5')}</h3>
                        <ul>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data5_1')}
                          </li>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data5_2')}
                          </li>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data5_3')}
                          </li>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data5_4')}
                          </li>
                        </ul>
                      </Box>
                      <Box className="col-xl-6">
                        <h3>{t('token_head6')}</h3>
                        <ul>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data6_1')}
                          </li>
                          <li>
                            <span><Icon as={CheckIcon} w={4} h={4}/></span> {t('token_data6_2')}
                          </li>
                        </ul>
                      </Box>
                  </Box> */}
              </React.Fragment>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isCentered isOpen={isOpenFaqModal} onClose={onCloseFaqModal}>
          {overlay}
          <ModalContent
            borderColor={"#0088fe"}
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            boxShadow="-1px 0px 6px #0088fe;"
            borderRadius="14px"
            textAlign={"center"}
            width="350px"
            className={
              theme === "light"
                ? "light_privacy_policy privacy_policy"
                : "dark_privacy_policy privacy_policy"
            }
            bg={useColorModeValue("#000c16", "gray.800")}
          >
            <ModalHeader
              color={"#fff"}
              paddingBottom="50px"
              textAlign={"left"}
              paddingTop="20px"
            >
              {t("faq")}
            </ModalHeader>
            <ModalCloseButton
              marginTop="10px"
              borderColor={"none"}
              color={"#fff"}
              fontWeight={800}
              fontSize="16px"
            />
            <ModalBody className={theme === "dark" ? "dark_faq" : "light_faq"}>
              <React.Fragment>
                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="General"></a>
                  <div
                    className="accordion-header"
                    role="tab"
                    id={"headingOne0"}
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href={"#collapseOne0"}
                      aria-expanded="false"
                      aria-controls={"collapseOne0"}
                      className={
                        currentFaq === "0"
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      onClick={() => setCurrentFaq("0")}
                    >
                      {t("faq_ques1")}
                      <span>
                        {currentFaq !== "" && currentFaq === "0" ? (
                          <Icon
                            as={MinusIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "0" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        ) : (
                          <Icon
                            as={AddIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "0" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        )}
                      </span>
                    </a>

                    <div
                      id={"collapseOne0"}
                      className={
                        currentFaq === "0" ? "collapse show" : "collapse"
                      }
                      role="tabpanel"
                      aria-labelledby={"headingOne0"}
                      data-parent="#accordionEx"
                    >
                      <div
                        className="accordion-desc"
                        style={{
                          color: "white",
                          marginBottom: "20px",
                          fontSize: "14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: t("faq_ans1") }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="General"></a>
                  <div
                    className="accordion-header"
                    role="tab"
                    id={"headingOne1"}
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href={"#collapseOne1"}
                      aria-expanded="false"
                      aria-controls={"collapseOne1"}
                      className={
                        currentFaq === "1"
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      onClick={() => setCurrentFaq("1")}
                    >
                      {t("faq_ques2")}
                      <span>
                        {currentFaq !== "" && currentFaq === "1" ? (
                          <Icon
                            as={MinusIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "1" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        ) : (
                          <Icon
                            as={AddIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "1" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        )}
                      </span>
                    </a>

                    <div
                      id={"collapseOne1"}
                      className={
                        currentFaq === "1" ? "collapse show" : "collapse"
                      }
                      role="tabpanel"
                      aria-labelledby={"headingOne1"}
                      data-parent="#accordionEx"
                    >
                      <div
                        className="accordion-desc"
                        style={{
                          color: "white",
                          marginBottom: "20px",
                          fontSize: "14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: t("faq_ans2") }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="General"></a>
                  <div
                    className="accordion-header"
                    role="tab"
                    id={"headingOne2"}
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href={"#collapseOne2"}
                      aria-expanded="false"
                      aria-controls={"collapseOne2"}
                      className={
                        currentFaq === "2"
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      onClick={() => setCurrentFaq("2")}
                    >
                      {t("faq_ques3")}
                      <span>
                        {currentFaq !== "" && currentFaq === "2" ? (
                          <Icon
                            as={MinusIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "2" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        ) : (
                          <Icon
                            as={AddIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "2" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        )}
                      </span>
                    </a>

                    <div
                      id={"collapseOne2"}
                      className={
                        currentFaq === "2" ? "collapse show" : "collapse"
                      }
                      role="tabpanel"
                      aria-labelledby={"headingOne2"}
                      data-parent="#accordionEx"
                    >
                      <div
                        className="accordion-desc"
                        style={{
                          color: "white",
                          marginBottom: "20px",
                          fontSize: "14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: t("faq_ans3") }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="General"></a>
                  <div
                    className="accordion-header"
                    role="tab"
                    id={"headingOne14"}
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href={"#collapseOne14"}
                      aria-expanded="false"
                      aria-controls={"collapseOne14"}
                      className={
                        currentFaq === "14"
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      onClick={() => setCurrentFaq("14")}
                    >
                      {t("faq_ques7")}
                      <span>
                        {currentFaq !== "" && currentFaq === "14" ? (
                          <Icon
                            as={MinusIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "14" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        ) : (
                          <Icon
                            as={AddIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "14" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        )}
                      </span>
                    </a>

                    <div
                      id={"collapseOne14"}
                      className={
                        currentFaq === "14" ? "collapse show" : "collapse"
                      }
                      role="tabpanel"
                      aria-labelledby={"headingOne14"}
                      data-parent="#accordionEx"
                    >
                      <div
                        className="accordion-desc faq_div7"
                        style={{
                          color: "white",
                          marginBottom: "20px",
                          fontSize: "14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: t("faq_ans7") }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="General"></a>
                  <div
                    className="accordion-header"
                    role="tab"
                    id={"headingOne3"}
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href={"#collapseOne3"}
                      aria-expanded="false"
                      aria-controls={"collapseOne3"}
                      className={
                        currentFaq === "3"
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      onClick={() => setCurrentFaq("3")}
                    >
                      {t("faq_ques4")}
                      <span>
                        {currentFaq !== "" && currentFaq === "3" ? (
                          <Icon
                            as={MinusIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "3" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        ) : (
                          <Icon
                            as={AddIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "3" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        )}
                      </span>
                    </a>

                    <div
                      id={"collapseOne3"}
                      className={
                        currentFaq === "3" ? "collapse show" : "collapse"
                      }
                      role="tabpanel"
                      aria-labelledby={"headingOne3"}
                      data-parent="#accordionEx"
                    >
                      <div
                        className="accordion-desc"
                        style={{
                          color: "white",
                          marginBottom: "20px",
                          fontSize: "14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: t("faq_ans4") }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="General"></a>
                  <div
                    className="accordion-header"
                    role="tab"
                    id={"headingOne6"}
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href={"#collapseOne6"}
                      aria-expanded="false"
                      aria-controls={"collapseOne6"}
                      className={
                        currentFaq === "6"
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      onClick={() => setCurrentFaq("6")}
                    >
                      {t("faq_ques5")}
                      <span>
                        {currentFaq !== "" && currentFaq === "6" ? (
                          <Icon
                            as={MinusIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "6" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        ) : (
                          <Icon
                            as={AddIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "6" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        )}
                      </span>
                    </a>

                    <div
                      id={"collapseOne6"}
                      className={
                        currentFaq === "6" ? "collapse show" : "collapse"
                      }
                      role="tabpanel"
                      aria-labelledby={"headingOne6"}
                      data-parent="#accordionEx"
                    >
                      <div
                        className="accordion-desc"
                        style={{
                          color: "white",
                          marginBottom: "20px",
                          fontSize: "14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: t("faq_ans5") }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="General"></a>
                  <div
                    className="accordion-header"
                    role="tab"
                    id={"headingOne7"}
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href={"#collapseOne7"}
                      aria-expanded="false"
                      aria-controls={"collapseOne7"}
                      className={
                        currentFaq === "7"
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      onClick={() => setCurrentFaq("7")}
                    >
                      {t("faq_ques6")}
                      <span>
                        {currentFaq !== "" && currentFaq === "7" ? (
                          <Icon
                            as={MinusIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "7" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        ) : (
                          <Icon
                            as={AddIcon}
                            transition={"all .25s ease-in-out"}
                            transform={
                              currentFaq === "7" ? "rotate(180deg)" : ""
                            }
                            w={6}
                            h={6}
                          />
                        )}
                      </span>
                    </a>

                    <div
                      id={"collapseOne7"}
                      className={
                        currentFaq === "7" ? "collapse show" : "collapse"
                      }
                      role="tabpanel"
                      aria-labelledby={"headingOne4"}
                      data-parent="#accordionEx"
                    >
                      <div
                        className="accordion-desc"
                        style={{
                          color: "white",
                          marginBottom: "20px",
                          fontSize: "14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: t("faq_ans6") }}
                      ></div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        <Modal
          isCentered
          isOpen={isOpenContactModal}
          onClose={onCloseContactModal}
        >
          {overlay}
          <ModalContent
            borderWidth="1px"
            transition="all 0.2s ease-in-out"
            borderRadius="14px"
            textAlign={"center"}
            width="350px"
            className="light_contact_us contact_modal"
            bg={useColorModeValue("#000c16", "gray.800")}
          >
            <ModalHeader
              color={"#fff"}
              paddingBottom="50px"
              textAlign={"left"}
              paddingTop="20px"
              className="contact_heading"
            >
              {t("contact_title")}
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
                <Box className="row">
                  <Box className="col-xl-3">
                    <Image
                      alt={"Hero Image"}
                      src={"images/location.png"}
                    ></Image>
                  </Box>
                  <Box className="col-xl-9">
                    <p>2729 Mesa Drive</p>
                    <p>United States</p>
                    <p>California</p>
                  </Box>
                </Box>
                <Box className="row" style={{ marginTop: "20px" }}>
                  <Box className="col-xl-3">
                    <Image alt={"Hero Image"} src={"images/phone.png"}></Image>
                  </Box>
                  <Box className="col-xl-9" style={{ margin: "auto" }}>
                    <p>654654654654</p>
                  </Box>
                </Box>
                <Box className="row" style={{ marginTop: "24px" }}>
                  <Box className="col-xl-3">
                    <Image alt={"Hero Image"} src={"images/email.png"}></Image>
                  </Box>
                  <Box className="col-xl-9" style={{ margin: "auto" }}>
                    <p>demo@gmail.com</p>
                  </Box>
                </Box>
              </React.Fragment>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
