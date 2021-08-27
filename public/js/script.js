const imgs = document.getElementById("imgs")

// return nodelist for all images in slide area
const img = document.querySelectorAll("#imgs img")

console.log(img)

let idx = 0

// this is the interval to change pictures
let interval = setInterval(run, 4000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if(idx > img.length - 1) {
    idx = 0
  } else if(idx < 0) {
    idx = img.length - 1
  }

  imgs.style.transform = `translateX(${-idx * 1100}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 4000)
}

// Get the text from the demo, the file