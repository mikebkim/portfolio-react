import update from "immutability-helper";
import { useCallback, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { Box } from "./Box.js";
import { ItemTypes } from "./ItemTypes.js";

export const Container = ({ boxes, setBoxes, isFlipped }) => {
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

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div className="tech-box" ref={drop} style={{ fontSize: `${fontSize}px` }}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title, titleBack } = boxes[key];
        const imageName = titleBack
          .toUpperCase()
          .split("_")
          .pop()
          .split(".PNG");
        const cssImage =
          titleBack.includes("css") || titleBack.includes("heroku") ? (
            <img
              className="flip-card-inner-max"
              src={title}
              key={imageName}
              alt={imageName}
            />
          ) : (
            <img
              className="flip-card-inner"
              src={title}
              key={imageName}
              alt={imageName}
            />
          );
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
          >
            {!isFlipped ? (
              cssImage
            ) : (
              <div className="flip-card-back">
                <h3>{imageName}</h3>
              </div>
            )}
          </Box>
        );
      })}
    </div>
  );
};
