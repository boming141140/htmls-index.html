const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);
hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);
let loader = new THREE.GLTFLoader();
loader.load('Model/myHome.gltf',function(gltf){
	scene.add(gltf.scene);
	renderer.render(scene,camera);
});

