import React from "react";

function InputText() {
  return (
    <>
      <textarea
        type="text"
        className="border-b border-black resize-none overflow-hidden h-6 bg-transparent text-gray-400 font-manrope text-base font-medium"
      >
        email
      </textarea>

      <button className="bg-transparent text-black font-manrope text-base font-medium mb=2 py-2 px-4 rounded-lg">
        Subscr
        <span
          className="text-black"
          style={{
            backgroundColor: "#C46145",
            paddingLeft: "0 0.0rem",
            paddingRight: "8px",
            paddingTop: "3px",
            paddingBottom: "3px",
            marginLeft: "-1px",
          }}
        >
          ibe
        </span>
      </button>
    </>
  );
}

export default InputText;
