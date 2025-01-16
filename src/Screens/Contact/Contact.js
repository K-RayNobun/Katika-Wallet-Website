import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.scss";

//**Translate */
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import bg from "./../../Assets/Img/bg.jpg";

export default function Contact() {
  const { t } = useTranslation();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .send("service_7pnxgwf", "template_g7an5n4", values, "G-Td7v53xGMMODzfS")
      .then(
        (response) => {
          setValues({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setSending(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " Your message has not been sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          setSending(false);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: " Your message was not sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="contact__main">
      <Container>
        <div className="contact__intro">
          <h1 className="contact__h1">{t("contact.Header_title")}</h1>
          <p>{t("contact.Header_text")}</p>
        </div>
        <Row className="contact__row">
          <Col
            md="4"
            className="d-none d-md-block no_padding"
            style={{ backgroundImage: `url(${bg})`, padding: 0 }}>
            <div className="contact__overlay container">
              <h4>{t("contact.Content_title")}</h4>
              <p style={{ fontSize: 14, fontWeight: 400 }}>
                {t("contact.Content_text")}
              </p>
              <div className="contact__panel">
                <div className="contact__arow">
                  <FontAwesomeIcon className="contact__icon" icon={faPhone} />
                  <span className="contact__text">+237 697 46 19 71</span>
                </div>
                <div className="contact__arow">
                  <FontAwesomeIcon
                    className="contact__icon"
                    icon={faEnvelope}
                  />
                  <span className="contact__text">support@katika.io</span>
                </div>
                <div className="contact__arow">
                  <FontAwesomeIcon
                    className="contact__icon"
                    icon={faLocationPin}
                  />
                  <span className="contact__text">Akwa, Douala</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md="8" className="contact__right_col">
            <form onSubmit={handleSubmit}>
              <div className="row contact__arow">
                <div className="contact__inp col-md-6 col-sm-12">
                  <label htmlFor="fname" className="contact__label">
                    {t("contact.First_Name")}
                  </label>
                  <input
                    id="fname"
                    type="text"
                    className="contact__input"
                    placeholder={t("contact.First_Name")}
                    value={values.firstName || ""}
                    onChange={handleChange}
                    name="firstName"
                    required
                  />
                </div>
                <div className="contact__inp col-md-6 col-sm-12">
                  <label htmlFor="lname" className="contact__label">
                    {t("contact.Last_Name")}
                  </label>
                  <input
                    id="lname"
                    type="text"
                    className="contact__input"
                    placeholder={t("contact.Last_Name")}
                    value={values.lastName || ""}
                    onChange={handleChange}
                    name="lastName"
                    required
                  />
                </div>
              </div>
              <div className="row contact__arow">
                <div className="contact__inp col-md-6 col-sm-12">
                  <label htmlFor="email" className="contact__label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="contact__input"
                    placeholder="Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>
                <div className="contact__inp col-md-6 col-sm-12">
                  <label htmlFor="phone" className="contact__label">
                    {t("contact.Phone")}
                  </label>
                  <input
                    id="phone"
                    type="phone"
                    className="contact__input"
                    placeholder={t("contact.Phone")}
                    value={values.phone || ""}
                    onChange={handleChange}
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="contact__inp">
                <label htmlFor="message" className="contact__label">
                  {t("contact.Message")}
                </label>
                <textarea
                  id="message"
                  className="contact__textarea"
                  placeholder={t("contact.Message")}
                  name="message"
                  value={values.message || ""}
                  onChange={handleChange}
                  required></textarea>
              </div>
              <div className="contact__button_div">
                <button className="contact__sendbtn" type="submit">
                  {sending ? (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"></span>
                  ) : (
                    ""
                  )}
                  {t("contact.Send_Message")}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
