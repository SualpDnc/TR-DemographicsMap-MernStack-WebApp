// Gerekli modülleri dahil et
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();

// Veritabanı bağlantısı ve model
const connectDB = require("./db");
const City = require("./models/City");

// Asenkron veriyi çekip kaydeden fonksiyon
const populateCities = async () => {
  try {
    await connectDB(); // MongoDB bağlantısını başlat

    // API'den veriyi çek
    const response = await axios.get("https://turkiyeapi.herokuapp.com/api/v1/provinces");
    const cities = response.data.data;

    for (const city of cities) {
      // Her şehir için bir City dökümanı oluştur
      const newCity = new City({
        plate: city.id,
        name: city.name,
        population: city.population,
        area: city.area,
        altitude: city.altitude,
        isCoastal: city.isCoastal,
        isMetropolitan: city.isMetropolitan,
        coordinates: {
          latitude: city.coordinates.latitude,
          longitude: city.coordinates.longitude
        },
        region: city.region.tr,
        districts: city.districts.map(d => ({
          name: d.name,
          population: d.population,
          area: d.area
        }))
      });

      // Veritabanına kaydet (plaka numarasına göre var mı kontrol edebilirsin)
      await City.findOneAndUpdate(
        { plate: city.id },
        newCity,
        { upsert: true, new: true }
      );

      console.log(`✅ Kaydedildi: ${city.name}`);
    }

    console.log("🎉 Tüm şehirler başarıyla kaydedildi!");
    mongoose.disconnect(); // Bağlantıyı kapat
  } catch (error) {
    console.error("❌ Hata:", error.message);
    mongoose.disconnect();
  }
};

// Scripti başlat
populateCities();
