import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { Link } from "react-router-dom";
import "./Showcasewallet.scss";
import Carousel from "react-bootstrap/Carousel";

import img1 from "./../../Assets/Img/showcasewallet/img1.svg";
import img2 from "./../../Assets/Img/showcasewallet/img2.svg";
import img3 from "./../../Assets/Img/showcasewallet/img3.svg";
import img4 from "./../../Assets/Img/showcasewallet/img4.svg";

import ludokin from "./../../Assets/Img/showcaseludokin/ludokin.svg";

import imgbordludo from "./../../Assets/Img/showcasewallet/ludobord.svg";


//**Translate */
import { useTranslation } from "react-i18next";


export default function Showcasewallet() {
  const { t } = useTranslation();
  
  return (
    <Styles>
      <section className="showcasewallet_section1">
        <Carousel
          pause={false}
          controls={true}
          indicators={false}
          interval={7000}
          variant="light"
          className="showcasewallet__carousel pb-4"
        >
          <Carousel.Item>
            <div className="showcasewallet__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="showcasewallet__carousel-image-content"
                      src={img1}
                    />
                  </div>
                  <div className="col  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="showcasewallet__carousel-text">
                      <strong>
                       {t("showcase-wallet.caroussel_item_Exchange")}

                       
                      </strong>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="showcasewallet__carousel-bottom"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="showcasewallet__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col order-sm-5  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="showcasewallet__carousel-image-content"
                      src={img3}
                    />
                  </div>
                  <div className="col order-sm-1  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="showcasewallet__carousel-text">
                      <strong>
                      {t("showcase-wallet.caroussel_item_Send")}
                       
                      </strong>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="showcasewallet__carousel-bottom"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="showcasewallet__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="showcasewallet__carousel-image-content"
                      src={img2}
                    />
                  </div>
                  <div className="col  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="showcasewallet__carousel-text">
                      <strong>   {t("showcase-wallet.caroussel_item_Playassets")}</strong> <br />
                    </h5>
                  </div>
                </div>
              </div>
              <div className="showcasewallet__carousel-bottom"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="showcasewallet__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col order-sm-5  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="showcasewallet__carousel-image-content"
                      src={img4}
                    />
                  </div>
                  <div className="col order-sm-1  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="showcasewallet__carousel-text">
                      <strong>   {t("showcase-wallet.caroussel_item_Movegames")}</strong>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="showcasewallet__carousel-bottom"></div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="showcasewallet_section2">
        <Container>
          <p className="showcasewalleth4">
          {t("showcase-wallet.Title_ADVANTAGES")}
            <span className="showcaseKatika">   {t("showcase-wallet.KATIKA")}</span>    {t("showcase-wallet.WALLET")}
          </p>
          <Row className="row-walletsection2_1">
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <h1 className="showcasewallet__heading_left">
              {t("showcase-wallet.caroussel_item_Exchange")}
               
              </h1>
              <p className="showcasewallet__headtext_left">
              {t("showcase-wallet.first_text_Remember")}
                
              </p>
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <img src={img1} className="showcasewallet__head_img" />
            </Col>
          </Row>

          <Row className="row-walletsection2_2">
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <img src={img3} className="showcasewallet__head_img" />
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <h1 className="showcasewallet__heading_right">
              {t("showcase-wallet.caroussel_item_Send")}
              </h1>
              <p className="showcasewallet__headtext_right">
              {t("showcase-wallet.second_text_Didyou")}
                
              </p>
            </Col>
          </Row>

          <Row className="row-walletsection2_3">
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <h1 className="showcasewallet__heading_left">
              {t("showcase-wallet.caroussel_item_Playassets")}
               
              </h1>
              <p className="showcasewallet__headtext_left">
              {t("showcase-wallet.thrid_text_Didyouhave")}
               
              </p>
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <img src={img2} className="showcasewallet__head_img" />
            </Col>
          </Row>

          <Row className="row-walletsection2_4">
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <img src={img4} className="showcasewallet__head_img" />
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <h1 className="showcasewallet__heading_right">
              {t("showcase-wallet.caroussel_item_Movegames")} 
               
              </h1>
              <p className="showcasewallet__headtext_right">
              {t("showcase-wallet.fourth_text_Doyouidentify")}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="showcasewallet_section3">
        <Container>
          <Row className="row-walletsection2_4">
            <Col md="6" sm="12" className="showcasewallet__head_column_1">
              <img src={ludokin} className="showcasewallet__ludokin" />
              <h1 className="showcasewallet__heading_up_ludokin">   {t("showcase-wallet.LUDOKIN")}</h1>
              <p className="showcasewallet__headtext">
              {t("showcase-wallet.lUDOKINIS")}
              </p>
              <div className="containerbtn">
                <Link to={"/showcase-ludokin"}>
                  <button className="btn-custom-contained btn-secondary">
                  {t("showcase-wallet.MeetLudokin")}
                  </button>
                </Link>
              </div>
            </Col>
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <img src={imgbordludo} className="showcasewallet__head_img" />
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
}

const Styles = styled.div`
  font-family: poppins, mirza, sans-serif;
  .section1 {
    background-color: #fcf3ff;
  }
  .section2 {
    background-color: #faf8ff;
  }
`;
