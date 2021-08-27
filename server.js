const express = require("express")
const path = require('path')
const exphbs = require('express-handlebars')
const slides = require('./app')

const app = express()

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// set a static folder
app.use(express.static(path.join(__dirname, 'public')))

// gets the slides from the directory in app.js
app.get('/slides', (req, res) => {
  res.json(slides)
})

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Readdir Demo',
    slides
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))