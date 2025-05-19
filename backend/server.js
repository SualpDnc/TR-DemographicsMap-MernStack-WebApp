const express = require("express");
const app = express();
const connectDB = require("./db");
const cityRoutes = require("./routes/city");
require("dotenv").config();

// MongoDB bağlantısını başlat
connectDB();

// JSON parsing middleware
app.use(express.json());

// API route'ları
app.use("/api/city", cityRoutes);

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});
