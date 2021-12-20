const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 8080;

const {encriptar,decriptar} = require('./Encriptar')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user:'root',
  host:'localhost',
  password:'root',
  database:'PasswordManager',
});

app.post('/addpassword', (req,res) => {
  const {password,site} = req.body;
  const hashedPassword = encriptar(password);

  db.query("INSERT INTO passwords (password,site,iv) VALUES (?,?,?)", 
    [hashedPassword.password,site,hashedPassword.iv], 
    (err,result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Success")
      }
    }
  );
});

app.get('/showpasswords', (req,res) => {
  db.query("SELECT * FROM passwords;", (err,result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
});

app.post('/decryptpassword', (req,res) => {
  res.send(decriptar(req.body));
});

app.listen(PORT, ()=> {
  console.log('Server funciona')
});