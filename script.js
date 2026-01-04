const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Three.js Hero Background
const canvas = document.getElementById("three-canvas");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / 300,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});

renderer.setSize(window.innerWidth, 300);
renderer.setPixelRatio(window.devicePixelRatio);

const geometry = new THREE.IcosahedronGeometry(2, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x38bdf8,
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.003;
  mesh.rotation.y += 0.004;
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, 300);
  camera.aspect = window.innerWidth / 300;
  camera.updateProjectionMatrix();
});
