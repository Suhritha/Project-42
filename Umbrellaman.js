class Umbrellaman {
    constructor(x,y){

        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.image = loadImage("Walking Frame/walking_1.png,Walking Frame/walking_2.png,Walking Frame/walking_3.png ,Walking Frame/walking_4.png,Walking Frame/walking_5.png,Walking Frame/walking_6.png,Walking Frame/walking_7.png,Walking Frame/walking_8.png")
        this.image = loadImage("Bestman-01.png");
    }

    display(){
        var pos = this.umbrella.position;
        image(this.image,pos.x,pos.y+70,300,300);
        imageMode(CENTER);

        if(frameCount >= 200)
            image(this.bestmanImg, pos.x,pos.y+70,200,300);
        
    }
}