import React from "react";

function DistrictCard({ district }) {
  return (
    <div className="bg-slate-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-4">
      <h3 className="text-xl font-semibold text-blue-600 mb-1">{district.name}</h3>
      <p className="text-gray-700"><strong>Nüfus:</strong> {district.population.toLocaleString()}</p>
      <p className="text-gray-700"><strong>Yüzölçümü:</strong> {district.area} km²</p>
    </div>
  );
}

export default DistrictCard;
