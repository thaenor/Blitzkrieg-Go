(function () {
  // define variables
  var canvas = document.getElementById('canvas1');
  var ctx = canvas.getContext('2d');
  var player = {};
  var ground = [];
  var platformWidth = 32; //should be the same as the platform asset (in this case grass.png)
  var platformHeight = canvas.height - platformWidth * 4;


   // Loading Assets in assets folder
  var assetLoader = (function() {
    // images dictionary
    this.assets        = {
      'bg'            : 'assets/background.jpg',
      'sky'           : 'assets/sky.png',
      'backdrop'      : 'assets/backdrop.png',
      'backdrop2'     : 'assets/backdrop_ground.png',
      'grass'         : 'assets/grass.png',
      'avatar_normal' : 'assets/character.png'
    };

    var assetsLoaded = 0;                                // how many assets have been loaded
    var numImgs      = Object.keys(this.assets).length;    // total number of image of the assets
    this.totalAssest = numImgs;                          // total number of assets

    /**
     * Ensure all assets are loaded before using them
     * @param {number} dic  - Dictionary name ('imgs', 'sounds', 'fonts')
     * @param {number} name - Asset name in the dictionary
     */
    function assetLoaded(dic, name) {
      // don't count assets that have already loaded
      if (this[dic][name].status !== 'loading') {
        return;
      }

      this[dic][name].status = 'loaded';
      assetsLoaded++;

      // finished callback
      if (assetsLoaded === this.totalAssest && typeof this.finished === 'function') {
        this.finished();
      }
    }

   //Set Asset Source and Load all Assets
    this.downloadAll = function() {
      var _this = this;
      var src;

      // iterate and load all images from assets folder
      for (var asset in this.assets) {
        if (this.assets.hasOwnProperty(asset)) {
          src = this.assets[asset];

          // create a closure for event binding
          (function(_this, asset) {
            _this.assets[asset] = new Image();
            _this.assets[asset].status = 'loading';
            _this.assets[asset].name = asset;
            _this.assets[asset].onload = function() { assetLoaded.call(_this, 'assets', asset) };
            _this.assets[asset].src = src;
          })(_this, asset);
        }
      }
    }

    return {
      assets: this.assets,
      totalAssest: this.totalAssest,
      downloadAll: this.downloadAll
    };
  })();

  assetLoader.finished = function() {
    startGame();
  }

  // Spritesheet
  function SpriteSheet(path, frameWidth, frameHeight) {
    this.image = new Image();
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;

    // calculate the number of frames in a row after the image loads
    var self = this;
    this.image.onload = function() {
      self.framesPerRow = Math.floor(self.image.width / self.frameWidth);
    };

    this.image.src = path;
  }

 // Create Animation from SpriteSheet
  function Animation(spritesheet, frameSpeed, startFrame, endFrame) {

    var animationSequence = [];  // array with the order of the animation
    var currentFrame = 0;        // the current frame to draw
    var counter = 0;             // keep track of frame rate

    // start and end range for frames
    for (var frameNumber = startFrame; frameNumber <= endFrame; frameNumber++)
      animationSequence.push(frameNumber);

    //Update the animation
    this.update = function() {

      // update to the next frame if it is time
      if (counter == (frameSpeed - 1))
        currentFrame = (currentFrame + 1) % animationSequence.length;

      // update the counter
      counter = (counter + 1) % frameSpeed;
    };

    /**
     * Draw the current frame
     * @param {integer} x - X position to draw
     * @param {integer} y - Y position to draw
     */
    this.draw = function(x, y) {
      // get the row and col of the frame
      var row = Math.floor(animationSequence[currentFrame] / spritesheet.framesPerRow);
      var col = Math.floor(animationSequence[currentFrame] % spritesheet.framesPerRow);

      ctx.drawImage(
        spritesheet.image,
        col * spritesheet.frameWidth, row * spritesheet.frameHeight,
        spritesheet.frameWidth, spritesheet.frameHeight,
        x, y,
        spritesheet.frameWidth, spritesheet.frameHeight);
    };
  }

  /**
   * Create a parallax background
   */
  var background = (function() {
    var sky   = {};
    var backdrop = {};
    var backdrop2 = {};

    //Draw the background at different Speeds
    this.draw = function() {
      ctx.drawImage(assetLoader.assets.bg, 0, 0);

      // Pan background
      sky.x -= sky.speed;
      backdrop.x -= backdrop.speed;
      backdrop2.x -= backdrop2.speed;

      // draw images side by side to loop
      ctx.drawImage(assetLoader.assets.sky, sky.x, sky.y);
      ctx.drawImage(assetLoader.assets.sky, sky.x + canvas.width, sky.y);

      ctx.drawImage(assetLoader.assets.backdrop, backdrop.x, backdrop.y);
      ctx.drawImage(assetLoader.assets.backdrop, backdrop.x + canvas.width, backdrop.y);

      ctx.drawImage(assetLoader.assets.backdrop2, backdrop2.x, backdrop2.y);
      ctx.drawImage(assetLoader.assets.backdrop2, backdrop2.x + canvas.width, backdrop2.y);

      // resets image if offscreens
      if (sky.x + assetLoader.assets.sky.width <= 0)
        sky.x = 0;
      if (backdrop.x + assetLoader.assets.backdrop.width <= 0)
        backdrop.x = 0;
      if (backdrop2.x + assetLoader.assets.backdrop2.width <= 0)
        backdrop2.x = 0;
    };

    //Reset background to zero
    this.reset = function()  {
      sky.x = 0;
      sky.y = 0;
      sky.speed = 0.2;

      backdrop.x = 0;
      backdrop.y = 0;
      backdrop.speed = 0.4;

      backdrop2.x = 0;
      backdrop2.y = 0;
      backdrop2.speed = 0.6;
    }

    return {
      draw: this.draw,
      reset: this.reset
    };
  })();

  //Game Loop
  function animate() {
    requestAnimFrame( animate );

    background.draw();

    for (i = 0; i < ground.length; i++) {
      ground[i].x -= player.speed;
      ctx.drawImage(assetLoader.assets.grass, ground[i].x, ground[i].y);
    }

    if (ground[0].x <= -platformWidth) {
      ground.shift();
      ground.push({'x': ground[ground.length-1].x + platformWidth, 'y': platformHeight});
    }

    player.anim.update();
    player.anim.draw(64, 260);
  }

 
  //Request Animation Polyfill
  var requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback, element){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

 
  //Start the game - reset all variables and entities, spawn platforms and water.
  function startGame() {
    // setup the player
    player.width  = 60;
    player.height = 96;
    player.speed  = 6;
    player.sheet  = new SpriteSheet('assets/character.png', player.width, player.height);
    player.anim   = new Animation(player.sheet, 4, 0, 3); //0 - first frame, 3 - last frame

    // create the ground tiles
    for (i = 0, length = Math.floor(canvas.width / platformWidth) + 2; i < length; i++) {
      ground[i] = {'x': i * platformWidth, 'y': platformHeight};
    }

    background.reset();

    animate();
  }

  assetLoader.downloadAll();
})();