document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //bodyに埋め込む

let circle = {
  x: 0,
  y: 0,
  r: 80
}

let theta = 0

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('p5Canvas')

  circle.x = random(width / 4, (3 * width) / 4)
  circle.y = random(height / 4, (3 * height) / 4)
  fill(204, 101, 192, 127) //color
}

function draw() {
  clear() //背景を透明に
  ellipse(circle.x, circle.y, circle.r, circle.r)
  circle.x += 2
  theta += 0.05
  circle.y += 4 * sin(theta)
  if (circle.x - circle.r > width) {
    circle.x = -circle.r
  }
}
// cssにてpointer-events: none;しているが
// クリックイベントは有効です
function mouseClicked() {
  console.log('hello')
}
