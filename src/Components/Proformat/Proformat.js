import React from "react";
import "./Proformat.scss";
import katika from "./katika.png";
import logo from "./logo.png";
import { useLocation } from "react-router-dom";
import html2PDF from "jspdf-html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../Helpers/axios";

const Proformat = () => {
  const { state } = useLocation();
  const orders = state.order;
  const user = state.user;
  const total = state.total;
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = dd + "/" + mm + "/" + yyyy;

  //Mail
  const handlePrint = async () => {
    let page = document.getElementById("proformat");
    // let pdf = await html2PDF(
    //   page,
    //   { useCORS: true },
    //   {
    //     jsPDF: {
    //       format: "a4",
    //       unit: "px",
    //     },
    //     imageType: "image/jpeg",
    //     // output: "./pdf/proforma.pdf",
    //   }
    // );
orders.forEach(
(order) => {delete order.show
  if(!Reflect.has(order, "address")){
    order.address = "/";
  }
});
   axiosInstance
     .post("/proformas", {
       data: {
         number: today.valueOf().toString(),
         date: formattedToday,
         userName: user.name,
         userContact: user.phone,
         userEmail: user.email,
         userAddress: user.address,
         gps: orders,
         total: total.toString(),
       },
     })
     .then((res) => {
       console.log(res);
     });
  };
    

  return (
    <>
      <dir className="printbtn pt-3">
        <button
          className="btn-custom-contained btn-primary"
          onClick={handlePrint}
        >
          <FontAwesomeIcon
            icon={faPrint}
            style={{ fontSize: "18px", marginRight: "10px" }}
          />
          Print
        </button>
      </dir>
      <div className="proforma px-4 pb-5" id="proformat">
        <div className="row py-4">
          <div className="col">
            <img src={logo} className="proform__logo" alt="logo" />
          </div>
          <div className="col text-header">
            <strong>Head office: </strong>Akwa, Pau Road <br />
            <strong>NIU: </strong>M082015056639J <strong> N°RCCM:</strong>{" "}
            RC/DLA/2020/B4248
            <br />
            <strong> BP: </strong> 11933 Douala - Cameroun
            <strong> Contact : </strong> (+237) 697 46 19 71 <br />
          </div>
        </div>

        <table className="table">
          {/* <img src={katika} className="watermark" alt="logo" /> */}
          <tr>
            <th scope="col" colspan="6" className="header">
              PROFORMA
            </th>
          </tr>

          <tr>
            <td colspan="4" className="td-header1">
              CLIENT
            </td>
            <td colspan="2" className="td-header1">
              PROFORMA N° : {today.valueOf()}
            </td>
          </tr>
          <tr className="px-5">
            <td className="td-header3 px-5" colspan="4">
              <h5>
                <strong> Name :</strong> {user.name}
              </h5>
              <h5>
                <strong>Contact :</strong> {user.phone}
              </h5>
              <h5>
                <strong>Email :</strong> {user.email}
              </h5>
              <h5>
                <strong> Address :</strong> {user.address}
              </h5>
            </td>
            <td className="td-header3 " colspan="2">
              <div className="top_row">
                <div>
                  <strong>Date :</strong>
                </div>
                <div>{formattedToday}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="6" className="td-header1">
              SERVICE DELIVERY
            </td>
          </tr>
          <tr>
            <td className="td-header2 p-4 ">Type of GPS</td>
            <td className="td-header2 ">Type of vehicle</td>
            <td className="td-header2 ">Location of installation</td>
            <td className="td-header2 ">Unit price </td>
            <td className="td-header2 ">Quantity</td>
            <td className="td-header2 ">Total price incl. VAT </td>
          </tr>
          {orders.map((order) => (
            <tr>
              <td className="td-header3 p-1">
                {order.gps ? order.gps : "Classic"}
              </td>
              <td className="td-header3">{order.type}</td>
              <td className="td-header3">
                {order.address ? order.address : "/"}
              </td>
              <td className="td-header3">{order.price} (FCFA)</td>
              <td className="td-header3">01 </td>
              <td className="td-header3">{order.price} (FCFA)</td>
            </tr>
          ))}

          <tr>
            <td className="td-header1 p-4" colspan="4">
              Total fee to be paid :
            </td>
            <td className="td-header1" colspan="2">
              {total} FCFA
            </td>
          </tr>

          <tr>
            <td className="td-header2 p-4" colspan="6">
              <strong>Conditions :</strong> <br />
              <ul style={{ textAlign: "left" }}>
                <li>
                  The above fees are for the purchase of the GPS only. The
                  installation fee will be applied after confirmation of the
                  proforma.
                </li>
                <li>
                  The client has to pay 70% of the total commission before the
                  start of the service, which is necessary for logistics, and
                  the remaining 30% has to be paid at the end of the service.
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Proformat;
