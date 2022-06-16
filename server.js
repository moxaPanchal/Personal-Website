const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(__dirname))

/* GET home page. */
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html/index.html'))
  })

/* GET projects page. */
app.get('/projects', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html/projects.html'))
  })

/* GET skills page. */
app.get('/skills', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html/skills.html'))
  })

/* GET contact page. */
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html/contact.html'))
  })


  app.listen(process.env.PORT || 8080, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

