/*Imágen de referencia: 
https://i.pinimg.com/originals/65/1e/9a/651e9a8d6bc9301b09fc5297839eb282.jpg

Del video: https://www.youtube.com/watch?v=r4pJlj_bteQ

*/

//-------------INTERACCIONES:
//Funciona con los clicks derecho e izquierdo(cambia los colores edl fondo)--------------------------------------------------------------------------------------



function setup() {
    createCanvas(800, 600);
    background(243, 225, 3);
    frameRate(24);
  
  }
  
  function draw() {
    //variables colores-
    let amarillo = color(243, 225, 3);
    let naranja = color(234, 82, 57);
    let violeta = color(50, 5, 160);
    let amarilloFigura = color(221, 201, 54);
    let gris = color(216, 224, 193);
    let azul = color(5, 10, 155);
    let fucsia = color(237, 24, 60);
    let blanco = 255;
    let negro1 = 10;
    let negro = 0;
    let btnH = 91.8;
  
    //-------cambio de color del fondo------
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        background(random(10, 255), random(10, 200), random(145)); //fondo cambia
      } else {
        background(amarillo);
      }
    }
  
    
  
    /*-------------------JAULA------------------------*/
    noFill();
    stroke(0);
    strokeWeight(1);
  
    rect(162, 55.3, 476.6, 481); //1
    rect(201, 87.7, 400, 407.5); //2
    rect(234, 120.8, 334.8, 340.56); //3
    rect(318.24, 206.48, 167.88, 170.64); //4
    line(399, 52.4, 399, 539.08); //centro vertical
    line(166.2, 295.28, 634.68, 295.28); //centro horizontal
    line(234.84, 378.32, 570.36, 375.92); //
    line(153.5, 418.36, 234.84, 378.32); //d
    line(570.36, 375.92, 651.72, 420); //i
    line(168.6, 174.32, 235.8, 206.48); //i
    line(235.8, 206.48, 569.4, 206.48); //c
    line(569.4, 204.56, 631.32, 169.52); //d
    line(277.08, 53.36, 317.4, 121.52);
    line(317.4, 121.52, 318.24, 206.48);
    line(516.6, 50.48, 484.44, 121.04);
    line(486.12, 121.04, 486.12, 206.84);
    line(486.12, 377.12, 486.12, 461.84);
    line(486.12, 461.84, 528.28, 534.16);
    line(318.24, 377.12, 318.24, 463.16);
    line(318.24, 463.16, 283.96, 534.76);
    line(234.12, 461.36, 163.56, 534.44);
    line(568.92, 461.36, 636.73, 532.32);
    line(234.12, 120.8, 162.12, 55.28);
    line(568.92, 120.8, 640.88, 55.28); // fin jaula
  
   
  
    push(); //inicio personaje
  
    //...........SOMBRERO.....................
    fill(211, 194, 113);
  
    ellipse(405, 79.88, 59.76, 48.48); //la del fondo
  
    fill(naranja);
    ellipse(428.84, 91.1, 22.16, 49.8); //izq
    triangle(402.21, 81.11, 435.54, 96.5, 429.87, 128.7);
    quad(404.94, 56.36, 430.7, 66.65, 438.33, 104.06, 403.25, 104.87); //izq(rojo)
  
    fill(gris);
    ellipse(378.26, 91.34, 19.4, 47.64);
    triangle(399.21, 81.02, 373, 98.84, 378.84, 128.18);
    quad(404.52, 55.88, 378.6, 67.64, 371.55, 105.88, 403.32, 104.87);
  
    //...................CARA...................
    noStroke();
    quad(394, 146.8, 411.42, 145.6, 412.32, 164.99, 393.4, 166.97);
    fill(blanco);
    quad(387.66, 105.14, 403.68, 105.14, 392.34, 146.36, 379.38, 125.48); //cachete der
    quad(403.68, 104.96, 417, 104.24, 428.34, 125.84, 416.1, 143.3); //cachete izq
    triangle(403.62, 104.72, 416.1, 143, 404.34, 149.48); //nariz izq
    triangle(404.34, 149.48, 392.34, 146.18, 403.56, 104.9); //nariz der
  
    //..................TORSO.................
    //LADO DERECHO
    //cadera der
    fill(violeta);
    ellipse(364.26, 314, 75, 75.24, 72);
  
    stroke(negro);
    fill(gris);
    quad(363.24, 170, 384.72, 159.2, 401.22, 167.72, 352, 179);
    triangle(351.48, 178.76, 401.52, 167.95, 407.52, 342.68); //der
  
    //LADO IZQUIERDO
    //cadera izq
    fill(fucsia);
    ellipse(448.5, 314.48, 75.24, 72);
  
    fill(naranja);
    quad(407.34, 166.76, 418.68, 155.42, 437.94, 165.86, 442.62, 169.82); //izq
  
    triangle(401.52, 166.88, 442.74, 168.86, 407.1, 340.58); //costillA izq
  
    //laterales
    fill(0);
    triangle(442.38, 171.76, 442.74, 275.42, 407.28, 340.4); //lateral izq
    triangle(407.28, 340.4, 365.16, 268.52, 351.48, 178.94); //lateral der
  
    //............MUSLOS..................
    //izq
    fill(gris);
    //izq
    quad(442.68, 275.87, 453.24, 280.52, 482.88, 329.24, 441.24, 436.52); //quad por fuera
  
    fill(violeta);
    quad(443.32, 274.19, 440.88, 436.4, 407.48, 441.92, 407.92, 339.32); //quad por dentro
  
    //der
    fill(amarilloFigura);
    quad(407.84, 339.32, 363.69, 266.66, 368.64, 432.56, 405.66, 442.19); //quad por dentro
    fill(fucsia);
    quad(368.94, 433.29, 329.52, 329.33, 353.05, 278.12, 364.66, 275.87); //quad por fuera
  
    //..........pantorrillas.................
    //pierna izquierda
    fill(amarilloFigura);
    ellipse(444.12, 452.26, 33.12, 54.72);
    quad(446.16, 423.8, 459.39, 464.2, 421.94, 537.06, 402.96, 536.12);
    fill(naranja);
    triangle(402.06, 439.4, 445.56, 426.68, 403.86, 533.54);
  
    //pierna derecha
    fill(gris);
    ellipse(366.36, 452.84, 33.12, 54.72);
    quad(367.5, 432.8, 351.9, 466.26, 382.8, 535.52, 402.24, 536.06);
    //triangulo pierna der
    fill(azul);
    triangle(368.04, 432.38, 401.97, 439.4, 402.6, 533.99);
  
    // .................pies..........................
    //derecho
    quad(383.4, 536.12, 399.54, 536.96, 391.22, 565.88, 369.24, 564.68);
    fill(naranja);
    quad(405.66, 536.87, 421.95, 537.5, 439.08, 559.64, 427.8, 566.84);
  
    //.........LINEAS NEGRAS.......................
    stroke(negro1);
    strokeWeight(2.5);
    noFill();
    line(390.6, 110.6, 398.76, 114.44); //ceja der
    line(406.2, 113.72, 414.84, 113.96); //ceja izq
    bezier(395.58, 137.9, 392.88, 139.34, 398.28, 134.43, 405.84, 137); //boca
    stroke(negro);
    strokeWeight(3);
    bezier(383.34, 160.04, 402.9, 177.98, 420.78, 154.55, 420.42, 155.9); //cuello
    strokeWeight(5);
  
    bezier(364.98, 273.26, 396.84, 333.8, 416.308, 335.65, 406.92, 334.76); //ingle der
    bezier(410.98, 332.4, 406.68, 335.96, 415.74, 328.16, 443.1, 273.26); //ingle izq
    line(407.46, 333.56, 402.36, 534.84); //separación piernas
    bezier(365.04, 426.2, 384.18, 443.48, 410.1, 435.5, 403.32, 437.6); //rodilla der
    bezier(405.84, 438.86, 435.27, 437.6, 445.44, 423.92, 444.6, 425); //rodilla izq
    bezier(382.89, 536.06, 394.5, 539.09, 402.84, 535.09, 402.33, 535.34); //pie der
    bezier(400.56, 535.15, 413.67, 541.4, 423.68, 536.06, 424.18, 536.33); //pie izq
  
    pop(); //fin del personaje
  
    //--------------variables de incremento--------------------------
  
  document.oncontextmenu = function () {
    return false;
  }
  }