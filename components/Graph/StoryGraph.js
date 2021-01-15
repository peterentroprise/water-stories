import React from "react";
import WebCola from "react-cola";
import { Line } from "react-lineto";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {
    width: 200,
  },
}));

function stripTypenames(value) {
  if (Array.isArray(value)) {
    return value.map(stripTypenames);
  } else if (value !== null && typeof value === "object") {
    const newObject = {};
    for (const property in value) {
      if (property !== "__typename") {
        newObject[property] = stripTypenames(value[property]);
      }
    }
    return newObject;
  } else {
    return value;
  }
}

const StoryGraph = ({ stories }) => {
  const classes = useStyles();
  const router = useRouter();

  const cleanStories = stripTypenames(stories);

  const storyNodes = cleanStories.map((v) => ({
    ...v,
    width: 208,
    height: 48,
  }));

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
                  padding: 4,
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
          {layout.nodes().map(({ x, y, width, height, storyName, slug }, i) => (
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
                className={classes.chip}
                label={storyName}
                clickable
                onClick={() => {
                  router.push(`/stories/${slug}`);
                }}
                color="primary"
              />
            </div>
          ))}
        </>
      )}
      nodes={storyNodes}
      links={[
        { source: 2, target: 3 },
        { source: 1, target: 4 },
      ]}
      groups={[
        // { leaves: [0], groups: [1] },
        { leaves: [2, 3] },
        { leaves: [1, 4] },
      ]}
      width={540}
      height={760}
    />
  );
};

export default StoryGraph;
