var tela = 1;
var largura = 200;
var altura = 50;
var menux = 50;
var menuy1 = 85;
var menuy2 = 150;
var menux3 = 210;

// Temporizador
let cont = 0
let contS = 0

// Contador de vidas
let vida = 0;

// Pontos
pontos = 30;

// Tela de jogo
var mnx1 = 200;
var mny1 = 15;

// Imagem de fundo
let img;

// Dicas para as questões
var dica1 = false; 
var dica2 = false;

function preload() {
  img = loadImage("capa.png");
  img2 = loadImage("Cley.png");
  img3 = loadImage("qd00.jpg");
  img4 = loadImage("qd01.jpg");
  img5 = loadImage("GO.jpg");
  img6 = loadImage("dopamina.jpg");
  img7 = loadImage("bdica1.jpg");
  img8 = loadImage("bdica2.jpg");
  img9 = loadImage("crb.png");


}


function setup() {
  createCanvas(300, 300);
  frameRate(30);
}

function dicas() {
  if (tela == 2 ){
    background(10);
    text("Dica Tela 5!", 50, 200); 
  }
  if(tela == 5){
    background(10);
    text("cadê a dica?", 50, 200);
  }
}

function draw() {
  background(0);
  image(img, 0, 0);
  //tela inicial
  textStyle(NORMAL);
  if (tela == 1) {
    textAlign(CENTER);
    textSize(25);

// Iniciar
    if (mouseX > menux && mouseX < menux + largura && mouseY > menuy1 && mouseY < menuy1 + altura) {
      strokeWeight(3);
      stroke(255, 0, 0);
      noFill();
      rect(menux, menuy1, largura, altura, 50);
      if (mouseIsPressed) {
        tela = 2;
      }
    }
    fill(255);
    noStroke();
    text("Iniciar", 150, 120);


// Informações
    if (mouseX > menux && mouseX < menux + largura && mouseY > menuy2 && mouseY < menuy2 + altura) {
      strokeWeight(3);
      stroke(0, 0, 255);
      noFill();
      rect(menux, menuy2, largura, altura, 50);
      if (mouseIsPressed) {
        tela = 3;
      }
    }

    fill(255);
    noStroke();
    text("Informações", 150, 183);

// Autor
    text("Creditos", 150, 240);
    if (mouseX > menux && mouseX < menux + largura && mouseY > menux3 && mouseY < menux3 + altura) {
      strokeWeight(3);
      stroke(0, 255, 0);
      fill(0);
      noFill();
      rect(menux, menux3, largura, altura, 50);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
  }

// Tela de Fase 01
  else if (tela == 2) {
    if ( dica1 ) { 
      image(img7, 0, 0);
      if ( keyIsPressed  ) { 
        dica1 = false; 
      }
    } else {  
      background(0);
      image(img3, 0, 0);
      textSize(15);
      noStroke();
      cont = cont + 1
      textSize(10);
      contS = parseInt(cont / 30);
      vida = parseInt(contS / 10) ;
      if (cont % 300 == 0 ) {
        dica1 = true; 
        
      }
      text("TEMPO: " + (30 - contS), 35, 20);
      text("VIDAS: " + (3 - vida), 140, 20);
      text("PONTOS: " + (pontos), 240, 20);

      if (vida == 3 || pontos == 0) {
        tela = 0;
      }
    }
    
// Tela de Informações
  } else if (tela == 3) {
    background(0, 110, 170);
    fill(255);
    textSize(20);
    noStroke();
    textAlign(CENTER);
    text("COMO JOGAR" + "\n" + "\n " + " Escolha a resposta certa para ir para etapa seguinte." + "\n" + "Tente não passar mais de 10 segundos em cada pergunta ou erra-las, isso custará vidas.", 20, 20, 250, 250);
    textSize(10);
    text("> CLICK NO CEREBRO PARA SAIR <", 50, 260, 200, 100);
    image(img9, 255, 255);
    if(mouseX > 255 && mouseX < 255 + 30 && mouseY > 255 && mouseY < 255 + 30){
    if(mouseIsPressed){
      tela = 1
      }
    }
    
// Tela de Creditos.    
  } else if (tela == 4) {
    background(50, 20, 150);
    textSize(20);
    fill(255);
    noStroke();
    textAlign(CENTER);
    image(img2, 10, 20);
    text("PROGRAMADOR: Armstrong Cleydmen" + "\n" + "Turma 04D"+ "\n" + "\n" + "PROFESSORES:"+ "\n" + "Idalmis Milian"+ "\n" + "Orivaldo Vieira", 80, 30, 200, 200);
    cont = 0;
    contS = 0;
    pontos = 30;
    image(img9, 255, 255);
    if(mouseX > 255 && mouseX < 255 + 30 && mouseY > 255 && mouseY < 255 + 30){
    if(mouseIsPressed){
      tela = 1
      }
    }

// Tela de Fase 02
  } else if (tela == 5) {
    if(dica2){
      image(img8, 0, 0);
      if(keyIsPressed){
        dica2 = false;
      }
    } else {
    background(0);
    image(img4, 0, 0);
    textSize(15);
    noStroke();
    cont = cont + 1
    textSize(10);
    contS = parseInt(cont / 30);
    vida = parseInt(contS / 10);
    if(cont % 300 == 0){
      dica2 = true;
    }
    text("TEMPO: " + (30 - contS), 35, 20);
    text("VIDAS: " + (3 - vida), 140, 20);
    text("PONTOS: " + (pontos), 240, 20);

    
    if(vida == 3 || pontos == 0){
      tela = 0;
        }
    }
// Tela Final
  } else if (tela == 6) {
    background(0);
    image(img6, 0, 0);
    textSize(23);
    noStroke();
    text("Parabéns!" + "\n" + "Você Conseguiu!" , 150, 130);
    image(img9, 255, 255);
    cont = 0;
    contS = 0;
    pontos = 30;
    if(mouseX > 255 && mouseX < 255 + 30 && mouseY > 255 && mouseY < 255 + 30){
    if(mouseIsPressed){
      tela = 1
      }
    }
    
    
// Tela de GAME OVER
  } else if (tela == 0) {
    background(0);
    image(img5, 0, 0);
    cont = 0;
    contS = 0;
    pontos = 30;
    image(img9, 255, 255);
    if(vida == 3){
      textSize(10);
      text("Suas Vidas Zeraram", 60, 200);
    } 
    
    if(mouseX > 255 && mouseX < 255 + 30 && mouseY > 255 && mouseY < 255 + 30){
      if(mouseIsPressed){
        tela = 1
      }
    }
  }
}

// Controle de Tecla
function mouseReleased() {
  
// Tela 5, Fase 02
  if (mouseX > 55 && mouseX < 55 + altura && mouseY > 230 && mouseY < 230 + largura) {
    noStroke();
    if (tela == 5) {
      tela = 6;
      pontos = pontos + 10;
    }
  }

  if (mouseX > 180 && mouseX < 180 + altura && mouseY > 215 && mouseY < 215 < largura) {
    noStroke();
    if (tela == 5) {
      dica2 = true;
      pontos = pontos - 10;
    }
  }

  // Tela 02, Fase 01
  if (mouseX > 55 && mouseX < 55 + altura && mouseY > 230 && mouseY < 230 + largura) {
    noStroke();
    if (tela == 2) {
      dica1 = true;
      pontos = pontos -10;        
    }
  }

  if (mouseX > 180 && mouseX < 180 + altura && mouseY > 215 && mouseY < 215 < largura) {

    noStroke();
    if (tela == 2) {
      tela = 5;
      pontos = pontos + 10;
    
    }
  }
// Retorno
  
  if(tela == 0){
    tela = 1;
  }
}