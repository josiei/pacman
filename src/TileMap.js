export default class TileMap{
  constructor(tileSize){
    this.tileSize = tileSize;
    this.map = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.yellowDot = new Image();
    this.yellowDot.src = '../images/yellowdot.png'

    this.wall = new Image();
    this.wall.src ='../images/wall.png'
  }

  drawImage(image, context, column, row, tileSize){
    context.drawImage(image, column*this.tileSize, row*this.tileSize, tileSize, tileSize)
  }

  draw(context){
    for(let row = 0; row < this.map.length; row++){
      for(let column = 0; column < this.map[row].length; column++){
        let tile = this.map[row][column];
        if(tile === 1){
          this.drawImage(this.wall, context, column, row, this.tileSize);
        } else if(tile === 0){
          this.drawImage(this.yellowDot, context, column, row, this.tileSize)
        }
      }
    }

  }

  setCanvasSize(canvas){
    canvas.width = this.map[0].length * this.tileSize;
    canvas.height = this.map.length * this.tileSize;
  }
}
