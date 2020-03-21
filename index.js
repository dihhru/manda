let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
document.getElementById("root").appendChild(img);
ctx.drawImage(document.getElementById("img"), 0, 0, 500, 500);

let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");
ctx1.drawImage(document.getElementById("img"), 0, 0, 500, 500),
  (window.onload = function() {
    var width = 225;
    var height = 225;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var image = document.getElementById("img");

    var doFindFeatures = function() {
      context.drawImage(image, 0, 0, width, height);
      var imageData = context.getImageData(0, 0, width, height);

      var gray = tracking.Image.sobel(imageData.data, width, height);

      for (var i = 0; i < gray.length; i++) {
        imageData.data[i] = gray[i];
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.putImageData(imageData, 0, 0);
    };

    doFindFeatures();
  });
