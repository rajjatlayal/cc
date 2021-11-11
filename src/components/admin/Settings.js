import React,{ useState,useEffect } from "react";
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
//import file from './settings.json';
import { GearFill } from 'react-bootstrap-icons';
import RichTextEditor from 'react-rte';
import { readFile } from "fs";
//const jsonfile = require('jsonfile');
//const axios = require('axios');
// const file = './settings.json';
// const fs = require("fs");

function Settings()  {
    const [ value ] = useState(RichTextEditor.createEmptyValue());
    const getData=()=>{
        // jsonfile.readFile(file)
        // .then(obj => console.dir('obj',obj))
        // .catch(error => console.error('error',error))
        // console.log('myJson',Data[0]['title']);

        // fs.readFile("./settings.json", "utf8", (err, jsonString) => {
        //     if (err) {
        //       console.log("Error reading file from disk:", err);
        //       return;
        //     }
        //     try {
        //       const customer = JSON.parse(jsonString);
        //       console.log("Customer address is:", customer.address); // => "Customer address is: Infinity Loop Drive"
        //     } catch (err) {
        //       console.log("Error parsing JSON string:", err);
        //     }
        // });


    }
    useEffect(() => {
        getData()
    },[]);
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
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Social Links</h4>
                            <form>
                                <div className="settings_form_data">
                                    <div className="checkbox_div">
                                        <input type="checkbox" className="form-control social_links_checkbox" defaultChecked="checked"></input><label>Twitter</label>
                                    </div>
                                    <div className="checkbox_div">
                                        <input type="checkbox" className="form-control social_links_checkbox"></input><label>Discord</label>
                                    </div>
                                    <div className="checkbox_div">
                                        <input type="checkbox" className="form-control social_links_checkbox"></input><label>Instagram</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Banner1</h4>
                            <p className="logo"><span>Banner</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Banner2</h4>
                            <p className="logo"><span>Banner</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Title, Content & Images</h4>
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
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>1</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>2</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>3</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>4</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change cool avatar</h4>
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
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change cryptocunts collections</h4>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image</p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control" defaultValue="Lorem ipsum"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={value} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image</p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control" defaultValue="Lorem ipsum"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={value} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image</p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control" defaultValue="Lorem ipsum"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={value} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image</p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control" defaultValue="Lorem ipsum"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={value} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change details of the greatest roadmap</h4>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>1</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>2</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>3</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>4</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:"16px"}}>
                                    <label>Content</label>
                                    <RichTextEditor value={value} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change roadmap moments</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control" defaultValue="10%"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change video game</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">title</label>
                                        <input type="text" className="form-control" defaultValue="lorem ipsum"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Link</label>
                                        <input type="text" className="form-control" defaultValue="lorem ipsum"></input>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change FAQs</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 1</label>
                                        <input type="text" className="form-control" defaultValue="lorem ipsum"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 2</label>
                                        <input type="text" className="form-control" defaultValue="lorem ipsum"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 3</label>
                                        <input type="text" className="form-control" defaultValue="lorem ipsum"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 4</label>
                                        <input type="text" className="form-control" defaultValue="lorem ipsum"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 5</label>
                                        <input type="text" className="form-control" defaultValue="lorem ipsum"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 6</label>
                                        <input type="text" className="form-control" defaultValue="lorem ipsum"></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control" defaultValue="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change cryptocunt image</h4>
                            <p className="logo"><span>Image</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <form>
                                <div className="settings_form_data" style={{justifyContent:"right"}}>
                                    <button className="form_btn">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Settings;
