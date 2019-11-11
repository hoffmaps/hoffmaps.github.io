// this is the main javascript file for all those functions and such


/*
function moveBox(object_id)
{
    var obj = document.getElementById(object_id);
    obj.setAttribute("width", "200px")
}
*/

function moveBox()
{
    var main_stage = document.getElementById("test_stage");
    var main_stage_context = main_stage.getContext("2d");
    var x = 50;
    var y = 50;
    var speed = 3;
    var dirX = 1;
    var dirY = 1;
    
    setInterval(animate,20);
    function drawBox(x,y)
    {
        main_stage_context.fillStyle = "black";
        main_stage_context.fillRect(x, y, 50, 50);
    }
    function animate()
    {
        main_stage_context.clearRect(0,0,main_stage.width, main_stage.height);
        if(x <= 20 || x >= main_stage.width-20)
            dirX = -1*dirX;
        if(y <= 20 || y >= main_stage.height-20)
            dirY = -1*dirY;
        x = x + speed*dirX;
        y = y + speed*dirY;
        drawBox(x,y);
    }
    animate();
    
}