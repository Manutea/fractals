// Converts from degrees to radians.
Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
};

function Orbit(x, y, r, n, parent) {
	
	this.x = x
	this.y = y
	this.r = r
	this.n = n
	this.parent = parent 
	this.child = null
	this.speed = Math.radians(Math.pow(-4, this.n-1))/10
	this.angle = 0
}

Orbit.prototype.addChild = function() {
	
	var r = this.r / 3
	var x = this.x + this.r + r
	var y = this.y
	
	this.child = new Orbit(x, y, r, this.n+1, this)
	
	return this.child
}

Orbit.prototype.update = function() {
	
	if(this.parent != null){
		this.angle = this.angle + this.speed
		var rsum = - this.r + this.parent.r
		this.x = this.parent.x + rsum * Math.cos(this.angle)
		this.y = this.parent.y + rsum * Math.sin(this.angle)
	}
}

Orbit.prototype.show = function() {
	
	//draw circle
	ctx.beginPath()
	ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI)
	ctx.stroke()	
}



	/*
	//stroke style
	ctx.strokeStyle = '#ffffff'
	ctx.lineWidth = 2
			
	//the big circle
	var r1 = 100
	var x1 = 300
	var y1 = 300
	
	ctx.beginPath()
	ctx.arc(x1, y1, r1, 0, 2*Math.PI)
	ctx.stroke()	
	
	//the medium circle
	var r2 = r1 * 0.5
	
	var rsum = r1 + r2
	
	var x2 = x1 + rsum * Math.cos(angle)
	var y2 = y1 + rsum * Math.sin(angle)
	
	ctx.beginPath()
	ctx.arc(x2, y2, r2, 0, 2*Math.PI)		
	ctx.stroke()
	

	*/