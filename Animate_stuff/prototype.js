(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



(lib._8BitBackgroundsHD1 = function() {
	this.initialize(img._8BitBackgroundsHD1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.P2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("Ah8B9IAAj5ID5AAIAAD5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.P2, rect = new cjs.Rectangle(-12.5,-12.5,25,25), [rect]);


(lib.P1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Ah8B9IAAj5ID5AAIAAD5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.P1, rect = new cjs.Rectangle(-12.5,-12.5,25,25), [rect]);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._8BitBackgroundsHD1, null, new cjs.Matrix2D(1,0,0,1,-960,-540)).s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, rect = new cjs.Rectangle(0,0,1280,720), [rect]);


// stage content:
(lib.prototype = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var c, w, h, p1, p2;
		
		function init() {
		    c = createjs;
		    w = stage.canvas.clientWidth; //change for retina display
		    h = stage.canvas.clientHeight; //change for retina display
		
		    buildBackground();
			placePlayer();
		    game = new c.Container();
		    stage.addChild(game);
		
		    //c.Ticker.on("tick", gameLoop);
		}
		
		function gameLoop(e) {
		
		}
		
		function buildBackground() {
		    backGround = new c.Container();
		    var b = new lib.Background();
		    backGround.addChild(b);
		    stage.addChild(backGround);
			b.x = 0;
			b.y = 0;
		}
		
		function placePlayer() {
			p1 = new lib.P1();
			p1.x = 720;
			p1.y = 550;
			stage.addChild(p1);
		}
		
		function handleMovement() {
			window.addEventListener("keydown", function() {
				p1.x += 0.1;
			});
		}
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Sketch
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egr5gCQMBXzAAAIAAEhMhXzAAAg");
	this.shape.setTransform(681.9,474.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96BDFE").s().p("Egr5ACRIAAkhMBXzAAAIAAEhg");
	this.shape_1.setTransform(681.9,474.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1040,819,564,31);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#AAAAAA",
	opacity: 1.00,
	manifest: [
		{src:"images/_8BitBackgroundsHD1.jpg?1514226574322", id:"_8BitBackgroundsHD1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;