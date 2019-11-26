var game = new Phaser.Game(400, 200, Phaser.CANVAS, 'Family Business', { preload: preload, create: create, update: update });

var player;
var shotgun;
var D;
var A;
var W;
var S;
var text;
var text2;

function preload() {

  game.load.image('background', 'assets/Tester background.png');
  game.load.spritesheet('player', 'assets/jossepi.png', 22, 36);
  game.load.spritesheet('shotgun', 'assets/Shotgun.png', 64, 12);
}

function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();

  player = game.add.sprite(180, game.world.height - 75, 'player');
  game.physics.arcade.enable(player);
  player.smoothed = false;

  shotgun = game.add.sprite(180, player.y + 20, 'shotgun');
  game.physics.arcade.enable(shotgun);

  text = game.add.text(player.x + 15, player.y - 20, 'This is Jossepi\n           \u2193', {
      fontSize: '12px',
      fill: '#fff'
    });

  text2 = game.add.text(player.x + 15, player.y + 45, 'And this is your Restaurant', {
        fontSize: '12px',
        fill: '#fff'
    });

  text.anchor.setTo(0.5, 0.5);
  text2.anchor.setTo(0.5, 0.5);

  player.body.collideWorldBounds = true;
  shotgun.body.collideWorldBounds = true;

  player.animations.add('right', [0, 1, 2, 3], 5, true);
  player.animations.add('left', [4, 5, 6, 7], 5, true);
  shotgun.animations.add('shoot right', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
  shotgun.animations.add('shoot left', [], 10, true);

  W = game.input.keyboard.addKey(Phaser.KeyCode.W);
  A = game.input.keyboard.addKey(Phaser.KeyCode.A);
  S = game.input.keyboard.addKey(Phaser.KeyCode.S);
  D = game.input.keyboard.addKey(Phaser.KeyCode.D);

}

function update() {

  shotgun.body.velocity.x = 0;
  shotgun.body.velocity.x = 0;
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  var killText = false;

  if (cursors.right.isDown){

    shotgun.animations.play('shoot right');

  }

  else if (cursors.left.isDown){

    player.animations.play('left');
  }

  if (D.isDown){

    player.body.velocity.x = 130;
    shotgun.body.velocity.x = 130;
    player.animations.play('right');
    killText = true;

  }

  else if (A.isDown){

    player.body.velocity.x = -130;
    shotgun.body.velocity.x = -130;
    player.animations.play('left');
    killText = true;

  }

  if (W.isDown){

    player.body.velocity.y = -130;
    shotgun.body.velocity.y = -130;
    killText = true;

  }

  else if (S.isDown){

    player.body.velocity.y = 130;
    shotgun.body.velocity.y = 130;
    killText = true;

  }

  if (killText && text) {
    text.destroy();
    text2.destroy();
  }
}
