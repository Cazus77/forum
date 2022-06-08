import express from "express";
import { create } from "express-handlebars";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/router.js";
import path from "path";

const PORT = 3000;
const DB_URL = "mongodb://localhost:27017/forum";
const __dirname = path.resolve();
const handlebars = create({
  defaultLayout: "main",
  extname: "hbs",
});

let app = express();

app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Express запущен на http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
