import React, { useState } from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        placeholder="Search All"
        value={filter || ""}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </span>
  );
};
