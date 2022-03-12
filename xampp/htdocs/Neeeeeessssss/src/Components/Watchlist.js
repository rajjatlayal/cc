import React from "react";
import Footer from "./Global/Footer";
import Header from "./Global/Header";

function Watchlist() {
  return (
    <>
      {/* <Header /> */}
      {/* <div className="hero__collections">
        <div className="container">
          <h1 className="section__title gradient__text">Watchlist</h1>
        </div>
      </div> */}

      <section className="section ranking mt-100">
        <div className="container">
          <div className="box d-flex table-responsive">
            <table className="table ranking ">
              <thead>
                <tr>
                  <th scope="col">
                    <span>Collection</span>
                  </th>
                  <th scope="col">
                    <span>Volume</span>
                  </th>
                  <th scope="col">
                    <span>24h %</span>
                  </th>
                  <th scope="col">
                    <span>7d %</span>
                  </th>
                  <th scope="col">
                    <span>Floor Price</span>
                  </th>
                  <th scope="col">
                    <span>Owners</span>
                  </th>
                  <th scope="col">
                    <span>Assets</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <img
                          src={"images/collection-img.png"}
                          className="collection__img"
                        />
                      </div>
                      <div>
                        <h6 className="title color_black">
                          Creative Art collection
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>12,4353</span>
                  </td>
                  <td>
                    <span className="color_green">+3456%</span>
                  </td>
                  <td>
                    <span className="color_red">-564%</span>
                  </td>
                  <td>
                    <span>12,4353 ETH</span>
                  </td>
                  <td>
                    <span>3.3k</span>
                  </td>
                  <td>
                    <span>23k</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <img
                          src="images/collection-img.png"
                          className="collection__img"
                        />
                      </div>
                      <div>
                        <h6 className="title color_black">
                          Creative Art collection
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>12,4353</span>
                  </td>
                  <td>
                    <span className="color_green">+3456%</span>
                  </td>
                  <td>
                    <span className="color_red">-564%</span>
                  </td>
                  <td>
                    <span>12,4353 ETH</span>
                  </td>
                  <td>
                    <span>3.3k</span>
                  </td>
                  <td>
                    <span>23k</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <img
                          src="images/collection-img.png"
                          className="collection__img"
                        />
                      </div>
                      <div>
                        <h6 className="title color_black">
                          Creative Art collection
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>12,4353</span>
                  </td>
                  <td>
                    <span className="color_green">+3456%</span>
                  </td>
                  <td>
                    <span className="color_red">-564%</span>
                  </td>
                  <td>
                    <span>12,4353 ETH</span>
                  </td>
                  <td>
                    <span>3.3k</span>
                  </td>
                  <td>
                    <span>23k</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <img
                          src="images/collection-img.png"
                          className="collection__img"
                        />
                      </div>
                      <div>
                        <h6 className="title color_black">
                          Creative Art collection
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>12,4353</span>
                  </td>
                  <td>
                    <span className="color_green">+3456%</span>
                  </td>
                  <td>
                    <span className="color_red">-564%</span>
                  </td>
                  <td>
                    <span>12,4353 ETH</span>
                  </td>
                  <td>
                    <span>3.3k</span>
                  </td>
                  <td>
                    <span>23k</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <img
                          src="images/collection-img.png"
                          className="collection__img"
                        />
                      </div>
                      <div>
                        <h6 className="title color_black">
                          Creative Art collection
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>12,4353</span>
                  </td>
                  <td>
                    <span className="color_green">+3456%</span>
                  </td>
                  <td>
                    <span className="color_red">-564%</span>
                  </td>
                  <td>
                    <span>12,4353 ETH</span>
                  </td>
                  <td>
                    <span>3.3k</span>
                  </td>
                  <td>
                    <span>23k</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Watchlist;
