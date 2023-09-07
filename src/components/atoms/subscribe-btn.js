import React, {useState} from "react";

function SubscribeBtn({ onClick }) {
  const [email, setEmail] = useState(""); // State to track the input value

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <input
        type="email"
        className="border-b border-black resize-none overflow-hidden h-6 bg-transparent text-gray-400 font-manrope text-base font-medium"
        placeholder="email"
        value={email}
        onChange={handleChange}
      />

      <button
        className="bg-transparent text-black font-manrope text-base font-medium mb=2 py-2 px-4 rounded-lg"
        onClick={onClick}
      >
        Subscr
        <span className="text-black bg-[#C46145]  pl-0 pr-2 pt-1 pb-1 ">
          ibe
        </span>
      </button>
    </div>
  );
}

export default SubscribeBtn;
