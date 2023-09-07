import React from "react";

function Button({ variant, rounded, onClick }) {
  let className =
    "text-gray-900 font-manrope  lowercase bg-transparent border";

  if (rounded === "Full") {
    className += " rounded-full text-xs font-medium py-2 px-4  border-gray-700";
  } else if (rounded === "semi") {
    className += " rounded-lg text-24 font-normal px-4 py-2  border-gray-700";
  } else {
    className +=
      " text-white text-24 font-normal lowercase bg-[#C46145] border-none p-4 space-x-2 rounded-lg font-manrope";
  }

  return (
    <button className={className} onClick={onClick}>
      {variant}
    </button>
  );
}

export default Button;
