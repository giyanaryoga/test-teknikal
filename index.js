const express = require("express");
const app = express();
const router = require("./routes/index.js");
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
