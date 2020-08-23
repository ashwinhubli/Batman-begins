class Umbrella{
   constructor(x,y,width,height){
      var options={
        'isStatic':true
      }
      this.body = Bodies.circle(x,y,width,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world,this.body);
      this.image = loadImage("c29a4f2186bd637dfbc087ae29d09261-man-with-umbrella-by-vexels.png");
       
    }
    display(){
      ellipse(this.body.position.x,this.body.position.y,this.width);
    }

}