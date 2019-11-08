var game = new Phaser.Game(400, 200, Phaser.CANVAS, 'Family Business', { preload: preload, create: create, update: update, render: render });

var player
var D
var A
var spacebar
var jump
var ground

function preload() {

  game.load.image('bg', 'assets/Background.png');
  game.load.image('ground', 'assets/ground.png');
  game.load.spritesheet('player', 'assets/jossepi.png', 22, 36);
  game.load.spritesheet('alien', 'assets/Alien.png', 750, 450);
}

function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();

  ground = game.add.sprite(0, 195, 'ground');
  game.physics.arcade.enable(ground);
  ground.body.immovable = true;

  player = game.add.sprite(48, game.world.height - 150, 'player');
  game.physics.arcade.enable(player);
  player.smoothed = false;

  //player.body.bounce.y = 0.5;
  player.body.gravity.y = 250;
  player.body.collideWorldBounds = true;
  player.onGround = false;
  player.lastJump = 0;
  player.canJump = true;

  player.animations.add('right', [0, 1, 2, 3], 10, true);
  player.animations.add('left', [4, 5, 6, 7], 10, true);

  spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  D = game.input.keyboard.addKey(Phaser.KeyCode.D);
  A = game.input.keyboard.addKey(Phaser.KeyCode.A);

}

function update() {

  game.physics.arcade.collide(player, ground, checkGroundCollision);

  player.body.velocity.x = 0;

  if (D.isDown){

    player.body.velocity.x = 150;
    player.animations.play('right');

  }

  else if (A.isDown){

    player.body.velocity.x = -150;
    player.animations.play('left');
  }

console.log(jump);

  if (spacebar.isDown && player.onGround)
    {
      player.onGround = false;
      player.lastJump = game.time.totalElapsedSeconds;
      player.body.velocity.y = -175;
      player.canJump = false;
  } else if (spacebar.isDown && player.canJump) {
      player.body.velocity.y += -175;
      player.canJump = false;
  }
}

function checkGroundCollision(player, ground) {
  player.onGround = player.body.touching.down;
  player.canJump = true;
}


function render () {
  game.debug.body(player);
  game.debug.body(ground);
}
