var el = document.getElementById('container');

// http.get('/be10475f686d6c73db00.jpg').then((respnse) => {
//   console.log('response', respnse);
// });
var local_img = '/be10475f686d6c73db00.jpg';
var remote_img =
  'https://tu-dev.finxos.com/tu-resources/xlsfile/thumbnail/2019_04/2019_04_18/73796d626f6c9bc8e91a32651d7e31448a37ec442a38.png' +
  '?t=' +
  Date.now();
var xhr = new XMLHttpRequest();
xhr.open('GET', remote_img);
xhr.responseType = 'blob';
xhr.onload = response;
xhr.send();

function blob2b64(blob, callback) {
  var a = new FileReader();
  a.onload = function(e) {
    callback(e.target.result);
  };
  a.readAsDataURL(blob);
}

function response1(e) {
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(this.response);
  document.querySelector('#image').src = imageUrl;
  html2canvas(el).then(function(canvas) {
    document.body.appendChild(canvas);
  });
  // debugger
  // blob2b64(this.response, (res) => {
  //   // console.log('res:->', res);
  //   document.querySelector('#image').src = res;
  //   html2canvas(el).then(function(canvas) {
  //     document.body.appendChild(canvas);
  //   });
  // });
}

function response(e) {
  // var urlCreator = window.URL || window.webkitURL;
  // var imageUrl = urlCreator.createObjectURL(this.response);
  // debugger
  blob2b64(this.response, (res) => {
    // console.log('res:->', res);
    document.querySelector('#image').src = res;
    html2canvas(el).then(function(canvas) {
      document.body.appendChild(canvas);
    });
  });
}

function getBase64Image(img) {
  //   img.crossOrigin = 'Anonymous';
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var dataURL = canvas.toDataURL('image/png');
  return dataURL;
}

// console.log(getBase64Image(el.getElementsByTagName('img')[0]));
