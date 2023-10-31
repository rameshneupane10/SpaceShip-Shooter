class Enemy
{
    constructor()
    {
        this.position={
            x: Math.random() * (canvas.width - 50 - 10) + 10,
            y:-50,
        }

        this.velocity={
            x:0,
            y:1,
        }
        this.image= new Image();
        this.image.src="./smallrockchipped_640.png";
        this.size = Math.random() * (70 - 20) + 20;
        this.isDead = false;
    }

    draw()
    {
        c.beginPath();
        c.fillStyle = "blue";
        c.drawImage( this.image,this.position.x,this.position.y,this.size,this.size);
    }

    dead(){
      this.velocity.y = 0;
      setTimeout(()=>{
          this.position.x = -100;
          this.position.y = -100;
           this.isDead = true;
          Score++;
      },60);
  }

    collisionWithBullet(bullets) {
      for (let i = 0; i < bullets.length; i++) {
        if (
          this.position.x + this.size >= bullets[i].position.x &&
          this.position.x <= bullets[i].position.x + bullets[i].size &&
          this.position.y + this.size >= bullets[i].position.y &&
          this.position.y <= bullets[i].position.y + bullets[i].size
        ) {
          this.image.src = "./explode.png";
          this.dead();
        }
      }
    }
  
    collision(player) {
      if (
        this.position.x + this.size >= player.position.x &&
        this.position.x <= player.position.x + player.size &&
        this.position.y + this.size >= player.position.y &&
        this.position.y <= player.position.y + player.size
      ) {
        player.isAlive = false;
      }
    }

    move()
    {
        this.position.y+=this.velocity.y;
    }



    update()
    {
        this.draw();
        if(player.isAlive)
        {
            this.move();
        }
    }
}