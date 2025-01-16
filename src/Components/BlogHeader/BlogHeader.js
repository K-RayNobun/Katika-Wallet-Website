import React from "react";
import "./BlogHeader.scss";
import letter from "../../Assets/Img/blog/headerImage.svg";

//**Translate */
import { useTranslation } from "react-i18next";

const BlogHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container py-4">
        <div className="row my-4 ">
          <div className="col blog__header-text">{t("blog.Header_title")}</div>
          <div className="col blog__header-image">
            <img src={letter} alt="image" style={{ width: 336, height: 300 }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
