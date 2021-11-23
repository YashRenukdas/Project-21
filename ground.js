class ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
  }

  display() {
    var groundpos = this.body.position;
    push();
    translate(groundpos.x, groundpos.y);
    rectMode(CENTER);
    noStroke()
    fill("yellow");
    rect(0, 0, this.w, this.h);
    pop();
  }
  
}