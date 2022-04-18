const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://restaurant-user:lelinh070801@restaurant-db-mernstack.k7goz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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