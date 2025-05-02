let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 建立全螢幕畫布
  background('#e7c6ff'); // 設定背景顏色為紫色

  capture = createCapture(VIDEO); // 啟用攝影機擷取影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始影像，僅顯示繪製的影像
}

function draw() {
  background('#e7c6ff'); // 每次繪製時重設背景顏色
  let x = (width - capture.width) / 2; // 計算影像的水平居中位置
  let y = (height - capture.height) / 2; // 計算影像的垂直居中位置

  push(); // 儲存當前繪圖設定
  translate(width, 0); // 將原點移動到畫布右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, x, y); // 繪製翻轉後的影像
  pop(); // 恢復繪圖設定
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 動態調整畫布大小
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 動態調整影像大小
}
