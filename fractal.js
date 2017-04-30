var canvas
var ctx

var path
var angle
var sun
var end

//------
function setUp() {
	
	canvas = document.getElementById("myCanvas")
	ctx = canvas.getContext("2d")
	
	path = []
	angle = 0
	
	sun = new Orbit(300, 300, 150, 0, null)
	var next = sun
	
	for(var i=0; i<6; i++){
		next = next.addChild()
	}

	end = next
}

//------
function draw() {
	
	ctx.clearRect(0,0, canvas.width, canvas.height);
	
	//background color
	ctx.fillStyle = "black"
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	
	//stroke style
	ctx.strokeStyle = '#ffffff'
	ctx.lineWidth = 2
	
	for(var i=0; i<10; i++) {
		var next = sun
		while(next != null) {
			next.show()
			next.update()
			next = next.child
		}
		path.push([end.x, end.y])
	}

	//stroke style
	ctx.strokeStyle = '#f00e46'
	ctx.lineWidth = 1
	
	ctx.beginPath()
	for(var i= 0; i < path.length; i++){
	
		var array = path[i]
		
		if(i > 0)
			var previousarray = path[i-1]
		else
			var previousarray = path[0]
			
		ctx.moveTo(previousarray[0], previousarray[1])
		ctx.lineTo(array[0], array[1])
		
	}
	ctx.closePath()
	ctx.stroke()
}

//------
function animate() {
	draw()
	requestAnimationFrame(animate);
}

//------
setUp()
animate()