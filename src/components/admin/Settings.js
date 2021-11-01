import React from "react";
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
import { GearFill } from 'react-bootstrap-icons';

function Settings()  {
    return (
        <>
        <AdminNavbar/>
        <div className="row main_row" style={{background:"#E9EDF2",width:"100%",margin:"0"}}>
            <div className="col-xl-2 col-lg-3 col-md-3" style={{paddingRight:"0",paddingLeft:"0"}}>
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-9" style={{paddingLeft:"0",paddingRight:"0"}}>
                <h3 className="page_head"><span><GearFill size={18} color="#4B4B4B" /></span> Settings</h3>
                <div className="row" style={{width:"100%",margin:"0",paddingTop:"20px"}}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Logo</h4>
                            <p className="logo"><span>Logo</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                    <button className="form_btn">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Banner</h4>
                            <p className="logo"><span>Banner</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                    <button className="form_btn">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Title & Content</h4>
                            <form>
                                <div className="settings_form_data">
                                    <div className="form_data">
                                        <label className="form_label">Title</label>
                                        <input type="text" className="form-control" defaultValue="Lorem ipsum"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                    <button className="form_btn">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Images</h4>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>1</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>2</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>3</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12" style={{margin:"auto"}}>
                                    <button className="form_btn" style={{float:"right"}}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Settings;
