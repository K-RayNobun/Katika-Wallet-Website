import React, { useEffect } from "react";
import "./BrowseCategory.scss";

const BrowseCategory = () => {
  useEffect(() => {
    const tabsBox = document.querySelector(".tabs-box"),
      allTabs = tabsBox.querySelectorAll(".tab"),
      arrowIcons = document.querySelectorAll(".icon i");
    let isDragging = false;

    const handleIcons = (scrollVal) => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
      arrowIcons[0].parentElement.style.display =
        scrollVal <= 0 ? "none" : "flex";
      arrowIcons[1].parentElement.style.display =
        maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    };

    arrowIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = (tabsBox.scrollLeft +=
          icon.id === "left" ? -340 : 340);
        handleIcons(scrollWidth);
      });
    });

    allTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
        console.log("tab", tab.getAttribute("data-value"));
      });
    });

    const dragging = (e) => {
      if (!isDragging) return;
      tabsBox.classList.add("dragging");
      tabsBox.scrollLeft -= e.movementX;
      handleIcons(tabsBox.scrollLeft);
    };

    const dragStop = () => {
      isDragging = false;
      tabsBox.classList.remove("dragging");
      tabsBox.addEventListener("mousedown", () => (isDragging = true));
      tabsBox.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
    };
  }, []);

  return (
    <div className="blog__browseCategory my-4">
      <div className="container">
        <h5>Browse The category</h5>
        <div className=" my-2 d-flex justify-content-center">
          <div className="wrapper-button">
            <div className="icon d-sm-none">
              <i id="left" className="fa-solid fa-angle-left"></i>
            </div>
            <ul className="tabs-box">
              <li className="tab" data-value="blockchain">
                Blockchain
              </li>
              <li className="tab active" data-value="iot">
                IOT
              </li>
              <li className="tab" data-value="katika_wallet">
                Katika Wallet
              </li>
              <li className="tab" data-value="geolocalisation">
                Geolocalisation
              </li>
              <li className="tab" data-value="ludokin">
                Ludokin
              </li>
            </ul>
            <div className="icon d-sm-none">
              <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
