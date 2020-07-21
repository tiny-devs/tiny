class Woods {
    constructor(game, id) {
      this.game = game;
  
      this.id = id;
      this.backgroundLayerShape = this.getBackgroundLayerShape();
      this.solidLayerShape = this.getSolidLayerShape();
      this.tiles = [];

      this.initTiles();
    }
  
    getBackgroundLayerShape() {
      return [[Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Grass    ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Bush     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Grass    ],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Bush     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Grass    ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Grass    ,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.Dirt     ,Tiles.Dirt     ,Tiles.Dirt     ,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Rocks    ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Dirt     ,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Grass    ,Tiles.Grass    ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Dirt     ,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Grass    ,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Dirt     ,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Grass    ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Dirt     ,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Grass    ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.Bush     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Bush     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.Grass    ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass],
              [Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.Bush     ,Tiles.Dirt     ,Tiles.Dirt     ,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass,Tiles.FlatGrass]];
    }
  
    getSolidLayerShape() {
      return [[Tiles.Tree,0,0,0,0,0,0,0,Tiles.Tree,0,0,0,0,Tiles.Tree,0,0],
              [0,0,0,Tiles.SmallTree,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,Tiles.Tree,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,Tiles.SmallTree,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,Tiles.SmallTree,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,Tiles.Tree,0,0,0,0,0,0,0],
              [0,0,Tiles.Tree,0,0,0,0,0,0,0,0,0,0,0,Tiles.SmallTree,0],
              [Tiles.Tree,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,Tiles.Tree,0,0,0,0,0,0,0,0,0],
              [0,0,0,Tiles.SmallTree,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,Tiles.Tree,0,0,0],
              [0,0,0,0,0,0,Tiles.Tree,0,0,Tiles.Tree,0,0,0,0,0,0],
              [Tiles.SmallTree,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
    }
  
    initTiles() {
      for (let column = 0; column < this.game.boardColumns; column++) {
        for (let line = 0; line < this.game.boardRows; line++) {
  
          const tileToDrawBackground = this.backgroundLayerShape[line][column];
          if (tileToDrawBackground != 0) {
            this.tiles.push(new Tile(this.game, this.game.backgroundLayer, column, line, tileToDrawBackground));
          }
  
          const tileToDraw = this.solidLayerShape[line][column];
          if (tileToDraw != 0) {
            this.tiles.push(new Tile(this.game, this.game.solidLayer, column, line, tileToDraw));
          }
        }
      }
    }
  
    draw() {
      for (const tile of this.tiles) {
        tile.draw()
      }
    }
  
    clear() {
      this.game.backgroundLayer.clear();
      this.game.solidLayer.clear();
    }
  }