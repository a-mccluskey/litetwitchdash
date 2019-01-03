function draw_clock(canvas, clkcolour) {
	document.write("ssss");
	var  canvas = document.getElementById(canvas);
    var  canvmethods = canvas.getContext("2d"); //enables additional functions for work on the canvas
	document.write("ssss");
	/*canvmethods.fillStyle = "red";
	canvmethods.fillRect(0,0,canvas.height,canvas.width);
	canvmethods.clearRect(0,0,canvas.width, canvas.height);*/
	var centreY = canvas.width / 2;
	var centreX = canvas.height / 2;
	if(centreX > centreY) {
		var radius = centreY-10;
	} else {
		var radius = centreX-10;
	}// the radius needs to be the smallest of the two
	
	var lstart = 40;
	var lend = 140;
	
	var lineStartRad = (lstart*Math.PI)/180; 
	var lineFinishRad = (lend*Math.PI)/180;
	
	
	canvmethods.arc(centreX, centreY, radius, lineStartRad, lineFinishRad, true);
	canvmethods.strokeStyle = clkcolour;
	
	/* arc() expects radians as the angles, yes proper mathmatians would see this as heresy :-D but degrees are an 
	easier(for me) thing to work with. Yes I'm sure that I could make the conversion in its own function, 
	but its not really needed as its only done twice and all here.
	*/
	
	canvmethods.stroke(); //displays the arc
	
	
	
} 
function mins_to_ms(mins) {
	var secs = mins * 60;
	var ms = secs*1000;
	return ms;
}
