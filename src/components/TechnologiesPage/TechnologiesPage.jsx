import React, { useEffect, useState } from "react";
import TechnologiesPageWrap from "./Technologies.Page";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnologiesPage = ({ allImages }) => {
  const allImagesArray = Object.entries(allImages);

  useEffect(() => {
    AOS.init();
  }, []);

  const [fontSize, setFontSize] = useState(20);

  useEffect(() => {
    function handleResizeHeader() {
      const width = window.innerWidth;
      const newFontSize = width / 20;

      setFontSize(newFontSize);
    }

    window.addEventListener("resize", handleResizeHeader);
    handleResizeHeader();

    return () => window.removeEventListener("resize", handleResizeHeader);
  }, []);

  return (
    <TechnologiesPageWrap>
      <div className="TechnologiesPage" data-aos="fade-up">
        <div className="header">
          <h1 style={{ fontSize: `${fontSize}px` }}>TECHNOLOGIES</h1>
          {/* <hr /> */}
          <p className="description">
            Below are languages, frameworks, tools, and ancillary technologies I
            provide when building websites.
          </p>
        </div>

        <div className="technologies-list" data-aos="fade-up">
          {allImagesArray.map((image) => {
            const imageName = image[0]
              .toUpperCase()
              .split("_")
              .pop()
              .split(".PNG");
            const cssImage = image[0].includes("css" || "react") ? (
              <img
                className="tech-image"
                width="37px"
                height="auto"
                src={image[1]}
                key={imageName}
                alt={imageName}
              />
            ) : (
              <img
                className="tech-image"
                src={image[1]}
                key={imageName}
                alt={imageName}
              />
            );

            return (
              <div className="flip-card aos-init aos-animate" key={imageName}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">{cssImage}</div>
                  <div className="flip-card-back">
                    <h3>{imageName}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </TechnologiesPageWrap>
  );
};

export default TechnologiesPage;
