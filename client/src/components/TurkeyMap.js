import React from "react";
import { ReactComponent as SvgMap } from "./tr.svg";
import "./TurkeyMap.css";

function TurkeyMap({ onProvinceClick }) {
  const handleClick = (e) => {
    const id = e.target.id;
    if (id && id.startsWith("TR")) {
      const plate = parseInt(id.replace("TR", ""));
      onProvinceClick(plate);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <SvgMap onClick={handleClick} className="w-full h-auto cursor-pointer" />
    </div>
  );
}

export default TurkeyMap;