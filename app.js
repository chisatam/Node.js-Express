const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;


app.use(morgan("combined"));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req, res) => {
    res.send("Hellow refirst tps org top");
});
app.listen(port,path, () => {
    debug("Listening on port " + chalk.green(port));
    debug("Log phat ="+chalk.green(__dirname));
});
