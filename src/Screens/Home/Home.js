import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import "./Home.scss";
import wallet from "./../../Assets/Img/home/wallet.json";
import ludoapp from "./../../Assets/Img/showcaseludokin/ludokinapp.svg";
import ludokinimg1 from "./../../Assets/Img/showcaseludokin/ludokinimg1.svg";
import ludokinimg from "./../../Assets/Img/showcaseludokin/ludokinimg.svg";
import man from "./../../Assets/Img/showcaseludokin/man.svg";
import wallet2 from "./../../Assets/Img/showcaseludokin/wallet.png";
import securewallet from "./../../Assets/Img/showcaseludokin/securewallet.svg";

//begin of the import
import { Container } from "react-bootstrap";

//**Translate */
import { useTranslation } from "react-i18next";

const Home = () => {
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

  return (
    <div className="pb-4 home">
      <div className="home__carousel">
        <div className="home__header-title mx-2">
          <h3>{t("home.Carousel_title")}</h3>
        </div>
        <Carousel
          pause={false}
          controls={true}
          indicators={false}
          interval={7000}
          variant="light" 
          className=" mb-4">
          <Carousel.Item>
            <div className="home__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col-sm-5  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="home__carousel-image-content"
                      src={ludoapp}
                    />
                  </div>
                  <div className="col-sm-7  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="home__carousel-text">
                      {t("home.Carousel_item1")}
                    </h5>

                    <a
                      target="_blank"
                      href={downloadLink}
                      className="home__btn-custom"></a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col-sm-5 order-sm-5  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="home__carousel-image-content"
                      src={ludokinimg1}
                    />
                  </div>
                  <div className="col-sm-7 order-sm-1  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="home__carousel-text">
                      <strong>{t("home.Carousel_item2_title")}</strong>
                      <br />
                      {t("home.Carousel_item2")}
                    </h5>
                    <a
                      target="_blank"
                      href={downloadLink}
                      className="home__btn-custom"></a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col-sm-5  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="home__carousel-image-content"
                      src={ludokinimg}
                    />
                  </div>
                  <div className="col-sm-7  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="home__carousel-text">
                      <strong> {t("home.Carousel_item3_title")}</strong> <br />
                      {t("home.Carousel_item3")}
                    </h5>
                    <a
                      target="_blank"
                      href={downloadLink}
                      className="home__btn-custom"></a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col-sm-5 order-sm-5  d-flex align-items-center justify-content-center flex-column">
                    <img className="home__carousel-image-content" src={man} />
                  </div>
                  <div className="col-sm-7 order-sm-1  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="home__carousel-text">
                      <strong>{t("home.Carousel_item4_title")}</strong>
                      <br />
                      {t("home.Carousel_item4")}
                    </h5>
                    <a
                      target="_blank"
                      href={downloadLink}
                      className="home__btn-custom"></a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col-sm-5  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="home__carousel-image-content"
                      src={wallet2}
                    />
                  </div>
                  <div className="col-sm-7  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="home__carousel-text">
                      <strong>{t("home.Carousel_item5_title")}</strong> <br />
                      {t("home.Carousel_item5")}
                    </h5>
                    <a
                      target="_blank"
                      href={downloadLink}
                      className="home__btn-custom"></a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__carousel-item p-4">
              <div className="container">
                <div className="row ">
                  <div className="col-sm-5 order-sm-5  d-flex align-items-center justify-content-center flex-column">
                    <img
                      className="home__carousel-image-content"
                      src={securewallet}
                    />
                  </div>
                  <div className="col-sm-7 order-sm-1  d-flex align-items-center justify-content-center flex-column">
                    <h5 className="home__carousel-text">
                      <strong> {t("home.Carousel_item6_title")}</strong> <br />
                      {t("home.Carousel_item6")}
                    </h5>
                    <a
                      target="_blank"
                      href={downloadLink}
                      className="home__btn-custom"></a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div>
          <div className="home__carousel-bottom"></div>
        </div>
      </div>
      <div className=" container">
        <section className="section_wallet">
          <div className="row my-4">
            <div className="col-sm home__wallet-text">
              <h4>
                {t("home.Section_wallet_title")} <span>KATIKA WALLET</span>
              </h4>
              <h6>{t("home.Section_wallet_text")}</h6>
              <Link to={"/katika-wallet"} className="button">
                <button className="btn-custom-contained btn-primary">
                  {t("home.Learn_more_button")}
                </button>
              </Link>
            </div>
            <div className="col-sm">
              <Lottie
                className="home__wallet-img"
                animationData={wallet}
                loop={true}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
