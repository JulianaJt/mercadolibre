const express = require("express");
const path = require("path");
const app = express();
console.log("current directory", __dirname);

app.get("/mostrar_mensaje", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html")); // Permite enviar un archivo HTML
});

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.static(path.resolve(__dirname, "./views")));

/*
app.listen(3002, () => {
console.log("Servidor corriendo");
});

*/

app.listen(process.env.PORT || 3001, function () {
  console.log("Servidor corriendo");
});
