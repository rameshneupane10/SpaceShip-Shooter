const canvas =document.getElementById("canvas");
const c=canvas.getContext("2d");

const player = new Player();
let allBullets = [];
let enemies = [];

setInterval(() => {
  const enemy = new Enemy();
  enemies.push(enemy);
}, 2000);

 
function animate()
{
    c.clearRect(0,0,canvas.width,canvas.height);
    player.update();
    for (let i = 0; i < enemies.length; i++) {
      enemies[i].update();
      enemies[i].collision(player);
      enemies[i].collisionWithBullet(allBullets);
    }
  
    for (let i = 0; i < allBullets.length; i++) {
      allBullets[i].update();
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
