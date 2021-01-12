import React from "react";
import WebCola from "react-cola";
import { Line } from "react-lineto";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const StoryGraph = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const chipHeight = 40;
  const chipWidth = 178;

  return (
    <WebCola
      renderLayout={(layout) => (
        <>
          {layout.groups().map(({ bounds: { x, X, y, Y } }, i) => {
            const width = X - x;
            const height = Y - y;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  width,
                  height,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 5,
                  zIndex: -2,
                }}
              />
            );
          })}
          {layout.links().map(({ source, target }, i) => {
            const { x, y } = source;
            const { x: x2, y: y2 } = target;
            return (
              <Line
                key={i}
                x0={x}
                y0={y}
                x1={x2}
                y1={y2}
                borderColor="#757575"
                zIndex={-1}
              />
            );
          })}
          {layout.nodes().map(({ x, y, width, height, name }, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x - width * 0.5 + 4,
                top: y - height * 0.5 + 4,
                width,
                height,
                // backgroundColor: "#fff",
                borderRadius: 5,
              }}
            >
              <Chip
                avatar={<Avatar>S</Avatar>}
                label={name}
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
              />
            </div>
          ))}
        </>
      )}
      nodes={[
        {
          width: chipWidth,
          height: chipHeight,
          name: "Story 1",
        },
        {
          width: chipWidth,
          height: chipHeight,
          name: "Story 2",
        },
        {
          width: chipWidth,
          height: chipHeight,
          name: "Story 3",
        },
        {
          width: chipWidth,
          height: chipHeight,
          name: "Story 4",
        },
        {
          width: chipWidth,
          height: chipHeight,
          name: "Story 5",
        },
        {
          width: chipWidth,
          height: chipHeight,
          name: "Story 6",
        },
        {
          width: chipWidth,
          height: chipHeight,
          name: "Story 7",
        },
      ]}
      links={[
        { source: 1, target: 2 },
        { source: 2, target: 3 },
        { source: 3, target: 4 },
        { source: 0, target: 1 },
        { source: 2, target: 0 },
        { source: 3, target: 5 },
        { source: 0, target: 5 },
      ]}
      groups={[
        { leaves: [0], groups: [1] },
        { leaves: [1, 2] },
        { leaves: [3, 4] },
      ]}
      width={540}
      height={760}
    />
  );
};

export default StoryGraph;
