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

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.x + this.size > canvas.width) this.position.x = 450;
        if(this.position.y + this.size > canvas.height) this.position.y = 450;
    
    }
  
    update() {
      this.draw();
      if (this.isAlive) {
        this.move();
      }
    }
  }