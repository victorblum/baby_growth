const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// let users = [
//     { "id": 1, "name": "Victor", "position": "FD" },
//     { "id": 2, "name": "Kamil", "price": "BD" },
//     { "id": 3, "name": "Nikita", "price": "FD" }
// ];

let users = [];

// app.get('/login', function (req, res) {
//     res.send(JSON.stringify(users));
//   });

// app.get('/login/:id', function (req, res) {
//     res.send(JSON.stringify(users.find((user) => user.id == req.params.id)));
//   });

// app.get('/login/:id', function (req, res) {
//     const idOfUser = parseInt(req.params.id);
//     const user = users.find((user) => user.id === idOfUser);
//     if (!user) {
//       res.status(404).send();
//     }
//     res.status(200).json(user);
//   });

app.post('/login', function (req, res) {
    users.push(req.body);
    res.json(req.body);
  });

  app.get('/login', function (req, res) {
    res.json(users);
    console.log(users);
   });


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });