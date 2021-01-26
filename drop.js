class Drop{
    constructor(x, y,) {
        var options = {
            'restitution':1,
            'friction':1
            
            
        }
        this.body=Bodies.rectangle(x,y,2,2,options)
        this.width=2;
        this.height=2;
        World.add(world,this.body)


    }
    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        fill("red")
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.width,this.height)
    }
} 
