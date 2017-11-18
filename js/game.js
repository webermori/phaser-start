var game = new Phaser.Game(800, 640,Phaser.AUTO,'',{
    preload: preload,
    create: create,
    update: update
});

var plataformas;

function preload() {
    game.load.image('ceu','sprites/sky.png');
    game.load.image('chao','sprites/platform.png');
    game.load.image('estrela','sprites/star.png');
    game.load.spritesheet('personagem', 'sprites/dude.png', 32,48);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,'ceu');

    plataformas = game.add. group();
    plataformas.enableBody = true;

    var chao = plataformas.create(0,game.world.height-64, 'chao');

    chao.scale.setTo(2,2);
    chao.body.immovable = true;

    var chaoAlto = plataformas.create(400,400,'chao');
    chaoAlto.body.immovable = true;
    chaoAlto = plataformas.create(-100, 300, 'chao');
    chaoAlto.body.immovable = true;

    personagem =  game.add.sprite(15, game.world.height-150, 'personagem');
    game.physics.arcade.enable(personagem);

    personagem.body.bounce.y = 0.5;
    personagem.body.gravity.y = 600;
    personagem.body.collideWorldBounds = true;

}

function update() {
    var noChao = game.physics.arcade.collide(personagem, plataformas);


}