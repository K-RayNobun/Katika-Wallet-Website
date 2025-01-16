import React from "react";
import { Link } from "react-router-dom";
import "./BlogItem.scss";

//**Translate */
import { useTranslation } from "react-i18next";

const BlogItem = ({ post }) => {
  const { t } = useTranslation();
  const { summary, title, created_at, cover, id } = post;
  return (
    <div className="blogItem-wrap" key={id}>
      <div className="p-2 d-flex justify-content-center">
        <img
          className="blogItem-cover"
          src={`${process.env.REACT_APP_BACKEND_URL}/api/post/image/${cover}`}
          alt="cover"
        />
      </div>
      <h4 className="px-2 text-center">{title}</h4>
      <p className="blogItem-desc px-3">{summary}</p>
      <div className="footer">
        <Link className="blogItem-link px-2 float-end" to={`/blog/${post.id}`}>
          <button className="btn-read">
            {t("blog.Read")}
            <span> &#8594;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
