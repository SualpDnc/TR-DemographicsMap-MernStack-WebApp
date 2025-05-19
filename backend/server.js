const express = require("express");
const cors = require("cors"); // CORS modülünü içe aktar
const app = express();
const connectDB = require("./db");
const cityRoutes = require("./routes/city");
require("dotenv").config();

connectDB();

// 👇 CORS'u global olarak aktif et (frontend'e izin verir)
app.use(cors({
  origin: "http://localhost:3000" // React uygulamasına izin ver
}));

app.use(express.json());
app.use("/api/city", cityRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});
