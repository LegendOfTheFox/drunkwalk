//Global Variables

var w = 10;
var randomNum = 0;
var curx = 0;
var cury = 0;
var x = 0;
var y = 0;
var totalDis = 0;
var furthestDis = 0;
var totalSteps = 0;
var mult = 1.5;


function setup() {
    createCanvas(1000, 1000);
    background(51);
    frameRate(60);
}//setup

function draw() {
    
    //set up the grid
    strokeWeight(2);
    stroke(255, 255, 255);
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);
    
    strokeWeight(1);
    stroke(255, 0, 0);
    
    for(var j = 0; j < 5; j++ ) {
        
        //generate a random number between 0 & 4
        randomNum = floor(random(0 , 4));
        strokeWeight(2);
        stroke(255, 0, 0);
        
        // Update the position based on the random number
        if(randomNum == 0){
            x--;
            console.log(x);
        }
        
        if(randomNum == 1){
            x++;
            console.log(x);
        }
        
        if(randomNum == 2){
            y--;
            console.log(y);
        }
        
        if(randomNum == 3){
            y++;
            console.log(y);
        }
        
        //Draw a line with the new details

        line((curx*mult) + width/2, (cury*mult) + height / 2, (x*mult) + width/2 , (y*mult) + height / 2);
        curx = x;
        cury = y;
        
        //calculate the total distance from the origin
        totalDis = int(dist(0 , 0, curx, cury));
        
        // Display total distance traveled
        textSize(25);
        strokeWeight(2);
        stroke(20, 20, 255);
        text("Total Distance Traveled: ", 20, 60);
        text(totalDis, 20, 80);
        
        // Store the further distance traveled
        if(totalDis > furthestDis){
            furthestDis = totalDis;
        }
        text("Furthest Distance Traveled: ", 20, 100);
        text(furthestDis, 20, 120);
        
        //increment the total steps
        totalSteps++
        text("Total Steps: ", 20, 140);
        text(totalSteps, 20, 160);
    }
    
    //RandomWalker(5);
        
}//draw


function RandomWalker(s) {
    
    this.i = s;
    this.x = width;
    this.y = height;
    
    strokeWeight(4);
    stroke(255,0,0);
    
    console.log("RandomWalkers");
    
    for(var j = 0; j < 5; j++ ) {
        this.random = random(0 , 3);
        if(this.random == 0){
            this.x--;
            console.log(this.x);
        }
        
        if(this.random == 1){
            this.x++;
            console.log(this.x);
        }
        
        if(this.random == 2){
            this.y--;
            console.log(this.y);
        }
        
        if(this.random == 3){
            this.y++;
            console.log(this.y);
        }
        point(this.x, this.y);
    }
     
}//Random Walker Class
