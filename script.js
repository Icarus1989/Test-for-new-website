// let bkgCanvasContainer = document.querySelector('#bkgCanvasContainer');
// console.log(bkgCanvasContainer);

let mainElement = document.querySelector('#main');
// console.log(mainElt);

let circles = document.querySelectorAll('.skillDetail');
console.log(circles);

mainElement.addEventListener('scroll', () => {
  if (window.pageYOffset > sections[2].getBoundingClientRect().y) {
    let promise = new Promise(resolve => {
      setTimeout(() => {
        for (let circle of circles) {
          let middle = circle.clientHeight / 2;
          // circle.style.height = `100%`;
          // circle.style.background = `conic-gradient(from 270deg at 50% 100%, transparent, 180deg, white 180deg 181deg, rgb(12, 61, 248) 181deg 360deg)`
          circle.style.borderRadius = `100%`;
          circle.style.transform = `translate(0px, ${middle}px) scale(1.0)`;
          // circle.style.border = `1vh solid white`;
          resolve();
          // circle.style.transform = `scale(1)`;
        }
      }, 500);
    }).then(() => {
      console.log('then...')
      // for (let circle of circles) {
      //   let canvasContainer = document.createElement('div');
      //   canvasContainer.style.position = "absolute";
      //   canvasContainer.style.top = 0;
      //   canvasContainer.style.left = 0;
      //   canvasContainer.style.zIndex = 0;
      //   circle.append(canvasContainer);

      //   let canvas = function (cnv) {
      //     cnv.setup = function () {
      //       cnv.createCanvas(circle.clientWidth, circle.clientHeight);
      //       cnv.background(220);
      //     }
      //     cnv.draw = function () {

      //     }
      //   }
      //   new p5(canvas, canvasContainer);
      // }
      // setTimeout(() => {
      //   for (let i = 0; i < circles.length; i++) {
      // console.log('log');
      // circles[0].style.background = `conic-gradient(from 270deg at 50% 20%, transparent, 180deg, white 180deg 181deg, rgb(12, 61, 248) 181deg 360deg)`;
      // circles[0].style.backgroundPosition = `50% 20%`;
      // }
      // }, 1000);
    });


  }
});