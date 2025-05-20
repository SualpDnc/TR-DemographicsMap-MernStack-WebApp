import React, { useState } from "react";
import TurkeyMap from "./components/TurkeyMap";
import DistrictCard from "./components/DistrictCard";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  // Haritada ile tıklanınca şehir verisini getir
  const handleProvinceClick = async (plate) => {
    try {
      const res = await fetch(`http://localhost:5001/api/city/${plate}`);
      const data = await res.json();
      setSelectedCity(data);
    } catch (err) {
      console.error("Veri alınırken hata:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">Türkiye Nüfus Haritası</h1>
          <a
            href="https://github.com/SualpDnc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
              GitHub
          </a>
        </div>
      </nav>

      {/* Ana içerik */}
      <div className="p-6">
        <TurkeyMap onProvinceClick={handleProvinceClick} />

        {/* İl seçilmişse göster */}
        {selectedCity ? (
          <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* İl Bilgisi Sol Altta */}
            <div className="bg-white p-6 rounded-lg shadow-lg col-span-1">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                {selectedCity.name}
              </h2>
              <div className="space-y-2 text-gray-700 text-lg">
                <p>
                  <span className="font-semibold">Plaka:</span>{" "}
                  {selectedCity.plate}
                </p>
                <p>
                  <span className="font-semibold">Nüfus:</span>{" "}
                  {selectedCity.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Yüzölçümü:</span>{" "}
                  {selectedCity.area} km²
                </p>
                <p>
                  <span className="font-semibold">Bölge:</span>{" "}
                  {selectedCity.region}
                </p>
              </div>
            </div>

            {/* İlçeler Sağ Alt */}
            <div className="md:col-span-2">
            
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCity.districts
                  ?.filter((d) => d && d.name)
                  .map((district) => (
                    <DistrictCard key={district.id} district={district} />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center mt-10 text-gray-500 text-lg">
            Lütfen haritadan bir il seçiniz.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
