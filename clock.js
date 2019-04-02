function draw_clock(canvas, clkcolour) {
	/*
		This function draws a spedometer like dial onto the canvas.
	*/
	var canvas = document.getElementById(canvas);
    var canvmethods = canvas.getContext("2d"); //enables additional functions for work on the canvas
	canvmethods.clearRect(0,0,canvas.width,canvas.height);
	var centreY = canvas.width / 2;
	var centreX = canvas.height / 2;
	//the html page has already set the size of the canvas, we need to work on
	
	if(centreX > centreY) {
		var radius = centreY-10;//the minus ten is so that the the edge can be seen all the way round the curve
	} else {
		var radius = centreX-10;
	}// the radius needs to be the smallest of the two
	
	//the next couple of lines are the angles that the dial draw from and to - 0 is east, 180 to west, 270 to north and 90 to south
	var lstart = 140 //so south east
	var lend = 40; //so south west
	
	var lineStartRad = (lstart*Math.PI)/180; 
	var lineFinishRad = (lend*Math.PI)/180;
	//the next function requres the angles in RADIANS not DEGREES, so convert them.
	
	canvmethods.lineWidth = 3;//by default will draw a 1px line, which isnt very user friendly.
	canvmethods.beginPath();
	canvmethods.arc(centreX, centreY, radius, lineStartRad, lineFinishRad, false);
	//canvmethods.closePath();
	canvmethods.strokeStyle = clkcolour;

	
	/* arc() expects radians as the angles, yes proper mathmatians would see this as heresy :-D but degrees are an 
	easier(for me) thing to work with. Yes I'm sure that I could make the conversion in its own function, 
	but its not really needed as its only done twice and all here. 
	The true is so it can be drawn counter clockwise, so it draws from south east to south west.
	*/
	
	canvmethods.stroke(); //displays the arc
		
}//draw_clock()
function canvas_label(canvas, canvas_title) {
	/*
		This gives the canvas a text label
	*/
	var  canvas = document.getElementById(canvas);
	var  canvmethods = canvas.getContext("2d"); //enables additional functions for work on the canvas
	
	canvmethods.font = "20px Arial";//set the font to be used
	canvmethods.textAlign = "center";//we want the text to be in the middle of the width
	canvmethods.fillText(canvas_title, canvas.width/2, canvas.height-10);//put the text in, but 10px from the bottom
	//nb. if the font is any bigger then we need to move the text up a bit in the previous line
	
}//canvas_label()
function draw_arrow(canvas, cur_ms, end_time) {
	var  canvas = document.getElementById(canvas);
	var  canvmethods = canvas.getContext("2d"); //enables additional functions for work on the canvas
	
	var ang= 310-((cur_ms/end_time)*260);
	//calculate the angle that the arrow needs to point in
	
	var centX = canvas.height/2;
	var centY = canvas.width/2;
	
	if(cur_ms<=(end_time/10)) { canvmethods.strokeStyle="#F00"; } else { canvmethods.strokeStyle="#0F0"; }
	
    canvmethods.beginPath();
    canvmethods.lineWidth = 2;
    canvmethods.lineCap = "round";
    canvmethods.moveTo(centX, centY);
	//start the line at the centre of the circle
	var xcoord = centX+((centX-20)*Math.sin(ang*Math.PI/180));
	var ycoord = centY+((centY-20)*Math.cos(ang*Math.PI/180));
	//this bit is a bit of trigonomatry to calculate the coordinates

    canvmethods.lineTo(xcoord,ycoord);
	//the end point of the line
	canvmethods.closePath();
    canvmethods.stroke();
	//draw the line
	//canvmethods.moveTo(centX, centY);
	
}//draw_arrow()
function mins_to_ms(mins) {
	/*
		Minutes are a much easier unit of time for us humans to work with rather than ms.
		So this just converts it to a machine number.
	*/
	var secs = mins * 60;
	var ms = secs*1000;
	return ms;
}//mins_to_ms()
