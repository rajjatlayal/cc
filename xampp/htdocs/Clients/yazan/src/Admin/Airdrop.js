import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import {
  CardImage,
  PencilSquare,
  TrashFill,
  EyeFill,
  ImageFill,
} from "react-bootstrap-icons";
import { useTable } from "react-table";
import { timestampDate } from "./../../helpers";
import {
  Path,
  setting_table_id,
  bucketName,
  dirName,
  region,
  accessKeyId,
  secretAccessKey,
} from "./Path";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Airdrops } from "./../../models";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./../../aws-exports1";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./../../css/main.css";
Amplify.configure(awsconfig);
function Airdrop() {
  let history = useHistory();
  const [allData, setAllData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [delId, setDelId] = useState(0);
  const [errors, setErrors] = useState("");
  const [notification, setNotification] = useState({
    success: "",
    failed: "",
    show_success: false,
    show_failed: false,
  });
  const [active_class, setActiveClass] = useState("faq");

  const [Opacity, setOpacity] = useState("1");
  const [PointerEvents, setPointerEvents] = useState("");
  const [Loader, setLoader] = useState(false);
  const viewDeleteModal = (val, modal_value) => {
    setDelId(val);
    setShowDeleteModal(modal_value);
  };
  const get_data = async () => {
    await DataStore.query(Airdrops)
      .then((data) => {
        setAllData(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
  const deleteNews = async () => {
    try {
      const job = await DataStore.query(Airdrops, delId);
      const del = await DataStore.delete(job);
      del && viewDeleteModal("", false);
      get_data();
      setNotification({
        success: "Airdrop deleted successfully.",
        failed: "",
        show_failed: false,
        show_success: true,
      });
      setTimeout(hide_notification, 4000);
    } catch (err) {
      setNotification({
        success: "",
        failed: err,
        show_failed: true,
        show_success: false,
      });
      setTimeout(hide_notification, 4000);
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("token") !== ""
    ) {
      get_data();
    } else {
      history.push("/admin/login");
    }
  }, []);
  const data =
    allData !== "" &&
    allData.map(function (value) {
      return {
        col1: <p style={{ textAlign: "left" }}>{value.address}</p>,
        col3: (
          <p style={{ textAlign: "left" }}>{timestampDate(value.createdAt)}</p>
        ),
        col4: (
          <p className="action_btns">
            <span
              className="edit_icon"
              title="Edit"
              onClick={() => history.push("/admin/update_airdrop#" + value.id)}
            >
              <PencilSquare size={18} color="#ffffff" />
            </span>{" "}
            <span
              className="del_icon"
              title="Delete"
              onClick={() => viewDeleteModal(value.id, true)}
            >
              <TrashFill size={18} color="#ffffff" />
            </span>
          </p>
        ),
      };
    });
  const columns = React.useMemo(
    () => [
      {
        Header: "Address",
        accessor: "col1",
      },
      {
        Header: "Date/Time",
        accessor: "col3",
      },
      {
        Header: "Action",
        accessor: "col4",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
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
              <div className="col-xl-6">
                <h3 className="admin_faq_heading">
                  <span>
                    <ImageFill size={24} color="#4B4B4B" />
                  </span>{" "}
                  Address List
                </h3>
              </div>
            </div>
          </div>
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
            <div className="alert alert-danger" style={{ color: "#721c24" }}>
              {errors}
            </div>
          ) : (
            ""
          )}
          <div className="admin_table_outer_div">
            <div className="admin_tables">
              <div
                className="row airdrop_div"
                style={{ width: "100%", margin: "0" }}
              >
                <div className="admin_head_right col-xl-6"></div>
                <div className="admin_head_right col-xl-4">
                  <Link to="/admin/airdrop_data">
                    <button>Airdrop NFT/ERC20 token</button>
                  </Link>
                </div>
                <div className="admin_head_right col-xl-2">
                  <Link to="/admin/create_airdrop">
                    <button>Add address</button>
                  </Link>
                </div>
              </div>
              <br />
              <table {...getTableProps()} className="users_tabl">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}
      <Modal show={showDeleteModal} className="delete_modal">
        <Modal.Header
          style={{ background: "none" }}
          closeButton
          onClick={() => viewDeleteModal("", false)}
        >
          Delete Airdrop
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <h4>Are you sure</h4>
          <p>You want to delete this airdrop ?</p>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button
              onClick={() => viewDeleteModal("", false)}
              className="del_no_btn"
            >
              No
            </button>
            <button
              className="btn btn-primary del_yes_btn"
              style={{ width: "auto", background: "#1890ff" }}
              onClick={deleteNews}
            >
              Yes
            </button>
          </div>
        </Modal.Footer>
        <br />
      </Modal>
    </>
  );
}
export default Airdrop;
