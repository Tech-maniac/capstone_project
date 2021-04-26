class Rock extends BaseClass {
  constructor(x, y){
    super(x,y,150,150);
    this.image = loadImage("images/rock1.png");
    this.Visiblity = 255;
  }

 display()
 {
       super.display();
 }
}

