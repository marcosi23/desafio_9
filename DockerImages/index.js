const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Inicializa SQLite db
const db = new sqlite3.Database('./db/usuarios.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS user (name TEXT, lastname TEXT, email TEXT)");
});

// Configura express para usar bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan(':date[iso] :method :url :status :response-time ms - :res[content-length]'));

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Leer el valor de la variable de entorno 'MENSAJE'
const mensaje = process.env.MENSAJE || "Hola, no se proporcionó ningún mensaje por variable de entorno.";

app.get('/', (req, res) => {
    res.send(mensaje);
});
app.post('/addUser', (req, res) => {
    const { name, lastname, email } = req.body;

    if(!name || !lastname || !email) {
        return res.status(400).send("Los campos nombre, apellido y email son obligatorios.");
    }

    const stmt = db.prepare("INSERT INTO user VALUES (?, ?, ?)");
    stmt.run(name, lastname, email);
    stmt.finalize();

    res.send('Usuario agregado exitosamente.');
});
app.get('/users', (req, res) => {
    db.all("SELECT name, lastname, email FROM user", [], (err, rows) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
