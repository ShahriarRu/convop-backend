const mongoose = require("mongoose");

const dbConnect = async () => {
  const connect = await mongoose.connect(
    "mongodb://127.0.0.1:27017/convpho-api",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  console.log(`Database Connected ${connect.connection.host}`);
};

module.exports = dbConnect;
