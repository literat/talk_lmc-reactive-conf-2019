import React from "react";
import { useDeck } from "mdx-deck";

const Provider = ({ children }) => {
  const { index, length } = useDeck();
  return (
    <>
      {children}

      <div
        style={{
          position: "absolute",
          width: "92vw",
          bottom: "1em",
          display: "flex",
          margin: "0 50px",
          justifyContent: "space-between",
          fontFamily: "Source Sans Pro,sans-serif",
          color: "#003e7e"
        }}
      >
        <span>2020-06-17 LMC Frontend Sharing</span>
          tomas.litera@lmc.eu
      </div>

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <div
          style={{
            background: "#0fbdcd",
            height: 3,
            width: `${(100 * (index + 1)) / length}%`
          }}
        />
      </div>
    </>
  );
};

export default Provider;
