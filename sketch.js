var ball1;
var database,position;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    var v1= database.ref('Ball');
    v1.on("value",read,error);

}

function draw(){
    background("white");
if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
}

   
    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball').set({
        x:position.x + x,
        y:position.y + y
    })

    

    
    
}
function read(data){
    position = data.val()
    console.log(position)
    ball1.x = position.x;
    ball1.y = position.y;
}
function error(){
    console.log("error")
}












