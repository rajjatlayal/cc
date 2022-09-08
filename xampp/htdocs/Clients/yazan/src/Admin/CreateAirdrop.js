import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import { ImageFill } from "react-bootstrap-icons";
import { DataStore } from "@aws-amplify/datastore";
import { Airdrops } from "./../../models";
import { Amplify } from "aws-amplify";
import awsconfig from "./../../aws-exports1";
import "./../../css/main.css";

Amplify.configure(awsconfig);
function CreateAirdrop() {
  let history = useHistory();
  const address = useRef(null);
  const amount = useRef(null);
  const [Opacity, setOpacity] = useState("1");
  const [PointerEvents, setPointerEvents] = useState("");
  const [notification, setNotification] = useState({
    success: "",
    failed: "",
    show_success: false,
    show_failed: false,
  });
  const [Loader, setLoader] = useState(false);
  const [errors, setErrors] = useState("");
  const handleValidation = () => {
    let formIsValid = false;
    if (address.current.value === "") {
      setErrors("Please enter address!!");
    } else {
      setErrors("");
      formIsValid = true;
    }
    return formIsValid;
  };
  const hide_notification = () => {
    setNotification({
      sucess: "",
      failed: "",
      show_failed: false,
      show_success: false,
    });
    setErrors("");
  };
  const add_data = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      setLoader(true);
      setOpacity("0.5");
      setPointerEvents("none");
      await DataStore.save(
        new Airdrops({
          address: address.current.value,
        })
      )
        .then((data) => {
          address.current.value = "";
          setLoader(false);
          setOpacity("");
          setPointerEvents("");
          setNotification({
            success: "Address added successfully.",
            failed: "",
            show_failed: false,
            show_success: true,
          });
          setErrors("");
          setTimeout(hide_notification, 4000);
        })
        .catch((err) => {
          setNotification({
            success: "",
            failed: err,
            show_failed: true,
            show_success: false,
          });
          setTimeout(hide_notification, 4000);
          setErrors("");
        });
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined ||
      localStorage.getItem("token") === ""
    ) {
      history.push("/admin/login");
    }
  }, []);

  return (
    <>
      <AdminNavbar />
      <div
        className="row main_row"
        style={{ width: "100%", margin: "0", height: "100vh" }}
      >
        <div className="col-xl-2 col-lg-3 col-md-3 sidebar_divv">
          <Sidebar />
        </div>

        <div
          className="col-xl-10 col-lg-9 col-md-9"
          style={{ paddingLeft: "0", paddingRight: "0" }}
        >
          <div className="page_head">
            <div
              className="row main_row"
              style={{ width: "100%", margin: "0" }}
            >
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-9">
                <h3 className="admin_faq_heading">
                  <span>
                    <ImageFill size={24} color="#4B4B4B" />
                  </span>{" "}
                  Add address
                </h3>
              </div>
              <div className="admin_head_right col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-3">
                <Link to="/admin/airdrops">
                  <button>Back</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="admin_forms">
            <form onSubmit={add_data}>
              <div className="form_data">
                <label className="form_label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  ref={address}
                  style={{ height: "40px" }}
                />
              </div>
              <br />
              <br />
              <br />
              {notification.show_success ? (
                <div className="alert alert-success" id="success2">
                  {notification.success}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                  ></button>
                </div>
              ) : (
                ""
              )}
              {notification.show_failed ? (
                <div className="alert alert-danger" id="danger2">
                  {notification.failed}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                  ></button>
                </div>
              ) : (
                ""
              )}
              {errors ? (
                <div
                  className="alert alert-danger"
                  style={{ color: "#721c24" }}
                >
                  {errors}
                </div>
              ) : (
                ""
              )}
              <div className="admin_head_right">
                <button className="submit_btns" onClick={add_data}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateAirdrop;
