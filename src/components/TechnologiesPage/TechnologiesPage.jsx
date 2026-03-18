import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Container } from "./Container.js";
import TechnologiesPageWrap from "./Technologies.Page";
import AOS from "aos";
import "aos/dist/aos.css";
import Greenland4 from "../../files/Greenland4.jpg";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const importAllImages = () => {
  const context = require.context("../../images", false, /\.(png|jpe?g|svg)$/);

  return context.keys().map((item) => {
    const value = context(item);
    return [item.replace("./", ""), value];
  });
};

const BOX_KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
];

const buildDefaultBoxes = (images) => {
  return BOX_KEYS.reduce((acc, key, index) => {
    const image = images[index];

    if (!image) return acc;

    acc[key] = {
      top: 0,
      left: 0,
      title: image[1],
      titleBack: image[0],
    };

    return acc;
  }, {});
};

const TechnologiesPage = ({ screenWidth }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [boxes, setBoxes] = useState({});
  const [fontSize, setFontSize] = useState(20);

  const breakpoints = {
    mobile: 480,
  };

  const allImagesArray = useMemo(() => importAllImages(), []);
  const defaultBoxes = useMemo(
    () => buildDefaultBoxes(allImagesArray),
    [allImagesArray],
  );

  useEffect(() => {
    const handleResizeHeader = () => {
      const width = window.innerWidth;
      setFontSize(width / 20);
    };

    window.addEventListener("resize", handleResizeHeader);
    handleResizeHeader();

    return () => window.removeEventListener("resize", handleResizeHeader);
  }, []);

  useEffect(() => {
    setBoxes(defaultBoxes);
  }, [defaultBoxes]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleFlipCards = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleResetBoxes = useCallback(() => {
    setBoxes(defaultBoxes);
  }, [defaultBoxes]);

  return (
    <DndProvider backend={HTML5Backend}>
      <TechnologiesPageWrap>
        <img className="greenland" src={Greenland4} alt="greenland" />

        <div className="TechnologiesPage" data-aos="fade-up">
          <div className="header">
            <h1 style={{ fontSize: `${fontSize}px` }}>TECHNOLOGIES</h1>
            <p className="description">
              below are languages, frameworks, tools, and ancillary technologies
              i provide when building websites.
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
              type="button"
              onClick={handleFlipCards}
            >
              FLIP CARDS
            </button>

            {screenWidth > breakpoints.mobile && (
              <button
                className="reset-button"
                type="button"
                onClick={handleResetBoxes}
              >
                RESET BOX
              </button>
            )}
          </div>
        </div>
      </TechnologiesPageWrap>
    </DndProvider>
  );
};

export default TechnologiesPage;
