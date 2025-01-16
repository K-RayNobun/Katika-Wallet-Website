import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import { Link } from "react-router-dom";
import "./RelatedPosts.scss";

import { useTranslation } from "react-i18next";

const RelatedPosts = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosInstance.get("/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const size = posts.length > 0 ? 3 : posts.length;

  return (
    <div className="RelatedPosts">
      <h5> {t("blog.Related_Posts")}</h5>
      <div className="row d-flex">
        {posts &&
          posts.slice(0, size).map((item) => (
            <div
              className="RelatedPosts-item col-sm"
              style={{
                background: `linear-gradient(rgba(255,255,255,.1), rgba(5, 1, 13, 0.556))`,
              }}>
              <div className="RelatedPosts-category">{item.category}</div>
              <div className="RelatedPosts-textContent">
                <h4>{item.title}</h4>
              </div>

              <div className="float-end" style={{ marginTop: "40px" }}>
                <Link className="btn-read" to={`/blog/${item.id}`}>
                  {t("blog.Read")}
                  <span>&#8594;</span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
