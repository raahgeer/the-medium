
function setup() {
    createCanvas(400, 400);
    
    //background('orange');
    translate(width/2,height/2);
    frameRate(30)
  }
  
  
  function draw() {
    
   background('#fcba03');
    
    noStroke();
    fill('#EC7230');
    map(mouseX,0.4, height, 0.1, 1);
    rect(200,0, 200,400);
    
    noStroke();
    fill('#CA6026');
    map(mouseX,0.4, height, 0.1, 1);
    rect(200,200, 200,400);
    
    push();
    noStroke();
    fill('#F19945');
    map(mouseX,0.4, height, 0.1, 1);
    rect(map(mouseX,.1,200,20,4), 200,200);
   pop();
    
    fill('white');
    noStroke();
    rect(161,328,82,30);
    
    fill('#910012')
    rect(183,328,31,31);
    
      fill('#910012')
    rect(183,328,31,31);
    
    //bottom rectangle
      fill('#C04141')
    rect(-1,357,349,43);
    
    push();
    fill('#C04141');
    // let x2 = map(mouseY, .1,mouseX,.2,300)
    // arc(347, 379, 43, 43, 330, PI);
    circle(350,407,100)
    pop();
    
     fill('#EC0018')
    rect(104,357,138,43);
    
    fill('white')
    rect(140,357,74,31);
  // circle(140,372,31);
    
       fill('#F6E03D')
    rect(214,357,29,31);
    
    fill('red');
    noStroke();
    rect(212,295,31,33);
    
    push();
    noStroke();
    fill('#E7A900');
    map(mouseX,0.4, height, 0.1, 1);
    circle(map(mouseX,10,mouseY,25,75), 170,300);
   pop();
    
    
    fill('white');
    let x1 = map(mouseX, 10, width/2, 25, 200);
    ellipse(x1, 170,260);
    
     rect(161,291,53,38);
    
    
    push();
    stroke('#FFB444');
    strokeWeight(40);
    noFill();
    arc(200,170,210,210,32,PI)
    //ellipse(200, 170,188);
    pop();
    
    // right yellow arc
     push();
    stroke('#FFDF1D');
    strokeWeight(50);
    noFill();
    let x3 = map(mouseY, .1,mouseX,.2,300);
    rotate(map(mouseX,x3 ,width),0,-PI);
    arc(200, 170, 210, 210, 17, PI + PI + PI/4);
     pop();
    
     // left orange arc
    push();
    fill('#E88B17');
    // let x2 = map(mouseY, .1,mouseX,.2,300)
    arc(200, 170, 250, 250, 9, PI + PI/2);
    pop();
    
    
     // right top arc
    push();
    fill('#FFDF1D');
    // let x2 = map(mouseY, .1,mouseX,.2,300)
    arc(240, 59, 80, 80, 13, PI/9 + PI);
    pop();
    
    
    // left arc
    push();
    stroke('#FFB444');
    strokeWeight(40);
    noFill();
    arc(200,170,210,210,32,PI)
    //ellipse(200, 170,188);
    pop();
  
    
    // bottom white arc
    push();
    stroke('white');
    strokeWeight(50);
    noFill();
    arc(200,170,210,210,270,QUARTER_PI+PI/2)
    //ellipse(200, 170,188);
    pop();
    
    // right yellow arc
     push();
    stroke('#FFDF1D');
    strokeWeight(50);
    noFill();
    // let x3 = map(mouseY, .1,mouseX,.2,300);
    //rotate(map(mouseX,x3 ,width),0,-PI);
    arc(200, 170, 210, 210, 17, PI + PI + PI/4);
     pop();
    
     
    // left orange arc
    push();
    fill('#E88B17');
    // let x2 = map(mouseY, .1,mouseX,.2,300)
    arc(200, 170, 250, 250, 9, PI + PI/2);
    pop();
    
    // centre pink arc
    push();
    fill('#DD96A8');
    // let x2 = map(mouseY, .1,mouseX,.2,300)
    arc(200, 170, 190, 190, 150, PI + QUARTER_PI);
    pop();
    
    // centre pink arc
    push();
    fill('#DD96A8');
    // let x2 = map(mouseY, .1,mouseX,.2,300)
    arc(210, 141, 60, 60, 100, PI + QUARTER_PI);
    pop();
    
    // eyebrow orange
    push();
    fill('#FFB444');
    let x2 = map(mouseY, .1,mouseX,.2,300)
    arc(260, 140, 90, 90, 3, PI + PI);
    pop();
   
    fill('white');
     quad(209,213,212.5,136.5,246.5,159,220.5,213);
    
     //triangle
    fill('red')
    triangle(209,213.5,212.5,137,220,143);
    
    fill('#A00515');
    rect(189,220,19,22);
    
      fill('#A00515');
    rect(209,210,12,11);
    
    //fill('#FFC107')
    //ellipse(200+random(2), 150+random(2), 150, 240);
   
    
   // fill('#FFD748');
    //ellipse(150, 73.43, 160,80);
    // ellipseMode(200,200);
    
  
    
    //triangle
    fill('white')
    triangle(103.3,121.76, 155, 54.9, 208.3, 134.07);
    
    // eyebrow
    push();
    stroke('black');
    noFill();
    strokeWeight(3);
    // let x4 = map(mouseY, 10,mouseX,100,30)
    arc(250, 132, 70, 70, 47, PI/2 + PI);
    pop();
   
    push();
    fill('darkorange');
    quad(280,130,320,115.5,328,143,290,144.5)
    pop();
    
    stroke('darkred');
    strokeWeight(.5);
    beginShape();
    
    fill('lightgrey');
  vertex(213.6, 137.5);
  bezierVertex( 180, 119.78, 135.5, 110.3 ,103.7,121.7);
  bezierVertex(  100,120, 150, 180,213.6, 137.5);
  endShape();
   
    
    beginShape();
    fill('lightgrey');
  vertex(303.74, 144.18);
  bezierVertex( 260, 130, 247.5, 132.79 ,213.63,137.58);
  bezierVertex(  237.5, 180, 290, 170,303.74, 144.18);
  endShape();
    
   // arc(120, 104, 250, 200, 300, PI*2);
   
    
    
    fill('#A00515');
    circle(162,135,30);
    
    fill('#A00515');
    circle(255,150,30);
    
  
  
  
    
    
  }