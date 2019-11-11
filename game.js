var game = new Phaser.Game(400, 200, Phaser.CANVAS, 'Family Business', { preload: preload, create: create, update: update });

var player
var D
var A
var W
var S

function preload() {

  game.load.image('bg', 'assets/Background.png');
  game.load.spritesheet('player', 'assets/jossepi.png', 22, 36);
  game.load.spritesheet('alien', 'assets/Alien.png');
}

function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();

  player = game.add.sprite(180, game.world.height - 75, 'player');
  game.physics.arcade.enable(player);
  player.smoothed = false;

  player.body.collideWorldBounds = true;

  player.animations.add('right', [0, 1, 2, 3], 10, true);
  player.animations.add('left', [4, 5, 6, 7], 10, true);

  W = game.input.keyboard.addKey(Phaser.KeyCode.W);
  A = game.input.keyboard.addKey(Phaser.KeyCode.A);
  S = game.input.keyboard.addKey(Phaser.KeyCode.S);
  D = game.input.keyboard.addKey(Phaser.KeyCode.D);

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

  else if (W.isDown){

    player.body.velocity.y = -150;

  }

  else if (S.isDown){

    player.body.velocity.y = 150;

  }
}
