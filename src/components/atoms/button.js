import React from "react";

function PrimaryCircularButton({ text }) {
  return (
    <div>
      <button className="inline-flex h-8.108 py-2 px-4 justify-center items-center gap-8.103 flex-shrink-0 rounded-full border border-gray-700">
        <p className="text-gray-900 font-manrope text-xs font-medium lowercase">
          {text}
        </p>
      </button>
    </div>
  );
}

function PrimarySquareButton({ text }) {
  return (
    <div>
      <button className="bg-transparent inline-flex px-4 py-2 items-center gap-2 rounded-lg border border-gray-700 ">
        <p className="text-gray-900 font-manrope text-24 font-normal lowercase">
          {text}
        </p>
      </button>
    </div>
  );
}

function SecondaryButton({ text }) {
  return (
    <div>
      <button className="bg-c46145 inline-flex p-4 space-x-2 items-center rounded-lg font-manrope">
        <p className="text-white  text-24 font-normal lowercase">{text}</p>
      </button>
    </div>
  );
}

export { PrimaryCircularButton, PrimarySquareButton, SecondaryButton };
