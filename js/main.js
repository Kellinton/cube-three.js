// Cena
var scene = new THREE.Scene();

// Câmera
var camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);

// Renderer (desenhar na tela)
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criação Cubo
var geometry = new THREE.BoxGeometry(1, 1, 1); // forma (quadrado) 1 = Largura 1= altura 1= profundidade
var material = new THREE.MeshBasicMaterial({color: 0x0000ff}); // Material, cor 
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posicionar a câmera em relação ao cubo
camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);

    // Rotacionar
    cube.rotation.x += 0.1;
    // Desenhar
    renderer.render(scene, camera);
}

animate();