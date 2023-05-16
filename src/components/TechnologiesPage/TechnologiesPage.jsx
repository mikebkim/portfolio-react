import React, { useEffect } from "react";
import Styled_TechnologiesPage from "./Styled_TechnologiesPage";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnologiesPage = ({ allImages }) => {
  const allImagesArray = Object.entries(allImages);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Styled_TechnologiesPage>
      <div className="TechnologiesPage" data-aos="fade-up">
        <div className="header">
          <h1>TECHNOLOGIES</h1>
          <hr />
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
    </Styled_TechnologiesPage>
  );
};

export default TechnologiesPage;