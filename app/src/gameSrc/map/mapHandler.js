// Used to select and draw the current map

// Draw river
function drawRiver(){
    ctx.beginPath();
    ctx.fillStyle = "#1C86D0";
    ctx.fillRect(50, 300, window.innerWidth-100, 300);
    ctx.stroke();
}