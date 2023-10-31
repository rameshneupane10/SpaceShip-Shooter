const canvas =document.getElementById("canvas");
const c=canvas.getContext("2d");

const player = new Player();
let Score=0;
let allBullets = [];
let enemies = [];

setInterval(() => {
  const enemy = new Enemy();
  enemies.push(enemy);
}, 2000);

 
function animate()
{
    c.clearRect(0,0,canvas.width,canvas.height);
    const space=new Image();
    space.src="./Starset.png";
    c.drawImage(space,0,0,canvas.width,canvas.height);

    player.update();
    for (let i = 0; i < enemies.length; i++) {
      enemies[i].update();
      enemies[i].collisionWithBullet(allBullets);
      enemies[i].collision(player);
    
    }
  

    for (let i = 0; i < allBullets.length; i++) {
      allBullets[i].update();
    }
    c.font = " bold 50px sans serif";            
    c.fillText(Score, 5, 40);
   
    if (!player.isAlive) {
      c.font = "bold 50px Arial";
      c.fillText("GAME OVER", 60, 250);
      return; 
    }

  
  
    requestAnimationFrame(animate);
}
animate();

document.addEventListener("keydown",(e)=>
{
  if(e.code ==="ArrowUp") player.velocity.y = -5;
  if(e.code ==="ArrowDown")  player.velocity.y = 5;
  if(e.code ==="ArrowLeft") player.velocity.x =  -5;
  if(e.code ==="ArrowRight")  player.velocity.x=5;
  if (e.code === "Space")
  allBullets.push(
    new Bullet(player.position.x + player.size / 2.8, player.position.y)
  );
});

document.addEventListener("keyup",(e)=>
{
  if(e.code ==="ArrowUp") player.velocity.y=0;
  if(e.code ==="ArrowDown") player.velocity.y=0;
  if(e.code ==="ArrowLeft")  player.velocity.x=0;
  if(e.code ==="ArrowRight")  player.velocity.x=0;
});
