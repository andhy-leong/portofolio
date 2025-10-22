document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialisation 
    const container = document.getElementById('footer-3d-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 2. Ajout de lumière 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);
    
    // 3.  Chargement du modèle 3D 
    const loader = new THREE.GLTFLoader();

    loader.load(
        'ressources/ordinateur/scene.gltf',
        function (gltf) {
            const model = gltf.scene;

            model.scale.set(5, 5, 5);
            model.position.y = -0.5;

            scene.add(model);
        },

        undefined,
        function (error) {
            console.error('An error happened while loading the model:', error);
        }
    );

    // 4. Position de la caméra
    camera.position.z = 4;

    // 5. Ajout des contrôles 
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // 6. Boucle d'animation
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    // 7. Gestion du redimensionnement
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    // On lance l'animation
    animate();
});