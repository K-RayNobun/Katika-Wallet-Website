import React from "react";
import Avatar from "react-avatar";
import "./Comment.scss";

const Comment = ({ comment, visitor }) => {
  return (
    <>
      <div className="my-2">
        <div className="d-flex flex-direction-row ">
          <Avatar
            size="40px"
            round={true}
            src={visitor.avatar}
            className="me-2"
          />
          <div className="blogDeatil__comment">
            <h5>{visitor.name}</h5>
            <h6>{comment.content}</h6>
            <p className="d-flex justify-content-end align-items-end">
              {comment.created_at.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
