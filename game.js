var game = new Phaser.Game(400, 200, Phaser.CANVAS, 'Family Business', { preload: preload, create: create, update: update });

var player;
var D;
var A;
var W;
var S;
var text;
var text2;

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

  text = game.add.text(player.x + 15, player.y - 20, 'This is Jossepi\n           \u2193', {
      fontSize: '12px',
      fill: '#fff'
    });

  text2 = game.add.text(player.x + 15, player.y + 45, '(if that wasnt already obvious for you)', {
        fontSize: '12px',
        fill: '#fff'
    });

  text.anchor.setTo(0.5, 0.5);
  text2.anchor.setTo(0.5, 0.5);

  player.body.collideWorldBounds = true;

  player.animations.add('right', [0, 1, 2, 3], 5, true);
  player.animations.add('left', [4, 5, 6, 7], 5, true);

  W = game.input.keyboard.addKey(Phaser.KeyCode.W);
  A = game.input.keyboard.addKey(Phaser.KeyCode.A);
  S = game.input.keyboard.addKey(Phaser.KeyCode.S);
  D = game.input.keyboard.addKey(Phaser.KeyCode.D);

}

function update() {

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  var killText = false;

  if (D.isDown){

    player.body.velocity.x = 150;
    player.animations.play('right');
    killText = true;

  }

  else if (A.isDown){

    player.body.velocity.x = -150;
    player.animations.play('left');
    killText = true;

  }

  if (W.isDown){

    player.body.velocity.y = -150;
    killText = true;

  }

  else if (S.isDown){

    player.body.velocity.y = 150;
    killText = true;

  }

  if (killText && text) {
    text.destroy();
    text2.destroy();
  }
}
