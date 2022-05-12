const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/map.html"));
});

app.listen(PORT, () => {
    console.log(`Current app listening at http://localhost:${PORT}`);
});



