var canvas= new fabric.Canvas('myPreciousCanvas');


Player_X=10;
Player_Y= 10;
  
BlockWidth= 30;
BlockHeight= 30;

Player_Object="";
Block_Object="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        Player_Object= Img;
        Player_Object.scaleToWidth(143);
        Player_Object.scaleToHeight(143);
        Player_Object.set({
            top:Player_Y,left:Player_X
        });
        canvas.add(Player_Object);

    });
}


function blockUpdate(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        Block_Object= Img;
        Block_Object.scaleToWidth(BlockWidth);
        Block_Object.scaleToHeight(BlockHeight);
        Block_Object.set({
            top:Player_Y,left:Player_X
        });
        canvas.add(Block_Object);

    });
}

window.addEventListener("keydown",MyKeydown);

function MyKeydown(e){
    KeyPressed= e.keyCode;
    console.log(KeyPressed);
    if(e.shiftKey == true && KeyPressed == '80'){
        BlockWidth = BlockWidth + 10;
        BlockHeight = BlockHeight + 10;
        document.getElementById("Width_c").innerHTML= BlockWidth;
        document.getElementById("Height_c").innerHTML= BlockHeight;
        console.log("Key  Shift - P Is Pressed");

    

        }
        if (e.shiftKey == true && KeyPressed == '77') {
            BlockHeight = BlockHeight - 10;
            BlockWidth = BlockWidth - 10;
            document.getElementById("Width_c").innerHTML= BlockWidth;
            document.getElementById("Height_c").innerHTML= BlockHeight;
            console.log("SHIFT- M = pressed");


 
        }

        if (KeyPressed == '87'){
            console.log("W is Pressed");
            blockUpdate('wall.jpg');


        }
        if (KeyPressed == '71'){
            console.log("G is Pressed");
            blockUpdate('ground.png');


        }
        if (KeyPressed == '84'){
            console.log("T is Pressed");
            blockUpdate('trunk.jpg');


        }
        if (KeyPressed == '68'){
            console.log("D is Pressed");
            blockUpdate('Dirt.jpg');


        }
        if (KeyPressed == '83'){
            console.log("S is Pressed");
            blockUpdate('Cloud.jpg');


        }
        if (KeyPressed == '76'){
            console.log("L is Pressed");
            blockUpdate('Leaves.jpg');


        }
        if (KeyPressed == '78'){
            console.log("N is Pressed");
            blockUpdate('Diamond.png');


        }
        if (KeyPressed == '38'){
            console.log("Up is Pressed");
            Up();


        }
        if (KeyPressed == '40'){
            console.log("Down is Pressed");
            Down();


        }
        if (KeyPressed == '37'){
            console.log("Left is Pressed");
            Left();


        }
        if (KeyPressed == '39'){
            console.log("Right is Pressed");
            Right();


        }
        


















}



function Up(){
    if(Player_Y >= 10){
        Player_Y = Player_Y - BlockHeight;
        console.log("The Y Value is Now "+ Player_Y +" And The X Value is Now " + Player_X+".");
        canvas.remove(Player_Object);
        playerUpdate();

    }
}
function Down(){
    if(Player_Y <= 457){
        Player_Y = Player_Y + BlockHeight;
        console.log("The Y Value is Now "+ Player_Y +" And The X Value is Now " + Player_X+".");
        canvas.remove(Player_Object);
        playerUpdate();

    }
}
function Left(){
    if(Player_X >= 10){
        Player_X = Player_X - BlockWidth;
        console.log("The Y Value is Now "+ Player_Y +" And The X Value is Now " + Player_X+".");
        canvas.remove(Player_Object);
        playerUpdate();

    }
}
function Right(){
    if(Player_X <= 857){
        Player_X = Player_X + BlockWidth;
        console.log("The Y Value is Now "+ Player_Y +" And The X Value is Now " + Player_X+".");
        canvas.remove(Player_Object);
        playerUpdate();

    }
}