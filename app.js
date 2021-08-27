const fs = require('fs')

const folder = './public/images'

let slides = []

fs.readdirSync(folder).forEach(file => {
  slides.push(file)

  return slides
})

module.exports = slides

