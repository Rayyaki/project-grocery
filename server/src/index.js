const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors");
const db = require("./models");
const routes = require("./routes");
const verify = require("./middleware/verify");
// db.sequelize.sync({ alter: true });
// db.sequelize.sync({ force: true });

app.use(cors());
app.use(express.json());
app.use(verify);
app.use("/user", routes.userRoutes);

app.listen(PORT, () => {
  console.log(`THIS SERVER RUNNING ON PORT ${PORT}`);
});
