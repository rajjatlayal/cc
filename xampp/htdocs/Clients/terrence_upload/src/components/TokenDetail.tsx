import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Header from "./Header";
import "@fontsource/inter";
import Footer from "./Footer";
import SwappingWidget from "./SwappingWidget";
import TokenBalance from "./TokenBalance";
import Graph from "./Graph";
import Graph1 from "./Graph1";
import { Box } from "@chakra-ui/react";
import eventBus from "./../eventBus";

import { useStateValue } from "./../StateProvider.js";
import { reducer, initialState } from "./../reducer.js";
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'

// const seriess = [];
// var seriess:string[]; 
// var chart2;
var chart: any = {};
var seriess: number[] = [];
var labels: string[] = [];
const options= {
    labels: labels,
    legend: {
        show: false,
    }
};
function TokenDetail() {
const [{ global }, dispatch] = useStateValue();
  const [theme, setTheme] = useState("");
  const [getToken, setGetToken] = useState("");
  const [currentSupply, setCurrentSupply] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [marketRank, setMarketRank] = useState("");
  const [volume, setVolume] = useState("");
  const [indexPrice, setIndexPrice] = useState("");
  const [highMarket, setHighMarket] = useState("");
  const [lowMarket, setLowMarket] = useState("");
  const [showFullDiv, setShowFullDiv] = useState(false);
  const [showDonut, setShowDonut] = useState(false);
  const [allowanceData, setAllowanceData] = useState([]);
//   const [series, setSeries] = useState([]);
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
  
    const destroy_chart = async () =>{
        chart.destroy();
        chart=null;
    }
    const getInitialData = async (token:any) =>{
        seriess=[];
        labels=[];
        var url;
        if(token==='DPI'){
            url = 'https://api.indexcoop.com/components?chainId=1&isPerpToken=false&address=0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b';
        }else{
            url = 'https://api.indexcoop.com/components?chainId=1&isPerpToken=false&address=0x72e364F2ABdC788b7E918bc238B21f109Cd634D7';
        }
        fetch(url)
        fetch(url, {
            method: "GET",
            headers: {"x-indexcoop-api-key": "732eff53-bc9a-4b2f-8086-ba9501be0de8"}
        })
        .then(res => res.json())
        .then((json) => {
            setAllowanceData(json.components);
            const array=json.components;
            for(var i=0;i<=array.length;i++){
                // series+=array[i].percentOfSet;
                seriess.push(parseFloat(array[i].percentOfSet))
                labels.push(array[i].name)
                localStorage.setItem('chart_series',JSON.stringify(seriess));
                if(i===array.length-1){
                    var optionss = {
                        chart: {
                          height: 400,
                          type: 'donut'
                        },
                        labels: labels,
                        legend: {
                            show: false,
                        },
                        series: seriess
                    }
                    chart = new ApexCharts(document.querySelector("#donutChart"), optionss);
                    chart.render();
                }
            }
        })
        .catch(err => console.error('error:' + err));
    }
    const get_data = async (token:any) =>{
        var url;
        if(token==='DPI'){
            url = 'https://api.coingecko.com/api/v3/coins/defipulse-index';
        }else{
            url = 'https://api.coingecko.com/api/v3/coins/metaverse-index';
        }
        fetch(url, {
            method: "GET",
            headers: {"x-indexcoop-api-key": "732eff53-bc9a-4b2f-8086-ba9501be0de8"}
        })
        .then(res => res.json())
        .then((json) => {
            // console.log('total_supply',json.market_data.total_supply);
            setCurrentSupply(json.market_data.total_supply.toFixed(2));
            setMarketCap(json.market_data.market_cap.usd);
            setVolume(json.market_data.total_volume.usd);
            setMarketRank(json.market_data.market_cap_rank);
            setIndexPrice(json.market_data.current_price.usd);
            setHighMarket(json.market_data.high_24h.usd);
            setLowMarket(json.market_data.low_24h.usd);
        })
        .catch(err => console.error('error:' + err));
    }
    const create_chart = async()=>{
        var optionss = {
            chart: {
              height: 400,
              type: 'donut'
            },
            labels: labels,
            legend: {
                show: false,
            },
            series: seriess
        }
        // console.log('newwwww seriess',seriess);
        chart = await new ApexCharts(document.querySelector("#donutChart"), optionss);
        await chart.render();
    }
  useEffect(() => {
    // if(global.chainId===137){
        const url1=window.location.hash.split('#');
        const url=url1[1];
        setGetToken(url);
        getInitialData(url);
        get_data(url);
    // }
  },[]);
  return (
    <>
        <Header />
        <div className="container main_container">
            <div className="row" style={{width:"100%",margin:"0"}}>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12" style={{margin:"auto"}}>
                    {getToken==='DPI' ? <Graph /> : <Graph1 />}
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 detail_swap">
                    <SwappingWidget/>
                </div>
            </div>
            <div className={theme==='light' ? "row stats" : "row dark_stats"} style={{width:"100%",margin:"0"}}>
                <div className="stats_div col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="css-11am7fg">
                        <p className="chakra-text css-1biifco">Stats</p>
                        <div className="css-zk3hoe"></div>
                    </div>
                </div>
                <div className="col-sm" >
                    <p>Market Cap</p>
                    <h1>${marketCap}</h1>
                </div>
                <div className="col-sm" >
                    <p>Volume</p>
                    <h1>${volume}</h1>
                </div>
                <div className="col-sm" >
                    <p>Current Supply</p>
                    <h1>{currentSupply}</h1>
                </div>
                <div className="col-sm" >
                    <p>Index Price</p>
                    <h1>${indexPrice}</h1>
                </div>
                <div className="col-sm" >
                    <p>Market Cap Rank</p>
                    <h1>#{marketRank}</h1>
                </div>
                <div className="col-sm" >
                    <p>24h Low / 24h High</p>
                    <h1>${lowMarket} / ${highMarket}</h1>
                </div>
            </div>
            <div className={theme==='light' ? "row stats" : "row dark_stats"} style={{width:"100%",margin:"0"}}>
                <div className="stats_div col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="css-11am7fg">
                        <p className="chakra-text css-1biifco">Allocations</p>
                        <div className="css-zk3hoe"></div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 detail_swap" id="detail_swap">
                    <div className="donut" id="donutChart">

                    </div>
                </div>
                <div className={theme==='light' ? "col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 allocations_div" : "col-xl-7 col-lg-7 col-md-6 col-sm-6 col-xs-6 dark_allocations_div"}>
                    <table className={showFullDiv ? 'show_full_div' : 'hide_full_div'}>
                        <thead>
                            <tr>
                                <th>TOKEN</th>
                                <th>VALUE PER TOKEN</th>
                                <th>24HR CHANGE</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allowanceData.map(({image,name,totalPriceUsd,dailyPercentChange,address}: any) => {
                            return <tr key={address}>
                                <td className="allowance_name"><span><img src={image}></img></span> <span className="allowance_span">{name}</span></td>
                                <td>{parseFloat(totalPriceUsd).toFixed(2)}</td>
                                <td style={dailyPercentChange < 0 ? {color:'rgb(195, 34, 56)'} : {color:'rgb(9, 170, 116)'}}>{parseFloat(dailyPercentChange).toFixed(2)}</td>
                            </tr>;
                        })}
                        </tbody>
                    </table><br/>
                    <p className={theme==='light' ? "show_light_list" : "show_dark_list"} onClick={() => {
                    setShowFullDiv(!showFullDiv);
                  }}>{showFullDiv ? 'Show Less' : 'Show Complete List'}</p>
                </div>
            </div>
        </div><br/><br/>
        <Footer />
    </>
  );
}

export default TokenDetail;
