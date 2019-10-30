var game = new Phaser.Game(800, 500, Phaser.CANVAS, 'Family Business', { preload: preload, create: create, update: update });

function preload() {

  var Jossepi
  var Alien
  var D
  var A
  var Space

  }

  game.load.image('bg', 'assets/Background.png');
  game.load.spritesheet('Jossepi', 'assets/Jossepi.png', -, -);
  game.load.spritesheet('Alien', 'assets/Alien.png', -, -);
}

function create() {

  cursors = game.input.keyboard.createCursorKeys();

}

function update() {

  Jossepi.body.velocity.x = 0;

  if (cursors.D.isDown){

    Jossepi.body.velocity.x = 150;
    Jossepi.animations.play('right');

  }

  else if (cursors.A.isDown){

    Jossepi.body.velocity.x = -150;
    Jossepi.animations.play('left');
  }

  else
  {
    Jossepi.animations.stop();
    Jossepi.frame = 1;
  }
}
