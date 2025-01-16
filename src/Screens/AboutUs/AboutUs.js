import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./AboutUs.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//**Translate */
import { useTranslation } from "react-i18next";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Avatar from "react-avatar";
import ricardo from "../../Assets/Img/aboutus/ricardo.jpeg";
// import afkapnang from "../../Assets/Img/aboutus/afkapnang.jpeg";
import selasta from "../../Assets/Img/aboutus/selasta.jpeg";
import ezekiel from "../../Assets/Img/aboutus/ezekiel-sqrt.jpg";
import ghislain from "../../Assets/Img/aboutus/ghislain-squart.jpg";

import {
  faAngellist,
  faApple,
  faCloudflare,
  faDochub,
  faOptinMonster,
} from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import about from "./../../Assets/Img/aboutus/blockchain.webp";
import spike from "./../../Assets/Img/spike.svg";
import shortspike from "./../../Assets/Img/short-spike.svg";
import longspike from "./../../Assets/Img/longspike.svg";
import longestspike from "./../../Assets/Img/longestspike.svg";

export default function AboutUs() {
  const { t } = useTranslation();

  const users = [
    {
      id: 1,
      img: ricardo,
      name: "Ricardo KONLACK",
      position: t("about_us.team1"),
      linkedin: "https://www.linkedin.com/in/ricardokonlack/",
      twitter: "https://twitter.com/KonlackR",
    },
    {
      id: 2,
      img: selasta,
      name: "Jimmy  SELATSA",
      position: t("about_us.team2"),
      linkedin: "https://www.linkedin.com/in/selatsa/",
      twitter: "https://twitter.com/jimselatsa?s=11&t=dTh14JQq4aVc8wuRk3ddlQ",
    },
    {
      id: 3,
      img: ghislain,
      name: "Ghislain NSANGOU",
      position: t("about_us.team3"),
      linkedin: "https://www.linkedin.com/in/nsangou-ghislain-145077186/",
      twitter:
        "https://twitter.com/lanorensangou?s=11&t=dTh14JQq4aVc8wuRk3ddlQ",
    },
    // {
    //   id: 4,
    //   img: afkapnang,
    //   name: "Arsene KAPNANG",
    //   position: t("about_us.team4"),
    //   linkedin: "https://www.linkedin.com/in/afkapnang/",
    //   twitter: "https://twitter.com/ARSDY237",
    // },
    {
      id: 4,
      img: ezekiel,
      name: "Ezechiel LONKO",
      position: t("about_us.team5"),
      linkedin: "",
      twitter: "https://twitter.com/EzechielLonko ",
    },
  ];

  const ref = useRef(null);

  const scrollUsers = (offset) => {
    ref.current.scrollLeft += offset;
  };

  return (
    <React.Fragment>
      <section className="aboutus__head">
        <div className="d-none d-md-flex katikawallet__spikes_right">
          <img src={spike} />
          <img src={shortspike} />
        </div>
        <div className="aboutus__overlay">
          <Container>
            <Row className="aboutus__row aboutus__head_row">
              <Col md="7" sm="12" className="aboutus__heada">
                <div className="aboutus__head_content">
                  <h4 className="aboutus__block">
                    {t("about_us.Header_title")}
                  </h4>
                  <p className="aboutus__heada_p">
                    {t("about_us.Header_text")}
                  </p>
                </div>
              </Col>
              <Col
                sm="0"
                md="5"
                className="aboutus__headb d-none d-md-flex flex-column">
                <img src={about} className="aboutus__headimg" />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="d-none d-md-flex katikawallet__spikes_left">
          <img className="kt__longest" src={longestspike} />
          <img className="kt__long" src={longspike} />
        </div>
      </section>

      <section className="aboutus__fourth_section">
        <Container>
          <h3 className="aboutus__heading">{t("about_us.Content_title")}</h3>
          <Row className="aboutus__row">
            <Col md="4">
              <h2 className="aboutus_heag">
                {t("about_us.Content_subtitle1")}
              </h2>
              <p>{t("about_us.Content_subtitle1_text1")}</p>
            </Col>
            <Col md="4">
              <h2 className="aboutus_heag">
                {t("about_us.Content_subtitle2")}
              </h2>
              <p>{t("about_us.Content_subtitle2_text2")}</p>
            </Col>
            <Col md="4">
              <h2 className="aboutus_heag">
                {t("about_us.Content_subtitle3")}
              </h2>
              <p>{t("about_us.Content_subtitle3_text3")}</p>
            </Col>
          </Row>

          <h3 className="aboutus__heading" style={{ marginTop: "30px" }}>
            {t("about_us.team_title")}
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              className="aboutus__user_ctrl"
              onClick={() => scrollUsers(-350)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div ref={ref} className="aboutus__users_row">
              {users.map((user) => (
                <div key={user.id} className="aboutus__user">
                  <div className="user__img_alt">
                    <Avatar size="250px" round={true} src={user.img} />

                    <div className="user__namearea">
                      <div className="aboutus__user_name">{user.name}</div>
                      <h6 className="aboutus__user_role">{user.position}</h6>
                    </div>
                    <div>
                      <ul className="list-inline social ">
                        <li className="list-inline-item">
                          <a
                            href={user.twitter}
                            target="_blank"
                            title="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                        </li>
                        {user.linkedin ? (
                          <li className="list-inline-item">
                            <a
                              href={user.linkedin}
                              target="_blank"
                              title="LinkedIn">
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="aboutus__user_ctrl"
              onClick={() => scrollUsers(350)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}
