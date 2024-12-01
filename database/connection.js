const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`connected to database.`);
  } catch (error) {
    process.exit(1);
    console.log(error.message || `Failed to connect to database.`);
  }
};

module.exports = connectDB;
