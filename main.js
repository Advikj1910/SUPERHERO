const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");
player_x = 200;
player_y = 200;

block_img_width = 30;
block_img_height = 30;

var player_object = "";
var block_img_object = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png" , function (Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y ,
            left: player_x
        });
        canvas.add("player.png")
    }
    );
}

function newImage(get_img){
    fabric.Image.fromURL(get_img , (Img)
    {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y ,
            left: player_x
        });
        canvas.add(block_img_object);
    }
    );
}