import React, { useState } from "react";
import TurkeyMap from "./components/TurkeyMap";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleProvinceClick = async (plate) => {
    try {
      const res = await fetch(`http://localhost:5001/api/city/${plate}`);
      const data = await res.json();
      setSelectedCity(data);
    } catch (err) {
      console.error("Veri çekilirken hata:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl text-center font-bold mb-6 text-blue-700">
        Türkiye Haritası Üzerinden İl Bilgisi
      </h1>

      <TurkeyMap onProvinceClick={handleProvinceClick} />

      {selectedCity && (
        <div className="mt-10 p-6 bg-gray-100 rounded shadow max-w-xl mx-auto">
          <h2 className="text-xl font-semibold">{selectedCity.name}</h2>
          <p><strong>Plaka:</strong> {selectedCity.plate}</p>
          <p><strong>Nüfus:</strong> {selectedCity.population.toLocaleString()}</p>
          <p><strong>Bölge:</strong> {selectedCity.region}</p>
          <p><strong>Yüzölçümü:</strong> {selectedCity.area} km²</p>
        </div>
      )}
    </div>
  );
}

export default App;
