import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrolltoTop.scss";

const ScrolltoTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollTopTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <>
      {showButton ? (
        <div className="scrollToTop" onClick={handleScrollTopTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ScrolltoTop;
