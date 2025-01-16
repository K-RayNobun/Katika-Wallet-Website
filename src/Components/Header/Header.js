import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./Header.scss";

import { useNavigate } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//**Translate */
import { useTranslation } from "react-i18next";

export default function Header() {
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
  const changeLanguage = async (lng) => {
    setLanguage(lng);
    await i18n.changeLanguage(lng);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [showMenu, setShowMenu] = useState(false);
  const handleClickMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  const handleCollapse = () => {
    if (window.screen.width <= 770) {
      if (showMenu) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    }
  };
  

  /*function openLink() {
  
    const history = useHistory();
    const openLink = () =>{ 
      let url =  "https://katikaweb3.notion.site/KATIKA-RECRUTEMENT-4bdd96a3d8c148c296a20d233d04e002";
      history.push(url);
    }
  //}*/
  const openLink = () => {
    window.location.replace('https://katikaweb3.notion.site/KATIKA-RECRUTEMENT-4bdd96a3d8c148c296a20d233d04e002');
  };

  const navigate = useNavigate();

  

  return (
    <>
      <Styles>
        <Navbar expanded={showMenu} sticky="top" variant="light" expand="lg">
          <Container>
            <Navbar.Toggle
              style={{
                zIndex: 999,
                color: "#8815ae",
                border: "none",
              }}
              aria-controls="basic-navbar-nav"
              onClick={handleClickMenu}>
              <Nav style={{ position: "relative" }}>
                <div>
                  {showMenu ? (
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} size="lg" />
                  )}
                </div>
              </Nav>
            </Navbar.Toggle>
            <Nav
              style={{
                position: "absolute",
                justifyContent: "center",
                top: 7,
                left: 0,
                right: 0,
                width: "120px",
                marginRight: "auto",
                marginLeft: "auto",
              }}>
              <Navbar.Brand className=" d-flex d-md-none flex-column" href="/">
                <NavLink to={"/"}>
                  <img
                    src="/logo.svg"
                    alt="logo"
                    className="header__logo"
                    style={{ opacity: 1 }}
                  />
                </NavLink>
              </Navbar.Brand>
            </Nav>
            <Navbar.Collapse>
              <Navbar.Brand className="d-none d-md-flex">
                <NavLink to={"/"}>
                  <img
                    src="/logo.svg"
                    alt="logo"
                    className="header__logo"
                    style={{ background: "transparent", opacity: 1 }}
                  />
                </NavLink>
              </Navbar.Brand>
              <Nav className="my-2 ms-auto me-auto">
                <NavLink
                  onClick={handleCollapse}
                  className="normalink"
                  style={({ isActive }) =>
                    isActive ? { color: "#8815ae" } : {}
                  }
                  to={"/"}>
                  {t("header.Home")}
                </NavLink>

                <NavLink
                  onClick={handleCollapse}
                  className="normalink"
                  style={({ isActive }) =>
                    isActive ? { color: "#8815ae" } : {}
                  }
                  to={"/katika-wallet"}>
                  Katika Wallet
                </NavLink>
                <NavLink
                  onClick={handleCollapse}
                  style={({ isActive }) =>
                    isActive ? { color: "#8815ae" } : {}
                  }
                  className="normalink"
                  to="/blog">
                  Blog
                </NavLink>
                <a
                 // onClick={handleCollapse}                 
                  /*style={({ isActive }) =>
                    isActive ? { color: "#8815ae" } : {}
                  }*/
                  className="normalink"                   
                  onclick={openLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://katikaweb3.notion.site/KATIKA-RECRUTEMENT-4bdd96a3d8c148c296a20d233d04e002"
                    >
                    {t("footer.Carrières")}
                  </a>
                
                
                <NavLink
                  onClick={handleCollapse}
                  style={({ isActive }) =>
                    isActive ? { color: "#8815ae" } : {}
                  }
                  className="normalink"
                  to="/about-us">
                  {t("header.About_Us")}
                </NavLink>
                <NavLink
                  onClick={handleCollapse}
                  style={({ isActive }) =>
                    isActive ? { color: "#8815ae" } : {}
                  }
                  className="normalink"
                  to="/contact">
                  Contact
                </NavLink>
              </Nav>
              <Nav className="normalink">
                <div className="dropdown">
                  <div
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <i style={{ marginRight: "3px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-translate mb-1"
                        viewBox="0 0 16 16">
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>
                    </i>
                    {language.includes("fr") ? "Français" : "English"}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="xs"
                      style={{ paddingTop: "2px", paddingLeft: "5px" }}
                    />
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className={"dropdown-menu"}
                    aria-labelledby="dropdownMenuButton">
                    <a
                      className={
                        language.includes("fr")
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      onClick={() => changeLanguage("fr")}>
                      Français
                    </a>
                    <a
                      className={
                        language.includes("en")
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      onClick={() => changeLanguage("en")}>
                      English
                    </a>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

const CustomNav = styled.div``;

const Styles = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1000;
  .navbar {
    background: white;
    box-shadow: 1px 3px 10px 2px rgba(0, 0, 0, 0.03);
  }
  .aria {
    border: 0px;
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .navlink,
  .normalink {
    margin-left: 15px;
    margin-right: 15px;
    color: #31073f;
    text-decoration: none;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.1rem;
    &: hover {
      color: #8815ae;
    }
  }
  .normalink .norm {
    margin-left: 15px;
    margin-right: 15px;
    color: #31073f;
    text-decoration: none;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1rem;
    &: hover {
      color: #8815ae;
    }
  }

  @media screen and (max-width: 770px) {
    .content {
      height: 100%;
      flex-direction: column;
      align-items: center;
      padding-top: 25px;
      margin-bottom: 25px;
    }
    .content .navlink {
      width: 93%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px 0px;
    }
    .search-container {
      margin-top: 25px;
    }
    .head {
      left: 0px;
      border-bottom: 1px solid #dbdbdb;
    }
    .drop {
      width: 93vw;
      position: relative;
    }
    .normalink {
      width: 93%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px 15px;
    }
  }
`;
