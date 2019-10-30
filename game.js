var game = new Phaser.Game(800, 500, Phaser.CANVAS, 'Family Business', { preload: preload, create: create, update: update });

var player
var D
var A
var spacebar

function preload() {

  game.load.image('bg', 'assets/Background.png');
  game.load.spritesheet('Jossepi', 'assets/Jossepi.png', 750, 50);
  game.load.spritesheet('Alien', 'assets/Alien.png', 750, 450);
}

function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();

  player = game.add.sprite(48, game.world.height - 150, 'Jossepi');
  game.physics.arcade.enable(player);

  player.body.bounce.y = 0.5;
  player.body.gravity.y = 250;
  player.body.collideWorldBounds = true;

  player.animations.add('left', [1, 2, 3, 4], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  D = game.input.keyboard.addKey(Phaser.KeyCode.D);
  A = game.input.keyboard.addKey(Phaser.KeyCode.A);

}

function update() {

  player.body.velocity.x = 0;

  if (D.isDown){

    player.body.velocity.x = 150;
    player.animations.play('right');

  }

  else if (A.isDown){

    player.body.velocity.x = -150;
    player.animations.play('left');
  }
}
