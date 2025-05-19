const mongoose = require("mongoose");

// Şehir verisi için şema oluşturuyoruz
const CitySchema = new mongoose.Schema({
  plate: {
    type: Number,      // Plaka numarası (örneğin: 34)
    required: true,
    unique: true       // Her şehir sadece bir kez kaydedilsin
  },
  name: {
    type: String,      // Şehir ismi (örneğin: "İstanbul")
    required: true
  },
  population: {
    type: Number       // Toplam şehir nüfusu
  },
  area: {
    type: Number       // Yüzölçümü (km²)
  },
  altitude: {
    type: Number       // Deniz seviyesinden yükseklik
  },
  isCoastal: {
    type: Boolean      // Deniz kıyısında mı?
  },
  isMetropolitan: {
    type: Boolean      // Büyükşehir mi?
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  region: {
    type: String       // Bölge bilgisi (örneğin: "Marmara")
  },
  districts: [
    {
      name: String,
      population: Number,
      area: Number
    }
  ]
});

// Bu şemayı model olarak dışa aktarıyoruz
module.exports = mongoose.model("City", CitySchema);
