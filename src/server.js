const express = require('express')
const fs = require("fs");
const app = express()
const port = 3000


const content = JSON.parse(fs.readFileSync(__dirname + "/contacts.json"));

app.get('/', (req, res) => res.send('Hello world'))

app.get('/contacts', (req, res) => res.json(content))

app.get('/contacts/:id', (req, res, next) => {
  const data = content.contacts.find(item => item.id.toString() === req.params.id);
  if (data) {
      res.json(data);
  } else {
    next()
  }
})

app.get('*', (req, res) => res.sendStatus(404))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
