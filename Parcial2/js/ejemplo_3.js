import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
75,                               // FOV: 75° es un valor natural
  window.innerWidth / window.innerHeight, // relación de aspecto
  0.1,                              // plano cercano (near)
  1000                              // plano lejano (far)
);
camera.position.set(0, 2, 5); // posición X, Y, Z en el espacio 3D
camera.lookAt(0, 0, 0);  

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


const geometry_cubo= new THREE.BoxGeometry(1, 1, 1); 



const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const matBasico = new THREE.MeshBasicMaterial({
  color: '#ff6b35',
  wireframe: false   // true → muestra solo las aristas
});
const matStandard = new THREE.MeshStandardMaterial({
  color:     '#29c55dff', // color base
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

