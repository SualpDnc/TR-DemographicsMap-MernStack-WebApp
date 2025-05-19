const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB bağlantısı başarılı");
  } catch (err) {
    console.error("❌ MongoDB bağlantısı başarısız:", err.message);
    process.exit(1); // Bağlantı hatası olursa uygulama dursun
  }
};

module.exports = connectDB;
