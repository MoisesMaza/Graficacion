//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
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
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
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
    var af = 10;
    Rota3D.initRotate(obj.w[130], obj.w[131], af * Math.PI / 180);
    for (var i = 132; i <= 133; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
// Abrir puerta 1
function pza1IzqFunc() {
    var af = -10;
    Rota3D.initRotate(obj.w[130], obj.w[131], af * Math.PI / 180);
    for (var i = 132; i <= 133; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
// Abrir puerta 2
function pza12DerFunc() {
    var af = 10;
    Rota3D.initRotate(obj.w[151], obj.w[152], af * Math.PI / 180);
    for (var i = 150; i <= 153; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
//Cerrar puerta 2
function pza12IzqFunc() {
    var af = -10;
    Rota3D.initRotate(obj.w[151], obj.w[152], af * Math.PI / 180);
    for (var i = 150; i <= 153; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
//Abrir cajon 1
function trayecto() {
    var tr = 1;
    for (var i = 230; i <= 231; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = 1;
    for (var i = 232; i <= 233; i++) {
        obj.w[i].z = obj.w[i].z + tr2;
    }
    cv.setObj(obj);
    cv.paint();
    var tr3 = 1;
    for (var i = 234; i <= 235; i++) {
        obj.w[i].z = obj.w[i].z + tr3;
    }
    cv.setObj(obj);
    cv.paint();
    var tr4 = 1;
    for (var i = 236; i <= 237; i++) {
        obj.w[i].z = obj.w[i].z + tr4;
    }
    cv.setObj(obj);
    cv.paint();
}
//Cerrar cajon 1
function trayectocerrar() {
    var tr = -1;
    for (var i = 230; i <= 231; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = -1;
    for (var i = 232; i <= 233; i++) {
        obj.w[i].z = obj.w[i].z + tr2;
    }
    cv.setObj(obj);
    cv.paint();
    var tr3 = -1;
    for (var i = 234; i <= 235; i++) {
        obj.w[i].z = obj.w[i].z + tr3;
    }
    cv.setObj(obj);
    cv.paint();
    var tr4 = -1;
    for (var i = 236; i <= 237; i++) {
        obj.w[i].z = obj.w[i].z + tr4;
    }
    cv.setObj(obj);
    cv.paint();
}
//Abrir cajon 2
function trayecto2() {
    var tr = 1;
    for (var i = 260; i <= 261; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = 1;
    for (var i = 262; i <= 263; i++) {
        obj.w[i].z = obj.w[i].z + tr2;
    }
    cv.setObj(obj);
    cv.paint();
    var tr3 = 1;
    for (var i = 264; i <= 265; i++) {
        obj.w[i].z = obj.w[i].z + tr3;
    }
    cv.setObj(obj);
    cv.paint();
    var tr4 = 1;
    for (var i = 266; i <= 267; i++) {
        obj.w[i].z = obj.w[i].z + tr4;
    }
    cv.setObj(obj);
    cv.paint();
}
//Cerrar cajon 2
function trayectocerrar2() {
    var tr = -1;
    for (var i = 260; i <= 261; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = -1;
    for (var i = 262; i <= 263; i++) {
        obj.w[i].z = obj.w[i].z + tr2;
    }
    cv.setObj(obj);
    cv.paint();
    var tr3 = -1;
    for (var i = 264; i <= 265; i++) {
        obj.w[i].z = obj.w[i].z + tr3;
    }
    cv.setObj(obj);
    cv.paint();
    var tr4 = -1;
    for (var i = 266; i <= 267; i++) {
        obj.w[i].z = obj.w[i].z + tr4;
    }
    cv.setObj(obj);
    cv.paint();
}
//Abrir cajon 3
function trayecto3() {
    var tr = 1;
    for (var i = 290; i <= 291; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = 1;
    for (var i = 292; i <= 293; i++) {
        obj.w[i].z = obj.w[i].z + tr2;
    }
    cv.setObj(obj);
    cv.paint();
    var tr3 = 1;
    for (var i = 294; i <= 295; i++) {
        obj.w[i].z = obj.w[i].z + tr3;
    }
    cv.setObj(obj);
    cv.paint();
    var tr4 = 1;
    for (var i = 296; i <= 297; i++) {
        obj.w[i].z = obj.w[i].z + tr4;
    }
    cv.setObj(obj);
    cv.paint();
}
//Cerrar cajon 3
function trayectocerrar3() {
    var tr = -1;
    for (var i = 290; i <= 291; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    cv.setObj(obj);
    cv.paint();
    var tr2 = -1;
    for (var i = 292; i <= 293; i++) {
        obj.w[i].z = obj.w[i].z + tr2;
    }
    cv.setObj(obj);
    cv.paint();
    var tr3 = -1;
    for (var i = 294; i <= 295; i++) {
        obj.w[i].z = obj.w[i].z + tr3;
    }
    cv.setObj(obj);
    cv.paint();
    var tr4 = -1;
    for (var i = 296; i <= 297; i++) {
        obj.w[i].z = obj.w[i].z + tr4;
    }
    cv.setObj(obj);
    cv.paint();
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
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
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
