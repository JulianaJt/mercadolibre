const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public'))); // Se hace la carpeta public publica
app.use(express.static(path.join(__dirname, './views'))); // Se hace la carpeta public publica

app.get('/mostrar_mensaje', (req,res) =>{
res.sendFile(path.resolve(__dirname, './views/home.html')); // Permite enviar un archivo HTML
});

app.get('*',(req,res)=>{
    res.send("Ruta restringida, hemos localizado la dirección de su computador");
});

//app.use(express.static(path.resolve(__dirname, './views')));

app.listen(process.env.PORT || 3000 , function () {
    console.log("Servidor corriendo");
});
