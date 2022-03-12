import React from "react";
function FAQ() {
  return (
    <>
      <div className="container faq">
        <div className="questions__page mt-100">
          <div className="row ">
            <div className=" col-sm-8">
              <h3 className="section__title text-center gradient__text">
                FAQ's
              </h3>
              <div className="questions__box ">
                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="General"></a>

                  <div className="accordion-header" role="tab" id="headingOne1">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseOne1"
                      aria-expanded="false"
                      aria-controls="collapseOne1"
                      className="accordion-button collapsed"
                    >
                      What is an NFT?
                    </a>

                    <div
                      id="collapseOne1"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne1"
                      data-parent="#accordionEx"
                    >
                      <div className="accordion-desc">
                        NFTs or non-fungible tokens, are cryptographic assets on
                        blockchain with unique identification codes and metadata
                        that distinguish them from each other. NFTs are unique
                        and not mutually interchangeable, which means no two
                        NFTs are the same. NFTs can be a unique digital artwork,
                        sneaker in a limited-run fashion line, in-game item,
                        digital collectible etc.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion"
                  id="accordionEx"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="Support"></a>

                  <div className="accordion-header" role="tab" id="headingOne2">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseOne2"
                      aria-expanded="false"
                      aria-controls="collapseOne2"
                      className="accordion-button collapsed"
                    >
                      Customer support is available ?
                    </a>

                    <div
                      id="collapseOne2"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne2"
                      data-parent="#accordionEx"
                    >
                      <div className="accordion-desc">
                        <div className="article-body">
                          You can fill out a request for support via email
                          Please provide:
                          <ul>
                            <li>Your email address</li>
                            <li>Your wallet address (if applicable)</li>
                            <li>Choose relevant categories</li>
                            <li>
                              Provide detailed information regarding your
                              inquiry.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion"
                  id="accordionEx parent"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a href="#" id="Transaction"></a>

                  <div className="accordion-header" role="tab" id="headingOne3">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseOne3"
                      aria-expanded="false"
                      aria-controls="collapseOne3"
                      className="accordion-button collapsed"
                    >
                      How do I find my transaction hash?
                    </a>

                    <div
                      id="collapseOne3"
                      className="collapse"
                      role="tabpane3"
                      aria-labelledby="headingOne3"
                      data-parent="#accordionEx"
                    >
                      <div className="accordion-desc">
                        Raroin staff often requires a "transaction hash" from
                        Etherscan or Polygonscan to troubleshoot support issues.
                        <br />
                        Transaction hashes are unique IDs recording each
                        transaction on the blockchain, this includes NFT
                        purchases, sales or even cancelling orders. All gas fees
                        paid will generate a transaction hash.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion"
                  id="accordionEx"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <a id="Fees" href="#"></a>

                  <div className="accordion-header" role="tab" id="headingOne4">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseOne4"
                      aria-expanded="false"
                      aria-controls="collapseOne4"
                      className="accordion-button collapsed"
                    >
                      What are gas fees on OpenSea?
                    </a>

                    <div
                      id="collapseOne4"
                      className="collapse"
                      role="tabpane4"
                      aria-labelledby="headingOne4"
                      data-parent="#accordionEx"
                    >
                      <div className="accordion-desc">
                        Gas fees are like transaction fees on the Ethereum
                        blockchain. When you make transactions, such as
                        transfering crypto to another wallet or purchasing an
                        NFT on Raroin, you'll need enough ETH in your wallet for
                        the initial transaction and the associated gas fees.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                className="img-faq w-full floating"
                src={"images/sign-up.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
