import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

(function initModelViewer() {
  const project = window.currentProject;
  const modulesEl = document.getElementById("detailModules");
  const modelSource = project && project.model3d && project.model3d.src;

  if (!modelSource || !modulesEl) return;

  const section = document.createElement("section");
  section.className = "detail-module model-viewer-section";

  const heading = document.createElement("h2");
  heading.textContent = "INTERACTIVE 3D MODEL / 交互式模型";
  section.appendChild(heading);

  const viewer = document.createElement("div");
  viewer.className = "model-viewer";
  viewer.setAttribute("aria-label", "交互式 3D 模型查看器");

  const loading = document.createElement("p");
  loading.className = "model-viewer-loading";
  loading.textContent = "模型加载中…";
  viewer.appendChild(loading);

  const error = document.createElement("p");
  error.className = "model-viewer-error";
  error.textContent = "模型加载失败，请检查模型路径或文件格式。";
  error.hidden = true;
  viewer.appendChild(error);

  const toolbar = document.createElement("div");
  toolbar.className = "model-viewer-toolbar";
  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "button secondary model-viewer-reset";
  resetButton.textContent = "重置视角";
  resetButton.disabled = true;
  toolbar.appendChild(resetButton);
  viewer.appendChild(toolbar);

  section.appendChild(viewer);
  modulesEl.insertBefore(section, modulesEl.firstChild);

  let scene;
  let camera;
  let renderer;
  let controls;

  const showError = () => {
    loading.hidden = true;
    error.hidden = false;
  };

  const setModel = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1 / maxDimension;

    object.scale.setScalar(scale);
    object.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    scene.add(object);

    loading.hidden = true;
    error.hidden = true;
    resetButton.disabled = false;

    const renderFrame = () => {
      requestAnimationFrame(renderFrame);
      controls.update();
      renderer.render(scene, camera);
    };

    renderFrame();
  };

  const initializeViewer = () => {
    const width = viewer.clientWidth || 1;
    const height = viewer.clientHeight || 1;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0.8, 0.7, 1.6);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    viewer.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.screenSpacePanning = true;
    controls.minDistance = 0.2;
    controls.maxDistance = 8;
    controls.target.set(0, 0, 0);
    controls.update();
    controls.saveState();
    resetButton.addEventListener("click", () => controls.reset());

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x1b1b2f, 1.1);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    const rimLight = new THREE.DirectionalLight(0xff3cac, 0.35);
    const fillLight = new THREE.DirectionalLight(0x45f3e2, 0.22);

    keyLight.position.set(2, 3, 4);
    rimLight.position.set(-2, -1, -2);
    fillLight.position.set(2, -2, 1);
    scene.add(hemisphereLight, keyLight, rimLight, fillLight);

    const fileExtension = modelSource.split(".").pop().toLowerCase();
    if (fileExtension === "fbx") {
      const loader = new FBXLoader();
      loader.load(modelSource, setModel, undefined, showError);
    } else if (fileExtension === "glb" || fileExtension === "gltf") {
      const loader = new GLTFLoader();
      loader.load(modelSource, (gltf) => setModel(gltf.scene), undefined, showError);
    } else {
      showError();
    }
  };

  const resizeViewer = () => {
    if (!renderer || !camera) return;
    const width = viewer.clientWidth || 1;
    const height = viewer.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  new ResizeObserver(resizeViewer).observe(viewer);
  initializeViewer();
})();
