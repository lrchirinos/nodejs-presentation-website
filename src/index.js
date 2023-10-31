import express from "express";
import ejs from "ejs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from './routes/index.js'


const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRouter)
app.use(express.static(join(__dirname, "public")))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
