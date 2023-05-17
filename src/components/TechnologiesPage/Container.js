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
    a: { top: 20, left: 80, title: draggableImage },
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
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {title}
          </Box>
        );
      })}
    </div>
  );
};
