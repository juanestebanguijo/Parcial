import * as THREE from 'three';

const contenedor = document.getElementById('mi-contenedor-3d');

// Obtener dimensiones del contenedor (no de la ventana)
const W = contenedor.clientWidth;
const H = contenedor.clientHeight;

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
camera.position.set(0, 0, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(W, H);        // tamaño del contenedor, NO de window
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Añadir el canvas generado al div contenedor
contenedor.appendChild(renderer.domElement); // ← key line



const geometry_cubo= new THREE.BoxGeometry(1, 1, 1); 



const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const matBasico = new THREE.MeshBasicMaterial({
  color: '0xff0000',
  wireframe: false   // true → muestra solo las aristas
});
const matStandard = new THREE.MeshStandardMaterial({
  color:     '0xff0000', // color base
  metalness: 0.3,       // 0 = plástico, 1 = metal puro
  roughness: 0.4        // 0 = espejo, 1 = completamente rugoso
});

const es1 = new THREE.Mesh( geometry_cubo, matStandard);

scene.add( es1 );


const luzAmbiente = new THREE.AmbientLight('#ffffff', 0.5); // color, intensidad
scene.add(luzAmbiente);

// DirectionalLight: como el sol, rayos paralelos, produce sombras
const luzDireccional = new THREE.DirectionalLight('#ffffff', 1.5);
luzDireccional.position.set(5, 10, 7); // posición de la fuente de luz
scene.add(luzDireccional);

// PointLight: como una bombilla, emite en todas las direcciones
const luzPunto = new THREE.PointLight('#ff6b35', 2, 10); // color, intensidad, distancia
luzPunto.position.set(-3, 2, 2);
scene.add(luzPunto);

es1.position.x = 0

camera.position.z = 5;



function animate( time ) {

  es1.rotation.x = time / 2000;
  es1.rotation.y = time / 1000;

  renderer.render( scene, camera );

}

