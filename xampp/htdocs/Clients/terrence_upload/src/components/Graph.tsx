import React, { useState,useEffect } from "react";
import CanvasJSReact from './../canvasjs.stock.react';
import eventBus from "../eventBus";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
var chartwidth='800px';
function Graph() {
  interface IData {
    dataPoints: [];
    isLoaded: boolean;
  }
  const [dataPoints, setDataPoints] = useState<IData[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [theme, setTheme] = useState('');
  const [darkMode, setThemeMode] = useState(true);

  useEffect(() => {
    if(window.innerWidth<=767){
      chartwidth='100%';
    }else if(window.innerWidth<=481){
      chartwidth='300px';
    }else{
      chartwidth='800px';
    }
    window.addEventListener('resize', (event) => {
      if(window.innerWidth<=767){
        chartwidth='100%';
      }else if(window.innerWidth<=481){
        chartwidth='300px';
      }else{
        chartwidth='800px';
      }
    });
  }, []);

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
      setIsLoaded(false);
      if(data.message==='dark'){
        setTheme('light');
        setThemeMode(false);
        setIsLoaded(true);
      }else if(data.message==='light'){
        setTheme('dark');
        setThemeMode(true);
        setIsLoaded(true);
      }
    });
  },[theme]);
  useEffect(() => {
    fetch("https://api.polygonscan.com/api?module=account&action=txlist&address=0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=N46TSB6CEGQQTPJUWWUKGQ9APPUKUUKR45")
    // fetch("https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369&address=0xcb16eDd87491dd35e9b90b38848c4966a876fCB3&startblock=0&endblock=99999999&page=1&offset=50&sort=desc&apikey=N46TSB6CEGQQTPJUWWUKGQ9APPUKUUKR45")
      .then(res => res.json())
      .then(
        (data) => {
          // var dps = [];
          const dps: any[] = [];
          for (var i = 0; i < data.result.length; i++) {
            var utcSeconds = data.result[i].timeStamp;
            var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
            // console.log('dateeeeee',new Date(d).toISOString());
            // console.log(data.result[i].value,(data.result[i].value)/1000000000000000000);
            dps.push({
              x: new Date(d.setUTCSeconds(utcSeconds)),
              y: (data.result[i].value)/1000000000000000000
            });
          }
          setIsLoaded(true);
          setDataPoints(dps);
          // console.log('dataPoints:',dps);
        }
      )
      // setInterval(function () {const str='CanvasJS Trial';str.replace('CanvasJS Trial', 'hidden')}, 2000);
      // $('#textDiv').html().replace("Donkey","");
  },[]);

  const options = {
    // title:{
    //   text:"React StockChart with Spline Area Chart"
    // },
    theme: "light1",
    backgroundColor:'#000C16',
    borderColor : "#fffff",
    waterMark:false,
    center: ['75%', '50%'],
    fill:true,
    responsive: true,
    // subtitles: [{
    //   text: "BNB/PMC",
    //   fontColor:'#ffffff',
    //   position:'left'
    // }],
    charts: [{
      axisX: {
        // title:"Date",
        labelFontColor: "#ffffff",
        gridThickness: 1,
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          valueFormatString: "MMM DD YYYY"
        }
      },
      axisY: {
        // title: "Price (in USD)",
        labelFontColor: "#ffffff",
        gridThickness: 0,
        prefix: "",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          valueFormatString: "#,###.##"
        }
      },
      toolTip: {
        shared: true
      },
      data: [{
        name: "Price",
        type: "area",
        color: "#55c3e7",
        lineColor: "#55c3e7",
        yValueFormatString: "#,###.##",
        xValueFormatString: "MMM DD YYYY",
        dataPoints : dataPoints
      }]
    }],
    rangeSelector: {
      enabled: true,
      position: 'right',
      height:70,
      buttonStyle: {
        backgroundColor: "#0088fe",
        backgroundColorOnSelect: "#0088FE",
        backgroundColorOnHover: "#0088FE",
        labelFontColor:"#000000",
        labelFontWeight:"bolder",
        labelFontSize:"16",
        width:50,
        height:50,
        padding:{ left: 5, right: 5, top: 5, bottom: 5 },
        spacing: 5,
        borderColor:'#445c6d',
      },
      inputFields: {
        enabled:false,
      }
    },
  };
  const options1 = {
    // title:{
    //   text:"React StockChart with Spline Area Chart"
    // },
    theme: "light1",
    backgroundColor:'#ffffff',
    borderColor : "#000000",
    waterMark:false,
    center: ['75%', '50%'],
    // subtitles: [{
    //   text: "BNB/PMC",
    //   fontColor:'#ffffff',
    //   position:'left'
    // }],
    charts: [{
      axisX: {
        title: "Date/Time",
        labelFontColor: "#000000",
        gridThickness: 0,
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          valueFormatString: "MMM DD YYYY"
        }
      },
      axisY: {
        title: "Price (in USD)",
        labelFontColor: "#000000",
        gridThickness: 0,
        prefix: "$",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          valueFormatString: "#,###.##"
        }
      },
      toolTip: {
        shared: true
      },
      data: [{
        name: "Priceee",
        type: "splineArea",
        color: "#00BEC2",
        lineColor: "#0088fe",
        yValueFormatString: "#,###.##",
        xValueFormatString: "MMM DD YYYY",
        dataPoints : dataPoints
      }]
    }],
    rangeSelector: {
      enabled: false,
      position: 'right',
      height:70,
      label: '',
      buttonStyle: {
        backgroundColor: "#00BEC2",
        backgroundColorOnSelect: "#00BEC2",
        backgroundColorOnHover: "#00BEC2",
        labelFontColor:"#000000",
        labelFontWeight:"bolder",
        labelFontSize:"16",
        width:50,
        height:50,
        padding:{ left: 5, right: 5, top: 5, bottom: 5 },
        spacing: 5,
        borderColor:'#00BEC2',
      },
      inputFields: {
        enabled:false,
      }
    },
  };
  const containerProps = {
    width: chartwidth,
    height: "408px",
    margin: "auto"
  };  

    return (
      <div className={theme==='light' ? "light_graph_div" : "dark_graph_div"}> 
        <p>Transactions (Price with Date/Time) of DeFi Pulse Index</p>
        {theme==='light' ?
        (<div id="canvas_div" style={theme==='light' ? {display:"block"} : {display:"none"}}>
          {
            isLoaded && 
            (<CanvasJSStockChart containerProps={containerProps} options = {options1}
            />)
          }
        </div>):
        (<div id="canvas_div2" style={theme==='dark' ? {display:"block"} : {display:"none"}}>
          {/* <p>Transactions (Price with Date/Time) of DeFi Pulse Index</p> */}
          {
            isLoaded && 
            (<CanvasJSStockChart containerProps={containerProps} options = {options}
            />)
          }
        </div>)}
      </div>
    );
}
export default Graph;
