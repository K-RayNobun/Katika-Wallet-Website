import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axiosInstance from "../../Helpers/axios";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "react-avatar";
import { LoginSocialFacebook } from "reactjs-social-login";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { FacebookLoginButton } from "react-social-login-buttons";
import jwt_decode from "jwt-decode";

//**import icons */
import {
  faThumbsUp,
  faThumbsDown,
  faPaperPlane,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import RelatedPosts from "../RelatedPosts/RelatedPosts";
import "./BlogDetails.scss";

import Comment from "../comment/Comment";
import Spinner from "../Spinner/Spinner";

//**Translate */
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [profile, setProfile] = useState(null);
  const [visitors, setVisitors] = useState([]);
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const [isLoadingVisitor, setIsLoadingVisitor] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const [comment, setComment] = useState("");

  //Fetch data
  useEffect(() => {
    axiosInstance.get(`/post/${id}`).then((res) => {
      setIsLoading(true);
      setPost(res.data);
    });
    axiosInstance.get(`/comments`).then((res) => {
      let datas = res.data;
      datas = datas.filter((data) => data.post_id == id);
      setComments(datas);
      setIsLoadingComment(true);
    });
    axiosInstance.get(`/visitors`).then((res) => {
      setVisitors(res.data);
      setIsLoadingVisitor(true);
    });
    if (localStorage.getItem("user")) {
      setUserLogin(true);
    }
  }, []);

  const handleLike = () => {
    if (localStorage.getItem("user")) {
      axiosInstance
        .put(`/post/like/${post.id}`, {
          like: post.like + 1,
          visitor_id: JSON.parse(localStorage.getItem("user")).id,
        })
        .then((res) => {
          setPost(res.data);
        });
    } else {
      alert(t("blog.alert"));
    }
  };

  const handleDisLike = () => {
    if (localStorage.getItem("user")) {
      if (post.like > 0) {
        axiosInstance
          .put(`/post/like/${post.id}`, {
            like: post.like - 1,
            visitor_id: JSON.parse(localStorage.getItem("user")).id,
          })
          .then((res) => {
            setPost(res.data);
          });
      }
    } else {
      alert(t("blog.alert"));
    }
  };

  const handleComments = () => {
    if (!localStorage.getItem("user")) {
      alert(t("blog.alert"));
    }
  };

  const findVisitorById = (id) => {
    return visitors.find((visitor) => visitor.id == id);
  };

  const handleSendComment = (event) => {
    event.preventDefault();
    axiosInstance
      .post(`/comment`, {
        content: comment,
        post_id: +post.id,
        visitor_id: JSON.parse(localStorage.getItem("user")).id,
      })
      .then(() => {
        setComment("");
        axiosInstance.get(`/comments`).then((res) => {
          let datas = res.data;
          datas = datas.filter((data) => data.post_id == id);
          setComments(datas);
        });
      });
  };

  const handleGoogleLogin = (visitor) => {
    setUserLogin(true);
    axiosInstance
      .post("/visitor", {
        name: visitor.name,
        avatar: visitor.picture,
        googleProviderId: visitor.sub,
      })
      .then((res) => {
        setProfile(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      });
  };

  return (
    <>
      {isLoading ? (
        <div className="container my-3">
          <Link className="blog-goBack" to="/blog">
            <span> &#8592;</span> <span>{t("blog.back_button")}</span>
          </Link>
          <div className="container py-4  ">
            <div className="d-flex justify-content-between mt-2">
              <p>{post.created_at.split("T")[0]}</p>
              <h6>{post.category}</h6>
            </div>
            <div>{parse(post.content)}</div>
            <div className="d-flex flex-direction-row justify-content-between blog__detail-like">
              <label>
                <FontAwesomeIcon icon={faThumbsUp} className="me-1" />
                {post.like} {t("blog.likes")}
              </label>
              <label>
                <FontAwesomeIcon icon={faMessage} />
                {comments ? ` ${comments.length} ` : "  0  "}
                {t("blog.Comments")}
              </label>
            </div>
            <div className="d-flex flex-direction-row justify-content-between blog__detail-likeAction">
              <button
                className="blog__detail-buttonAction"
                onClick={handleLike}>
                <FontAwesomeIcon icon={faThumbsUp} /> {t("blog.likes")}
              </button>
              <button
                className="blog__detail-buttonAction"
                onClick={handleDisLike}>
                <FontAwesomeIcon icon={faThumbsDown} /> {t("blog.Dislikes")}
              </button>
              <button
                className="blog__detail-buttonAction"
                onClick={handleComments}>
                <FontAwesomeIcon icon={faMessage} /> {t("blog.Comments")}
              </button>
            </div>
            <div className="blog__detail-comment">
              {userLogin ? (
                <form onSubmit={handleSendComment}>
                  <div className=" d-flex flex-direction-row  my-2 ">
                    <Avatar
                      size="40px"
                      round={true}
                      src={profile ? profile.avatar : ""}
                    />
                    <textarea
                      name="comment"
                      rows="5"
                      cols="500"
                      className="mx-2 form__comment-textarea"
                      placeholder=" Comments"
                      value={comment}
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}></textarea>
                    <button
                      style={{ maxHeight: 55, alignSelf: "end" }}
                      className="btn-custom-contained btn-primary"
                      type="submit">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </form>
              ) : (
                ""
              )}
              {!userLogin ? (
                <div className="signIn">
                  <button
                    className="btn-signIn"
                    data-bs-toggle="modal"
                    data-bs-target="#signinModal">
                    {t("blog.Sign_in")}
                  </button>
                </div>
              ) : (
                ""
              )}
              <div className="comments">
                {isLoadingComment && isLoadingVisitor && comments ? (
                  comments.map((comment) => (
                    <Comment
                      comment={comment}
                      visitor={findVisitorById(comment.visitor_id)}
                      key={comment.id}
                    />
                  ))
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <RelatedPosts />
      <div
        className="modal fade"
        id="signinModal"
        tabIndex="-1"
        aria-labelledby="signinModal"
        aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-body modal-background">
              <div className="mb-4">
                <h5 className="modal-title">{t("blog.Sign_in")}</h5>
              </div>
              <div className="d-flex justify-content-center">
                <LoginSocialFacebook
                  isOnlyGetToken
                  appId={process.env.REACT_APP_FB_APP_ID || ""}
                  onResolve={({ response }) => {
                    console.log("Data", response);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <FacebookLoginButton />
                </LoginSocialFacebook>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_GG_APP_ID}>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      const details = jwt_decode(credentialResponse.credential);
                      handleGoogleLogin(details);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </GoogleOAuthProvider>
              </div>
              <button
                type="button"
                className="cancel-btn mt-4 float-end"
                data-bs-dismiss="modal">
                {t("blog.Close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
