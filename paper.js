class paper{
    constructor(x,y,radius){

         var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.image = loadImage("paper.png");
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.r = radius;
        World.add(world,this.body);

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        image(this.image, 0, 0, this.width, this.height);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}
