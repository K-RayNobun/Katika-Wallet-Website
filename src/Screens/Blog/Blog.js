import React, { useEffect, useState, useRef } from "react";
import BlogHeader from "../../Components/BlogHeader/BlogHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Blog.scss";
import axiosInstance from "../../Helpers/axios";
import BlogList from "../../Components/BlogList/BlogList";
import EmptyBnlog from "../../Assets/Img/blog/empty.svg";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//**Translate */
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState(null);
  const [defautlPosts, setDefautlPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");

  //Fetch data
  useEffect(() => {
    axiosInstance.get("/posts").then((res) => {
      setPosts(res.data);
      setDefautlPosts(res.data);
      setIsLoading(true);
    });
  }, []);

  const handleCategoryBlockchain = () => {
    if (category == "Blockchain") {
      setCategory("");
      if (posts) setPosts(defautlPosts);
    } else {
      setCategory("Blockchain");
      if (posts)
        setPosts(defautlPosts.filter((data) => data.category == "Blockchain"));
    }
  };
  const handleCategoryGeolocalisation = () => {
    if (category == "Geolocalisation") {
      setCategory("");
      if (posts) setPosts(defautlPosts);
    } else {
      setCategory("Geolocalisation");
      if (posts)
        setPosts(
          defautlPosts.filter((data) => data.category == "Geolocalisation")
        );
    }
  };
  const handleCategoryWallet = () => {
    if (category == "Katika Wallet") {
      setCategory("");
      if (posts) setPosts(defautlPosts);
    } else {
      setCategory("Katika Wallet");
      if (posts)
        setPosts(
          defautlPosts.filter((data) => data.category == "Katika Wallet")
        );
    }
  };
  const handleCategoryIOT = () => {
    if (category == "IOT") {
      setCategory("");
      setPosts(defautlPosts);
    } else {
      setCategory("IOT");
      if (posts)
        setPosts(defautlPosts.filter((data) => data.category == "IoT"));
    }
  };
  const handleCategoryLudokin = () => {
    if (category == "Ludokin") {
      setCategory("");
      if (posts) setPosts(defautlPosts);
    } else {
      setCategory("Ludokin");
      if (posts)
        setPosts(defautlPosts.filter((data) => data.category == "Ludokin"));
    }
  };

  const ref = useRef(null);

  const scrollUsers = (offset) => {
    ref.current.scrollLeft += offset;
  };

  return (
    <div className="blog">
      <BlogHeader />
      <div className="blog__browseCategory my-4">
        <div className="container">
          <h5>{t("blog.Browse_category")}</h5>
          <div className="d-flex align-items-center justify-content-centr">
            <button
              className="blog__browseCategory-buttonctrl d-xl-none"
              onClick={() => scrollUsers(-210)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div ref={ref} className="blog__browseCategory-button ">
              <button
                className={category == "Blockchain" ? "tab active" : "tab"}
                onClick={handleCategoryBlockchain}>
                Blockchain
              </button>
              <button
                className={category == "IOT" ? "tab active" : "tab"}
                onClick={handleCategoryIOT}>
                IoT
              </button>
              <button
                className={category == "Katika Wallet" ? "tab active" : "tab"}
                onClick={handleCategoryWallet}>
                Katika Wallet
              </button>
              <button
                className={category == "Geolocalisation" ? "tab active" : "tab"}
                onClick={handleCategoryGeolocalisation}>
                Geolocalisation
              </button>
              <button
                className={category == "Ludokin" ? "tab active" : "tab"}
                onClick={handleCategoryLudokin}>
                Ludokin
              </button>
            </div>
            <button
              className="blog__browseCategory-buttonctrl d-xl-none"
              onClick={() => scrollUsers(210)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="container mb-4">
          {!posts.length ? (
            <div className="d-flex justify-content-center">
              <img className="blog__empty-image" src={EmptyBnlog} alt="empty" />
            </div>
          ) : (
            <BlogList posts={posts} category={category} />
          )}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <img className="blog__empty-image" src={EmptyBnlog} alt="empty" />
        </div>
      )}
    </div>
  );
};

export default Blog;
