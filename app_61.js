
const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'dbCurriculo.db';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("../frontend/"));
app.use(express.json());

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/academico', (req, res) => {
  const mostrarBanco = req.body.mostrarbanco;

  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM academico ORDER BY instituicao COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/academicoinsert', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  sql = "INSERT INTO academico (instituicao, anodeformacao) VALUES ('" + req.body.instituicao + "', '" + req.body.anodeformacao + "')";
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.put('/academicoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE academico SET instituicao = '" + req.body.instituicao + "', anodeformacao = '" + req.body.novoanodeformacao + "' WHERE anodeformacao = '" + req.body.anodeformacao +"'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.delete('/academicodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM academico WHERE anodeformacao = '" + req.body.anodeformacao + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

app.listen(process.env.PORT, () => {
  console.log(`Server running`);
});