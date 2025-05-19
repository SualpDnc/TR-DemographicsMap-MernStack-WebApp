const express = require("express");
const router = express.Router();
const City = require("../models/City");

// GET /api/city/:plate → Verilen plakaya göre şehir bilgisini getir
router.get("/:plate", async (req, res) => {
  try {
    const plate = parseInt(req.params.plate); // string → int dönüşümü

    const city = await City.findOne({ plate });

    if (!city) {
      return res.status(404).json({ message: "Şehir bulunamadı" });
    }

    res.json(city);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
