class Clouds{
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
    this.image = loadImage("cartoon-rain-clouds-clipart-19.png");
     
  }
  display(){
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  }
}
