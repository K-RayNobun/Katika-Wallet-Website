import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./BlogList.scss";
import empty from "../../Assets/Img/blog/empty.svg";

import { useTranslation } from "react-i18next";

const BlogList = ({ posts, category }) => {
  const { t } = useTranslation();
  return (
    <>
      {posts ? (
        <div class="container blog__list">
          <div className="row my-4">
            <div className="col">
              <h5>{category ? category : "Featured Article"}</h5>
            </div>
            <div className="col">
              <h5 className="float-end d-none">{t("blog.See_All_Article")}</h5>
            </div>
          </div>
          <div class="row ">
            {posts.map((post) => (
              <div class="col-sm blog__list-item" key={post.id}>
                <BlogItem post={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="blog__list-image">
          <img src={empty} alt="empy" />
        </div>
      )}
    </>
  );
};

export default BlogList;
