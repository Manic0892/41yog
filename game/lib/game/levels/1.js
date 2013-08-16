ig.module( 'game.levels.1' )
.requires( 'impact.image','game.entities.playerL1','game.entities.level1Logic','game.entities.sunPowerup','game.entities.enemySpider','game.entities.trigger','game.entities.staticImage' )
.defines(function(){
Level1=/*JSON[*/{"entities":[{"type":"EntityPlayerL1","x":72,"y":376,"settings":{"name":"PlayerLevel1"}},{"type":"EntityLevel1Logic","x":48,"y":148},{"type":"EntitySunPowerup","x":1084,"y":212},{"type":"EntityEnemySpider","x":748,"y":360},{"type":"EntityEnemySpider","x":1276,"y":156},{"type":"EntityEnemySpider","x":1056,"y":484},{"type":"EntityEnemySpider","x":1424,"y":504},{"type":"EntityEnemySpider","x":332,"y":512},{"type":"EntityTrigger","x":4,"y":504,"settings":{"size":{"x":104,"y":80},"name":"winTrigger","target":{"1":"PlayerLevel1"}}},{"type":"EntityStaticImage","x":40,"y":516,"settings":{"image":"media/winFlag.png"}}],"layer":[{"name":"background","width":8,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/tileset_bg.png","repeat":true,"preRender":true,"distance":"2","tilesize":64,"foreground":false,"data":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,2,3,4,1,2,3,4],[5,6,7,8,5,6,7,8],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9]]},{"name":"main","width":30,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/Tileset2.png","repeat":false,"preRender":true,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,4,2,2,2,2,2,2,2,2,2,2,2,14,15],[2,0,0,0,0,0,0,0,0,0,31,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,11,12,13,14,15,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0]]},{"name":"collision","width":30,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
Level1Resources=[new ig.Image('media/tileset_bg.png'), new ig.Image('media/Tileset2.png')];
});