import React from "react";
import WebCola from "react-cola";
import { Line } from "react-lineto";

const UserGraph = () => {
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
                left: x - width * 0.5,
                top: y - height * 0.5,
                width,
                height,
                backgroundColor: "#fff",
                borderRadius: 5,
              }}
            >
              {name}
            </div>
          ))}
        </>
      )}
      nodes={[
        {
          width: 80,
          height: 40,
          name: "Story 1",
        },
        {
          width: 80,
          height: 40,
          name: "Story 2",
        },
        {
          width: 80,
          height: 40,
          name: "Story 3",
        },
        {
          width: 80,
          height: 40,
          name: "Story 4",
        },
        {
          width: 80,
          height: 40,
          name: "Story 5",
        },
        {
          width: 80,
          height: 40,
          name: "Story 6",
        },
        {
          width: 80,
          height: 40,
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

export default UserGraph;
