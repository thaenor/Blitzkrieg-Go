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


(lib.Windows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape.setTransform(80.5,154,0.767,0.765,0,0,-43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_1.setTransform(80.5,154,0.767,0.765,0,0,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_2.setTransform(72.6,161.2,0.767,0.765,0,0,-43.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_3.setTransform(72.6,161.2,0.767,0.765,0,0,-43.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_4.setTransform(79.7,109.3,0.767,0.765,0,0,-43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_5.setTransform(79.7,109.3,0.767,0.765,0,0,-43.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_6.setTransform(71.8,116.5,0.767,0.765,0,0,-43.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_7.setTransform(71.8,116.5,0.767,0.765,0,0,-43.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_8.setTransform(80.5,131,0.767,0.765,0,0,-43.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_9.setTransform(80.5,131,0.767,0.765,0,0,-43.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_10.setTransform(72.6,138.2,0.767,0.765,0,0,-43.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_11.setTransform(72.6,138.2,0.767,0.765,0,0,-43.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_12.setTransform(80.5,79,0.767,0.765,0,0,-43.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_13.setTransform(80.5,79,0.767,0.765,0,0,-43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_14.setTransform(72.6,86.2,0.767,0.765,0,0,-43.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_15.setTransform(72.6,86.2,0.767,0.765,0,0,-43.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_16.setTransform(81.3,52.8,0.767,0.765,0,0,-43.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_17.setTransform(81.3,52.8,0.767,0.765,0,0,-43.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_18.setTransform(73.4,60,0.767,0.765,0,0,-43.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_19.setTransform(73.4,60,0.767,0.765,0,0,-43.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_20.setTransform(81.3,29.4,0.767,0.765,0,0,-43.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_21.setTransform(81.3,29.4,0.767,0.765,0,0,-43.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_22.setTransform(73.4,36.6,0.767,0.765,0,0,-43.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_23.setTransform(73.4,36.6,0.767,0.765,0,0,-43.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_24.setTransform(80.5,6.5,0.767,0.765,0,0,-43.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_25.setTransform(80.5,6.5,0.767,0.765,0,0,-43.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_26.setTransform(72.6,13.7,0.767,0.765,0,0,-43.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_27.setTransform(72.6,13.7,0.767,0.765,0,0,-43.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_28.setTransform(270.7,146.3,0.767,0.765,0,0,-43.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_29.setTransform(270.7,146.3,0.767,0.765,0,0,-43.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_30.setTransform(262.8,153.5,0.767,0.765,0,0,-43.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_31.setTransform(262.8,153.5,0.767,0.765,0,0,-43.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_32.setTransform(270.3,121.7,0.767,0.765,0,0,-43.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_33.setTransform(270.3,121.7,0.767,0.765,0,0,-43.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_34.setTransform(262.4,128.9,0.767,0.765,0,0,-43.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_35.setTransform(262.4,128.9,0.767,0.765,0,0,-43.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_36.setTransform(270.4,97.8,0.767,0.765,0,0,-43.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_37.setTransform(270.4,97.8,0.767,0.765,0,0,-43.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_38.setTransform(262.5,105,0.767,0.765,0,0,-43.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_39.setTransform(262.5,105,0.767,0.765,0,0,-43.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_40.setTransform(271.4,77.9,0.767,0.765,0,0,-43.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_41.setTransform(271.4,77.9,0.767,0.765,0,0,-43.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_42.setTransform(263.5,85.1,0.767,0.765,0,0,-43.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_43.setTransform(263.5,85.1,0.767,0.765,0,0,-43.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_44.setTransform(270.6,59,0.767,0.765,0,0,-43.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_45.setTransform(270.6,59,0.767,0.765,0,0,-43.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_46.setTransform(262.7,66.2,0.767,0.765,0,0,-43.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_47.setTransform(262.7,66.2,0.767,0.765,0,0,-43.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_48.setTransform(270.3,40.2,0.767,0.765,0,0,-43.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_49.setTransform(270.3,40.2,0.767,0.765,0,0,-43.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_50.setTransform(262.4,47.4,0.767,0.765,0,0,-43.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_51.setTransform(262.4,47.4,0.767,0.765,0,0,-43.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_52.setTransform(270.4,21.5,0.767,0.765,0,0,-43.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_53.setTransform(270.4,21.5,0.767,0.765,0,0,-43.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_54.setTransform(262.5,28.7,0.767,0.765,0,0,-43.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_55.setTransform(262.5,28.7,0.767,0.765,0,0,-43.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_56.setTransform(435,165.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_57.setTransform(435,165.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_58.setTransform(416,165.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_59.setTransform(416,165.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_60.setTransform(443.7,147.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_61.setTransform(443.7,147.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_62.setTransform(424.8,147.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_63.setTransform(424.8,147.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_64.setTransform(435,129.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_65.setTransform(435,129.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_66.setTransform(416,129.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_67.setTransform(416,129.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_68.setTransform(440.6,113.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_69.setTransform(440.6,113.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_70.setTransform(421.7,113.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_71.setTransform(421.7,113.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_72.setTransform(433.9,95.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_73.setTransform(433.9,95.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_74.setTransform(415,95.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_75.setTransform(415,95.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_76.setTransform(439.6,76.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_77.setTransform(439.6,76.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_78.setTransform(420.6,76.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_79.setTransform(420.6,76.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_80.setTransform(435,59.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_81.setTransform(435,59.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_82.setTransform(416,59.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_83.setTransform(416,59.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_84.setTransform(243,172.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_85.setTransform(243,172.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_86.setTransform(224,172.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_87.setTransform(224,172.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_88.setTransform(205,172.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_89.setTransform(205,172.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_90.setTransform(186.1,172.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_91.setTransform(186.1,172.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_92.setTransform(248.1,155.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_93.setTransform(248.1,155.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_94.setTransform(229.1,155.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_95.setTransform(229.1,155.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_96.setTransform(210.1,155.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_97.setTransform(210.1,155.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_98.setTransform(191.2,155.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_99.setTransform(191.2,155.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_100.setTransform(244,137.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_101.setTransform(244,137.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_102.setTransform(225,137.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_103.setTransform(225,137.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_104.setTransform(206,137.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_105.setTransform(206,137.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_106.setTransform(187.1,137.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_107.setTransform(187.1,137.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_108.setTransform(248.1,119.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_109.setTransform(248.1,119.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_110.setTransform(229.1,119.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_111.setTransform(229.1,119.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_112.setTransform(210.1,119.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_113.setTransform(210.1,119.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_114.setTransform(191.2,119.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_115.setTransform(191.2,119.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_116.setTransform(242.9,103.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_117.setTransform(242.9,103.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_118.setTransform(223.9,103.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_119.setTransform(223.9,103.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_120.setTransform(205,103.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_121.setTransform(205,103.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_122.setTransform(186,103.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_123.setTransform(186,103.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_124.setTransform(247.5,85.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_125.setTransform(247.5,85.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_126.setTransform(228.5,85.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_127.setTransform(228.5,85.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_128.setTransform(209.6,85.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_129.setTransform(209.6,85.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_130.setTransform(190.6,85.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_131.setTransform(190.6,85.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_132.setTransform(243.5,69.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_133.setTransform(243.5,69.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_134.setTransform(224.5,69.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_135.setTransform(224.5,69.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_136.setTransform(205.5,69.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_137.setTransform(205.5,69.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_138.setTransform(186.6,69.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_139.setTransform(186.6,69.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_140.setTransform(246,52.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_141.setTransform(246,52.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_142.setTransform(227,52.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_143.setTransform(227,52.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_144.setTransform(208.1,52.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_145.setTransform(208.1,52.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_146.setTransform(189.1,52.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_147.setTransform(189.1,52.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_148.setTransform(244.2,34.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_149.setTransform(244.2,34.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_150.setTransform(225.2,34.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_151.setTransform(225.2,34.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_152.setTransform(206.3,34.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_153.setTransform(206.3,34.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_154.setTransform(187.3,34.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_155.setTransform(187.3,34.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_156.setTransform(46.1,163.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_157.setTransform(46.1,163.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_158.setTransform(26.1,163.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_159.setTransform(26.1,163.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_160.setTransform(6.1,163.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_161.setTransform(6.1,163.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_162.setTransform(45,142.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_163.setTransform(45,142.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_164.setTransform(25,142.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_165.setTransform(25,142.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_166.setTransform(5,142.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_167.setTransform(5,142.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_168.setTransform(45.6,121.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_169.setTransform(45.6,121.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_170.setTransform(25.6,121.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_171.setTransform(25.6,121.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_172.setTransform(5.6,121.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_173.setTransform(5.6,121.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_174.setTransform(45.5,101.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_175.setTransform(45.5,101.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_176.setTransform(25.5,101.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_177.setTransform(25.5,101.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_178.setTransform(5.5,101.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_179.setTransform(5.5,101.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_180.setTransform(45.5,81.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_181.setTransform(45.5,81.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_182.setTransform(25.5,81.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_183.setTransform(25.5,81.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_184.setTransform(5.5,81.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_185.setTransform(5.5,81.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_186.setTransform(46.1,58.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_187.setTransform(46.1,58.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_188.setTransform(26.1,58.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_189.setTransform(26.1,58.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_190.setTransform(6.1,58.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_191.setTransform(6.1,58.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_192.setTransform(45.7,38.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_193.setTransform(45.7,38.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_194.setTransform(25.7,38.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_195.setTransform(25.7,38.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_196.setTransform(5.7,38.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_197.setTransform(5.7,38.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_198.setTransform(46.2,16.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_199.setTransform(46.2,16.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_200.setTransform(26.2,16.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_201.setTransform(26.2,16.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_202.setTransform(6.2,16.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_203.setTransform(6.2,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Windows, new cjs.Rectangle(-1,-1,450.7,179.9), null);


(lib.Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PLAY", "italic 36px 'Monoid'", "#FFFFFF");
	this.text.lineHeight = 50;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(30,17.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],44,38,0,44,38,151.3).s().p("AtRGaIAAszIajAAIAAMzg");
	this.shape.setTransform(85,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn, new cjs.Rectangle(0,0,170,82), null);


(lib.Buildings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AakldIDIhkIH0AAIAAXbIjIAAIn0AAIAA13IH0AAIDIhkEAiYgFdIAAV3ADIqJIDIjIIAAdrIjIAAIsfAAIAA6jIEsjIIK7AAApXqJIMfAAIAAajEglfgODIDIiWIK8AAMAAAAgzIjIAAIq8AAIAA+dIK8AAIDIiWA6juDIAAed");
	this.shape.setTransform(240,105);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("EAiYAQaIAA13IDIhkIAAXbgAakQaIAA13IDIhkIH0AAIjIBkIn0AAIH0AAIAAV3gADIQaIsfAAIAA6jIMfAAIAAajIAA6jIDIjIIAAdrgA6jQaIAA+dIAAedIq8AAIAA+dIK8AAIDIiWMAAAAgzgEAiYgFdgADIqJgApXqJIEsjIIK7AAIjIDIgAGQtRgEglfgODIDIiWIK8AAIjICWgA3bwZg");
	this.shape_1.setTransform(240,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Buildings, new cjs.Rectangle(-1,-1,482,212), null);


(lib.BackGround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.6)","#FFD91C"],[0,1],-300,0,300,0).s().p("Egu3AXcMAAAgu3MBdvAAAMAAAAu3g");
	this.shape.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BackGround, new cjs.Rectangle(0,0,600,300), null);


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
		function init() {
			var scene = new createjs.Container();
			stage.addChild(scene);
		
			var btn = new lib.Btn();
			scene.addChild(btn);
			btn.x = 100;
			btn.y = 100;
		
			btn.addEventListener("click", handleMouseClick);	
		}
		
		function handleMouseClick() {
			alert("this button will open the game")
		}
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1).call(this.frame_30).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:5,regY:5,scaleX:0.01,scaleY:0.01,x:288.5,y:147.6},29).to({_off:true},1).wait(1));

	// Menu
	this.text = new cjs.Text("This will be the menu...", "italic 36px 'Monoid'");
	this.text.lineHeight = 50;
	this.text.lineWidth = 388;
	this.text.parent = this;
	this.text.setTransform(210.1,181.1);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).wait(1));

	// Windows
	this.instance = new lib.Windows();
	this.instance.parent = this;
	this.instance.setTransform(288.2,202.1,1,1,0,0,0,224.3,89);

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
	this.shape_28.setTransform(334.5,259.4,0.767,0.765,0,0,-43.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_29.setTransform(334.5,259.4,0.767,0.765,0,0,-43.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_30.setTransform(326.6,266.6,0.767,0.765,0,0,-43.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_31.setTransform(326.6,266.6,0.767,0.765,0,0,-43.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_32.setTransform(334.1,234.8,0.767,0.765,0,0,-43.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_33.setTransform(334.1,234.8,0.767,0.765,0,0,-43.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_34.setTransform(326.2,242,0.767,0.765,0,0,-43.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_35.setTransform(326.2,242,0.767,0.765,0,0,-43.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_36.setTransform(334.3,210.9,0.767,0.765,0,0,-43.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_37.setTransform(334.3,210.9,0.767,0.765,0,0,-43.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_38.setTransform(326.4,218.1,0.767,0.765,0,0,-43.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_39.setTransform(326.4,218.1,0.767,0.765,0,0,-43.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_40.setTransform(335.2,191,0.767,0.765,0,0,-43.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_41.setTransform(335.2,191,0.767,0.765,0,0,-43.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_42.setTransform(327.3,198.2,0.767,0.765,0,0,-43.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_43.setTransform(327.3,198.2,0.767,0.765,0,0,-43.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_44.setTransform(334.4,172.1,0.767,0.765,0,0,-43.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_45.setTransform(334.4,172.1,0.767,0.765,0,0,-43.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_46.setTransform(326.5,179.3,0.767,0.765,0,0,-43.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_47.setTransform(326.5,179.3,0.767,0.765,0,0,-43.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_48.setTransform(334.1,153.3,0.767,0.765,0,0,-43.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_49.setTransform(334.1,153.3,0.767,0.765,0,0,-43.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_50.setTransform(326.2,160.5,0.767,0.765,0,0,-43.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_51.setTransform(326.2,160.5,0.767,0.765,0,0,-43.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_52.setTransform(334.2,134.6,0.767,0.765,0,0,-43.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_53.setTransform(334.2,134.6,0.767,0.765,0,0,-43.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_54.setTransform(326.3,141.8,0.767,0.765,0,0,-43.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_55.setTransform(326.3,141.8,0.767,0.765,0,0,-43.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_56.setTransform(498.8,278.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_57.setTransform(498.8,278.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_58.setTransform(479.9,278.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_59.setTransform(479.9,278.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_60.setTransform(507.6,261);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_61.setTransform(507.6,261);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_62.setTransform(488.6,261);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_63.setTransform(488.6,261);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_64.setTransform(498.8,243);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_65.setTransform(498.8,243);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_66.setTransform(479.9,243);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_67.setTransform(479.9,243);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_68.setTransform(504.5,226.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_69.setTransform(504.5,226.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_70.setTransform(485.5,226.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_71.setTransform(485.5,226.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_72.setTransform(497.8,208.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_73.setTransform(497.8,208.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_74.setTransform(478.8,208.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_75.setTransform(478.8,208.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_76.setTransform(503.4,189.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_77.setTransform(503.4,189.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_78.setTransform(484.5,189.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_79.setTransform(484.5,189.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_80.setTransform(498.8,172.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_81.setTransform(498.8,172.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_82.setTransform(479.9,172.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_83.setTransform(479.9,172.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_84.setTransform(306.8,286);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_85.setTransform(306.8,286);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_86.setTransform(287.8,286);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_87.setTransform(287.8,286);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_88.setTransform(268.9,286);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_89.setTransform(268.9,286);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_90.setTransform(249.9,286);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_91.setTransform(249.9,286);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_92.setTransform(311.9,268.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_93.setTransform(311.9,268.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_94.setTransform(292.9,268.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_95.setTransform(292.9,268.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_96.setTransform(274,268.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_97.setTransform(274,268.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_98.setTransform(255,268.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_99.setTransform(255,268.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_100.setTransform(307.8,250.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_101.setTransform(307.8,250.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_102.setTransform(288.8,250.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_103.setTransform(288.8,250.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_104.setTransform(269.9,250.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_105.setTransform(269.9,250.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_106.setTransform(250.9,250.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_107.setTransform(250.9,250.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_108.setTransform(311.9,232.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_109.setTransform(311.9,232.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_110.setTransform(292.9,232.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_111.setTransform(292.9,232.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_112.setTransform(274,232.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_113.setTransform(274,232.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_114.setTransform(255,232.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_115.setTransform(255,232.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_116.setTransform(306.8,216.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_117.setTransform(306.8,216.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_118.setTransform(287.8,216.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_119.setTransform(287.8,216.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_120.setTransform(268.8,216.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_121.setTransform(268.8,216.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_122.setTransform(249.9,216.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_123.setTransform(249.9,216.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_124.setTransform(311.4,199);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_125.setTransform(311.4,199);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_126.setTransform(292.4,199);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_127.setTransform(292.4,199);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_128.setTransform(273.4,199);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_129.setTransform(273.4,199);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_130.setTransform(254.5,199);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_131.setTransform(254.5,199);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_132.setTransform(307.3,182.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_133.setTransform(307.3,182.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_134.setTransform(288.3,182.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_135.setTransform(288.3,182.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_136.setTransform(269.4,182.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_137.setTransform(269.4,182.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_138.setTransform(250.4,182.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_139.setTransform(250.4,182.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_140.setTransform(309.9,165.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_141.setTransform(309.9,165.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_142.setTransform(290.9,165.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_143.setTransform(290.9,165.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_144.setTransform(271.9,165.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_145.setTransform(271.9,165.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_146.setTransform(253,165.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_147.setTransform(253,165.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_148.setTransform(308.1,147.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_149.setTransform(308.1,147.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_150.setTransform(289.1,147.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_151.setTransform(289.1,147.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_152.setTransform(270.1,147.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_153.setTransform(270.1,147.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_154.setTransform(251.2,147.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_155.setTransform(251.2,147.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_156.setTransform(109.9,276.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_157.setTransform(109.9,276.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_158.setTransform(89.9,276.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_159.setTransform(89.9,276.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_160.setTransform(69.9,276.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_161.setTransform(69.9,276.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_162.setTransform(108.9,255.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_163.setTransform(108.9,255.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_164.setTransform(88.9,255.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_165.setTransform(88.9,255.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_166.setTransform(68.9,255.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_167.setTransform(68.9,255.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_168.setTransform(109.4,234.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_169.setTransform(109.4,234.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_170.setTransform(89.4,234.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_171.setTransform(89.4,234.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_172.setTransform(69.4,234.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_173.setTransform(69.4,234.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_174.setTransform(109.4,214.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_175.setTransform(109.4,214.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_176.setTransform(89.4,214.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_177.setTransform(89.4,214.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_178.setTransform(69.4,214.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_179.setTransform(69.4,214.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_180.setTransform(109.4,194.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_181.setTransform(109.4,194.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_182.setTransform(89.4,194.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_183.setTransform(89.4,194.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_184.setTransform(69.4,194.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_185.setTransform(69.4,194.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_186.setTransform(109.9,171.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_187.setTransform(109.9,171.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_188.setTransform(89.9,171.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_189.setTransform(89.9,171.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_190.setTransform(69.9,171.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_191.setTransform(69.9,171.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_192.setTransform(109.6,152);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_193.setTransform(109.6,152);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_194.setTransform(89.6,152);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_195.setTransform(89.6,152);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_196.setTransform(69.6,152);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_197.setTransform(69.6,152);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_198.setTransform(110,130);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_199.setTransform(110,130);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_200.setTransform(90,130);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_201.setTransform(90,130);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#999999").ss(1,1,1).p("AgxgxIBjAAIAABjIhjAAg");
	this.shape_202.setTransform(70,130);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFCC66").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_203.setTransform(70,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).to({state:[]},1).wait(1));

	// Buildings
	this.instance_1 = new lib.Buildings();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,195,1,1,0,0,0,240,105);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1,1,1).p("EAiYgFdIDIhkAakldIDIhkIH0AAIAAXbIjIAAIn0AAIAA13IH0AAIAAV3AGQtRIAAdrIjIAAIsfAAIAA6jIMfAAIAAajApXqJIEsjIIK7AAEglfgODIK8AAIDIiWEglfgODIDIiWIK8AAMAAAAgzIjIAAIq8AAgA6juDIAAedADIqJIDIjI");
	this.shape_204.setTransform(300,195);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#666666").s().p("EAiYAQaIAA13IDIhkIAAXbgAakQaIAA13IH0AAIAAV3gADIQaIAA6jIAAajIsfAAIAA6jIMfAAIsfAAIEsjIIK7AAIjIDIIDIjIIAAdrgA6jQaIAA+dIAAedIq8AAIAA+dIK8AAIDIiWMAAAAgzgEAiYgFdgEAiYgFdIn0AAIDIhkIH0AAIjIBkgEAlggHBgAGQtRgEglfgODIDIiWIK8AAIjICWgA3bwZg");
	this.shape_205.setTransform(300,195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_205},{t:this.shape_204}]},29).to({state:[]},1).wait(1));

	// BackGround
	this.instance_2 = new lib.BackGround();
	this.instance_2.parent = this;
	this.instance_2.setTransform(300,150,1,1,0,0,0,300,150);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["rgba(0,0,0,0.6)","#FFD91C"],[0,1],-300,0,300,0).s().p("Egu3AXcMAAAgu3MBdvAAAMAAAAu3g");
	this.shape_206.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape_206}]},29).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,149,602,302);
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