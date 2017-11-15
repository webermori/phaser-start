var game = new Phaser.Game(800, 640,Phaser.AUTO,'',{
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('ceu','sprites/sky.png');
    game.load.image('chao','sprites/plataform.png');
    game.load.image('estrela','sprites/star.png');
}

function create() {
    game.physics.startSystem();
    game.add.sprite(0,0,'ceu');
    
    //game.add.sprite(20,40,'estrela');
    //game.add.sprite(0,0,'chao');
}

function update() {
    
}