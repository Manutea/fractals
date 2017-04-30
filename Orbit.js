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
