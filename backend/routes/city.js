const express = require("express");
const router = express.Router();
const City = require("../models/City"); // MongoDB City modelini içe aktar

// Route: Belirli bir ili plakaya göre getir
// Örn: GET /api/city/6
router.get("/:plate", async (req, res) => {
  try {
    const city = await City.findOne({ plate: parseInt(req.params.plate) });
    if (!city) {
      return res.status(404).json({ message: "İl bulunamadı" });
    }
    res.json(city); // Tüm detaylı şehir verisini döner
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err });
  }
});



module.exports = router;
