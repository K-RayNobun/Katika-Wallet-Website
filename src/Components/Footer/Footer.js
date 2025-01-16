import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import axiosInstance from "../../Helpers/axios";

//**Translate */
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Footer = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
  const changeLanguage = async (lng) => {
    setLanguage(lng);
    await i18n.changeLanguage(lng);
  };

  const [email, setEmail] = useState("");

  const handleSubmint = (e) => {
    e.preventDefault();
    const category = "Simple";
    axiosInstance
      .post("/newsletter", { email, category })
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
  return (
    <>
      <footer style={{ background: "#1c0e36" }}>
        <div className="container py-3">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img
                src="/logo-white.svg"
                alt="logo"
                width="220"
                className="mb-3 footer__logo"
                style={{ background: "transparent", opacity: 1, width: 220 }}
              />
              <p className="font-italic text-muted">{t("footer.mission")}</p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase text-white font-weight-bold mb-4">
                {t("footer.liens_utiles")}
              </h6>
              <ul className="list-unstyled mb-0 ">
                <li className="mb-2">
                  <Link to={"/showcase-wallet"}>{t("footer.case_study")}</Link>
                </li>
                <li className="mb-2">
                  <Link to={"/privacypolicy"}>{t("footer.politique")}</Link>
                </li>
                <li className="mb-2">
                  <Link to={"/userlicenseagreement"}>
                    {t("footer.licebse_user")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"/contact"}>{t("footer.Contact")}</Link>
                </li>
                <li className="mb-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://katikaweb3.notion.site/KATIKA-RECRUTEMENT-4bdd96a3d8c148c296a20d233d04e002">
                    {t("footer.Carrières")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4 text-white">
                {t("footer.services")}
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to={"/katika-wallet"}>Katika Wallet</Link>
                </li>

                <li className="mb-2">
                  <Link to={"/showcase-ludokin"}>Ludokin</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4 text-white">
                {t("footer.NEWSLETTER")}
              </h6>
              <p className="text-muted mb-4">{t("footer.subscribe")}</p>
              <form onSubmit={handleSubmint}>
                <div className="p-1 rounded border border-secondary">
                  <div className="input-group">
                    <input
                      type="email"
                      value={email}
                      placeholder={t("footer.entrer_email")}
                      className="form-control border-0 shadow-0"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="input-group-append">
                      <button
                        type="submit"
                        className="btn btn-link button-newsletter">
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="container p-2"
          style={{ background: "#1c0e36", borderTop: "solid" }}>
          <div className="row">
            <div className="col-sm-6">
              <div className="text-center ">
                <p className="text-white  py-2">
                  © {new Date().getFullYear()} {t("footer.copyright")}
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex justify-content-center align-items-center">
                <ul className="list-inline social ">
                  <li className="list-inline-item">
                    <a
                      href="https://facebook.com/sactionsarl"
                      target="_blank"
                      title="facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/saction_sarl/"
                      target="_blank"
                      title="instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://twitter.com/SactionSarl"
                      target="_blank"
                      title="twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/company/sactionsarl/"
                      target="_blank"
                      title="LinkedIn">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
