import React, { useEffect, useState } from "react";
import { Container } from "./Container.js";
import TechnologiesPageWrap from "./Technologies.Page";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnologiesPage = ({ allImages }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipCards = () => {
    setIsFlipped(!isFlipped);
  };

  const allImagesArray = Object.entries(allImages);

  const defaultBoxes = {
    a: { top: 0, left: 0, title: allImagesArray[0][1], titleBack: allImagesArray[0][0] },
    b: { top: 0, left: 0, title: allImagesArray[1][1], titleBack: allImagesArray[1][0] },
    c: { top: 0, left: 0, title: allImagesArray[2][1], titleBack: allImagesArray[2][0] },
    d: { top: 0, left: 0, title: allImagesArray[3][1], titleBack: allImagesArray[3][0] },
    e: { top: 0, left: 0, title: allImagesArray[4][1], titleBack: allImagesArray[4][0] },
    f: { top: 0, left: 0, title: allImagesArray[5][1], titleBack: allImagesArray[5][0] },
    g: { top: 0, left: 0, title: allImagesArray[6][1], titleBack: allImagesArray[6][0] },
    h: { top: 0, left: 0, title: allImagesArray[7][1], titleBack: allImagesArray[7][0] },
    i: { top: 0, left: 0, title: allImagesArray[8][1], titleBack: allImagesArray[8][0] },
    j: { top: 0, left: 0, title: allImagesArray[9][1], titleBack: allImagesArray[9][0] },
    k: { top: 0, left: 0, title: allImagesArray[10][1], titleBack: allImagesArray[10][0] },
    l: { top: 0, left: 0, title: allImagesArray[11][1], titleBack: allImagesArray[11][0] },
    m: { top: 0, left: 0, title: allImagesArray[12][1], titleBack: allImagesArray[12][0] },
    n: { top: 0, left: 0, title: allImagesArray[13][1], titleBack: allImagesArray[13][0] },
    o: { top: 0, left: 0, title: allImagesArray[14][1], titleBack: allImagesArray[14][0] },
    p: { top: 0, left: 0, title: allImagesArray[15][1], titleBack: allImagesArray[15][0] },
    q: { top: 0, left: 0, title: allImagesArray[16][1], titleBack: allImagesArray[16][0] },
    r: { top: 0, left: 0, title: allImagesArray[17][1], titleBack: allImagesArray[17][0] },
    s: { top: 0, left: 0, title: allImagesArray[18][1], titleBack: allImagesArray[18][0] },
    t: { top: 0, left: 0, title: allImagesArray[19][1], titleBack: allImagesArray[19][0] },
    u: { top: 0, left: 0, title: allImagesArray[20][1], titleBack: allImagesArray[20][0] },
    v: { top: 0, left: 0, title: allImagesArray[21][1], titleBack: allImagesArray[21][0] },
    w: { top: 0, left: 0, title: allImagesArray[22][1], titleBack: allImagesArray[22][0] },
    x: { top: 0, left: 0, title: allImagesArray[23][1], titleBack: allImagesArray[23][0] }
  };

  const [boxes, setBoxes] = useState(defaultBoxes);

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
          <p className="description">
            Below are languages, frameworks, tools, and ancillary technologies I
            provide when building websites.
          </p>
        </div>
        <Container
          allImagesArray={allImagesArray}
          setBoxes={setBoxes}
          boxes={boxes}
          defaultBoxes={defaultBoxes}
          isFlipped={isFlipped}
        />
        <div className="drag-options">
          <button
            className="flip-button"
            type="submit"
            onClick={() => handleFlipCards()}
          >
            Flip Cards
          </button>
          <button
            className="reset-button"
            type="submit"
            onClick={() => setBoxes(defaultBoxes)}
          >
            Reset Box
          </button>
        </div>
      </div>
    </TechnologiesPageWrap>
  );
};

export default TechnologiesPage;
