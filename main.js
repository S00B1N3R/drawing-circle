canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
mouseevent = ""
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e) {
    mouseevent = "mousedown"
}
canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e) {
    mouseevent = "mouseup"
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e) {
    mouseevent = "mouseleave"
}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
    currentmx=e.clientX-canvas.offsetLeft
    currentmy=e.clientY-canvas.offsetTop
    if (mouseevent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle="black"
        ctx.lineWidth=3
        ctx.arc(currentmx,currentmy,40,0,2*Math.PI)
        ctx.stroke()
    }
    lastpx=currentmx
    lastpy=currentmy
}
