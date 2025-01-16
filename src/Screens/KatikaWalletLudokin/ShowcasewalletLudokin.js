import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import InfiniteCarousel from "react-leaf-carousel";

import "./ShowcasewalletLudokin.scss";
import "./../KatikaWalletShowcase/Showcasewallet.scss";
import ludokin from "./../../Assets/Img/showcaseludokin/ludokin.svg";
import ludokinimg from "./../../Assets/Img/showcaseludokin/ludokinimg.svg";
import ludokinimg1 from "./../../Assets/Img/showcaseludokin/ludokinimg1.svg";
import man from "./../../Assets/Img/showcaseludokin/man.svg";
import wallet2 from "./../../Assets/Img/showcaseludokin/wallet.png";
import securewallet from "./../../Assets/Img/showcaseludokin/securewallet.svg";
import ludoapp from "./../../Assets/Img/showcaseludokin/ludokinapp.svg";
import app from "./../../Assets/Img/showcaseludokin/app.svg";
import scrennschoot1 from "./../../Assets/Img/showcaseludokin/scrennschoot1.svg";
import scrennschoot2 from "./../../Assets/Img/showcaseludokin/scrennschoot2.svg";
import scrennschoot3 from "./../../Assets/Img/showcaseludokin/scrennschoot3.svg";
import scrennschoot4 from "./../../Assets/Img/showcaseludokin/scrennschoot4.svg";
import scrennschoot5 from "./../../Assets/Img/showcaseludokin/scrennschoot5.svg";
import scrennschoot6 from "./../../Assets/Img/showcaseludokin/scrennschoot6.svg";
import scrennschoot7 from "./../../Assets/Img/showcaseludokin/scrennschoot7.svg";
import scrennschoot8 from "./../../Assets/Img/showcaseludokin/screnschoot2.svg";
import { Link } from "react-router-dom";
//**Translate */
import { useTranslation } from "react-i18next";


export default function ShowcasewalletLudokin() {
  const { t } = useTranslation();
  const [downloadLink, setDownloadLink] = useState(
    "https://sactionludo.page.link/J2ZL2zFRv4MdbE1t9"
  );
  useEffect(() => {
    if (window.screen.width > 554)
      setDownloadLink(
        "https://play.google.com/store/apps/details?id=com.sactionludo.ludotimecc&hl=fr&gl=US"
      );
  }, []);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <Styles>
      <section className="ludokin_section1">
        <Container>
          <Row className="row-walletsection2_4">
            <Col md="6" sm="12" className="showcasewallet__head_column_1">
              <img src={ludokin} className="showcasewallet__ludokin" />
              <h1 className="showcasewallet__heading_up_ludokin">
              {t("ludokin.LudoKin")}
                </h1>
              <p className="showcasewallet__headtext">
              {t("showcase-wallet.lUDOKINIS")}
               
              </p>
              <div className="containerbtn">
                <div className="bg"></div>
                <a
                  target="_blank"
                  href={downloadLink}
                  className="ludokinplaystore__btn_primary"
                ></a>
              </div>
            </Col>
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <img src={ludoapp} className="showcasewallet__head_img" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ludokin_section2">
        <Container>
          <h4 className="ludokin__body_h4_features">  {t("ludokin.features")}</h4>

          <Row className="row-walletsection2_1">
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <h1 className="showcasewallet__heading_left">
              {t("home.Carousel_item2_title")}
              </h1>
              <p className="showcasewallet__headtext_left">
              {t("home.Carousel_item2")}
              </p>
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <img src={ludokinimg1} className="showcasewallet__head_img" />
            </Col>
          </Row>

          <Row className="row-walletsection2_2">
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <img src={ludokinimg} className="showcasewallet__head_img" />
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <h1 className="showcasewallet__heading_right"> {t("home.Carousel_item3_title")} </h1>
              <p className="showcasewallet__headtext_right">
              {t("home.Carousel_item3")}
               
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
              {t("home.Carousel_item4_title")}
              </h1>
              <p className="showcasewallet__headtext_left">
              {t("home.Carousel_item4")}
              </p>
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <img src={man} className="showcasewallet__head_img" />
            </Col>
          </Row>

          <Row className="row-walletsection2_4">
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <img src={wallet2} className="showcasewallet__head_img" />
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <h1 className="showcasewallet__heading_right">
              {t("home.Carousel_item5_title")}
               
              </h1>
              <p className="showcasewallet__headtext_right">
              {t("home.Carousel_item5")}
              </p>
            </Col>
          </Row>
          <Row className="row-walletsection2_5">
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <h1 className="showcasewallet__heading_left">
              {t("home.Carousel_item6_title")}
              
              </h1>
              <p className="showcasewallet__headtext_left">
              {t("home.Carousel_item6")}
              </p>
            </Col>
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <img src={securewallet} className="showcasewallet__head_img" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ludodkin_section3">
        <h4 className="ludokin__body_h4_section3_screenshots"> {t("ludokin.SCREENSHOTS")}</h4>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={1}
          slidesToShow={5}
          scrollOnDevice={true}
        >
          <div>
            <img alt="" src={scrennschoot1} />
          </div>
          <div>
            <img alt="" src={scrennschoot2} />
          </div>
          <div>
            <img alt="" src={scrennschoot3} />
          </div>
          <div>
            <img alt="" src={scrennschoot4} />
          </div>
          <div>
            <img alt="" src={scrennschoot5} />
          </div>
          <div>
            <img alt="" src={scrennschoot6} />
          </div>
          <div>
            <img alt="" src={scrennschoot7} />
          </div>
          <div>
            <img alt="" src={scrennschoot8} />
          </div>
          <div>
            <img alt="" src={scrennschoot5} />
          </div>
        </InfiniteCarousel>
        <Container>
          <h4 className="ludokin__body_h4_section3_screenshots"> </h4>
        </Container>
      </section>
      <section className="ludodkin_section4">
        <Container>
          <h4 className="ludokin__body_h4_terms">{t("ludokin.terms_title")}</h4>
          <p className="ludokin_partexte">
          {t("ludokin.terms_text")}
          </p>
          <div className="px-2 py-5 showcase_seemore">
            <Link to="/userlicenseagreement">
              <button className="btn-custom-contained btn-primary  my-2">
              {t("ludokin.SeeMore")} 
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="ludodkin_section5">
        <Container>
          <Row className="row-walletsection2_4">
            <Col md="6" sm="12" className="showcasewallet__head_column_2">
              <img src={ludokin} className="showcasewallet__ludokin" />
              <p className="showcasewallet__headtext_up_ludokin">
              {t("ludokin.PlayWinRepeat")}
                
              </p>
              <h1 className="showcasewallet__heading_up_ludokin">  {t("ludokin.LudoKin")}</h1>
              <p className="showcasewallet__headtext_up_ludokin">
              {t("ludokin.Download")}
              
              </p>
              <div className="containerbtn">
                <div className="bg"></div>
                <a
                  target="_blank"
                  href={downloadLink}
                  className="ludokinplaystore__btn_primary"
                ></a>
              </div>
            </Col>
            <Col
              md="6"
              sm="12"
              lg="6"
              className="showcasewallet__head_column_1"
            >
              <img src={app} className="showcasewallet__head_img" />
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
