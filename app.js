const express = require("express");
// traer ruta
const path = require("path");
//db
// import "./database/conexion";

const app = express();

// middel ward
app.get("/", (req, res) => {
  //   res.send("Hello word");
  res.sendfile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
  console.log("Server runing on port:", 3000);
});
