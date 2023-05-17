import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { Box } from "./Box.js";
import { ItemTypes } from "./ItemTypes.js";
const styles = {
  width: 300,
  height: 300,
  border: "1px solid black",
  position: "relative",
};
export const Container = ({ hideSourceOnDrag, allImagesArray }) => {
  const draggableImage = allImagesArray.map((image) => {
    const imageName = image[0].toUpperCase().split("_").pop().split(".PNG");
    return (
      <img
        className="tech-image"
        width="37px"
        height="auto"
        src={image[1]}
        key={imageName}
        alt={imageName}
      />
    );
  });

  const [boxes, setBoxes] = useState({
    a: { top: 0, left: 0, title: allImagesArray[0][1] },
    b: { top: 0, left: 100, title: allImagesArray[1][1] },
    c: { top: 0, left: 200, title: allImagesArray[2][1] },
    d: { top: 0, left: 300, title: allImagesArray[3][1] },
    e: { top: 0, left: 400, title: allImagesArray[4][1] },
    f: { top: 0, left: 500, title: allImagesArray[5][1] },
    g: { top: 0, left: 600, title: allImagesArray[6][1] },
    h: { top: 0, left: 700, title: allImagesArray[7][1] },
    i: { top: 100, left: 0, title: allImagesArray[8][1] },
    j: { top: 100, left: 100, title: allImagesArray[9][1] },
    k: { top: 100, left: 200, title: allImagesArray[10][1] },
    l: { top: 100, left: 300, title: allImagesArray[11][1] },
    m: { top: 100, left: 400, title: allImagesArray[12][1] },
    n: { top: 100, left: 500, title: allImagesArray[13][1] },
    o: { top: 100, left: 600, title: allImagesArray[14][1] },
    p: { top: 100, left: 700, title: allImagesArray[15][1] },
    q: { top: 200, left: 0, title: allImagesArray[16][1] },
    r: { top: 200, left: 100, title: allImagesArray[17][1] },
    s: { top: 200, left: 200, title: allImagesArray[18][1] },
    t: { top: 200, left: 300, title: allImagesArray[19][1] },
    u: { top: 200, left: 400, title: allImagesArray[20][1] },
    v: { top: 200, left: 500, title: allImagesArray[21][1] },
    w: { top: 200, left: 600, title: allImagesArray[22][1] },
    x: { top: 200, left: 700, title: allImagesArray[23][1] },
  });

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
    <div className="tech-box" ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left * 1.09}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            <img
              className="tech-image"
              width="37px"
              height="auto"
              src={title}
              key={title}
              alt={title}
            />
          </Box>
        );
      })}
    </div>
  );
};
