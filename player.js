class Player {
    constructor() {
      // init
      this.position = {
        x: canvas.width / 2.8,
        y: canvas.height / 2.7,
      };
  
      this.velocity = {
        x: 0,
        y: 0,
      };
  
      this.isAlive = true;
      this.size = 50;
    
    }
  
    draw() {
      c.beginPath();
      c.fillStyle = "red";
      c.fillRect(
        this.position.x,
        this.position.y,
        this.size,
        this.size
      );
    }
  
    move() {
      console.log(this.velocity.x,this.velocity.y);

      this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    }
  
    update() {
      this.draw();
      if (this.isAlive) {
        this.move();
      }
    }
  }