const express = require("express");
const dotenv = require("dotenv");
const bootcamp = require("./routes/bootcamps");
const logger = require("./middleware/logger");
const dbConnect = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const app = express();
dbConnect();
app.use(logger);
app.use("/bootcamps", bootcamp);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`
  );
});
