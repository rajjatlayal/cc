import React,{useEffect } from "react";
import { Power,Justify } from 'react-bootstrap-icons';
import eventBus from "../../eventBus";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function AdminNavbar() {
  //const [viewSidebar, setViewSidebar] = useState(''); 
  const changeSidebar=()=>{
    //setViewSidebar(true);
    eventBus.dispatch("viewSidebar", { message: true});
  } 
  useEffect(() => {
    // eventBus.on("viewSidebar", (data) =>
    //   //setViewSidebar(data.message)
    // );
    if(window.innerWidth<='767'){
      //setViewSidebar(false);
      eventBus.dispatch("viewSidebar", { message: false});
    }else{
      //setViewSidebar(true);
      eventBus.dispatch("viewSidebar", { message: true});
    }
    window.addEventListener('resize', (event) => {
      if(window.innerWidth<='767'){
        //setViewSidebar(false);
        eventBus.dispatch("viewSidebar", { message: false});
      }else{
        //setViewSidebar(true);
        eventBus.dispatch("viewSidebar", { message: true});
      }
    });
  }, []);
  return (
    <>
      <div className="container-fluid main_navbar">
          <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 navbar_left_div">
                  <h4><span className="navbar_toggle" style={{display:"none"}} onClick={changeSidebar}><span><Justify color="#ffffff" size={30}/></span></span> ADMIN PANEL</h4>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 navbar_right_div">
                  <h5><span><Power size={20} color="#ffffff" /></span> Logout</h5>
              </div>
          </div>
      </div>
    </>
  );
}
