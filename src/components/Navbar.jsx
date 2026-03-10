import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-inner text-blue-600 py-5 px-5 mb-3 flex justify-between">
      <div>Search Media</div>
      <div className="flex gap-4">
        <button
          className="bg-cyan-500 text-black font-light px-6 py-2 text-center rounded active:scale-95 "
          onClick={() => navigate("/")}
        >
          Search
        </button>
        <button
          className="bg-cyan-500 text-black font-light px-6 py-2 text-center rounded active:scale-95 "
          onClick={() => navigate("/collection")}
        >
          Collection
        </button>
      </div>
    </div>
  );
};

export default Navbar;
