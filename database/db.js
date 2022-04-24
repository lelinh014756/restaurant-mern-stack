const mongoose = require("mongoose");

const connectDB = async (URI) => {
  try {
    await mongoose.connect(
      URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('Connect database success');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;