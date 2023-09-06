"use client";

import React from "react";

export const CircularDownButton = ({
  backgroundColor = "black",
  strokeWidth = "2.31915",
  strokeLineap = "round",
  width = "18",
  height = "11",
  fill = "none",
  onClick = () => {},
}) => {
  return (
    <button
      className={`flex justify-center py-4 px-3 w-fit rounded-full ${
        backgroundColor === "black" ? "bg-black" : "bg-white"
      }`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 18 11"
        fill={fill}
      >
        <path
          d="M15.9575 1.8085L9.00007 8.76595L2.04263 1.8085"
          stroke={`${backgroundColor !== "black" ? "black" : "#E4E5E7"}`}
          stroke-width={strokeWidth}
          stroke-linecap={strokeLineap}
        />
      </svg>
    </button>
  );
};

export const CircularUpButton = ({
  backgroundColor = "black",
  strokeWidth = "2.31915",
  strokeLineap = "round",
  width = "18",
  height = "11",
  fill = "none",
  onClick = () => {},
}) => {
  return (
    <button
      className={`flex justify-center py-4 px-3 w-fit rounded-full ${
        backgroundColor === "black" ? "bg-black" : "bg-white"
      }`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 18 11"
        fill={fill}
      >
        <path
          d="M2.04248 9.1915L8.99993 2.23405L15.9574 9.1915"
          stroke={`${backgroundColor !== "black" ? "black" : "#E4E5E7"}`}
          stroke-width={strokeWidth}
          stroke-linecap={strokeLineap}
        />
      </svg>
    </button>
  );
};
