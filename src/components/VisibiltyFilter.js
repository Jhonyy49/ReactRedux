import React from "react";
import { VISIBILITY_FILTER } from "../constants";
import { object } from "prop-types";

const VisibiltyFilter = () => {
  return (
    <div
      className="filter"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        justifyContent: "space-around",
      }}
    >
      {Object.keys(VISIBILITY_FILTER).map((filterkey) => {
        const currentFilter = VISIBILITY_FILTER[filterkey];
        return (
          <button key={`visibilty-filter-${currentFilter}`}>{currentFilter}</button>
        );
      })}
    </div>
  );
};

export default VisibiltyFilter;
