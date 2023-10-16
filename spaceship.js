const canvas =document.getElementById("canvas");
const c=canvas.getContext("2d");

const player = new Player();
 
function animate()
{
    c.clearRect(0,0,canvas.width,canvas.height);
    player.update();
    requestAnimationFrame(animate);
}
animate();

document.addEventListener("keydown",(e)=>
{
  if(e.code ==="ArrowUp") player.velocity.y = -5;
  if(e.code ==="ArrowDown")  player.velocity.y = 5;
  if(e.code ==="ArrowLeft") player.velocity.x =  -5;
  if(e.code ==="ArrowRight")  player.velocity.x=5;
});

document.addEventListener("keyup",(e)=>
{
  if(e.code ==="ArrowUp") player.velocity.y=0;
  if(e.code ==="ArrowDown") player.velocity.y=0;
  if(e.code ==="ArrowLeft")  player.velocity.x=0;
  if(e.code ==="ArrowRight")  player.velocity.x=0;
});
