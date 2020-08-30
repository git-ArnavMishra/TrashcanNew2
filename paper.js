class Paper {
    constructor(x,y,d) {
      var options = {
        isStatic:false,
          restitution:0.001,
          friction:8,
          density:1.21,
          gravity:7 
          
          
      }
      this.body = Bodies.circle(x, y,d/2,options);
     this.width = d;
     this.height = d;
      
      this.image = loadImage("sprites/paper1.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
     
    //  var angle = this.body.angle;
      push();
    //  translate(pos.x, pos.y);
      //rotate(angle);
      //ellipseMode(CENTER);
      //fill(0,220,0);
     // ellipse(pos.x, pos.y,this.width);
     imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
      
    }
 
  };
