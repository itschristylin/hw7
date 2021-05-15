//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡

 //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()
  
  
    //左邊底座
  ctx.beginPath()
      ctx.moveTo(150,350)
      ctx.lineTo(175,300)
      ctx.lineTo(200,300)
      ctx.lineTo(200,350)
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //左邊第1層
  ctx.beginPath()
      ctx.moveTo(175,300)
      ctx.lineTo(162.5,275)
      ctx.lineTo(200,275)
      ctx.lineTo(200,300)
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //左邊第2層
  ctx.beginPath()
      ctx.moveTo(175,275) //y-25
      ctx.lineTo(162.5,250) //y-25
      ctx.lineTo(200,250) //y-25
      ctx.lineTo(200,275) //y-25
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //左邊第3層
  ctx.beginPath()
      ctx.moveTo(175,250) //y-25
      ctx.lineTo(162.5,225) //y-25
      ctx.lineTo(200,225) //y-25
      ctx.lineTo(200,250) //y-25
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //左邊第4層
  ctx.beginPath()
      ctx.moveTo(175,225) //y-25
      ctx.lineTo(162.5,200) //y-25
      ctx.lineTo(200,200) //y-25
      ctx.lineTo(200,225) //y-25
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //左邊第5層
  ctx.beginPath()
      ctx.moveTo(175,200) //y-25
      ctx.lineTo(162.5,175) //y-25
      ctx.lineTo(200,175) //y-25
      ctx.lineTo(200,200) //y-25
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //左邊第6層
  ctx.beginPath()
      ctx.moveTo(175,175) //y-25
      ctx.lineTo(162.5,150) //y-25
      ctx.lineTo(200,150) //y-25
      ctx.lineTo(200,175) //y-25
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //左邊第7層
  ctx.beginPath()
      ctx.moveTo(175,150) //y-25
      ctx.lineTo(162.5,125) //y-25
      ctx.lineTo(200,125) //y-25
      ctx.lineTo(200,150) //y-25
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //左邊第8層
  ctx.beginPath()
      ctx.moveTo(175,125) //y-25
      ctx.lineTo(162.5,100) //y-25
      ctx.lineTo(200,100) //y-25
      ctx.lineTo(200,125) //y-25
    ctx.closePath()
    ctx.fillStyle="#4aa2b8"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //右邊底座
  ctx.beginPath()
      ctx.moveTo(200,350) //y-25
      ctx.lineTo(250,350) //y-25
      ctx.lineTo(225,300) //y-25
      ctx.lineTo(200,300) //y-25
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //右邊第1層
  ctx.beginPath()
      ctx.moveTo(200,300) 
      ctx.lineTo(225,300) 
      ctx.lineTo(237.5,275) 
      ctx.lineTo(200,275) 
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //右邊第2層
  ctx.beginPath()
      ctx.moveTo(200,275) //y-25
      ctx.lineTo(225,275) 
      ctx.lineTo(237.5,250) 
      ctx.lineTo(200,250) 
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //右邊第3層
  ctx.beginPath()
      ctx.moveTo(200,250) //y-25
      ctx.lineTo(225,250) 
      ctx.lineTo(237.5,225) 
      ctx.lineTo(200,225) 
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //右邊第4層
  ctx.beginPath()
      ctx.moveTo(200,225) //y-25
      ctx.lineTo(225,225) 
      ctx.lineTo(237.5,200) 
      ctx.lineTo(200,200) 
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //右邊第5層
  ctx.beginPath()
      ctx.moveTo(200,200) //y-25
      ctx.lineTo(225,200) 
      ctx.lineTo(237.5,175) 
      ctx.lineTo(200,175) 
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
      //右邊第6層
  ctx.beginPath()
      ctx.moveTo(200,175) //y-25
      ctx.lineTo(225,175) 
      ctx.lineTo(237.5,150) 
      ctx.lineTo(200,150) 
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  
  //右邊第7層
  ctx.beginPath()
      ctx.moveTo(200,150) //y-25
      ctx.lineTo(225,150) 
      ctx.lineTo(237.5,125) 
      ctx.lineTo(200,125) 
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //右邊第8層
  ctx.beginPath()
      ctx.moveTo(200,125) //y-25
      ctx.lineTo(225,125) 
      ctx.lineTo(237.5,100) 
      ctx.lineTo(200,100) 
    ctx.closePath()
    ctx.fillStyle="#176e77"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
 
  //左塔底
  ctx.beginPath()
      ctx.moveTo(180,100) 
      ctx.lineTo(200,100) 
      ctx.lineTo(200,90) 
      ctx.lineTo(190,90) 
    ctx.closePath()
    ctx.fillStyle="#d8f9ff"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //左塔1
  ctx.beginPath()
      ctx.moveTo(200,90) 
      ctx.lineTo(200,70) 
      ctx.lineTo(190,70) 
      ctx.lineTo(190,90) 
    ctx.closePath()
    ctx.fillStyle="#d8f9ff"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //左塔平台
  ctx.beginPath()
      ctx.moveTo(185,70) 
      ctx.lineTo(185,65) 
      ctx.lineTo(215,65) 
      ctx.lineTo(215,70) 
    ctx.closePath()
    ctx.fillStyle="#d8f9ff"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //左塔4
  ctx.beginPath()
      ctx.moveTo(200,65) 
      ctx.lineTo(190,65) 
      ctx.lineTo(190,55) 
      ctx.lineTo(200,55) 
    ctx.closePath()
    ctx.fillStyle="#d8f9ff"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
   //右塔5
  ctx.beginPath()
      ctx.moveTo(200,55) 
      ctx.lineTo(195,55) 
      ctx.lineTo(195,35) 
      ctx.lineTo(200,35) 
    ctx.closePath()
    ctx.fillStyle="#d8f9ff"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //右塔底
  ctx.beginPath()
      ctx.moveTo(200,100) 
      ctx.lineTo(220,100) 
      ctx.lineTo(210,90) 
      ctx.lineTo(200,90) 
    ctx.closePath()
    ctx.fillStyle="#94c9cd"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //右塔1
  ctx.beginPath()
      ctx.moveTo(200,90) 
      ctx.lineTo(210,90) 
      ctx.lineTo(210,70) 
      ctx.lineTo(200,70) 
    ctx.closePath()
    ctx.fillStyle="#94c9cd"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
 //右塔平台
  ctx.beginPath()
      ctx.moveTo(200,70) 
      ctx.lineTo(200,65) 
      ctx.lineTo(215,65) 
      ctx.lineTo(215,70) 
    ctx.closePath()
    ctx.fillStyle="#94c9cd"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //右塔4
  ctx.beginPath()
      ctx.moveTo(200,65) 
      ctx.lineTo(210,65) 
      ctx.lineTo(210,55) 
      ctx.lineTo(200,55) 
    ctx.closePath()
    ctx.fillStyle="#94c9cd"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
 
 //右塔5
  ctx.beginPath()
      ctx.moveTo(200,55) 
      ctx.lineTo(205,55) 
      ctx.lineTo(205,35) 
      ctx.lineTo(200,35) 
    ctx.closePath()
    ctx.fillStyle="#94c9cd"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //天線
  ctx.beginPath()
      ctx.lineTo(200,35) 
      ctx.lineTo(200,10) 
    ctx.closePath()
    ctx.fillStyle="#94c9cd"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //circle
  ctx.beginPath();
ctx.arc(200,300,10,0,2*Math.PI);
  ctx.fillStyle="#94c9cd"
    ctx.fill()
ctx.stroke();
  
  //底座
  ctx.fillRect(150,345,100,5);
  ctx.strokeRect(150,345,100,5)
  

  
  
   //車子
    ctx.fillStyle="#e29e31"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})