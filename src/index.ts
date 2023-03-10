
//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
import { Point3D } from './point3D.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

let cv: CvHLines;
let obj: Obj3D;
let ang: number=0;
let contp1: number =0;
let contp2: number =0;
let limitep1: number = 9;
let limitep2: number = 9;
let limitec1: number = 5;
let limitec2: number = 5;
let limitec3: number = 5;
let contc1: number = 0;
let contc2: number = 0;
let contc3: number = 0;


function leerArchivo(e:any) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    obj = new Obj3D();
    if (obj.read(contenido)) {
      //sDir = sDir1;
      cv = new CvHLines(graphics, canvas);
      cv.setObj(obj);
      cv.paint();
    }
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido:any) {
  var elemento = document.getElementById('contenido-archivo');
  //
  //readObject(new Input(contenido));
  elemento.innerHTML = contenido;
}

function vp(dTheta:number, dPhi:number, fRho:number):void{  // Viewpoint
  if (obj != undefined) {
    let obj: Obj3D = cv.getObj();
    if (!obj.vp(cv, dTheta, dPhi, fRho))
      alert('datos no validos');
  }
  else
    alert('aun no has leido un archivo');
}

function eyeDownFunc() {
  vp(0, 0.1, 1);
}

function eyeUpFunc() {
  vp(0, -0.1, 1);
}

function eyeLeftFunc() {
  vp(-0.1, 0, 1);
}

function eyeRightFunc() {
  vp(0.1, 0, 1);
}

function incrDistFunc() {
  vp(0, 0, 2);
}

