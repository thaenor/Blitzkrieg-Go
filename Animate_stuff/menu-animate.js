(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.TutorialBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("How  to  play", "25px 'Bebas'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 138;
	this.text.parent = this;
	this.text.setTransform(8.8,15.6,0.512,0.512);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#841F27","rgba(102,102,102,0)"],[0.004,0.984],-43.5,0,43.6,0).s().p("AmyDSIAAmjINlAAIAAGjg");
	this.shape.setTransform(43.5,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#841F27","rgba(102,102,102,0.498)"],[0.004,0.984],-43.5,0,43.5,0).s().p("AmyDSIAAmjINlAAIAAGjg");
	this.shape_1.setTransform(43.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,42);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993333").s().p("AF9E2QgHAAgEgDIgJgHIgPgPIgFgFIgHgIIgEgIIgCgGIAAgOIADgMIAFgOQACgGAGgIIAKgPIAGgFIAMgHIAFgFIAWgNIAHgCIAHgFIALgLIAHgEQACgBABgDIARgOIAIgdIABgKQAAgGgGgBIgMgBIgDAAIgGgCIgSgPIgDgEIAAgJIgEgaQAAgJAFgOIAdhIIAIgEQAFgDAAgGIAQgNQAJgHAJAAQAJAAAGAEIAKAKIAEAMIADAMIAAARIgSBVIAAAJIgSAsQgEALAAAPIAAAaIAFANQABAHAHAKQADAHABAJIAHAcIABArQgBAHgEAEIgIAJIgfAbIgLAFIgMAEIgJAAIgWAEgAGuCmIgMALIgRATIgLATQgGAKABANQgBAFAHAEIAOAHIAQAGIAKABQAEAAAGgDIAKgJIAJgMQADgHAAgFIAAgSIgEgZIgGgNQgEgGgHAAQgGgBgGAEgAHOgsIgFALIgFAOIgBAJIAAAUIAEAMIAFAJQACAEACAAIAGgHIAPg0IAAgHIgDgIIgDgHQgDgEgGAAQgEAAgEAGgAkyB1IgHABIgFAAIg1gkIgXgKIgKAAQgHAAgEACIgOAKIgHACQgKAAgFgFQgGgGAAgIIABgOQACgHAKgKIAIgDIAUgCIAIAAQAKgIAKgDIAPgFIAqgmQAEgHAFgEQAEgEAAgDQAAgDgCgDIgFgEIgGgCIgFAAIgDAAIgGgDIgJgDIgGAAIgWgEQgKAAgIAGIgcAcQgIAHgLgBQgEABAAgEIgBgGIAAgFQAAgMAKgOIAGgIIgKACIgUACIgIAAIgDgBIgJAAIgIADQgGADAAADIAAAJIgBANIgDAFIgDAIIAAAFIgCARIgEAKIgEAEIgBAVIABAGIADAHIAFAGQADACAGAAQAFAAAFgDIAEgEIAFADIAEAEIADAHIgCAKIgIALIgJAKQgEAFgDAAQgEAAgDAEIgDAIIgVAGIgJgBQgEgBAAgEIgEgHIgKgaIgDgJIAAgWIAIgzIAAgIIAMggIACgHIAAgPQAAgGgEgBIgFgFQgEgCAAgEIADgFIALgOIAEgGQADgHADgBIAHgFIANgLQAHgFAGgKIAFgMQACgHAGgDQAHgCAEgFQAFgGACAAIAIAAIAIABIAGAFIACAHQgBACgGAIIgcAiQgGAIgBAFIACAGIAFACIAHABIATAAIACgCIAHgDQAGAAAEAFQACAGAAAHIAAAMIAJgIQAOgMARgIQAQgJAOABIANAAIAHADIAUAQIALAFIAJABIAEADIALACIAGAEIAGACIALgCIATgGIAKAAQALgBABAHIADAPIAAAJQAAAKgHAFIgRAHIgoAJIgHAFIgNAOIgJAEIgcAYIgMAJIgBACIgHAFIgBACIAHAHIAjAVIARAHIAMgCQAKAAAHgFIAVgUQAEgFAJAAIALACQADACAAAKIgDAUIgFAQQgDAHgDACQgLAIgKADIgXAIgAAoBxIgDgEIgHgMIABgMIAHgeIACgIQAKgPADgQIAHghIgEgeQgCgGgEAAIgGABIgLAEIgLALQgCACgIABQgDAAgBgFIgCgIQAAgEACgEIAGgHIASgPIASgaIAJgLQAGgEAIAAQAFgBACACIAQALQADAEABAFIgBAFQgBAGACAGIgCATIACADIADADIADABQAEgCAGgHIAUglQAFgJAEgDIAPgEIAGAAIAGAAQAIAFACAJIADANIALgJIAUgPIAMgFQAHgBAGAGQAFAGAAAGIgEANIADAIIABAFIgFArIgDANIAAAFIgCAIIgGAPIgCAJIAAAFIAEAGIAEAFIAGACIAGgCIAFgGIAFgDIAGgBIAIAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIABAHIgEAFIgaAYIgRAbIgLAOQgGAGgFAAIgHgBIgHgHIgFgHIgDgGIAAgPQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAIAAgJIADgNIAAgVIAEgWIAAgEIACgJIAJgaIACgLIgDgJQgDgEgHAAIgFACQgCABgKABIAAgCIgDACIgMAEIgDAAIgDgBIgEgBIgFAAQgGAAgGAFIgKAJQgHAKgFAMQgFAMAAAKIgHAIIgGALQgDAHAAAGQAAAHgDAHIgBAcIgDAOIgFANIgHAEIgKADIgMACgAshBwIgDgEIABgzIAFgYIAAgJIABgFIAGhdIAEgQIAAgRIALhNIAHgZQAEgNAJgLIAVgkQAEgFAGgEQAGgKAMgGQALgHALAAIAiAAQAOAAADAJQAEAIAAAKIAAAJQAAAHgFAHIgKAOIgMALQgHADgFAAIgKgBIgIgCQgJAAgLAGQgKAGgCAOQgFAGAAAGIgBAKIgJAaQgDAPAAANIgFAUIAAAPIgGAlIAAAPIgMBGIABAJQACAFADAAIAJgCIAJgHIAkghQAJgGAKAAIACADIgCALIgIAOIgJANIgKAJQgJAGgGAJQgFAKgJAJQgEAIgGAEIgOAIIgRAHQgJAFgIAAgAg6BvQgJAAgHgFQgHgHgFgIIgag+IgKgNQgGgGgHAAQgEAAgCADIgDAHIgEAOIAAANQgBANAHAEIAQAIQAHADAHAFQAGAEgBANIgCAFIgFAFIgKACIgVgGIgOAAIgLgDIgHgCIgLAFIgTgCIgIgCQgDgDAAgFQAAgHAFgFIAMgKQAGgGAHgJQAEgKABgQIACgVIABgHIADgFIACg+IABgHIAFgLIAAgbIAMg2QAEgZAJgWIAZg5IAHgNIAKgLQAGgFAIgCIANgDIAHgEIAHgBIANADIANAGQAEADADAHQACAFgCAHIAAAGIgBADIgCAHIgDAIIgFAHIgDAEQgJAHgKADIgSAIIgRAKQgGAGgDALIgDAJQgIAQgFAQIgIAgIAAAJIgGARIgDAMIAAAGIACAFIACAFIADACQADABAFgFIAZgYQAIgEAJAAQAFAAAGAGIAJANIAHAMIACAIQgBAGgEAIIgSAfIgEAMIACAOIAHATQADAIAHAIQAGAGAJABIAEgCIAEgFIAIgNQAFgDADgFQADgFAFAAIAFAAIACACIABAFIgBAFIAAAEIgDAJIgfAzIgLANQgEAFgCAAIgBgBgAiCgxQgIAJgBAMIAAAFIABAGIAEAFIAHACQAEAAAFgDIAKgJIAHgLIADgLQAAgEgEgFQgEgDgCAAIgCgBQgMAAgIAIgAOcBqIgKgIIgHgNQgDgGAAgHIAAgeIgCgGQgCgCAAgKQgBgOAIgSIAjhFQAKgOAEgEIAJgGIAHgHIAHgGIAJgCIAPABQAJAAAHADQAHAAACAFIAFAMIAEAGIAJANIABAHIgEApQAAANgFAPQgGAPgLANIgEAIIgIASIgTAbIgIAJIgdAQIgHACIgJABQgHAAgGgDgAPOg6IgNAPIgTAcIgHAcIgBAIIAAAJIADAFIADAJIAFAHQADADAFAAIARgIIAMgIQAGgEADgEIAMgfQAAgEADgDIADgHIAAgNIgFgUIgGgLQgEgFgEABQgIAAgIAFgAqGBsIgHgHIgFgHIgCgGIgBgPQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIAAgJIAEgNIAAgVIAEgWIAAgEIABgJIAJgaIACgLIgCgJQgEgEgGAAIgGACQgBABgKABIgBgDIgCgGIAAgIQAAgEAHgIIAngfIAMgFQAIgBAFAGQAFAGAAAGIgEANIAEAIIAAAFIgEArIgEANIAAAFIgBAIIgHAPIgCAJIABAFIADAGIAEAFIAGACIAHgCIAFgGIAEgDIAGgBIAJAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAAAHIgEAFIgaAYIgQAbIgMAOQgGAGgEAAgAElBoIgIgHIgFgJIgBgIIAAgIIgCgHIgCgDIAIhIIADgDIgCgGIADgFIACgLIAJgWQABgLAIgKQAKgLALgJQAMgJAMgFQANgFAIABQAKAAAGADQAIAEADAGQAFAGABAIIACARQAAALgKAIIg3AiQgJAGgGAHQgFAGgBAMIAAATQAAAIAEAHQADAIAHAAIAEgBIAVgOIAKgFIAGgBIAFABQADABAAAFQgBAKgIAKIgjAfIgMAJQgHAHgHABIgOAAgAFchOIgEAIIgFAKIgDALIAAAEIAEABIAHAAIAJgFIAJgGQAEgEABgEIAAgIIgCgFIgDgDIgEgBIgJgBQgCgBgCAEgAMYBqIgSgEIgWgBIgFgBIgXgGIgKgBIgEgDIgOgFIgDgFQgEgCgGgHIgMgSIgJgVQgEgLAAgGIAAgIIgFgRIAAgfIAIgYIACgKIAEgIQgBgKAJgMQAIgLAKgKQALgKALgHQAMgGAJgBIAMgCIATAAIANgEIAMgBIA4AAQAKAAAHAIQAGAIAEAKIAGATIACALIABAGIAAAEIACADIAAADIgDAGIAAAGQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgHgGIgZgdIgOgFIgkgNQgPABgOAFQgOAGgMAKQgMALgIAPQgIAPgCATIgDAbIABALIACAKIAKAVIAOAUQAIAJAKAGQAKAHAMAAIAQgGQAHAAAHgEQAIgFAAgKIAAgJIgGgXIgJgNIgJgIQgHgCAAgEIACgDIAFgBIA6gBIAGAAIAKgDIAKgBIAGADIAEADIACADIgCAJQgCAFgDAAIgFAAQgJAAgHAIQgGAHAAAGIAAAaIgEAUIACAOIgCAIIgBAFIgFAEIgGADIggAGgAveBrIgNgGIgEADIgHADIgJAAQAAgBAAAAQABAAAAAAQAAAAgBgBQAAAAAAAAIgCgCIgJgCQgHAAgCgBIgDgHIADgMQACgIAHAAIAIAAIAUgDIADgBIABgEIgBgIQADgCgBgDIgCgDIAAgMIAEgLIABgWIAEgVIAAgEIgCgBIAAgFIACgRIAAgPIAEgQQAAgMgEgIQgEgHgHgFIgNgIIgOgGIgKgGQgEgDAAgFQAAgFAEgDIAHgFIAJgDIAGgBIAKAAIAUgEIAkAAQACADAEABIAmACQALADALAGQALAHAJAJQAJALAHAPIAAAYQgBAIgEAGIgRAXIgFAHIACAEIAFAEIAHAGQAEAAAFAEIAGALIAGAMIABALIgBAcQAAAHgFAJIgEAHIgDAFIgDAEIgGAEQgQAKgPAFQgPAHgUAAgAu0gBIgFAJIgEAMIgBAIIAAAdIABAEIAEAFIAEAGIAGABIAKgBIAHgCIAMgFIANgJIAJgKQADgFgBgHIAAgJIAAgGIABgDIgBgDQAAgGgFgEQgEgDgGgCIgNgDIgTgBQgHAAgEAFgAuuhrIgHAHIgEAKQgCAEABADIAAAdIACAKIACAIIAGAEIAKABIAIgCIALgFIAJgIQAEgFABgDIAAgZIgEgKIgHgKIgLgIQgGgEgFAAgADyidQgHAAgIgEQgHgEgDgHQgEgEABgFIABgJQAAgNAEgIIAKgQIARgEIAFgBQAGADACAGIAFALIACAOIgCAHIgCAKIgHAQIgFAGQgDACgDAAIgCAAgApcidQgGAAgIgEQgHgEgEgHQgEgEACgFIABgJQAAgNADgIIAKgQIASgEIAEgBQAGADADAGIAFALIABAOIgCAHIgBAKIgHAQIgGAGQgDACgDAAIgCAAg");
	this.shape.setTransform(104.7,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Title, new cjs.Rectangle(0,0,209.4,62), null);


(lib.Stupid_Building = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACWqJIDIhkIAAXbIjIAAInzAAIAA13IDIhkIHzAAAldqJIHzAAIAAV3");
	this.shape.setTransform(35,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ACWLuIAA13IDIhkIAAXbgAldLuIAA13IHzAAIAAV3g");
	this.shape_1.setTransform(35,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Stupid_Building, new cjs.Rectangle(-1,-1,72,152), null);


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PLAY", "36px 'Bebas'", "#FFFFFF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 85;
	this.text.parent = this;
	this.text.setTransform(44.7,24.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#841F27","rgba(102,102,102,0)"],[0.004,0.984],-85,0,85,0).s().p("AtRGaIAAszIajAAIAAMzg");
	this.shape.setTransform(85,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#841F27","#666666"],[0.004,0.984],-85,0,85,0).s().p("AtRGaIAAszIajAAIAAMzg");
	this.shape_1.setTransform(85,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,82);


(lib.OptionsBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Options", "36px 'Bebas'", "#FFFFFF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 127;
	this.text.parent = this;
	this.text.setTransform(12.1,12.3,0.512,0.512);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#841F27","rgba(102,102,102,0)"],[0.004,0.984],-43.5,0,43.6,0).s().p("AmyDSIAAmjINlAAIAAGjg");
	this.shape.setTransform(43.5,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#841F27","rgba(102,102,102,0.498)"],[0.004,0.984],-43.5,0,43.5,0).s().p("AmyDSIAAmjINlAAIAAGjg");
	this.shape_1.setTransform(43.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,42);


(lib.CreditsBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Credits", "36px 'Bebas'", "#FFFFFF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 128;
	this.text.parent = this;
	this.text.setTransform(9.4,12.3,0.512,0.512);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#841F27","rgba(102,102,102,0)"],[0.004,0.984],-43.5,0,43.6,0).s().p("AmyDSIAAmjINlAAIAAGjg");
	this.shape.setTransform(43.5,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#841F27","rgba(102,102,102,0.498)"],[0.004,0.984],-43.5,0,43.5,0).s().p("AmyDSIAAmjINlAAIAAGjg");
	this.shape_1.setTransform(43.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,42);


(lib.Building = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape.setTransform(84.3,177.1,0.767,0.765,0,0,-43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_1.setTransform(84.3,177.1,0.767,0.765,0,0,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_2.setTransform(76.4,184.3,0.767,0.765,0,0,-43.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_3.setTransform(76.4,184.3,0.767,0.765,0,0,-43.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_4.setTransform(83.5,132.4,0.767,0.765,0,0,-43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_5.setTransform(83.5,132.4,0.767,0.765,0,0,-43.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_6.setTransform(75.6,139.6,0.767,0.765,0,0,-43.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_7.setTransform(75.6,139.6,0.767,0.765,0,0,-43.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_8.setTransform(84.3,154.1,0.767,0.765,0,0,-43.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_9.setTransform(84.3,154.1,0.767,0.765,0,0,-43.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_10.setTransform(76.4,161.3,0.767,0.765,0,0,-43.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_11.setTransform(76.4,161.3,0.767,0.765,0,0,-43.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_12.setTransform(84.3,102.1,0.767,0.765,0,0,-43.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_13.setTransform(84.3,102.1,0.767,0.765,0,0,-43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_14.setTransform(76.4,109.3,0.767,0.765,0,0,-43.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_15.setTransform(76.4,109.3,0.767,0.765,0,0,-43.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_16.setTransform(85.1,75.9,0.767,0.765,0,0,-43.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_17.setTransform(85.1,75.9,0.767,0.765,0,0,-43.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_18.setTransform(77.2,83.1,0.767,0.765,0,0,-43.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_19.setTransform(77.2,83.1,0.767,0.765,0,0,-43.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_20.setTransform(85.1,52.5,0.767,0.765,0,0,-43.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_21.setTransform(85.1,52.5,0.767,0.765,0,0,-43.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_22.setTransform(77.2,59.7,0.767,0.765,0,0,-43.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_23.setTransform(77.2,59.7,0.767,0.765,0,0,-43.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_24.setTransform(84.3,29.6,0.767,0.765,0,0,-43.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_25.setTransform(84.3,29.6,0.767,0.765,0,0,-43.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_26.setTransform(76.4,36.8,0.767,0.765,0,0,-43.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_27.setTransform(76.4,36.8,0.767,0.765,0,0,-43.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_28.setTransform(49.9,186.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_29.setTransform(49.9,186.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_30.setTransform(29.9,186.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_31.setTransform(29.9,186.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_32.setTransform(9.9,186.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_33.setTransform(9.9,186.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_34.setTransform(48.9,165.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_35.setTransform(48.9,165.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_36.setTransform(28.9,165.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_37.setTransform(28.9,165.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_38.setTransform(8.9,165.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_39.setTransform(8.9,165.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_40.setTransform(49.4,144.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_41.setTransform(49.4,144.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_42.setTransform(29.4,144.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_43.setTransform(29.4,144.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_44.setTransform(9.4,144.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_45.setTransform(9.4,144.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_46.setTransform(49.4,124.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_47.setTransform(49.4,124.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_48.setTransform(29.4,124.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_49.setTransform(29.4,124.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_50.setTransform(9.4,124.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_51.setTransform(9.4,124.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_52.setTransform(49.4,104.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_53.setTransform(49.4,104.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_54.setTransform(29.4,104.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_55.setTransform(29.4,104.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_56.setTransform(9.4,104.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_57.setTransform(9.4,104.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_58.setTransform(49.9,81.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_59.setTransform(49.9,81.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_60.setTransform(29.9,81.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_61.setTransform(29.9,81.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_62.setTransform(9.9,81.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_63.setTransform(9.9,81.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_64.setTransform(49.6,62);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_65.setTransform(49.6,62);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_66.setTransform(29.6,62);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_67.setTransform(29.6,62);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_68.setTransform(9.6,62);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_69.setTransform(9.6,62);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_70.setTransform(50,40);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_71.setTransform(50,40);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_72.setTransform(30,40);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_73.setTransform(30,40);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_74.setTransform(10,40);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_75.setTransform(10,40);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AnIuDIDIiWIK1AAIAUeHIjVCsIq8AAIAA+dIK8AAIDBiWAD0uDIAAed");
	this.shape_76.setTransform(45.7,105);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AnIQaIAA+dIK8AAIq8AAIDIiWIK1AAIATeHIjUCsIAA+dIDBiWIjBCWIAAedg");
	this.shape_77.setTransform(45.7,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Building, new cjs.Rectangle(-1,-1,93.3,212), null);


(lib.BackGround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.6)","#FFD91C"],[0,1],-300,0,300,0).s().p("Egu3AXcMAAAgu3MBdvAAAMAAAAu3g");
	this.shape.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BackGround, new cjs.Rectangle(0,0,600,300), null);


(lib.AboutBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("About", "36px 'Bebas'", "#FFFFFF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 112;
	this.text.parent = this;
	this.text.setTransform(16.9,13.4,0.512,0.512);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#841F27","rgba(102,102,102,0)"],[0.004,0.984],-43.5,0,43.6,0).s().p("AmyDSIAAmjINlAAIAAGjg");
	this.shape.setTransform(43.5,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#841F27","rgba(102,102,102,0.498)"],[0.004,0.984],-43.5,0,43.5,0).s().p("AmyDSIAAmjINlAAIAAGjg");
	this.shape_1.setTransform(43.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,42);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.menuanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndStop(30);
	}
	this.frame_30 = function() {
		this.AboutBtn.addEventListener("click", function() {
			alert("About")
		})
		
		this.PlayBtn.addEventListener("click", function() {
			alert("Play")
		})
		
		this.TutorialBtn.addEventListener("click", function() {
			alert("Tutorial")
		})
		
		this.CreditsBtn.addEventListener("click", function() {
			alert("Credits")
		})
		
		this.OptionsBtn.addEventListener("click", function() {
			alert("Options")
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1).call(this.frame_30).wait(6));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:5,regY:5,scaleX:0.01,scaleY:0.01,x:288.5,y:147.6},29).to({_off:true},1).wait(6));

	// Menu
	this.OptionsBtn = new lib.OptionsBtn();
	this.OptionsBtn.parent = this;
	this.OptionsBtn.setTransform(547.4,150,1,1,0,0,0,43.5,21);
	new cjs.ButtonHelper(this.OptionsBtn, 0, 1, 1);

	this.TutorialBtn = new lib.TutorialBtn();
	this.TutorialBtn.parent = this;
	this.TutorialBtn.setTransform(302,150,1,1,0,0,0,43.5,21);
	new cjs.ButtonHelper(this.TutorialBtn, 0, 1, 1);

	this.CreditsBtn = new lib.CreditsBtn();
	this.CreditsBtn.parent = this;
	this.CreditsBtn.setTransform(424.7,150,1,1,0,0,0,43.5,21);
	new cjs.ButtonHelper(this.CreditsBtn, 0, 1, 1);

	this.AboutBtn = new lib.AboutBtn();
	this.AboutBtn.parent = this;
	this.AboutBtn.setTransform(56.6,150,1,1,0,0,0,43.5,21);
	new cjs.ButtonHelper(this.AboutBtn, 0, 1, 1);

	this.instance = new lib.Title();
	this.instance.parent = this;
	this.instance.setTransform(304.9,37.5,1,1,0,0,0,104.7,31);

	this.PlayBtn = new lib.PlayButton();
	this.PlayBtn.parent = this;
	this.PlayBtn.setTransform(135.8,129.1,0.512,0.512,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.PlayBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.PlayBtn},{t:this.instance},{t:this.AboutBtn},{t:this.CreditsBtn},{t:this.TutorialBtn},{t:this.OptionsBtn}]},30).to({state:[]},1).wait(5));

	// Windows
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape.setTransform(144.3,267.1,0.767,0.765,0,0,-43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_1.setTransform(144.3,267.1,0.767,0.765,0,0,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_2.setTransform(136.4,274.3,0.767,0.765,0,0,-43.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_3.setTransform(136.4,274.3,0.767,0.765,0,0,-43.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_4.setTransform(143.5,222.4,0.767,0.765,0,0,-43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_5.setTransform(143.5,222.4,0.767,0.765,0,0,-43.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_6.setTransform(135.6,229.6,0.767,0.765,0,0,-43.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_7.setTransform(135.6,229.6,0.767,0.765,0,0,-43.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_8.setTransform(144.3,244.1,0.767,0.765,0,0,-43.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_9.setTransform(144.3,244.1,0.767,0.765,0,0,-43.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_10.setTransform(136.4,251.3,0.767,0.765,0,0,-43.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_11.setTransform(136.4,251.3,0.767,0.765,0,0,-43.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_12.setTransform(144.3,192.1,0.767,0.765,0,0,-43.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_13.setTransform(144.3,192.1,0.767,0.765,0,0,-43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_14.setTransform(136.4,199.3,0.767,0.765,0,0,-43.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_15.setTransform(136.4,199.3,0.767,0.765,0,0,-43.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_16.setTransform(145.1,165.9,0.767,0.765,0,0,-43.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_17.setTransform(145.1,165.9,0.767,0.765,0,0,-43.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_18.setTransform(137.2,173.1,0.767,0.765,0,0,-43.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_19.setTransform(137.2,173.1,0.767,0.765,0,0,-43.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_20.setTransform(145.1,142.5,0.767,0.765,0,0,-43.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_21.setTransform(145.1,142.5,0.767,0.765,0,0,-43.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_22.setTransform(137.2,149.7,0.767,0.765,0,0,-43.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_23.setTransform(137.2,149.7,0.767,0.765,0,0,-43.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_24.setTransform(144.3,119.6,0.767,0.765,0,0,-43.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_25.setTransform(144.3,119.6,0.767,0.765,0,0,-43.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_26.setTransform(136.4,126.8,0.767,0.765,0,0,-43.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_27.setTransform(136.4,126.8,0.767,0.765,0,0,-43.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_28.setTransform(498.8,278.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_29.setTransform(498.8,278.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_30.setTransform(479.9,278.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_31.setTransform(479.9,278.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_32.setTransform(507.6,261);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_33.setTransform(507.6,261);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_34.setTransform(488.6,261);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_35.setTransform(488.6,261);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_36.setTransform(498.8,243);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_37.setTransform(498.8,243);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_38.setTransform(479.9,243);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_39.setTransform(479.9,243);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_40.setTransform(504.5,226.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_41.setTransform(504.5,226.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_42.setTransform(485.5,226.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_43.setTransform(485.5,226.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_44.setTransform(497.8,208.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_45.setTransform(497.8,208.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_46.setTransform(478.8,208.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_47.setTransform(478.8,208.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_48.setTransform(503.4,189.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_49.setTransform(503.4,189.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_50.setTransform(484.5,189.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_51.setTransform(484.5,189.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_52.setTransform(498.8,172.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_53.setTransform(498.8,172.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_54.setTransform(479.9,172.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_55.setTransform(479.9,172.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_56.setTransform(109.9,276.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_57.setTransform(109.9,276.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_58.setTransform(89.9,276.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_59.setTransform(89.9,276.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_60.setTransform(69.9,276.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_61.setTransform(69.9,276.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_62.setTransform(108.9,255.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_63.setTransform(108.9,255.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_64.setTransform(88.9,255.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_65.setTransform(88.9,255.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_66.setTransform(68.9,255.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_67.setTransform(68.9,255.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_68.setTransform(109.4,234.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_69.setTransform(109.4,234.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_70.setTransform(89.4,234.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_71.setTransform(89.4,234.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_72.setTransform(69.4,234.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_73.setTransform(69.4,234.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_74.setTransform(109.4,214.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_75.setTransform(109.4,214.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_76.setTransform(89.4,214.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_77.setTransform(89.4,214.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_78.setTransform(69.4,214.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_79.setTransform(69.4,214.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_80.setTransform(109.4,194.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_81.setTransform(109.4,194.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_82.setTransform(89.4,194.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_83.setTransform(89.4,194.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_84.setTransform(69.4,194.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_85.setTransform(69.4,194.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_86.setTransform(109.9,171.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_87.setTransform(109.9,171.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_88.setTransform(89.9,171.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_89.setTransform(89.9,171.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_90.setTransform(69.9,171.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_91.setTransform(69.9,171.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_92.setTransform(109.6,152);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_93.setTransform(109.6,152);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_94.setTransform(89.6,152);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_95.setTransform(89.6,152);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_96.setTransform(69.6,152);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_97.setTransform(69.6,152);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_98.setTransform(110,130);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_99.setTransform(110,130);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_100.setTransform(90,130);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_101.setTransform(90,130);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_102.setTransform(70,130);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_103.setTransform(70,130);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(11,11,11,0.847)").s().p("AhZA3IAAgKQAbgMAYgPQAEgDAFAAIAAgKQAcgLAXgPQADgDAFAAIAAgKQAcgNAXgPQAEgCAFAAIAAAKQgFAAgCACQgXAYgeAOQgFAAgCADQgXAVgdAPQgFAAgDACQgVAYgfAOIAAgKg");
	this.shape_104.setTransform(260,117.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#666666").s().p("AmANNIgKAAIAA6PIAAgKIMLAAIAKAAIAAaPIAAAKIsLAAgADXKZIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAAZKZIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAikKZIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAliKZIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAEJHlIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgABLHlIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAhyHlIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAkwHlIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgADhExIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAAjExIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAiaExIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAlYExIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAEJB9IAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgABLB9IAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAhyB9IAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAkwB9IAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgADXgiIAABjIAKAAIBkAAIAAgKQAIg5gSggIgBgFQgxgFgyAAIAAAKgAAZgiIAABjIAKAAIBkAAIAAgKQAIg5gSggIgBgFQgxgFgyAAIAAAKgAikgiIAABjIAKAAIBkAAIAAgKQAIg5gSggIAAgFQgygFgyAAIAAAKgAligiIAABjIAKAAIBkAAIAAgKQAIg5gSggIAAgFQgygFgyAAIAAAKgAD/jMIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgABBjMIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAh8jMIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgAk6jMIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKgADXl2IAAAKIAABaIAKAAIBkAAIAAgKIAAhkIgKgBQgQgBgPAAQgoAAgdAMgAAZl2IAAAKIAABaIAKAAIBkAAIAAgKIAAhkIgKgBQgQgBgPAAQgoAAgdAMgAikl2IAAAKIAABaIAKAAIBkAAIAAgKIAAhkIgKgBQgQgBgPAAQgoAAgdAMgAlil2IAAAKIAABaIAKAAIBkAAIAAgKIAAhkIgKgBQgQgBgPAAQgoAAgdAMgAD1oWIAABkIAKABQA6AGAggRIAFgBQAFgxAAgyIgKAAIhkAAIAAAKgAA3oWIAABkIAKABQA5AGAhgRIAFgBQAFgxAAgyIgKAAIhkAAIAAAKgAiGoWIAABkIAKABQA5AGAhgRIAFgBQAFgxAAgyIgKAAIhkAAIAAAKgAlEoWIAABkIAKABQA5AGAhgRIAFgBQAFgxAAgyIgKAAIhkAAIAAAKgADhrKIAABkIAKABQA5AGAhgRIAFgBQAFgxAAgyIgKAAIhkAAIAAAKgAAjrKIAABkIAKABQA5AGAhgRIAFgBQAFgxAAgyIgKAAIhkAAIAAAKgAiarKIAABkIAKABQA5AGAhgRIAFgBQAFgxAAgyIgKAAIhkAAIAAAKgAlYrKIAABkIAKAAIBkAAIAAgKIAAhkIgKAAIhkAAIAAAKg");
	this.shape_105.setTransform(280.5,215.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(8,8,8,0.835)").s().p("AgsAeIAAgKQArgVAlgaQAEgCAFAAIAAAKQgFAAgCADQgfAdgpARIgKAAg");
	this.shape_106.setTransform(246.5,126);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999998").s().p("AgDglIAJAAIAAA7IAAAKIAAAGQgQgXAHg0g");
	this.shape_107.setTransform(324.4,268.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#969694").s().p("AAAAeQAHgpgQgSIAAgKQAfgFgRBTQAAABgFAAIAAgKg");
	this.shape_108.setTransform(329,265);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#999896").s().p("AAbB9QAGglgRgNIAAgKQAggJgRBOQAAABgFAAIABgKgAghiGIAKAAQAAAeAFAdQAAABAFAAQAAAFgCABQgEACgDAAQgVAAAKhEg");
	this.shape_109.setTransform(334.4,247.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F3C66B").s().p("AgUAxQgFgdAAgdIAAgKQAOgQAXgIQACgBAAgFQARARgHAqIAAAKQgFAAgCACQgMATgUAJQgFAAAAgBg");
	this.shape_110.setTransform(334.6,235);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#969695").s().p("AAAAeQAGgqgQgRIAAgKQAhAQgSA9QgBACgEAAIAAgKg");
	this.shape_111.setTransform(337.1,209);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F3C56B").s().p("AgUAxQgFgdAAgdIAAgKQAUgKAQgNQADgCAAgFQARARgHAqIAAAKQgFAAgCACQgMATgUAJQgFAAAAgBg");
	this.shape_112.setTransform(334.6,211);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F9C968").s().p("AhGEsIAAg8QAUgPARgRQADgDAAgFQARASgHAqIAAAKQgFAAgCADQgRAYgaANIAAgKgAg3iCQgFgiAAgjQAagNARgZQACgCAFAAIAAA8IAAAKQgFAAgCACQgMAUgVAIIAAAKIgFgBgAATjRIAAg8QAUgPARgSQADgCAAgFQARARgHArIAAAKQgFAAgCACQgRAZgaANIAAgKg");
	this.shape_113.setTransform(331.1,217);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#9B9A97").s().p("AAgFuIAKAAQAAAeAFAdQAAABAFAAQAAAFgCABQgFACgDAAQgUAAAKhEgAgvmxIAKAAQAAAeAFAdQAAABAFAAQAAAFgCABQgFACgDAAQgUAAAKhEg");
	this.shape_114.setTransform(328.8,221.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F1C56C").s().p("AgOAxQgFgdAAgdIAAgKQAUgJAMgTQACgCAFAAIAAA7IAAAKQAAAFgCACQgNANgOAKQgFAAAAgBg");
	this.shape_115.setTransform(327,179);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#979796").s().p("AgWEdQAGgqgRgSIAAgKQAhAQgRA+QgBACgFAAIABgKgAhJiuIAKAAQAAAjAFAiIAFABIAAAFQghgLANhAgABDjgQAGgrgRgRIAAgKQAiAQgSA/QgBABgFAAIABgKg");
	this.shape_116.setTransform(331.4,214.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F2C56B").s().p("Ag7IDIAAg8IAAgKQAKgJATgGQABAAAAgFQARARgHArIAAAKQgFAAgCACQgMAUgVAIIAAgKgAAZmpQgFgdAAgeIAAgKQAWgJALgTQACgCAFAAIAAA8IAAAKQAAAFgCAEQgIALgUAAIAAAKQgFAAAAgBg");
	this.shape_117.setTransform(331,219.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#989796").s().p("AgHghIAJAAQAAAeAFAcQAAABAFAAQAAAFgCABQgFACgDAAQgTAAAKhDg");
	this.shape_118.setTransform(332.8,174.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#989898").s().p("ABzLpIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgABzKFIgBAKQgNA/AiARIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAhKLpIgKAAIAAhkIAAgKIBjAAIAKAAIAABkIAAAKIhjAAgAhKKFIgBAKQgNA/AiARIAKABQBPAPgUhWQAAgFgDgCQgVgPglAAQgNAAgPACgAkILpIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAkIKFIgBAKQgNA/AiARIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAnGLpIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAnGKFIgBAKQgNA/AiARIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAClI1IgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAClHRIgBAKQgNA/AiARIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAgYI1IgKAAIAAhkIAAgKIBjAAIAKAAIAABkIAAAKIhjAAgAgYHRIgBAKQgNA/AiARIAJABQBQAPgUhWQAAgFgDgCQgWgPglAAQgMAAgPACgAjWI1IgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAjWHRIgBAKQgNA/AiARIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAmUI1IgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAmUHRIgBAKQgNA/AiARIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAB9GBIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAB9EdIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAhAGBIgKAAIAAhkIAAgKIBjAAIAKAAIAABkIAAAKIhjAAgAhAEdIgBAKQgNBAAiAQIAKABQBPAPgUhWQAAgFgDgCQgWgPgkAAQgNAAgPACgAj+GBIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAj+EdIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAm8GBIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAm8EdIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAClDNIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAClBpIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAgYDNIgKAAIAAhkIAAgKIBjAAIAKAAIAABkIAAAKIhjAAgAgYBpIgBAKQgNBAAiAQIAJABQBQAPgUhWQAAgFgDgCQgWgPglAAQgMAAgPACgAjWDNIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAjWBpIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAmUDNIgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAmUBpIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACgAE7gEIAKAAIAAA7IAAAKIAAAFQgSgWAIg0gAF3APIAAg7IAAgKQARAcgMAyQAAABgFAAIAAgKgACbh8IgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgACbjgIgBAKQgNA/AiARIAKABQBQAOgUhVQAAgFgDgBQgWgQglAAQgNAAgPACgAgih8IgKAAIAAhkIAAgKIBjAAIAKAAIAABkIAAAKIhjAAgAgijgIgBAKQgNA/AiARIAKABQBPAOgUhVQAAgFgDgBQgWgQgkAAQgNAAgPACgAjgh8IgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAjgjgIgBAKQgNA/AiARIAKABQBQAOgUhVQAAgFgDgBQgWgQglAAQgNAAgPACgAmeh8IgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAmejgIgBAKQgNA/AiARIAKABQBQAOgUhVQAAgFgDgBQgWgQglAAQgNAAgPACgABzkmIgKAAIAAhaIAAgKQAngQA9AFIAKABIAABkIAAAKIhkAAgABzmKIgBAKQgNBAAiAQIAKABQBQAOgUhVQAAgFgDgBQgWgQglAAQgNAAgPACgAhKkmIgKAAIAAhaIAAgKQAngQA8AFIAKABIAABkIAAAKIhjAAgAhKmKIgBAKQgNBAAiAQIAKABQBPAOgUhVQAAgFgDgBQgVgQglAAQgNAAgPACgAkIkmIgKAAIAAhaIAAgKQAngQA9AFIAKABIAABkIAAAKIhkAAgAkImKIgBAKQgNBAAiAQIAKABQBQAOgUhVQAAgFgDgBQgWgQglAAQgNAAgPACgAnGkmIgKAAIAAhaIAAgKQAngQA9AFIAKABIAABkIAAAKIhkAAgAnGmKIgBAKQgNBAAiAQIAKABQBQAOgUhVQAAgFgDgBQgWgQglAAQgNAAgPACgAHHm8IAAg8IAAgKQARAbgMA0QAAABgFAAIAAgKgAF3o0IAAg8IAAgKQARAbgMA0QAAABgFAAIAAgKgAm8p6IgKAAIAAhkIAAgKIBkAAIAKAAIAABkIAAAKIhkAAgAm8reIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgFgDgCQgWgPglAAQgNAAgPACg");
	this.shape_119.setTransform(291.5,217.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#9B9995").s().p("AgMgiIAKAAQgIApATAPQADADAFAAQAAAFgCABQgJAEgGAAQgYAAAMhFg");
	this.shape_120.setTransform(332.3,155.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("AE7HFIAKAAIAAA7IAAALIAAAEQgSgWAIg0gABzEHIgKAAIAAhkIAAgLQAyABAxAFIABAFQARAggHA6IAAAKIhkAAgABzCjIgBAKQgNA/AiARIAKABQBQAOgUhVQAAgGgDgBQgWgPglAAQgNAAgPACgAhKEHIgKAAIAAhkIAAgLQAyABAwAFIABAFQARAggHA6IAAAKIhjAAgAhKCjIgBAKQgNA/AiARIAKABQBPAOgUhVQAAgGgDgBQgVgPglAAQgNAAgPACgAkIEHIgKAAIAAhkIAAgLQAyABAxAFIABAFQARAggHA6IAAAKIhkAAgAkICjIgBAKQgNA/AiARIAKABQBQAOgUhVQAAgGgDgBQgWgPglAAQgNAAgPACgAnGEHIgKAAIAAhkIAAgLQAyABAxAFIABAFQARAggHA6IAAAKIhkAAgAnGCjIgBAKQgNA/AiARIAKABQBQAOgUhVQAAgGgDgBQgWgPglAAQgNAAgPACgAGBAgIAAg7IAAgKQARAcgMAyQAAABgFAAIAAgKgAGVg5IAKAAIAAA8IAAAKIAAAEQgSgVAIg1gAF3idIAAg8IAAgKQARAcgMAzQAAABgFAAIAAgKgACRjsIgKgBIAAhkIAAgJIBkAAIAKAAQAAAygFAxIgFAAQgXANgkAAQgPAAgQgCgACRlRIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgEgDgCQgWgPglAAQgNAAgPABgAgsjsIgKgBIAAhkIAAgJIBjAAIAKAAQAAAygFAxIgFAAQgXANgjAAQgPAAgQgCgAgslRIgBAKQgNBAAiAQIAKABQBPAPgUhWQAAgEgDgCQgWgPgkAAQgNAAgPABgAjqjsIgKgBIAAhkIAAgJIBkAAIAKAAQAAAygFAxIgFAAQgXANgkAAQgPAAgQgCgAjqlRIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgEgDgCQgWgPglAAQgNAAgPABgAmojsIgKgBIAAhkIAAgJIBkAAIAKAAQAAAygFAxIgFAAQgXANgkAAQgPAAgQgCgAmolRIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgEgDgCQgWgPglAAQgNAAgPABgAHHmhIAAg8IAAgKQARAcgMAzQAAABgFAAIAAgKgAB9mgIgKgBIAAhkIAAgJIBkAAIAKAAQAAAygFAxIgFAAQgXANgkAAQgPAAgQgCgAB9oFIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgEgDgCQgWgPglAAQgNAAgPABgAhAmgIgKgBIAAhkIAAgJIBjAAIAKAAQAAAygFAxIgFAAQgXANgjAAQgPAAgQgCgAhAoFIgBAKQgNBAAiAQIAKABQBPAPgUhWQAAgEgDgCQgWgPgkAAQgNAAgPABgAj+mgIgKgBIAAhkIAAgJIBkAAIAKAAQAAAygFAxIgFAAQgXANgkAAQgPAAgQgCgAj+oFIgBAKQgNBAAiAQIAKABQBQAPgUhWQAAgEgDgCQgWgPglAAQgNAAgPABg");
	this.shape_121.setTransform(291.5,195.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F6C76A").s().p("AhAFyIAAg8QAbgOAQgYQACgCAFAAIAAA8IAAAKQAAAFgCABQgdANgTAVIAAgKgAAbkZQgUgQAIgqIAAgKQAggDAMgZQABgCAFAAIAAA8IAAAKQgFAAgBACQgHAPgRADIAAAKQgFAAgDgCg");
	this.shape_122.setTransform(330.5,186);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F4C66B").s().p("AgUAxQgFgdAAgdIAAgKQAOgQAXgJQACAAAAgFQARASgHApIAAAKQgFAAgCACQgMAUgUAIQgFAAAAgBg");
	this.shape_123.setTransform(326.6,142);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#989795").s().p("AgHghIAJAAQAAAeAFAcQAAABAFAAQAAAFgCABQgFACgDAAQgTAAAKhDg");
	this.shape_124.setTransform(331.8,137.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#979694").s().p("ABDHvQAGgqgRgSIAAgKQAggFgRBUQAAABgFAAIABgKgAhJkSIAKAAQAAAjAFAjIAFAAQAAAFgBABIgGABQgYAAALhNgAgMmyQAGgqgRgSIAAgKQAfgFgQBUQAAABgFAAIABgKg");
	this.shape_125.setTransform(330.4,186.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F0C46C").s().p("AAdKdQgFgdAAgeIAAgKQARgDAHgPQABgCAFAAQARANgGAlIgBAKQAAAFgDACQgMANgPAKQgFAAAAgBgAg8k1QgFgjAAgjQAagNARgZQACgCAFAAIAAA8IAAAKQAAAFgDACQgRASgUAPIgFAAgAATo6QgFgdAAgeIAAgKQAVgJAMgTQACgCAFAAQARANgGAlIgBAKQAAAFgDACQgRASgUAPQgFAAAAgBg");
	this.shape_126.setTransform(330.6,197);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9C9A96").s().p("AAGF0IAKAAQAAAeAFAdQAAABAFAAQAAAFgCABQgEABgDAAQgUAAAJhDgAhJk9IAKAAQAAAeAFAdQAAABAFAAQAAAFgCABQgEABgDAAQgVAAAKhDgABDl5QAGglgRgNIAAgKQAggJgRBOQAAABgFAAIABgKg");
	this.shape_127.setTransform(330.4,172.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#676767").s().p("ABVOsIizAAIAAgKIAA6ZQBfhUBWheQADgCAFAAIAAAKIAAdNIgKAAgAg2KZIAAgFQAVgIAMgUQACgCAFAAQAFAAAAgBQAQhUgfAFIAAAKQAAAFgBAAQgTAGgKAJIAAAKIgKAAQgIA0ASAXgAAhJKQACgBAAgFQAPgKANgNQACgCAAgFQAFAAAAgBQARhOggAJIAAAKQgFAAgBACQgHAPgRADIAAAKIgKAAQgLBPAdgNgAhAGpIAAgFQAbgNAQgYQACgDAFAAQAFAAABgCQARg+ghgQIAAAKQAAAFgCADQgSARgUAPIgKAAQgIA0ASAXgAAXFaQACgBAAgFQAWgJALgTQACgCAFAAQAFAAAAgBQARhUggAFIAAAKQAAAFgBABQgYAIgPAQIAAAKIgKAAQgKBPAcgNgAhAC5IAAgFQATgVAdgNQACgBAAgFQAFAAABgBQALgzgRgcIAAAKQgFAAgCACQgQAYgbAOIgKAAQgIA1ASAWgAAXBqQACgBAAgFQAWgJALgTQACgCAFAAQAFAAABgCQASg+gigPIAAAJQAAAFgCACQgSANgUAKIAAAKIgKAAQgKBPAcgNgAgsgOIAAgFIAAgKQAWgIALgUQACgCAFAAQAEAAABgBQAMg0gRgbIAAAKQgFAAgCACQgRAZgaANIgKAAQgNBAAhALgAAZhUIAAgFQAbgNAQgZQACgCAFAAQAFAAABgBQASg/gigQIAAAKQAAAFgCACQgSASgUAPIgKAAQgIA1ASAWgAgujVQACgBAAgFQAPgKANgNQACgCAAgFQAFAAABgBQALg0gRgbIAAAKQgFAAgCACQgMATgVAJIAAAKIgKAAQgLBPAdgNgAAhkbQACgBAAgFIAAgKQAUAAAIgLQACgEAAgFQAFAAABgBQALg0gRgbIAAAKQgFAAgCACQgLATgWAJIAAAKIgKAAQgLBPAdgNgAg4mJQACgBAAgFQAUgPASgSQACgCAAgFQAFAAABgBQALg0gRgbIAAAKQgFAAgCACQgQAZgbANIgKAAQgMBVAegJgAAhnZQACgBAAgFIAAgKQARgDAHgPQABgCAFAAQAFAAABgBQALg0gRgbIAAAKQgFAAgBACQgMAZggADIAAAKIgKAAQgNBXApgVgAg4pHQACgBAAgFQAVgIAMgUQACgCAFAAQAFAAAAgBQAQhUgfAFIAAAKQAAAFgBAAQgZAJgOAQIAAAKIgKAAQgLBPAdgNgAAXqNQACgBAAgFQAUgPASgSQACgCAAgFQAFAAAAgBQARhOggAJIAAAKQgFAAgCACQgMATgVAJIAAAKIgKAAQgKBPAcgNg");
	this.shape_128.setTransform(330.5,206);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#656565").s().p("AnaBVQAqgRAfgeQACgDAFAAQAfgOAVgXQADgCAFAAQAegPAXgWQACgDAFAAQAegOAXgYQACgCAFAAQFGgRFhAHIAKAAQAAAFgCADQhYBWhaBVIAAAKIgKAAQh2AChzAAQkNAAkBgMg");
	this.shape_129.setTransform(290.5,120.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#323232").s().p("AhjBfIAAgKQBahVBXhWQACgDAAgFQAKAAAIAEQACABAAAFQgFAAgDACQhWBdhfBUIgKAAg");
	this.shape_130.setTransform(330,120.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.996)").s().p("AHvO7IvnAAIAAgKIAA6jQAFgFAGgDQAEgCAFAAIAKAAQFvASGIgIIAKAAIAKAAIAAaZIAAAKIC0AAIAKAAIAA9NIAAgKQAAgFgCgBQgIgEgKAAIgKAAQlhgHlGARIAAgKIAAgKILFAAIAKAAIAAAKIAAdrIgKAAgAnureIAAaPIAKAAIMLAAIAAgKIAA6PIgKAAIsLAAIAAAKg");
	this.shape_131.setTransform(290.5,205.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFCC66").s().p("AD1LfIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAA3LfIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAiGLfIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAlELfIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAEnIrIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgABpIrIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAhUIrIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAkSIrIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAD/F3IgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgABBF3IgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAh8F3IgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAk6F3IgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAEnDDIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgABpDDIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAhUDDIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAkSDDIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAD1AjIgKgBQghgQAMg/IABgKQA6gHAeAVQACABAAAFQASBJg5AAQgJAAgMgDgAA3AjIgKgBQghgQAMg/IABgKQA6gHAeAVQACABAAAFQASBJg5AAQgJAAgMgDgAiGAjIgKgBQghgQAMg/IABgKQA6gHAeAVQACABAAAFQASBJg5AAQgJAAgMgDgAlEAjIgKgBQghgQAMg/IABgKQA6gHAeAVQACABAAAFQASBJg5AAQgJAAgMgDgAEdiGIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgABfiGIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAheiGIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAkciGIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAD1kwIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAA3kwIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAiGkwIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAlEkwIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAETnQIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgABVnQIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAhonQIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAkmnQIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAD/qEIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgABBqEIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAh8qEIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDgAk6qEIgKgBQghgQAMhAIABgKQA6gHAeAVQACABAAAFQASBKg5AAQgJAAgMgDg");
	this.shape_132.setTransform(281.5,217.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_133.setTransform(269.9,250.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_134.setTransform(269.9,250.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_135.setTransform(250.9,250.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_136.setTransform(250.9,250.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_137.setTransform(311.9,232.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_138.setTransform(311.9,232.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_139.setTransform(292.9,232.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_140.setTransform(292.9,232.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_141.setTransform(274,232.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_142.setTransform(274,232.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_143.setTransform(255,232.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_144.setTransform(255,232.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_145.setTransform(306.8,216.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_146.setTransform(306.8,216.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_147.setTransform(287.8,216.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_148.setTransform(287.8,216.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_149.setTransform(268.8,216.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_150.setTransform(268.8,216.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_151.setTransform(249.9,216.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_152.setTransform(249.9,216.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_153.setTransform(311.4,199);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_154.setTransform(311.4,199);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_155.setTransform(292.4,199);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_156.setTransform(292.4,199);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_157.setTransform(273.4,199);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_158.setTransform(273.4,199);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_159.setTransform(254.5,199);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_160.setTransform(254.5,199);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_161.setTransform(307.3,182.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_162.setTransform(307.3,182.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_163.setTransform(288.3,182.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_164.setTransform(288.3,182.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_165.setTransform(269.4,182.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_166.setTransform(269.4,182.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_167.setTransform(250.4,182.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_168.setTransform(250.4,182.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_169.setTransform(309.9,165.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_170.setTransform(309.9,165.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_171.setTransform(290.9,165.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_172.setTransform(290.9,165.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_173.setTransform(271.9,165.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_174.setTransform(271.9,165.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_175.setTransform(253,165.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_176.setTransform(253,165.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_177.setTransform(308.1,147.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_178.setTransform(308.1,147.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_179.setTransform(289.1,147.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_180.setTransform(289.1,147.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_181.setTransform(270.1,147.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_182.setTransform(270.1,147.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_183.setTransform(251.2,147.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_184.setTransform(251.2,147.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_185.setTransform(109.9,276.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_186.setTransform(109.9,276.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_187.setTransform(89.9,276.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_188.setTransform(89.9,276.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_189.setTransform(69.9,276.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_190.setTransform(69.9,276.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_191.setTransform(108.9,255.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_192.setTransform(108.9,255.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_193.setTransform(88.9,255.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_194.setTransform(88.9,255.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_195.setTransform(68.9,255.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_196.setTransform(68.9,255.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_197.setTransform(109.4,234.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_198.setTransform(109.4,234.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_199.setTransform(89.4,234.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_200.setTransform(89.4,234.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_201.setTransform(69.4,234.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_202.setTransform(69.4,234.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_203.setTransform(109.4,214.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_204.setTransform(109.4,214.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_205.setTransform(89.4,214.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_206.setTransform(89.4,214.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_207.setTransform(69.4,214.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_208.setTransform(69.4,214.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_209.setTransform(109.4,194.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_210.setTransform(109.4,194.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_211.setTransform(89.4,194.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_212.setTransform(89.4,194.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_213.setTransform(69.4,194.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_214.setTransform(69.4,194.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_215.setTransform(109.9,171.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_216.setTransform(109.9,171.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_217.setTransform(89.9,171.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_218.setTransform(89.9,171.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_219.setTransform(69.9,171.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_220.setTransform(69.9,171.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_221.setTransform(109.6,152);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_222.setTransform(109.6,152);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_223.setTransform(89.6,152);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_224.setTransform(89.6,152);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_225.setTransform(69.6,152);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_226.setTransform(69.6,152);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_227.setTransform(110,130);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_228.setTransform(110,130);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_229.setTransform(90,130);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_230.setTransform(90,130);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_231.setTransform(70,130);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_232.setTransform(70,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103,p:{x:70,y:130}},{t:this.shape_102,p:{x:70,y:130}},{t:this.shape_101,p:{x:90,y:130}},{t:this.shape_100,p:{x:90,y:130}},{t:this.shape_99,p:{x:110,y:130}},{t:this.shape_98,p:{x:110,y:130}},{t:this.shape_97,p:{x:69.6,y:152}},{t:this.shape_96,p:{x:69.6,y:152}},{t:this.shape_95,p:{x:89.6,y:152}},{t:this.shape_94,p:{x:89.6,y:152}},{t:this.shape_93,p:{x:109.6,y:152}},{t:this.shape_92,p:{x:109.6,y:152}},{t:this.shape_91,p:{x:69.9,y:171.9}},{t:this.shape_90,p:{x:69.9,y:171.9}},{t:this.shape_89,p:{x:89.9,y:171.9}},{t:this.shape_88,p:{x:89.9,y:171.9}},{t:this.shape_87,p:{x:109.9,y:171.9}},{t:this.shape_86,p:{x:109.9,y:171.9}},{t:this.shape_85,p:{x:69.4,y:194.9}},{t:this.shape_84,p:{x:69.4,y:194.9}},{t:this.shape_83,p:{x:89.4,y:194.9}},{t:this.shape_82,p:{x:89.4,y:194.9}},{t:this.shape_81,p:{x:109.4,y:194.9}},{t:this.shape_80,p:{x:109.4,y:194.9}},{t:this.shape_79,p:{x:69.4,y:214.9}},{t:this.shape_78,p:{x:69.4,y:214.9}},{t:this.shape_77,p:{x:89.4,y:214.9}},{t:this.shape_76,p:{x:89.4,y:214.9}},{t:this.shape_75,p:{x:109.4,y:214.9}},{t:this.shape_74,p:{x:109.4,y:214.9}},{t:this.shape_73,p:{x:69.4,y:234.8}},{t:this.shape_72,p:{x:69.4,y:234.8}},{t:this.shape_71,p:{x:89.4,y:234.8}},{t:this.shape_70,p:{x:89.4,y:234.8}},{t:this.shape_69,p:{x:109.4,y:234.8}},{t:this.shape_68,p:{x:109.4,y:234.8}},{t:this.shape_67,p:{x:68.9,y:255.3}},{t:this.shape_66,p:{x:68.9,y:255.3}},{t:this.shape_65,p:{x:88.9,y:255.3}},{t:this.shape_64,p:{x:88.9,y:255.3}},{t:this.shape_63,p:{x:108.9,y:255.3}},{t:this.shape_62,p:{x:108.9,y:255.3}},{t:this.shape_61,p:{x:69.9,y:276.3}},{t:this.shape_60,p:{x:69.9,y:276.3}},{t:this.shape_59,p:{x:89.9,y:276.3}},{t:this.shape_58,p:{x:89.9,y:276.3}},{t:this.shape_57,p:{x:109.9,y:276.3}},{t:this.shape_56,p:{x:109.9,y:276.3}},{t:this.shape_55,p:{scaleX:1,scaleY:1,skewY:0,x:479.9,y:172.4}},{t:this.shape_54,p:{scaleX:1,scaleY:1,skewY:0,x:479.9,y:172.4}},{t:this.shape_53,p:{scaleX:1,scaleY:1,skewY:0,x:498.8,y:172.4}},{t:this.shape_52,p:{scaleX:1,scaleY:1,skewY:0,x:498.8,y:172.4}},{t:this.shape_51,p:{scaleX:1,scaleY:1,skewY:0,x:484.5,y:189.8}},{t:this.shape_50,p:{scaleX:1,scaleY:1,skewY:0,x:484.5,y:189.8}},{t:this.shape_49,p:{scaleX:1,scaleY:1,skewY:0,x:503.4,y:189.8}},{t:this.shape_48,p:{scaleX:1,scaleY:1,skewY:0,x:503.4,y:189.8}},{t:this.shape_47,p:{scaleX:1,scaleY:1,skewY:0,x:478.8,y:208.2}},{t:this.shape_46,p:{scaleX:1,scaleY:1,skewY:0,x:478.8,y:208.2}},{t:this.shape_45,p:{scaleX:1,scaleY:1,skewY:0,x:497.8,y:208.2}},{t:this.shape_44,p:{scaleX:1,scaleY:1,skewY:0,x:497.8,y:208.2}},{t:this.shape_43,p:{scaleX:1,scaleY:1,skewY:0,x:485.5,y:226.2}},{t:this.shape_42,p:{scaleX:1,scaleY:1,skewY:0,x:485.5,y:226.2}},{t:this.shape_41,p:{scaleX:1,scaleY:1,skewY:0,x:504.5,y:226.2}},{t:this.shape_40,p:{scaleX:1,scaleY:1,skewY:0,x:504.5,y:226.2}},{t:this.shape_39,p:{scaleX:1,scaleY:1,skewY:0,x:479.9,y:243}},{t:this.shape_38,p:{scaleX:1,scaleY:1,skewY:0,x:479.9,y:243}},{t:this.shape_37,p:{scaleX:1,scaleY:1,skewY:0,x:498.8,y:243}},{t:this.shape_36,p:{scaleX:1,scaleY:1,skewY:0,x:498.8,y:243}},{t:this.shape_35,p:{scaleX:1,scaleY:1,skewY:0,x:488.6,y:261}},{t:this.shape_34,p:{scaleX:1,scaleY:1,skewY:0,x:488.6,y:261}},{t:this.shape_33,p:{scaleX:1,scaleY:1,skewY:0,x:507.6,y:261}},{t:this.shape_32,p:{scaleX:1,scaleY:1,skewY:0,x:507.6,y:261}},{t:this.shape_31,p:{scaleX:1,scaleY:1,skewY:0,x:479.9,y:278.9}},{t:this.shape_30,p:{scaleX:1,scaleY:1,skewY:0,x:479.9,y:278.9}},{t:this.shape_29,p:{scaleX:1,scaleY:1,skewY:0,x:498.8,y:278.9}},{t:this.shape_28,p:{scaleX:1,scaleY:1,skewY:0,x:498.8,y:278.9}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_103,p:{x:288.8,y:250.2}},{t:this.shape_102,p:{x:288.8,y:250.2}},{t:this.shape_101,p:{x:307.8,y:250.2}},{t:this.shape_100,p:{x:307.8,y:250.2}},{t:this.shape_99,p:{x:255,y:268.6}},{t:this.shape_98,p:{x:255,y:268.6}},{t:this.shape_97,p:{x:274,y:268.6}},{t:this.shape_96,p:{x:274,y:268.6}},{t:this.shape_95,p:{x:292.9,y:268.6}},{t:this.shape_94,p:{x:292.9,y:268.6}},{t:this.shape_93,p:{x:311.9,y:268.6}},{t:this.shape_92,p:{x:311.9,y:268.6}},{t:this.shape_91,p:{x:249.9,y:286}},{t:this.shape_90,p:{x:249.9,y:286}},{t:this.shape_89,p:{x:268.9,y:286}},{t:this.shape_88,p:{x:268.9,y:286}},{t:this.shape_87,p:{x:287.8,y:286}},{t:this.shape_86,p:{x:287.8,y:286}},{t:this.shape_85,p:{x:306.8,y:286}},{t:this.shape_84,p:{x:306.8,y:286}},{t:this.shape_83,p:{x:479.9,y:172.4}},{t:this.shape_82,p:{x:479.9,y:172.4}},{t:this.shape_81,p:{x:498.8,y:172.4}},{t:this.shape_80,p:{x:498.8,y:172.4}},{t:this.shape_79,p:{x:484.5,y:189.8}},{t:this.shape_78,p:{x:484.5,y:189.8}},{t:this.shape_77,p:{x:503.4,y:189.8}},{t:this.shape_76,p:{x:503.4,y:189.8}},{t:this.shape_75,p:{x:478.8,y:208.2}},{t:this.shape_74,p:{x:478.8,y:208.2}},{t:this.shape_73,p:{x:497.8,y:208.2}},{t:this.shape_72,p:{x:497.8,y:208.2}},{t:this.shape_71,p:{x:485.5,y:226.2}},{t:this.shape_70,p:{x:485.5,y:226.2}},{t:this.shape_69,p:{x:504.5,y:226.2}},{t:this.shape_68,p:{x:504.5,y:226.2}},{t:this.shape_67,p:{x:479.9,y:243}},{t:this.shape_66,p:{x:479.9,y:243}},{t:this.shape_65,p:{x:498.8,y:243}},{t:this.shape_64,p:{x:498.8,y:243}},{t:this.shape_63,p:{x:488.6,y:261}},{t:this.shape_62,p:{x:488.6,y:261}},{t:this.shape_61,p:{x:507.6,y:261}},{t:this.shape_60,p:{x:507.6,y:261}},{t:this.shape_59,p:{x:479.9,y:278.9}},{t:this.shape_58,p:{x:479.9,y:278.9}},{t:this.shape_57,p:{x:498.8,y:278.9}},{t:this.shape_56,p:{x:498.8,y:278.9}},{t:this.shape_55,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.3,y:141.8}},{t:this.shape_54,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.3,y:141.8}},{t:this.shape_53,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.2,y:134.6}},{t:this.shape_52,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.2,y:134.6}},{t:this.shape_51,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.2,y:160.5}},{t:this.shape_50,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.2,y:160.5}},{t:this.shape_49,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.1,y:153.3}},{t:this.shape_48,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.1,y:153.3}},{t:this.shape_47,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.5,y:179.3}},{t:this.shape_46,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.5,y:179.3}},{t:this.shape_45,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.4,y:172.1}},{t:this.shape_44,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.4,y:172.1}},{t:this.shape_43,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:327.3,y:198.2}},{t:this.shape_42,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:327.3,y:198.2}},{t:this.shape_41,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:335.2,y:191}},{t:this.shape_40,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:335.2,y:191}},{t:this.shape_39,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.4,y:218.1}},{t:this.shape_38,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.4,y:218.1}},{t:this.shape_37,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.3,y:210.9}},{t:this.shape_36,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.3,y:210.9}},{t:this.shape_35,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.2,y:242}},{t:this.shape_34,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.2,y:242}},{t:this.shape_33,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.1,y:234.8}},{t:this.shape_32,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.1,y:234.8}},{t:this.shape_31,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.6,y:266.6}},{t:this.shape_30,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:326.6,y:266.6}},{t:this.shape_29,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.5,y:259.4}},{t:this.shape_28,p:{scaleX:0.767,scaleY:0.765,skewY:-43.7,x:334.5,y:259.4}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).to({state:[]},1).wait(6));

	// Buildings
	this.instance_1 = new lib.Stupid_Building();
	this.instance_1.parent = this;
	this.instance_1.setTransform(505,225,1,1,0,0,0,35,75);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(1,1,1).p("AD6uDIDIiWMAAAAgzIjIAAIq7AAIAA+dIDIiWIK7AAAnBuDIK7AAIAAed");
	this.shape_233.setTransform(105,195);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#666666").s().p("A6jQaIAA+dIAAedIq8AAIAA+dIK8AAIDIiWMAAAAgzgAakldIDIhkIH0AAIjIBkgEglfgODIDIiWIK8AAIjICWgA3bwZg");
	this.shape_234.setTransform(300,195);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(1,1,1).p("EAiYgFdIDIhkAakldIDIhkIH0AAIAAXbIjIAAIn0AAIAA13IH0AAIAAV3AGQtRIAAdrIjIAAIsfAAIAA6jIMfAAIAAajApXqJIEsjIIK7AAEglfgODIK8AAIDIiWEglfgODIDIiWIK8AAMAAAAgzIjIAAIq8AAgA6juDIAAedADIqJIDIjI");
	this.shape_235.setTransform(300,195);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#666666").s().p("EAiYAQaIAA13IDIhkIAAXbgAakQaIAA13IH0AAIAAV3gADIQaIAA6jIAAajIsfAAIAA6jIMfAAIsfAAIEsjIIK7AAIjIDIIDIjIIAAdrgA6jQaIAA+dIAAedIq8AAIAA+dIK8AAIDIiWMAAAAgzgEAiYgFdgEAiYgFdIn0AAIDIhkIH0AAIjIBkgEAlggHBgAGQtRgEglfgODIDIiWIK8AAIjICWgA3bwZg");
	this.shape_236.setTransform(300,195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_234},{t:this.shape_233},{t:this.instance_1}]}).to({state:[{t:this.shape_236},{t:this.shape_235}]},29).to({state:[]},1).wait(6));

	// Graffity
	this.instance_2 = new lib.Building();
	this.instance_2.parent = this;
	this.instance_2.setTransform(380.9,210.1,1,1,0,0,0,45.6,105);
	this.instance_2.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_2.cache(-3,-3,97,216);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#990033").s().p("AANLNQgMgCgGgVIgLgfQgXgFgVgKQgzgZgigtQgTgagHgaQgGgYABgrQAAg2AIgdQAFgVAMgWIgLgXQgIgQABgJQAAgGAEgGQAEgGAGAAQAMgCALATIAGALIAMgSQAhgqAcABIAQACQAGAAAPgGQAWgHAdABQApACA8AQIAKADIAdg5QAIgPAHgFQAFgEAHAAQAHgBAEAEQANAJgMAbQgKAWgVAlIAFAEQAQAMAVAlQAWAnAGAVQAFAUAAAYQAAAxgUAxQgTAvgiAnQgPARgNAJQgMAKgWAKQglAQgpACIgGAVQgJAbgPAAIgCAAgAhcE9QgEAIgIAKIgBABQAYAyAbBGQAwB9AWAvIABAAQAli0BLilQg2gQglAAQgVgBgRAFQgXAHgLADIgaAEIgEABIgCAIQgDAJgDAEQgFAHgJgBIgEAAIgCAEgABeHpIgnCLQAOgCANgDQAegJAXgRQAkgbAXgvQAmhOgVhDQgIgagXghQgIgNgHgHQgmBMghBygAiBF9QgIAdAAA3QAAAeADAOQAIAlAgAfQAcAbAiANQgth7g0hyIAAABgAitB0QgLgHAAgPQAAgLAIgNIANgTQAHgPgGgYIgMgkQgEgQgBgVIgBgmQgBgfgFgQQgGgSADgHQgNgHAHgcIgEgDIgWgZQgcgggSgxQgLgdgRg+QgMgygCgbQgEgrAOggQAKgWAUgVQAPgOAagUQA2gqApgQQAhgMArgFQBrgPBLAUQAvAMAlAaQApAbAWAnQAfA4gCBTIgBAKQAHADACAFQAGALgNAQIgGAGQgIA7gXA7IgWAvQgKAUgKAQIAGAKIADAFIAMAKQAGAGAJARQAIAPADAOQAFARgDATIgEAiIgCATIgDATIgFAYQgBAHAAAPIAAAWQgBANgGAJQgGAKgKADQgNAEgKgKQgEgFAAgGQgBgHAEgFIAHgIQACgEgBgHQAAgWACgRIAJg4QAGghgCgQQgBgSgIgNQgGgBgGgFQgFgEgIgNIgBgDIgEgDQgPAQgXARQhAAvhMAWQgcAJgUgDQgQgBgRgKQgKgFgTgOQgigXgPgRIACARQABAUAAAoQAAAMAEAOIAGASQAFAKABAGQADAKAAARQABATgDAJQgCAKgNAUIgHANQgDAKgCADQgEAFgHABIgDAAQgFAAgEgCgAhtlFIgSAlQgIASgIAZIgHAaIAQANQAMALAEAMIAFASQAFAMAQAKIAbAQIAPANQAIAHAIACQAKADAOgEIAYgKIAigJQAVgGAMgGQAKgGAPgNQARgQAHgEIATgMQAMgGAHgGQAFgGAGgIIgKgbQgUg8gHgQIgWgwIgGgNQguAJglABQghABg2gGIgqgFQgIAqgDALgAjtl9IgJABQALAnALAZQARAoAYAcQAJgeAIgRIAOghQALgYAFgdIgHgBIgqgBQgbAAgZACgACZmCIAAACIAcA6QAGAMAQA0IABACIAIgOIAOgXQALgWAIglQAIgeAEgbIhoAbgAgFpYQgXA6gQAeIghBAQgHAQgFAPIAJABQBGAIAkgBQAigBAogGIgCgHIgUg7QgYhCgkg+IgMgTgAg4qeQg9AKgiATQgSAJgkAcQgXASgKAKQgRASgIARQgKAYADAgQABAVAKAlIACAIQAngFAfAAQAVAAAlADIAAgBQAGgVASghQA1hnAZhLQAFgNAEgIIgmAFgAAUqhQAIAGAKARQA2BYAYBFIASA3IAEAOQAhgHA1gPQAVgGAQgCQACgagCgVQgEgmgPggQgQgjgbgWQghgbg5gMQgrgKguAAIAAAAIAAAEg");
	this.shape_237.setTransform(363.8,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_237},{t:this.instance_2}]}).to({state:[]},30).wait(6));

	// BackGround2
	this.instance_3 = new lib.Building();
	this.instance_3.parent = this;
	this.instance_3.setTransform(573.4,151.7,1,1,0,0,0,45.6,105);
	this.instance_3.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_3.cache(-3,-3,97,216);

	this.instance_4 = new lib.Building();
	this.instance_4.parent = this;
	this.instance_4.setTransform(474.2,171.6,1,1,0,0,0,45.6,105);
	this.instance_4.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_4.cache(-3,-3,97,216);

	this.instance_5 = new lib.Building();
	this.instance_5.parent = this;
	this.instance_5.setTransform(264.3,146.6,1,1,0,0,0,45.6,105);
	this.instance_5.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_5.cache(-3,-3,97,216);

	this.instance_6 = new lib.Building();
	this.instance_6.parent = this;
	this.instance_6.setTransform(164.5,122.9,1,1,0,0,0,45.6,105);
	this.instance_6.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_6.cache(-3,-3,97,216);

	this.instance_7 = new lib.Building();
	this.instance_7.parent = this;
	this.instance_7.setTransform(55,148.5,1,1,0,0,0,45.6,105);
	this.instance_7.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_7.cache(-3,-3,97,216);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,62.5).ss(1,1,1).p("AAApqIAATV");
	this.shape_238.setTransform(409.8,134.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,71.1).ss(1,1,1).p("AAArAIAAWB");
	this.shape_239.setTransform(405.1,147.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,71.6).ss(1,1,1).p("AAArGIAAWN");
	this.shape_240.setTransform(402,150.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,75.7).ss(1,1,1).p("AAArvIAAXf");
	this.shape_241.setTransform(386,159.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,76.3).ss(1,1,1).p("AAAr1IAAXr");
	this.shape_242.setTransform(377.8,159);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,74.8).ss(1,1,1).p("AAArlIAAXL");
	this.shape_243.setTransform(368,157.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,73.2).ss(1,1,1).p("AAArWIAAWt");
	this.shape_244.setTransform(359,157.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,77.3).ss(1,1,1).p("AAAr+IAAX+");
	this.shape_245.setTransform(352,158.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,75.9).ss(1,1,1).p("AAArxIAAXj");
	this.shape_246.setTransform(344.6,159.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,71.4).ss(1,1,1).p("AAArEIAAWJ");
	this.shape_247.setTransform(337.9,159.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().rs(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,69.1).ss(1,1,1).p("AAAqtIAAVb");
	this.shape_248.setTransform(331.3,159.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(1,1,1).p("AAEyeIC5gnIBbBVICpCjIAAGSIAAX0IiFENIgBgBIryAAIgK44IACnrIFZlUIBqAUIE1FAIAIAAIAAHiIApg9IBXiCAB9pmQAABYg+A7Qg+A8hXgDQhYgEg+hAQg+hBAAhYQAAhXA+g8QA+g8BYAEQBXADA+BAQA+BBAABYgAhosAIAADEIBTBFAFBteICAhvAFBl8IgFZCAnBlzIMCgJAm/teIL4AA");
	this.shape_249.setTransform(366.9,116.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.rf(["#CACACA","#666666"],[0.004,0.984],100.4,-33.8,0,100.4,-33.8,163.4).s().p("Ag8rCIAog8IBXiCIAAX0IiFEMgAgfLYIAA2NgAAAKwIAA2BgAAuHZIAAzVg");
	this.shape_250.setTransform(405.1,148.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.rf(["#CACACA","#666666"],[0.004,0.984],91.3,-53.5,0,91.3,-53.5,185.6).s().p("AF7MhIrxAAIgK44IMBgKIgFZCgAhUMBIAA3+gAD/L9IAA3fgACtL9IAA3rgAieL5IAA3jgABLLaIAA3LgAjhLSIAA2JgAgNLLIAA2tgAkjK3IAA1bg");
	this.shape_251.setTransform(360.5,158.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.rf(["#CACACA","#666666"],[0.004,0.984],-11.6,-47.2,0,-11.6,-47.2,77.1).s().p("Ag/i5IB/huIAAGRIhXCBIgoA9g");
	this.shape_252.setTransform(405.4,48.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.rf(["#CACACA","#666666"],[0.004,0.984],-18.4,-19.3,0,-18.4,-19.3,48.5).s().p("ABWCzIk0k/IC5gmIBbBVICpCiIiABug");
	this.shape_253.setTransform(389.5,12.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.rf(["#CACACA","#666666"],[0.004,0.984],-1.6,-23,0,-1.6,-23,56.3).s().p("Al7CqIFZlTIBqAUIE0E/g");
	this.shape_254.setTransform(360.1,13);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.rf(["#CACACA","#666666"],[0.004,0.984],0,0,0,0,0,45.7).s().p("Al+j1IL2AAIAJAAIAAHhIsBAKgAisigQg9A7gBBYQABBXA9BBQA+BABYADQBXADA+g7QA+g8AAhXQAAhYg+hAQg+hAhXgEIgKAAQhRAAg7A5g");
	this.shape_255.setTransform(360.5,54.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#C5C5C5").s().p("AAADUQhXgDg+hBQg+hAAAhXQAAhYA+g8QA+g7BXADQBYAEA+BAQA+BAAABXQAABYg+A8Qg7A4hSAAIgJAAgAgRAyIBSBFIhShFIAAjDIAADDg");
	this.shape_256.setTransform(358.2,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},30).wait(6));

	// BackGround
	this.instance_8 = new lib.BackGround();
	this.instance_8.parent = this;
	this.instance_8.setTransform(300,150,1,1,0,0,0,300,150);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["rgba(0,0,0,0.6)","#FFD91C"],[0,1],-300,0,300,0).s().p("Egu3AXcMAAAgu3MBdvAAAMAAAAu3g");
	this.shape_257.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.shape_257}]},29).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,143.2,626.3,327.4);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;