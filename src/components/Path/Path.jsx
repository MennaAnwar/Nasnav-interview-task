import React from "react";
import "./Path.scss";

const Path = ({ path }) => {
  return (
    <>
      <div className="px-5 mt-3">
        {path.map((item, index) => (
          <span className="path" key={index}>
            {item}
            {index < path.length - 1 && " > "}
          </span>
        ))}
      </div>
      <hr className="hr" />
    </>
  );
};

export default Path;
