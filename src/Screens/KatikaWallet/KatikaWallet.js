import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { toast } from "react-toastify";
import "./KatikaWallet.scss";

import spike from "./../../Assets/Img/spike.svg";
import shortspike from "./../../Assets/Img/short-spike.svg";
import longspike from "./../../Assets/Img/longspike.svg";
import longestspike from "./../../Assets/Img/longestspike.svg";
import scale from "./../../Assets/Img/scale.svg";
import graph from "./../../Assets/Img/graph.svg";
import screens from "./../../Assets/Img/screens.svg";
import safe from "./../../Assets/Img/safe.svg";
import laptop from "./../../Assets/Img/laptop.svg";
import blockchain from "./../../Assets/Img/blockchain.svg";
import lifetime from "./../../Assets/Img/lifetime.svg";
import control from "./../../Assets/Img/control.svg";
import exchange from "./../../Assets/Img/exchange.svg";
import gamecurrency from "./../../Assets/Img/game-currency.svg";
import axiosInstance from "../../Helpers/axios";

//**Translate */
import { useTranslation } from "react-i18next";

export default function KatikaWallet() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleGamerNewsletter = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/gamer", { email })
      .then(() => {
        setEmail("");
        toast.success(t("header.Success"), {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch(() => {
        setEmail("");
        toast.error(t("header.Error"), {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleDeveloperNewsletter = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/developer", { email, name, project })
      .then(() => {
        setEmail("");
        setName("");
        setProject("");
        handleClose();
        toast.success(t("header.Success"), {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch(() => {
        setEmail("");
        setName("");
        setProject("");
        toast.error(t("header.Error"), {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <React.Fragment>
      <section className="katikawallet__head">
        <div className="d-none d-md-flex katikawallet__spikes_right">
          <img src={spike} />
          <img src={shortspike} />
        </div>
        <Container>
          <Row className="kt__row katikawallet__headrow py-2">
            <Col sm="6" className="my-2 py-2">
              <div className="katikawallet__head_column_1">
                <h4 className="katikawallet__heading">
                  {t("katika_wallet.Header_title")}
                  <span className="katikawallet__subhead"> KATIKA WALLET</span>
                </h4>
                <h6 className="katikawallet__headtext">
                  {t("katika_wallet.Header_text")}
                </h6>
                <Link to={"/showcase-wallet"} className="py-2">
                  <button className="btn-custom-contained btn-secondary ">
                    Buddy
                  </button>
                </Link>
              </div>
            </Col>
            <Col sm="6" className="katikawallet__head_column_2">
              <img src={scale} className="katikawallet__head_img" />
            </Col>
          </Row>
        </Container>
        <div className="d-none d-md-flex katikawallet__spikes_left">
          <img className="kt__longest" src={longestspike} />
          <img className="kt__long" src={longspike} />
        </div>
      </section>
      <section className="katikawallet__body_main px-2">
        <Container>
          <h3 className="katikawallet__body_h4">
            {t("katika_wallet.Gamer_title")}
          </h3>
          <div className="katikawallet__timeline">
            <div className="katikawallet__tl_first">
              <div className="katikawallet__tl_bar">
                <div>
                  <h5 className="katikawallet__tl_head text-md-right">
                    {t("katika_wallet.Gamer_item1_title")}
                  </h5>
                  <p className="katikawallet__tl_body text-md-right">
                    {t("katika_wallet.Gamer_item1_text")}
                  </p>
                </div>
                <div className="tl__pointer">
                  <div className="tl__dot" />
                </div>
              </div>
              <div className="katikawallet__tl_col_second">
                <img src={graph} className="katikawallet__tl_img kt_tl_graph" />
              </div>
            </div>
            <div className="katikawallet__tl_second">
              <div className="katikawallet__tl_bar lt__second__padding">
                <img src={screens} className="katikawallet__tl_img" />
                <div className="tl__pointer tl__second__pointer">
                  <div className="tl__dot" />
                </div>
              </div>
              <div className="katikawallet__tl_col_second lt__second__padding">
                <div className="tl__margin_top_120">
                  <h5 className="katikawallet__tl_head">
                    {t("katika_wallet.Gamer_item2_title")}
                  </h5>
                  <p className="katikawallet__tl_body">
                    {t("katika_wallet.Gamer_item2_text")}
                  </p>
                </div>
              </div>
            </div>
            <div className="katikawallet__tl_first">
              <div className="katikawallet__tl_bar lt__noborder">
                <div>
                  <h5 className="katikawallet__tl_head text-md-right">
                    {t("katika_wallet.Gamer_item3_title")}
                  </h5>
                  <p className="katikawallet__tl_body text-md-right">
                    {t("katika_wallet.Gamer_item3_text")}
                  </p>
                  <div className="katikawallet__tl_col_second lt__noborder transaction_first">
                    <img
                      src={safe}
                      className="katikawallet__tl_img kt_tl_graph"
                    />
                  </div>
                  <div className="row ">
                    <div className="card">
                      <div
                        className="container"
                        style={{ maxWidth: "500px", justifyContent: "center" }}>
                        <div className="text-center">
                          <img
                            src="https://i.imgur.com/Dh7U4bp.png"
                            width="200"
                          />
                          <span
                            style={{ textAlign: "left" }}
                            className="d-block mt-1 katikawallet__tl_body">
                            {t("katika_wallet.Newsletter_text_gamer")}
                          </span>
                          <form onSubmit={handleGamerNewsletter}>
                            <div className="input-group mb-3 mt-1">
                              <input
                                type="email"
                                value={email}
                                className="form-control"
                                placeholder={t(
                                  "katika_wallet.Newsletter_placeholder"
                                )}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <button
                                className="cancel-btn"
                                type="submit"
                                style={{ with: "100px" }}>
                                {t("katika_wallet.Newsletter_button_gamer")}
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tl__pointer">
                  <div className="tl__dot" />
                </div>
              </div>
              <div className="katikawallet__tl_col_second lt__noborder  transaction_second">
                <img src={safe} className="katikawallet__tl_img kt_tl_graph" />
              </div>
            </div>
          </div>
        </Container>

        <Container style={{ paddingTop: 100 }}>
          <h3 className="katikawallet__body_h4 katikawallet__body_h4-developers">
            {t("katika_wallet.Developers_title")}
          </h3>
          <div className="katikawallet__timeline">
            <div className="katikawallet__tl_first">
              <div className="katikawallet__tl_bar">
                <div>
                  <h5 className="katikawallet__tl_head text-md-right">
                    {t("katika_wallet.Developers_item1_title")}
                  </h5>
                  <p className="katikawallet__tl_body text-md-right">
                    {t("katika_wallet.Developers_item1_text")}
                  </p>
                </div>
                <div className="tl__pointer">
                  <div className="tl__dot" />
                </div>
              </div>
              <div className="katikawallet__tl_col_second">
                <img src={laptop} className="katikawallet__tl_img" />
              </div>
            </div>
            <div className="katikawallet__tl_second">
              <div className="katikawallet__tl_bar lt__second__padding">
                <img src={blockchain} className="katikawallet__tl_img" />
                <div className="tl__pointer tl__second__pointer">
                  <div className="tl__dot" />
                </div>
              </div>
              <div className="katikawallet__tl_col_second lt__second__padding">
                <div className="tl__margin_top_120">
                  <h5 className="katikawallet__tl_head">
                    {t("katika_wallet.Developers_item2_title")}
                  </h5>
                  <p className="katikawallet__tl_body">
                    {t("katika_wallet.Developers_item2_text")}
                  </p>
                </div>
              </div>
            </div>
            <div className="katikawallet__tl_first">
              <div className="katikawallet__tl_bar lt__noborder">
                <div>
                  <h5 className="katikawallet__tl_head text-md-right">
                    {t("katika_wallet.Developers_item3_title")}
                  </h5>
                  <p className="katikawallet__tl_body text-md-right">
                    {t("katika_wallet.Developers_item3_text")}
                  </p>
                  <img
                    src={lifetime}
                    className="katikawallet__tl_img kt_tl_graph transaction_developer_first"
                  />
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="card">
                      <div
                        className="container"
                        style={{ maxWidth: "700px", justifyContent: "center" }}>
                        <div className="text-center">
                          <img
                            src="https://i.imgur.com/Dh7U4bp.png"
                            width="200"
                          />
                        </div>
                        <div className="text-left">
                          <span className="d-block my-2 katikawallet__tl_body">
                            {t("katika_wallet.Newsletter_text_developer")}
                          </span>

                          <button
                            className="btn-custom-contained btn-primary mb-4"
                            onClick={handleShow}>
                            {t("katika_wallet.Newsletter_button_developer")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tl__pointer">
                  <div className="tl__dot" />
                </div>
              </div>
              <div className="katikawallet__tl_col_second lt__noborder">
                <img
                  src={lifetime}
                  className="katikawallet__tl_img kt_tl_graph transaction_developer_second"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="katikawallet__showcase">
        <Container>
          <h3 className="katikawallet__showcase_h3">
            {t("katika_wallet.Carousel_title")}
          </h3>

          <Carousel
            pause={false}
            controls={false}
            variant="dark"
            style={{ paddingBottom: 50 }}>
            <Carousel.Item style={{ borderRadius: 16 }}>
              <div
                className="katikawallet__carousel_item row"
                style={{ margin: 0 }}>
                <div className="col-md-7 kt__showcase_txtzone">
                  <h3 className="kt__showcase_text text-md-right">
                    {t("katika_wallet.Carousel_item1")}
                  </h3>
                </div>
                <div
                  className="col-md-5 kt__showcase_imgzone"
                  style={{ paddingRight: 0 }}>
                  <img src={gamecurrency} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item style={{ borderRadius: 16 }}>
              <div
                className="katikawallet__carousel_item row"
                style={{ margin: 0 }}>
                <div className="col-md-7 kt__showcase_txtzone">
                  <h3 className="kt__showcase_text text-md-center">
                    {t("katika_wallet.Carousel_item2")}
                  </h3>
                </div>
                <div className="col-md-5 kt__showcase_imgzone">
                  <img src={control} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item style={{ borderRadius: 16 }}>
              <div
                className="katikawallet__carousel_item row"
                style={{ margin: 0 }}>
                <div className="col-md-7 kt__showcase_txtzone">
                  <h3 className="kt__showcase_text text-md-right">
                    {t("katika_wallet.Carousel_item3")}
                  </h3>
                </div>
                <div className="col-md-5 kt__showcase_imgzone">
                  <img src={exchange} />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleDeveloperNewsletter} className="mb-2">
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="name">
                {t("katika_wallet.Newsletter_button_developer_name")} :
              </label>
              <input
                id="name"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                {t("katika_wallet.Newsletter_button_developer_email")} :
              </label>
              <input
                id="email"
                type="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="projet">
                {t("katika_wallet.Newsletter_button_developer_project")} :
              </label>
              <textarea
                className="form-control"
                id="projet"
                value={project}
                rows="3"
                onChange={(e) => setProject(e.target.value)}
                required></textarea>
            </div>
            <div className="m-3">
              <button type="submit" className="cancel-btn float-end">
                {t("header.modal_button_send")}
              </button>
              <button
                type="button"
                className="cancel-btn float-end me-2"
                onClick={handleClose}>
                {t("header.modal_button_close")}
              </button>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </React.Fragment>
  );
}
