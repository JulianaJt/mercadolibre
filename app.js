const express = require('express');
const path = require('path');

const app = express();

app.get('/mostrar_mensaje', (req,res) =>{
res.sendFile(path.resolve(__dirname, './views/home.html')); // Permite enviar un archivo HTML
});

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './views')));

/*
app.listen(3002, () => {
console.log("Servidor corriendo");
});

*/

app.listen(process.env.PORT || 3000, function() {
console.log("Servidor corriendo");
})


