class Bullet
{
    constructor()
    {
        this.position={

            x:player.position.x,
            y:player.position.y-20,
        };

        this.velocity={
            x:0,
            y:0,

        };
        
        this.size=15;
    }


    draw()
    {
        c.beginPath();
        c.fillStyle="white";
        c.fillRect(
            this.position.x,
            this.position.y,
            this.size,
            this.size
          );
    }

    move()
    {

    }

    update()
    {
        this.draw();
    }
}