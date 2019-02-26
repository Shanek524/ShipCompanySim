var ctx;

function drawCanvas(){
    var canvas = document.createElement('canvas');

    canvas.id = "CursorLayer";
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight-100;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);

    cursorLayer = document.getElementById("CursorLayer");

    console.log(cursorLayer);

    ctx = canvas.getContext("2d");
}
drawCanvas();



// Quit game when "QUIT" button is clicked
var quitBtn = document.getElementById('quitBtn');
quitBtn.addEventListener("click", function(){
    window.close();
  });

  