function decrDistFunc() {
  vp(0, 0, 0.5);
}
// Cerrar puerta 1
function pza1DerFunc() {
  if (contp1 == 0) {
    alert('La puerta no se puede cerrar más'); }
    else{
    let af = 10;
    Rota3D.initRotate( obj.w[130], obj.w[131], af*Math.PI/180);	
    for (let i = 132; i <= 133; i++){
      obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    contp1--;
    cv.setObj(obj);
    cv.paint();	
  }
}
// Abrir puerta 1
function pza1IzqFunc() {
  if (contp1 < limitep1) {
    let af = -10;
    Rota3D.initRotate( obj.w[130], obj.w[131], af*Math.PI/180);	
    for (let i = 132; i <= 133; i++){
      obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    contp1++;
    cv.setObj(obj);
    cv.paint();	
  } else {
    alert('La puerta no se puede abrir más');
  }
}
// Abrir puerta 2
function pza12DerFunc() {
  if (contp2 < limitep2) {
    let af = 10;
    Rota3D.initRotate( obj.w[151], obj.w[152], af*Math.PI/180);	
    for (let i = 150; i <= 153; i++){
      obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    contp2++;
    cv.setObj(obj);
    cv.paint();	
  } else {
    alert('La puerta no se puede abrir más');
  }
}
//Cerrar puerta 2
function pza12IzqFunc() {
  if (contp2 == 0) {
    alert('La puerta no se puede cerrar más'); }
    else {
    let af = -10;
    Rota3D.initRotate( obj.w[151], obj.w[152], af*Math.PI/180);	
    for (let i = 150; i <= 153; i++){
      obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    contp2--;
    cv.setObj(obj);
    cv.paint();	
  }
}
//Abrir cajon 1
function trayecto(){
  if(contc1 < limitec1) {
  var tr = 0.5;
  for(var i=230; i<=231; i++){
    obj.w[i].z= obj.w[i].z+tr;
  }
  cv.setObj(obj);
  cv.paint();
  
  var tr2 = 0.5;
  for(var i=232; i<=233; i++){
    obj.w[i].z= obj.w[i].z+tr2;
  }
  cv.setObj(obj);
  cv.paint();

  var tr3 = 0.5;
  for(var i=234; i<=235; i++){
    obj.w[i].z= obj.w[i].z+tr3;
  }
  cv.setObj(obj);
  cv.paint();

  var tr4 = 0.5;
  for(var i=236; i<=237; i++){
    obj.w[i].z= obj.w[i].z+tr4;
  }
  contc1++;
  cv.setObj(obj);
  cv.paint();
}
else {
  alert('El cajón no se puede abrir más');
}
}

//Cerrar cajon 1
function trayectocerrar(){
  if(contc1 == 0) {
    alert('El cajón no se puede cerrar más');
  }
  else {
  var tr = -0.5;
  for(var i=230; i<=231; i++){
    obj.w[i].z= obj.w[i].z+tr;
  }
  cv.setObj(obj);
  cv.paint();
  
  var tr2 = -0.5;
  for(var i=232; i<=233; i++){
    obj.w[i].z= obj.w[i].z+tr2;
  }
  cv.setObj(obj);
  cv.paint();

  var tr3 = -0.5;
  for(var i=234; i<=235; i++){
    obj.w[i].z= obj.w[i].z+tr3;
  }
  cv.setObj(obj);
  cv.paint();

  var tr4 = -0.5;
  for(var i=236; i<=237; i++){
    obj.w[i].z= obj.w[i].z+tr4;
  }
  contc1--;
  cv.setObj(obj);
  cv.paint();
}
}

//Abrir cajon 2
function trayecto2(){
  if(contc2 < limitec2){
  var tr = 0.5;
  for(var i=260; i<=261; i++){
    obj.w[i].z= obj.w[i].z+tr;
  }
  cv.setObj(obj);
  cv.paint();
  
  var tr2 = 0.5;
  for(var i=262; i<=263; i++){
    obj.w[i].z= obj.w[i].z+tr2;
  }
  cv.setObj(obj);
  cv.paint();

  var tr3 = 0.5;
  for(var i=264; i<=265; i++){
    obj.w[i].z= obj.w[i].z+tr3;
  }
  cv.setObj(obj);
  cv.paint();

  var tr4 = 0.5;
  for(var i=266; i<=267; i++){
    obj.w[i].z= obj.w[i].z+tr4;
  }
  contc2++;
  cv.setObj(obj);
  cv.paint();
}
  else{
    alert('El cajón no se puede abrir más');
  }
}

//Cerrar cajon 2
function trayectocerrar2(){
  if(contc2 == 0){
    alert('El cajón no se puede cerrar más');
  }
  else {
  var tr = -0.5;
  for(var i=260; i<=261; i++){
    obj.w[i].z= obj.w[i].z+tr;
  }
  cv.setObj(obj);
  cv.paint();
  
  var tr2 = -0.5;
  for(var i=262; i<=263; i++){
    obj.w[i].z= obj.w[i].z+tr2;
  }
  cv.setObj(obj);
  cv.paint();

  var tr3 = -0.5;
  for(var i=264; i<=265; i++){
    obj.w[i].z= obj.w[i].z+tr3;
  }
  cv.setObj(obj);
  cv.paint();

  var tr4 = -0.5;
  for(var i=266; i<=267; i++){
    obj.w[i].z= obj.w[i].z+tr4;
  }
  contc2--;
  cv.setObj(obj);
  cv.paint();
}
}

//Abrir cajon 3
function trayecto3(){
  if(contc3 < limitec3){
  var tr = 0.5;
  for(var i=290; i<=291; i++){
    obj.w[i].z= obj.w[i].z+tr;
  }
  cv.setObj(obj);
  cv.paint();
  
  var tr2 = 0.5;
  for(var i=292; i<=293; i++){
    obj.w[i].z= obj.w[i].z+tr2;
  }
  cv.setObj(obj);
  cv.paint();

  var tr3 = 0.5;
  for(var i=294; i<=295; i++){
    obj.w[i].z= obj.w[i].z+tr3;
  }
  cv.setObj(obj);
  cv.paint();

  var tr4 = 0.5;
  for(var i=296; i<=297; i++){
    obj.w[i].z= obj.w[i].z+tr4;
  }
  contc3++;
  cv.setObj(obj);
  cv.paint();
}
else {
  alert('El cajón no se puede abrir más');
}
}

//Cerrar cajon 3
function trayectocerrar3(){
  if(contc3 ==0) {
    alert('El cajón no se puede cerrar más');
  }
  else {
  var tr = -0.5;
  for(var i=290; i<=291; i++){
    obj.w[i].z= obj.w[i].z+tr;
  }
  cv.setObj(obj);
  cv.paint();
  
  var tr2 = -0.5;
  for(var i=292; i<=293; i++){
    obj.w[i].z= obj.w[i].z+tr2;
  }
  cv.setObj(obj);
  cv.paint();

  var tr3 = -0.5;
  for(var i=294; i<=295; i++){
    obj.w[i].z= obj.w[i].z+tr3;
  }
  cv.setObj(obj);
  cv.paint();

  var tr4 = -0.5;
  for(var i=296; i<=297; i++){
    obj.w[i].z= obj.w[i].z+tr4;
  }
  contc3--;
  cv.setObj(obj);
  cv.paint();
}
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);


//movimiento de piezas
document.getElementById('pza1Izq').addEventListener('click', pza1IzqFunc, false);
document.getElementById('pza1Der').addEventListener('click', pza1DerFunc, false);
document.getElementById('pza12Izq').addEventListener('click', pza12IzqFunc, false);
document.getElementById('pza12Der').addEventListener('click', pza12DerFunc, false);
document.getElementById('abrircajon1').addEventListener('click', trayecto, false);
document.getElementById('cerrarcajon1').addEventListener('click', trayectocerrar, false);
document.getElementById('abrircajon2').addEventListener('click', trayecto2, false);
document.getElementById('cerrarcajon2').addEventListener('click', trayectocerrar2, false);
document.getElementById('abrircajon3').addEventListener('click', trayecto3, false);
document.getElementById('cerrarcajon3').addEventListener('click', trayectocerrar3, false);
let Pix: number, Piy: number;
let Pfx: number, Pfy: number;
let theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
let flag: boolean = false;

function handleMouse(evento: any) {
  Pix=evento.offsetX;
  Piy = evento.offsetY;
  flag = true;
}

function makeVizualization(evento: any) {
  if (flag) {
    Pfx = evento.offsetX;
    Pfy = evento.offsetY;
    //console.log(Pfx, Pfy)
    let difX = Pix - Pfx;
    let difY = Pfy - Piy;
    vp(0, 0.1 * difY / 50, 1);
    Piy = Pfy;
    vp(0.1 * difX, 0 / 50, 1);
    Pix = Pfx;
    /*if( Piy>Pfy+1 ){
      phi += SensibilidadY;
      vp(0, 0.1*, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }

    if(Pfy>Piy+1){
      phi -= SensibilidadY;
      vp(0,-0.1, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }*/

    /*if (Pix > Pfx + 1) {
      theta += SensibilidadX;
      vp(0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }
        
    if (Pfx > Pix + 1) {
      theta -= SensibilidadX;
      vp(-0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }*/
  }
}

function noDraw() {
  flag = false;
}

canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);