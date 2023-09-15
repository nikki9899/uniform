import React from "react";

const CircularButton = ({
  backgroundColor = "black",
  children,
  ...restProps
}) => {
  return (
    <button
      className={`flex justify-center py-5 px-5 w-fit rounded-full bg-${backgroundColor}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CircularButton;
