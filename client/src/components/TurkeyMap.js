import React from "react";
import { ReactComponent as SvgMap } from "./tr.svg"; // SVG'yi React bileşeni olarak içe aktar
import './TurkeyMap.css';

function TurkeyMap({ onProvinceClick }) {
  // SVG'nin içinde her il path olarak id="06", id="34" vs. şeklindedir
  const handleClick = (e) => {
    const id = e.target.id;
    if (id) {
      const plate = parseInt(id.replace("TR", "")); // TR06 → 6
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
