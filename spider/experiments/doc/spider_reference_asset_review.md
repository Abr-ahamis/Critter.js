<!DOCTYPE html>
<!-- Reference mapping from the supplied i/readme.md:
     hi1.png = overhead body proportions/pattern; hi2.jpeg = front face, eyes and hair;
     hi3.png = side silhouette and articulated leg profile. -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spider Asset Review — Reference-Based 3D Model</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Three.js & OrbitControls -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,400&family=Inter:wght@300;400;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #090a0f;
            color: #e2e8f0;
            user-select: none;
            overflow: hidden;
        }

        .code-font {
            font-family: 'JetBrains Mono', monospace;
        }

        /* Custom Scrollbars */
        ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }
        ::-webkit-scrollbar-track {
            background: #0f1117;
        }
        ::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 2px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #e65100;
        }

        /* Glassmorphism Panel */
        .hud-panel {
            background: rgba(13, 16, 23, 0.85);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }

        .hud-border {
            border-color: rgba(255, 255, 255, 0.1);
        }

        /* Interactive Dial */
        .dial-container {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 2px solid #e65100;
            position: relative;
            background: radial-gradient(circle, rgba(230,81,0,0.15) 0%, rgba(15,23,42,0.6) 70%);
            cursor: grab;
        }
        .dial-container:active {
            cursor: grabbing;
        }
        .dial-hand {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 2px;
            background: #ff7d00;
            transform-origin: 0% 50%;
            box-shadow: 0 0 8px #ff7d00;
        }

        #canvas-container { min-height: 0; flex: 1 1 auto; overflow: hidden; }
        #canvas-container > canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
        #macro-canvas-container { min-height: 0; flex: 1 1 auto; }
        #macro-canvas-container canvas { display: block; width: 100%; height: 100%; }
        .dial-container.is-dragging { cursor: grabbing; }
        input[type="range"] { accent-color: #f97316; }
        button:focus-visible, input:focus-visible { outline: 2px solid #fb923c; outline-offset: 2px; }
        @media (max-width: 900px) {
            header { padding-left: 0.85rem !important; padding-right: 0.85rem !important; }
            header > div:last-child { gap: 0.65rem !important; }
            header > div:last-child > div:nth-child(3) { display: none; }
            #canvas-container > div:nth-of-type(1) { width: 15rem !important; height: 15rem !important; top: 0.75rem !important; right: 0.75rem !important; }
            #macro-canvas-container { width: auto !important; height: auto !important; right: auto !important; top: auto !important; }
        }
        @media (max-width: 680px) {
            body { overflow: auto; }
            #canvas-container { min-height: 760px; }
            header { align-items: flex-start !important; gap: 0.5rem; flex-direction: column; }
            header > div:first-child { flex-wrap: wrap; }
            header > div:last-child { width: 100%; justify-content: space-between; }
            #canvas-container > div:nth-of-type(1) { width: 10.75rem !important; height: 10.75rem !important; top: 0.75rem !important; right: 0.75rem !important; }
            #macro-canvas-container { width: auto !important; height: auto !important; right: auto !important; top: auto !important; }
            #canvas-container > div:nth-of-type(1) > div:first-child { font-size: 8px !important; }
            #canvas-container > div:nth-of-type(1) > div:last-child { font-size: 8px !important; }
            #canvas-container > div:nth-of-type(2) { top: 0.75rem !important; left: 0.75rem !important; width: 10.75rem !important; }
            #canvas-container > div:nth-of-type(3) { width: 17rem !important; left: 0.75rem !important; bottom: 7.75rem !important; }
            #canvas-container > div:nth-of-type(4) { left: 50% !important; bottom: 0.75rem !important; transform: translateX(-50%) !important; padding: 0.65rem 0.75rem !important; gap: 0.55rem !important; width: max-content; max-width: calc(100% - 1.5rem); }
            #canvas-container > div:nth-of-type(4) #angle-dial { width: 52px; height: 52px; flex-shrink: 0; }
            #canvas-container > div:nth-of-type(4) #btn-reset-cam { font-size: 10px; padding: 0.35rem 0.45rem; }
        }

        input[type="color"] {
            width: 30px;
            height: 21px;
            padding: 1px;
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 5px;
            background: #11151d;
            cursor: pointer;
            flex-shrink: 0;
        }
        #reset-colors:hover { border-color: rgba(251,146,60,.55); }
    </style>
</head>
<body class="w-screen h-screen flex flex-col relative">

    <!-- TOP HEADER / TITLE BAR -->
    <header class="hud-panel z-20 px-6 py-3 flex items-center justify-between border-b hud-border">
        <div class="flex items-center space-x-3">
            <div class="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
            <span class="text-xs font-bold tracking-widest text-orange-500 uppercase code-font">Reference Spider Asset Review</span>
            <span class="text-slate-600">|</span>
            <h1 class="text-sm font-semibold tracking-wide text-slate-100 uppercase">
                Reference-Based Spider <span class="text-xs text-slate-400 normal-case font-normal">(custom procedural model)</span>
            </h1>
        </div>
        
        <div class="flex items-center space-x-6 text-xs code-font text-slate-400">
            <div>STATUS: <span class="text-emerald-400">REFERENCE MODEL · PREVIEW</span></div>
            <div>FPS: <span id="fps-counter" class="text-orange-400">60</span></div>
            <div>RENDER ENGINE: <span class="text-slate-200">Three.js WebGL/PBR</span></div>
        </div>
    </header>

    <!-- MAIN 3D CANVAS VIEWPORT CONTAINER -->
    <div id="canvas-container" class="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <!-- 3D Canvas inserted dynamically -->

        <!-- OCULAR CLUSTER INSET MACRO VIEW (TOP RIGHT) -->
        <div class="absolute top-4 right-4 z-10 w-64 h-64 hud-panel rounded-xl overflow-hidden border border-orange-500/30 flex flex-col shadow-2xl">
            <div class="px-3 py-1.5 bg-slate-900/90 text-slate-300 text-[11px] font-bold code-font flex justify-between items-center border-b border-white/10">
                <span><i class="fa-solid fa-eye text-orange-400 mr-1.5"></i>FRONT FACE · 8 EYES</span>
                <span class="text-[9px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded border border-orange-500/30">MACRO 4.5X</span>
            </div>
            <div id="macro-canvas-container" class="w-full relative bg-slate-950">
                <!-- Secondary Canvas overlay for eyes -->
            </div>
            <div class="px-2 py-1 bg-slate-900/80 text-[10px] code-font text-slate-400 flex justify-between border-t border-white/5">
                <span>8 ocular points</span>
                <span>dark glossy eyes</span>
            </div>
        </div>

        <!-- MATERIAL PALETTE + MODEL VISIBILITY -->
        <div class="absolute top-4 left-4 z-10 hud-panel p-3 rounded-xl flex flex-col space-y-2 border border-white/10 w-52">
            <span class="text-[10px] font-bold code-font text-slate-400 px-1 pt-1 uppercase tracking-wider">Surface Palette</span>
            <div class="space-y-2">
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="body-color">
                    <span>Abdomen base</span><input id="body-color" type="color" value="#292b25" aria-label="Abdomen base color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="shell-color">
                    <span>Head / shell</span><input id="shell-color" type="color" value="#474038" aria-label="Head and shell color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="legs-color">
                    <span>Legs</span><input id="legs-color" type="color" value="#17191a" aria-label="Leg color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="marking-color">
                    <span>Gold markings</span><input id="marking-color" type="color" value="#a79b52" aria-label="Gold marking color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="stripe-color">
                    <span>Blue-gray bands</span><input id="stripe-color" type="color" value="#58656b" aria-label="Blue gray stripe color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="hair-color">
                    <span>Hair / setae</span><input id="hair-color" type="color" value="#39332a" aria-label="Hair color">
                </label>
            </div>
            <button id="reset-colors" class="mt-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 border border-white/5 text-[10px] text-slate-300 text-left">
                <i class="fa-solid fa-rotate-left text-orange-400 mr-1.5"></i>Reset surface colors
            </button>

            <hr class="border-white/10 my-1">
            <div class="px-1 py-1 space-y-2">
                <div class="flex items-center justify-between text-xs text-slate-300">
                    <span class="text-[11px]"><i class="fa-solid fa-vector-square text-cyan-400 mr-1.5"></i>Wireframe</span>
                    <input type="checkbox" id="wireframe-toggle" class="accent-orange-500 cursor-pointer">
                </div>
                <div class="flex items-center justify-between text-xs text-slate-300">
                    <span class="text-[11px]"><i class="fa-solid fa-spider text-orange-400 mr-1.5"></i>Body hairs</span>
                    <input type="checkbox" id="fur-toggle" checked class="accent-orange-500 cursor-pointer">
                </div>
            </div>

            <hr class="border-white/10 my-1">
            <div class="px-1 py-1 space-y-2">
                <span class="text-[10px] font-bold code-font text-slate-400 uppercase tracking-wider">Studio Light Rig</span>
                <label class="flex justify-between items-center text-[10px] text-slate-300" for="key-light-control">Key light <span id="key-light-value" class="code-font text-orange-300">2.0</span></label>
                <input id="key-light-control" type="range" min="0.3" max="3.5" step="0.1" value="2.0" class="w-full h-1 bg-slate-700 rounded-lg cursor-pointer" aria-label="Key light intensity">
                <label class="flex justify-between items-center text-[10px] text-slate-300" for="fill-light-control">Warm fill <span id="fill-light-value" class="code-font text-orange-300">0.9</span></label>
                <input id="fill-light-control" type="range" min="0" max="2.5" step="0.1" value="0.9" class="w-full h-1 bg-slate-700 rounded-lg cursor-pointer" aria-label="Warm fill light intensity">
                <label class="flex justify-between items-center text-[10px] text-slate-300" for="rim-light-control">Cool rim <span id="rim-light-value" class="code-font text-orange-300">1.2</span></label>
                <input id="rim-light-control" type="range" min="0" max="2.5" step="0.1" value="1.2" class="w-full h-1 bg-slate-700 rounded-lg cursor-pointer" aria-label="Cool rim light intensity">
            </div>
        </div>

        <!-- LEFT SIDEBAR: TECHNICAL ASSET SPECS -->
        <div class="absolute bottom-6 left-4 z-10 hud-panel p-4 rounded-xl border border-white/10 w-72 space-y-3">
            <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <span class="text-xs font-bold text-orange-400 code-font uppercase tracking-wider"><i class="fa-solid fa-circle-info mr-1.5"></i>Asset Specifications</span>
                <span class="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">LOD 0</span>
            </div>
            <div class="space-y-1.5 text-xs code-font">
                <div class="flex justify-between text-slate-400"><span>Target Poly Budget:</span><span class="text-slate-100 font-bold">165k Tris</span></div>
                <div class="flex justify-between text-slate-400"><span>Setae Instances:</span><span id="setae-count" class="text-orange-400 font-bold">14,800</span></div>
                <div class="flex justify-between text-slate-400"><span>Texture Target:</span><span class="text-slate-100 font-bold">4K PBR</span></div>
                <div class="flex justify-between text-slate-400"><span>Anatomy:</span><span class="text-slate-100 font-bold">8 Legs + 2 Palps</span></div>
                <div class="flex justify-between text-slate-400"><span>Surface System:</span><span class="text-emerald-400 font-bold">Dark shell + markings</span></div>
            </div>

            <!-- ANATOMY HIGHLIGHTS SELECTOR -->
            <div class="pt-2 border-t border-white/10 space-y-2">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Focus Hotspots</span>
                <div class="grid grid-cols-2 gap-1.5 text-xs">
                    <button id="cam-focus-carapace" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[11px] transition text-left border border-white/5"><i class="fa-solid fa-crosshairs text-orange-500 mr-1"></i>Carapace</button>
                    <button id="cam-focus-chelicerae" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[11px] transition text-left border border-white/5"><i class="fa-solid fa-crosshairs text-orange-500 mr-1"></i>Face / Eyes</button>
                    <button id="cam-focus-patella" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[11px] transition text-left border border-white/5"><i class="fa-solid fa-crosshairs text-orange-500 mr-1"></i>Leg Bands</button>
                    <button id="cam-focus-abdomen" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[11px] transition text-left border border-white/5"><i class="fa-solid fa-crosshairs text-orange-500 mr-1"></i>Abdomen / Back</button>
                </div>
                <div class="pt-2 border-t border-white/10 space-y-1.5">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Camera Presets</span>
                    <div class="grid grid-cols-3 gap-1.5">
                        <button id="cam-preset-front" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[10px] transition border border-white/5">Front</button>
                        <button id="cam-preset-side" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[10px] transition border border-white/5">Side</button>
                        <button id="cam-preset-top" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[10px] transition border border-white/5">Top</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- BOTTOM CENTER: TURNTABLE CONTROLS & ANGLE DIAL -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hud-panel px-6 py-3 rounded-2xl border border-white/10 flex items-center space-x-6 shadow-2xl">
            <!-- Turntable Play/Pause -->
            <button id="btn-turntable-toggle" class="w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-900/40 transition">
                <i class="fa-solid fa-pause text-sm" id="turntable-icon"></i>
            </button>

            <!-- Angle Dial -->
            <div class="flex items-center space-x-3">
                <div id="angle-dial" class="dial-container flex items-center justify-center" role="slider" aria-label="Turntable angle dial" tabindex="0">
                    <div id="dial-hand" class="dial-hand"></div>
                    <span class="text-[10px] font-bold code-font text-orange-400 z-10 pointer-events-none" id="angle-display">0°</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-slate-200 uppercase tracking-wider">Turntable Rig</span>
                    <span class="text-[10px] code-font text-slate-400">Speed: <span id="turntable-speed-label" class="text-slate-200">1.0x</span></span>
                    <input type="range" id="turntable-speed" min="0" max="3" step="0.2" value="1" class="w-24 accent-orange-500 mt-1 h-1 bg-slate-700 rounded-lg cursor-pointer">
                </div>
            </div>

            <div class="h-8 w-px bg-white/10"></div>

            <!-- Reset Camera -->
            <button id="btn-reset-cam" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold border border-white/5 transition flex items-center">
                <i class="fa-solid fa-arrows-rotate mr-1.5 text-orange-400"></i>Reset View
            </button>
        </div>
    </div>

    <!-- THREE.JS APPLICATION CODE -->
    <script>
// Three.js CG creature asset-review preview — procedural, single-file scene.
(() => {
    'use strict';

    let scene, camera, renderer, controls;
    let macroScene, macroCamera, macroRenderer;
    let spiderGroup, abdomenMesh, eyeClusterGroup;
    let keyLight, fillLight, rimLight;
    let isTurntableActive = true;
    let turntableSpeed = 0.32;
    let wireframeEnabled = false;
    let furVisible = true;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTime = 0;
    let setaeInstanceCount = 0;
    let baseMaterials = [];
    const clock = new THREE.Clock();

    // Colors are deliberately charcoal/black first, with restrained markings sampled
    // from the reference views: muted olive-gold abdomen bars, slate-blue bands,
    // warm brown facial hairs, and glossy nearly-black eyes.
    const PALETTE = {
        abdomen: 0x292b25,
        abdomenBandGold: 0xa79b52,
        abdomenBandBlue: 0x58656b,
        abdomenBandEdge: 0x171b1a,
        carapace: 0x474038,
        face: 0x494034,
        leg: 0x17191a,
        joint: 0x2d2c28,
        legBandGold: 0xd2a83f,
        legBandWarm: 0xb77829,
        fang: 0x08090a,
        eyes: 0x030405,
        setaeDark: 0x211f1a,
        setaeBrown: 0x594a38,
        setaeGold: 0x8e7741
    };

    let materialsList = {};
    let textures = {};
    const UP = new THREE.Vector3(0, 1, 0);

    window.addEventListener('load', init);

    function init() {
        const mainContainer = document.getElementById('canvas-container');
        const macroContainer = document.getElementById('macro-canvas-container');
        if (!window.THREE || !THREE.OrbitControls) {
            showFatal('Three.js or OrbitControls failed to load. Check your internet connection and reload this page.');
            return;
        }

        try {
            initMainScene(mainContainer);
            initMacroScene(macroContainer);
            textures = generateTextures();
            createMaterials();
            createReferenceSpiderModel();
            rememberBaseMaterials();
            setupUIHandlers();
            updateWireframe();
            updateSetaeReadout();
            animate();
        } catch (error) {
            console.error('Asset preview initialization failed:', error);
            showFatal('The 3D preview could not start. Open the browser console for the error details.');
        }
    }

    function showFatal(message) {
        const warning = document.createElement('div');
        warning.className = 'absolute inset-x-4 bottom-4 z-50 rounded-lg border border-red-500/40 bg-slate-950/95 p-4 text-sm text-red-200';
        warning.textContent = message;
        document.getElementById('canvas-container')?.appendChild(warning);
    }

    function initMainScene(container) {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x090a0f);
        scene.fog = new THREE.FogExp2(0x090a0f, 0.022);

        camera = new THREE.PerspectiveCamera(42, container.clientWidth / Math.max(container.clientHeight, 1), 0.1, 100);
        camera.position.set(5.2, 4.0, 7.3);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.12;
        renderer.domElement.setAttribute('aria-label', 'Interactive 3D dark spider model based on three reference views');
        container.prepend(renderer.domElement);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.055;
        controls.minDistance = 3;
        controls.maxDistance = 19;
        controls.maxPolarAngle = Math.PI * 0.495;
        controls.target.set(0, 0.48, -0.02);
        controls.update();

        scene.add(new THREE.HemisphereLight(0xabb8d1, 0x17100c, 1.15));
        scene.add(new THREE.AmbientLight(0xffffff, 0.26));

        keyLight = new THREE.DirectionalLight(0xffe4c4, 2.0);
        keyLight.position.set(4.5, 8, 6);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(2048, 2048);
        keyLight.shadow.camera.near = 0.5;
        keyLight.shadow.camera.far = 25;
        keyLight.shadow.camera.left = -7;
        keyLight.shadow.camera.right = 7;
        keyLight.shadow.camera.top = 7;
        keyLight.shadow.camera.bottom = -7;
        keyLight.shadow.bias = -0.00018;
        scene.add(keyLight);

        fillLight = new THREE.DirectionalLight(0xff6a27, 0.9);
        fillLight.position.set(-6, 3.4, 2.8);
        scene.add(fillLight);

        rimLight = new THREE.DirectionalLight(0x638cff, 1.15);
        rimLight.position.set(-1.5, 5.5, -6);
        scene.add(rimLight);

        const grid = new THREE.GridHelper(18, 36, 0x873d1c, 0x202a39);
        grid.position.y = -0.155;
        scene.add(grid);

        const stage = new THREE.Mesh(
            new THREE.CylinderGeometry(3.8, 4.0, 0.18, 96),
            new THREE.MeshStandardMaterial({ color: 0x10151d, roughness: 0.72, metalness: 0.18 })
        );
        stage.position.y = -0.085;
        stage.receiveShadow = true;
        stage.castShadow = true;
        scene.add(stage);

        const stageRing = new THREE.Mesh(
            new THREE.TorusGeometry(3.68, 0.012, 8, 128),
            new THREE.MeshBasicMaterial({ color: 0x7f3a1c })
        );
        stageRing.rotation.x = Math.PI / 2;
        stageRing.position.y = 0.009;
        scene.add(stageRing);

        window.addEventListener('resize', onWindowResize);
        renderer.domElement.addEventListener('webglcontextlost', event => {
            event.preventDefault();
            showFatal('The WebGL context was lost. Try reloading the page or lowering browser GPU load.');
        });
    }

    function initMacroScene(container) {
        macroScene = new THREE.Scene();
        macroScene.background = new THREE.Color(0x07090e);
        macroCamera = new THREE.PerspectiveCamera(27, container.clientWidth / Math.max(container.clientHeight, 1), 0.01, 10);
        macroCamera.position.set(0, 0.018, 1.12);
        macroCamera.lookAt(0, 0.015, 0.03);

        macroRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
        macroRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        macroRenderer.setSize(container.clientWidth, container.clientHeight);
        macroRenderer.outputEncoding = THREE.sRGBEncoding;
        macroRenderer.toneMapping = THREE.ACESFilmicToneMapping;
        macroRenderer.toneMappingExposure = 1.25;
        container.appendChild(macroRenderer.domElement);
        macroScene.add(new THREE.HemisphereLight(0xc8d6f3, 0x1b0e08, 1.55));
        const macroKey = new THREE.PointLight(0xffffff, 2.7, 5);
        macroKey.position.set(0.4, 0.55, 1.7);
        macroScene.add(macroKey);
        const macroWarm = new THREE.PointLight(0xff6c2d, 1.25, 4);
        macroWarm.position.set(-0.8, -0.2, 0.9);
        macroScene.add(macroWarm);
    }


function generateTextures() {
    // A pale, lightly mottled map lets the user tint the shell without tinting
    // away the fine surface noise.
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#d2d0c4';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 10500; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const r = 0.35 + Math.random() * 2.2;
        const dark = Math.random() > 0.34;
        ctx.fillStyle = dark
            ? `rgba(23,22,19,${0.025 + Math.random() * 0.085})`
            : `rgba(255,247,215,${0.025 + Math.random() * 0.07})`;
        ctx.beginPath();
        ctx.ellipse(x, y, r * (0.8 + Math.random() * 1.8), r, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    }
    const abdomenMap = new THREE.CanvasTexture(canvas);
    abdomenMap.encoding = THREE.sRGBEncoding;
    abdomenMap.wrapS = abdomenMap.wrapT = THREE.RepeatWrapping;
    abdomenMap.repeat.set(1.25, 1.25);

    const normalCanvas = document.createElement('canvas');
    normalCanvas.width = normalCanvas.height = 512;
    const nctx = normalCanvas.getContext('2d');
    nctx.fillStyle = 'rgb(128,128,255)';
    nctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 7200; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const r = 0.35 + Math.random() * 1.8;
        const shift = Math.random() > 0.5 ? 17 : -17;
        nctx.fillStyle = `rgb(${Math.max(0, Math.min(255, 128 + shift))},${Math.max(0, Math.min(255, 128 - shift / 2))},255)`;
        nctx.beginPath();
        nctx.arc(x, y, r, 0, Math.PI * 2);
        nctx.fill();
    }
    const bumpNormalMap = new THREE.CanvasTexture(normalCanvas);
    bumpNormalMap.wrapS = bumpNormalMap.wrapT = THREE.RepeatWrapping;
    bumpNormalMap.repeat.set(3, 3);
    return { abdomenMap, bumpNormalMap };
}


function createMaterials() {
    materialsList.abdomen = new THREE.MeshStandardMaterial({
        color: PALETTE.abdomen, map: textures.abdomenMap, normalMap: textures.bumpNormalMap,
        normalScale: new THREE.Vector2(0.38, 0.38), roughness: 0.9, metalness: 0
    });
    materialsList.abdomenBandGold = new THREE.MeshStandardMaterial({
        color: PALETTE.abdomenBandGold, roughness: 0.82, metalness: 0.01, side: THREE.DoubleSide
    });
    materialsList.abdomenBandBlue = new THREE.MeshStandardMaterial({
        color: PALETTE.abdomenBandBlue, roughness: 0.84, metalness: 0.01, side: THREE.DoubleSide
    });
    materialsList.abdomenBandEdge = new THREE.MeshStandardMaterial({
        color: PALETTE.abdomenBandEdge, roughness: 0.9, side: THREE.DoubleSide
    });
    materialsList.carapace = new THREE.MeshStandardMaterial({
        color: PALETTE.carapace, map: textures.abdomenMap, normalMap: textures.bumpNormalMap,
        normalScale: new THREE.Vector2(0.27, 0.27), roughness: 0.76, metalness: 0
    });
    materialsList.face = new THREE.MeshStandardMaterial({
        color: PALETTE.face, map: textures.abdomenMap, normalMap: textures.bumpNormalMap,
        normalScale: new THREE.Vector2(0.44, 0.44), roughness: 0.94, metalness: 0
    });
    materialsList.legDark = new THREE.MeshStandardMaterial({
        color: PALETTE.leg, normalMap: textures.bumpNormalMap,
        normalScale: new THREE.Vector2(0.18, 0.18), roughness: 0.78, metalness: 0.015
    });
    materialsList.joint = new THREE.MeshStandardMaterial({
        color: PALETTE.joint, roughness: 0.86, metalness: 0
    });
    materialsList.legBandGold = new THREE.MeshStandardMaterial({
        color: PALETTE.legBandGold, roughness: 0.7, metalness: 0
    });
    materialsList.legBandWarm = new THREE.MeshStandardMaterial({
        color: PALETTE.legBandWarm, roughness: 0.76, metalness: 0
    });
    materialsList.eyes = new THREE.MeshPhysicalMaterial({
        color: PALETTE.eyes, roughness: 0.055, metalness: 0.1, clearcoat: 1,
        clearcoatRoughness: 0.025
    });
    materialsList.fang = new THREE.MeshStandardMaterial({
        color: PALETTE.fang, roughness: 0.24, metalness: 0.035
    });
    materialsList.setaeDark = new THREE.MeshStandardMaterial({
        color: PALETTE.setaeDark, roughness: 0.92, metalness: 0
    });
    materialsList.setaeBrown = new THREE.MeshStandardMaterial({
        color: PALETTE.setaeBrown, roughness: 0.9, metalness: 0
    });
    materialsList.setaeGold = new THREE.MeshStandardMaterial({
        color: PALETTE.setaeGold, roughness: 0.9, metalness: 0
    });
}


function createReferenceSpiderModel() {
    spiderGroup = new THREE.Group();
    spiderGroup.name = 'Reference-matched dark spider';
    scene.add(spiderGroup);

    // Abdomen: long, narrow dorsal oval (the proportions in hi1.png).
    const abdomenGeo = new THREE.SphereGeometry(1, 56, 40);
    abdomenGeo.scale(0.64, 0.47, 1.16);
    abdomenMesh = new THREE.Mesh(abdomenGeo, materialsList.abdomen);
    abdomenMesh.name = 'Long oval abdomen';
    abdomenMesh.position.set(0, 0.55, -1.20);
    abdomenMesh.castShadow = abdomenMesh.receiveShadow = true;
    spiderGroup.add(abdomenMesh);
    generateSetaeOnMesh(abdomenMesh, 5600, 0.073, materialsList.setaeDark);
    generateSetaeOnMesh(abdomenMesh, 2200, 0.082, materialsList.setaeBrown,
        (normal, p) => Math.abs(normal.x) > 0.42 || normal.y > 0.45 || p.z < -0.15);

    // Five dorsal bars mimic the top-view markings, but stay muted against the charcoal body.
    const dorsalBars = [
        { z: 0.68, width: 0.135, mat: 'gold', phase: 0.2 },
        { z: 0.29, width: 0.16, mat: 'blue', phase: 1.1 },
        { z: -0.13, width: 0.17, mat: 'gold', phase: 2.0 },
        { z: -0.55, width: 0.16, mat: 'blue', phase: 2.7 },
        { z: -0.84, width: 0.115, mat: 'gold', phase: 3.4 }
    ];
    dorsalBars.forEach(bar => {
        createDorsalStripe(bar.z, bar.width + 0.055, materialsList.abdomenBandEdge, bar.phase, 0.006);
        createDorsalStripe(
            bar.z, bar.width,
            bar.mat === 'gold' ? materialsList.abdomenBandGold : materialsList.abdomenBandBlue,
            bar.phase, 0.014
        );
    });

    // Small rear spinnerets, silhouetted in the side reference.
    for (const side of [-1, 1]) {
        const spinneret = addBone(
            spiderGroup,
            new THREE.Vector3(side * 0.105, 0.39, -2.22),
            new THREE.Vector3(side * 0.14, 0.31, -2.56),
            0.047, 0.022, materialsList.legDark, `Spinneret ${side < 0 ? 'L' : 'R'}`
        );
        generateSetaeOnMesh(spinneret, 80, 0.045, materialsList.setaeDark);
    }

    // Cephalothorax: compact dark shell with a warm, mottled, furry face.
    const carapaceGeo = new THREE.SphereGeometry(1, 48, 32);
    carapaceGeo.scale(0.48, 0.225, 0.63);
    const carapace = new THREE.Mesh(carapaceGeo, materialsList.carapace);
    carapace.name = 'Cephalothorax shell';
    carapace.position.set(0, 0.57, 0.02);
    carapace.castShadow = carapace.receiveShadow = true;
    spiderGroup.add(carapace);
    generateSetaeOnMesh(carapace, 1050, 0.055, materialsList.setaeBrown);
    generateSetaeOnMesh(carapace, 420, 0.045, materialsList.setaeDark);

    const faceGeo = new THREE.SphereGeometry(1, 36, 28);
    faceGeo.scale(0.365, 0.255, 0.265);
    const face = new THREE.Mesh(faceGeo, materialsList.face);
    face.name = 'Mottled front face';
    face.position.set(0, 0.445, 0.49);
    face.castShadow = face.receiveShadow = true;
    spiderGroup.add(face);
    generateSetaeOnMesh(face, 1900, 0.075, materialsList.setaeBrown);
    generateSetaeOnMesh(face, 850, 0.067, materialsList.setaeDark);

    // Slight raised face brow and clypeus, giving the eyes a readable face plane.
    const browGeo = new THREE.SphereGeometry(1, 28, 20);
    browGeo.scale(0.27, 0.10, 0.115);
    const brow = new THREE.Mesh(browGeo, materialsList.carapace);
    brow.position.set(0, 0.625, 0.64);
    brow.name = 'Ocular brow';
    brow.castShadow = true;
    spiderGroup.add(brow);
    generateSetaeOnMesh(brow, 190, 0.045, materialsList.setaeBrown);

    // Exactly eight glossy eyes; cloned into the inset for a close face inspection.
    eyeClusterGroup = createEyeCluster();
    eyeClusterGroup.position.set(0, 0.62, 0.675);
    spiderGroup.add(eyeClusterGroup);
    const macroEyes = eyeClusterGroup.clone(true);
    macroEyes.position.set(0, 0, 0);
    macroScene.add(macroEyes);

    // Chelicerae and curved black fangs beneath the front face.
    for (const side of [-1, 1]) {
        const cheliceraGeo = new THREE.SphereGeometry(1, 24, 18);
        cheliceraGeo.scale(0.145, 0.16, 0.19);
        const chelicera = new THREE.Mesh(cheliceraGeo, materialsList.legDark);
        chelicera.name = `Chelicera ${side < 0 ? 'L' : 'R'}`;
        chelicera.position.set(side * 0.19, 0.31, 0.715);
        chelicera.rotation.y = side * -0.15;
        chelicera.castShadow = chelicera.receiveShadow = true;
        spiderGroup.add(chelicera);
        generateSetaeOnMesh(chelicera, 185, 0.052, materialsList.setaeBrown);

        addBone(spiderGroup,
            new THREE.Vector3(side * 0.19, 0.29, 0.81),
            new THREE.Vector3(side * 0.215, 0.13, 0.94),
            0.052, 0.033, materialsList.fang, 'Fang base');
        addBone(spiderGroup,
            new THREE.Vector3(side * 0.215, 0.13, 0.94),
            new THREE.Vector3(side * 0.20, 0.035, 1.00),
            0.033, 0.003, materialsList.fang, 'Fang tip');
    }

    // Two pedipalps sit close to the face and remain smaller than the eight legs.
    for (const side of [-1, 1]) {
        const pts = [
            new THREE.Vector3(side * 0.29, 0.38, 0.63),
            new THREE.Vector3(side * 0.40, 0.32, 0.79),
            new THREE.Vector3(side * 0.43, 0.23, 0.94),
            new THREE.Vector3(side * 0.37, 0.14, 1.03),
            new THREE.Vector3(side * 0.30, 0.12, 1.07)
        ];
        const radii = [0.073, 0.063, 0.050, 0.036];
        for (let i = 0; i < 4; i++) {
            const palpSegment = addBone(
                spiderGroup, pts[i], pts[i + 1],
                radii[i], radii[i] * 0.68, materialsList.legDark, `Pedipalp ${side} segment ${i + 1}`
            );
            generateSetaeOnMesh(palpSegment, 52, 0.052, materialsList.setaeBrown);
            if (i > 0) addJoint(spiderGroup, pts[i], 0.043, materialsList.joint);
        }

        // Small orange/gold rings on the distal palp joints from the references.
        addLegBand(spiderGroup, pts[1], pts[2], radii[1], 0.58, 0.075, materialsList.legBandGold);
    }

    // Eight long, narrow, sharply articulated legs. Every leg has seven named sections.
    // Coordinates were laid out symmetrically to preserve the top-view silhouette while
    // the raised patella/tibia points create the bent side/front profile from hi2/hi3.
    const legAnchors = [
        [ // Leg I — forward, long and diagonally swept
            [0.31, 0.49, 0.40], [0.50, 0.49, 0.55], [0.77, 0.66, 0.78], [1.05, 0.77, 1.03],
            [1.37, 0.53, 1.31], [1.70, 0.28, 1.63], [1.99, 0.13, 1.98], [2.16, 0.065, 2.22]
        ],
        [ // Leg II — forward-lateral
            [0.34, 0.48, 0.12], [0.56, 0.47, 0.16], [0.89, 0.64, 0.23], [1.28, 0.77, 0.33],
            [1.67, 0.51, 0.36], [2.13, 0.28, 0.30], [2.56, 0.13, 0.23], [2.90, 0.065, 0.17]
        ],
        [ // Leg III — lateral / rearward
            [0.33, 0.46, -0.17], [0.55, 0.44, -0.28], [0.90, 0.59, -0.42], [1.30, 0.70, -0.60],
            [1.68, 0.48, -0.77], [2.10, 0.27, -0.97], [2.48, 0.12, -1.15], [2.79, 0.06, -1.32]
        ],
        [ // Leg IV — rear-swept
            [0.29, 0.44, -0.45], [0.49, 0.42, -0.61], [0.80, 0.56, -0.87], [1.11, 0.68, -1.14],
            [1.44, 0.45, -1.47], [1.76, 0.24, -1.82], [2.05, 0.11, -2.13], [2.25, 0.055, -2.36]
        ]
    ];
    const segmentNames = ['Coxa', 'Trochanter', 'Femur', 'Patella', 'Tibia', 'Metatarsus', 'Tarsus'];
    const segmentRadii = [0.090, 0.068, 0.078, 0.071, 0.056, 0.039, 0.025];
    const hairCounts = [30, 26, 40, 44, 48, 36, 28];
    const hairLengths = [0.038, 0.033, 0.047, 0.048, 0.052, 0.043, 0.034];

    legAnchors.forEach((anchors, legIndex) => {
        for (const side of [-1, 1]) {
            const points = anchors.map(([x, y, z]) => new THREE.Vector3(x * side, y, z));
            for (let seg = 0; seg < 7; seg++) {
                const startRadius = segmentRadii[seg];
                const endRadius = startRadius * (seg === 3 ? 0.82 : 0.70);
                const legSeg = addBone(
                    spiderGroup, points[seg], points[seg + 1],
                    startRadius, endRadius, materialsList.legDark,
                    `Leg ${legIndex + 1} ${side < 0 ? 'L' : 'R'} ${segmentNames[seg]}`
                );
                legSeg.receiveShadow = true;
                const hairMat = (seg === 2 || seg === 3) ? materialsList.setaeBrown : materialsList.setaeDark;
                generateSetaeOnMesh(legSeg, hairCounts[seg], hairLengths[seg], hairMat);
                if (seg > 0) addJoint(spiderGroup, points[seg], seg === 4 ? 0.062 : 0.048, materialsList.joint);
            }
            addJoint(spiderGroup, points[7], 0.026, materialsList.legDark);

            // Fine ochre bands, narrow and localized rather than entire bright-red knees.
            addLegBand(spiderGroup, points[3], points[4], segmentRadii[3], 0.62, 0.072, materialsList.legBandGold);
            addLegBand(spiderGroup, points[4], points[5], segmentRadii[4], 0.19, 0.080, materialsList.legBandWarm);
            addLegBand(spiderGroup, points[4], points[5], segmentRadii[4], 0.69, 0.075, materialsList.legBandGold);
            if (legIndex < 3) {
                addLegBand(spiderGroup, points[5], points[6], segmentRadii[5], 0.22, 0.075, materialsList.legBandGold);
            }
        }
    });
}


function createEyeCluster() {
    const group = new THREE.Group();
    group.name = 'Eight-eye front ocular cluster';

    const plateGeo = new THREE.SphereGeometry(1, 28, 20);
    plateGeo.scale(0.215, 0.125, 0.105);
    const plate = new THREE.Mesh(plateGeo, materialsList.face);
    plate.position.set(0, 0.002, 0.0);
    plate.name = 'Mottled ocular plate';
    plate.castShadow = true;
    group.add(plate);
    generateSetaeOnMesh(plate, 150, 0.038, materialsList.setaeBrown,
        normal => normal.y < 0.65 || Math.abs(normal.x) > 0.55);

    // Eight individual eyes: two larger forward median eyes and six smaller surrounding eyes.
    const bigEye = new THREE.SphereGeometry(0.046, 20, 16);
    const smallEye = new THREE.SphereGeometry(0.030, 16, 12);
    const eyes = [
        { x: -0.055, y: 0.022, z: 0.091, big: true },
        { x:  0.055, y: 0.022, z: 0.091, big: true },
        { x: -0.145, y: 0.000, z: 0.059 },
        { x:  0.145, y: 0.000, z: 0.059 },
        { x: -0.132, y: 0.046, z: -0.016 },
        { x:  0.132, y: 0.046, z: -0.016 },
        { x: -0.063, y: 0.066, z: -0.047 },
        { x:  0.063, y: 0.066, z: -0.047 }
    ];
    eyes.forEach((eye, index) => {
        const mesh = new THREE.Mesh(eye.big ? bigEye : smallEye, materialsList.eyes);
        mesh.position.set(eye.x, eye.y, eye.z);
        mesh.name = `Eye ${index + 1} of 8`;
        mesh.castShadow = true;
        group.add(mesh);

        const highlight = new THREE.Mesh(
            new THREE.SphereGeometry(eye.big ? 0.007 : 0.0045, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xe2e6e2 })
        );
        highlight.position.set(eye.x - 0.011, eye.y + 0.012, eye.z + (eye.big ? 0.033 : 0.021));
        highlight.name = 'Small corneal catchlight';
        group.add(highlight);
    });
    return group;
}


function createDorsalStripe(centerOffset, bandWidth, material, phase = 0, lift = 0.01) {
    // Build a thin grid that hugs the upper ellipsoid instead of drawing a flat decal.
    const rx = 0.64, ry = 0.47, rz = 1.16;
    const centerY = abdomenMesh.position.y;
    const centerZ = abdomenMesh.position.z;
    const across = 4;
    const along = 44;
    const zEdge = Math.min(rz * 0.96, Math.max(Math.abs(centerOffset - bandWidth * 0.5),
                                                Math.abs(centerOffset + bandWidth * 0.5)));
    const xExtent = rx * Math.sqrt(Math.max(0.08, 1 - Math.pow(zEdge / rz, 2))) * 0.98;
    const positions = [];
    const indices = [];

    for (let ix = 0; ix <= along; ix++) {
        const u = ix / along;
        const x = -xExtent + 2 * xExtent * u;
        const irregularity = 0.022 * Math.sin((u * 5.2 + phase) * Math.PI) +
                             0.009 * Math.sin((u * 13.0 + phase * 1.7) * Math.PI);
        for (let iz = 0; iz <= across; iz++) {
            const v = iz / across;
            const zLocal = centerOffset + (v - 0.5) * bandWidth + irregularity;
            const normalized = (x * x) / (rx * rx) + (zLocal * zLocal) / (rz * rz);
            const y = centerY + ry * Math.sqrt(Math.max(0.045, 1 - normalized)) + lift;
            positions.push(x, y, centerZ + zLocal);
        }
    }
    for (let ix = 0; ix < along; ix++) {
        for (let iz = 0; iz < across; iz++) {
            const a = ix * (across + 1) + iz;
            const b = a + across + 1;
            indices.push(a, a + 1, b, b, a + 1, b + 1);
        }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const patch = new THREE.Mesh(geometry, material);
    patch.name = 'Curved dorsal abdomen band';
    patch.castShadow = false;
    patch.receiveShadow = true;
    spiderGroup.add(patch);
    return patch;
}

function addLegBand(parent, start, end, baseRadius, t, relativeWidth, material) {
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    if (length < 0.01) return null;
    const height = Math.max(0.012, length * relativeWidth);
    const ring = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius * 1.025, baseRadius * 1.025, height, 10, 1, false),
        material
    );
    ring.position.copy(start).addScaledVector(direction, t);
    ring.quaternion.setFromUnitVectors(UP, direction.normalize());
    ring.name = 'Narrow ochre leg band';
    ring.castShadow = true;
    ring.receiveShadow = true;
    parent.add(ring);
    return ring;
}

    function addBone(parent, start, end, radiusStart, radiusEnd, material, name) {
        const direction = new THREE.Vector3().subVectors(end, start);
        const length = Math.max(direction.length(), 0.001);
        const geometry = new THREE.CylinderGeometry(radiusEnd, radiusStart, length, 12, 1, false);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(start).add(end).multiplyScalar(0.5);
        mesh.quaternion.setFromUnitVectors(UP, direction.normalize());
        mesh.name = name || 'Tapered segment';
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parent.add(mesh);
        return mesh;
    }

    function addJoint(parent, position, radius, material) {
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 12, 10), material);
        mesh.position.copy(position);
        mesh.name = 'Leg articulation joint';
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parent.add(mesh);
        return mesh;
    }

    function generateSetaeOnMesh(targetMesh, count, hairLength, hairMaterial, filterFn = null) {
        const geometry = targetMesh.geometry;
        const positions = geometry.attributes.position;
        if (!positions || !count) return;
        if (!geometry.attributes.normal) geometry.computeVertexNormals();
        const normals = geometry.attributes.normal;
        const index = geometry.index;
        const triangleCount = index ? index.count / 3 : positions.count / 3;
        if (!triangleCount) return;

        // Area-weighted triangle selection avoids the vertex-ring clumping produced by
        // sampling only the few vertices of cylindrical leg segments.
        const triangles = [];
        let totalArea = 0;
        const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
        const ab = new THREE.Vector3(), ac = new THREE.Vector3();
        for (let tri = 0; tri < triangleCount; tri++) {
            const i0 = index ? index.getX(tri * 3) : tri * 3;
            const i1 = index ? index.getX(tri * 3 + 1) : tri * 3 + 1;
            const i2 = index ? index.getX(tri * 3 + 2) : tri * 3 + 2;
            a.fromBufferAttribute(positions, i0);
            b.fromBufferAttribute(positions, i1);
            c.fromBufferAttribute(positions, i2);
            ab.subVectors(b, a);
            ac.subVectors(c, a);
            const area = ab.cross(ac).length() * 0.5;
            if (area <= 1e-9) continue;
            totalArea += area;
            triangles.push({ i0, i1, i2, cumulative: totalArea });
        }
        if (!triangles.length) return;

        const hairRadius = Math.max(0.0022, Math.min(0.0056, hairLength * 0.065));
        const hairGeometry = new THREE.ConeGeometry(hairRadius, hairLength, 4, 1, false);
        hairGeometry.translate(0, hairLength / 2, 0);
        const instances = new THREE.InstancedMesh(hairGeometry, hairMaterial, count);
        instances.name = 'Fine setae / hair instances';
        instances.userData.isSetae = true;
        instances.castShadow = false;
        instances.receiveShadow = false;

        const dummy = new THREE.Object3D();
        const p = new THREE.Vector3(), n = new THREE.Vector3();
        const pA = new THREE.Vector3(), pB = new THREE.Vector3(), pC = new THREE.Vector3();
        const nA = new THREE.Vector3(), nB = new THREE.Vector3(), nC = new THREE.Vector3();
        let placed = 0;
        let attempts = 0;
        const maxAttempts = count * 18;
        while (placed < count && attempts < maxAttempts) {
            attempts++;
            const roll = Math.random() * totalArea;
            let lo = 0, hi = triangles.length - 1;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (roll <= triangles[mid].cumulative) hi = mid;
                else lo = mid + 1;
            }
            const tri = triangles[lo];
            pA.fromBufferAttribute(positions, tri.i0);
            pB.fromBufferAttribute(positions, tri.i1);
            pC.fromBufferAttribute(positions, tri.i2);
            nA.fromBufferAttribute(normals, tri.i0);
            nB.fromBufferAttribute(normals, tri.i1);
            nC.fromBufferAttribute(normals, tri.i2);

            const r1 = Math.sqrt(Math.random());
            const r2 = Math.random();
            const w0 = 1 - r1;
            const w1 = r1 * (1 - r2);
            const w2 = r1 * r2;
            p.copy(pA).multiplyScalar(w0).addScaledVector(pB, w1).addScaledVector(pC, w2);
            n.copy(nA).multiplyScalar(w0).addScaledVector(nB, w1).addScaledVector(nC, w2).normalize();
            if (filterFn && !filterFn(n, p)) continue;

            dummy.position.copy(p);
            dummy.quaternion.setFromUnitVectors(UP, n);
            dummy.rotateY((Math.random() - 0.5) * 0.8);
            dummy.rotateX((Math.random() - 0.5) * 0.48);
            const scale = 0.48 + Math.random() * 1.02;
            dummy.scale.set(scale, scale, scale);
            dummy.updateMatrix();
            instances.setMatrixAt(placed++, dummy.matrix);
        }

        // The filter is aesthetic only; fill any rejected spots without it to retain the setae budget.
        while (placed < count) {
            const tri = triangles[Math.floor(Math.random() * triangles.length)];
            pA.fromBufferAttribute(positions, tri.i0);
            pB.fromBufferAttribute(positions, tri.i1);
            pC.fromBufferAttribute(positions, tri.i2);
            const r1 = Math.sqrt(Math.random()), r2 = Math.random();
            p.copy(pA).multiplyScalar(1 - r1).addScaledVector(pB, r1 * (1 - r2)).addScaledVector(pC, r1 * r2);
            nA.fromBufferAttribute(normals, tri.i0);
            nB.fromBufferAttribute(normals, tri.i1);
            nC.fromBufferAttribute(normals, tri.i2);
            n.copy(nA).multiplyScalar(1 - r1).addScaledVector(nB, r1 * (1 - r2)).addScaledVector(nC, r1 * r2).normalize();
            dummy.position.copy(p);
            dummy.quaternion.setFromUnitVectors(UP, n);
            dummy.rotateY((Math.random() - 0.5) * 0.8);
            dummy.scale.setScalar(0.6 + Math.random() * 0.7);
            dummy.updateMatrix();
            instances.setMatrixAt(placed++, dummy.matrix);
        }
        instances.instanceMatrix.needsUpdate = true;
        instances.visible = furVisible;
        targetMesh.add(instances);
        setaeInstanceCount += count;
    }

function rememberBaseMaterials() {
    baseMaterials = [];
    spiderGroup.traverse(object => {
        if (!(object.isMesh || object.isInstancedMesh) || !object.material) return;
        object.userData.baseMaterial = object.material;
        baseMaterials.push(object);
    });
}

function updateWireframe() {
    baseMaterials.forEach(object => {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach(material => {
            if (material && 'wireframe' in material) material.wireframe = wireframeEnabled;
        });
    });
    macroScene?.traverse(object => {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach(material => {
            if (material && 'wireframe' in material) material.wireframe = wireframeEnabled;
        });
    });
}

function setMaterialColor(keys, value) {
    const names = Array.isArray(keys) ? keys : [keys];
    names.forEach(name => {
        const material = materialsList[name];
        if (material && material.color) {
            material.color.set(value);
            material.needsUpdate = true;
        }
    });
}

function resetMaterialColors() {
    const defaults = {
        'body-color': '#292b25',
        'shell-color': '#474038',
        'legs-color': '#17191a',
        'marking-color': '#a79b52',
        'stripe-color': '#58656b',
        'hair-color': '#39332a'
    };
    Object.entries(defaults).forEach(([id, value]) => {
        const input = document.getElementById(id);
        if (input) input.value = value;
    });
    setMaterialColor('abdomen', defaults['body-color']);
    setMaterialColor(['carapace', 'face'], defaults['shell-color']);
    setMaterialColor(['legDark', 'joint'], defaults['legs-color']);
    setMaterialColor(['abdomenBandGold', 'legBandGold', 'legBandWarm', 'setaeGold'], defaults['marking-color']);
    setMaterialColor('abdomenBandBlue', defaults['stripe-color']);
    setMaterialColor(['setaeDark'], defaults['hair-color']);
    setMaterialColor('setaeBrown', '#594a38');
    setMaterialColor('setaeGold', '#8e7741');
}



function setupUIHandlers() {
    document.getElementById('wireframe-toggle').addEventListener('change', event => {
        wireframeEnabled = event.target.checked;
        updateWireframe();
    });
    document.getElementById('fur-toggle').addEventListener('change', event => {
        furVisible = event.target.checked;
        baseMaterials.forEach(object => {
            if (object.userData.isSetae) object.visible = furVisible;
        });
        macroScene.traverse(object => {
            if (object.userData && object.userData.isSetae) object.visible = furVisible;
        });
    });

    document.getElementById('body-color').addEventListener('input', event => setMaterialColor('abdomen', event.target.value));
    document.getElementById('shell-color').addEventListener('input', event => setMaterialColor(['carapace', 'face'], event.target.value));
    document.getElementById('legs-color').addEventListener('input', event => setMaterialColor(['legDark', 'joint'], event.target.value));
    document.getElementById('marking-color').addEventListener('input', event => {
        setMaterialColor(['abdomenBandGold', 'legBandGold', 'legBandWarm', 'setaeGold'], event.target.value);
    });
    document.getElementById('stripe-color').addEventListener('input', event => setMaterialColor('abdomenBandBlue', event.target.value));
    document.getElementById('hair-color').addEventListener('input', event => setMaterialColor(['setaeDark', 'setaeBrown', 'setaeGold'], event.target.value));
    document.getElementById('reset-colors').addEventListener('click', resetMaterialColors);

    const turntableButton = document.getElementById('btn-turntable-toggle');
    turntableButton.addEventListener('click', () => {
        isTurntableActive = !isTurntableActive;
        document.getElementById('turntable-icon').className = isTurntableActive
            ? 'fa-solid fa-pause text-sm' : 'fa-solid fa-play text-sm';
        turntableButton.setAttribute('aria-label', isTurntableActive ? 'Pause turntable' : 'Resume turntable');
    });

    document.getElementById('turntable-speed').addEventListener('input', event => {
        const value = parseFloat(event.target.value);
        turntableSpeed = 0.32 * value;
        document.getElementById('turntable-speed-label').textContent = `${value.toFixed(1)}x`;
    });

    document.getElementById('key-light-control')?.addEventListener('input', event => {
        const value = parseFloat(event.target.value);
        keyLight.intensity = value;
        document.getElementById('key-light-value').textContent = value.toFixed(1);
    });
    document.getElementById('rim-light-control')?.addEventListener('input', event => {
        const value = parseFloat(event.target.value);
        rimLight.intensity = value;
        document.getElementById('rim-light-value').textContent = value.toFixed(1);
    });
    document.getElementById('fill-light-control')?.addEventListener('input', event => {
        const value = parseFloat(event.target.value);
        fillLight.intensity = value;
        document.getElementById('fill-light-value').textContent = value.toFixed(1);
    });

    document.getElementById('cam-focus-carapace').addEventListener('click', () => focusCameraOn(0, 0.57, 0.06, 3.9));
    document.getElementById('cam-focus-chelicerae').addEventListener('click', () => focusCameraOn(0, 0.43, 0.72, 2.2));
    document.getElementById('cam-focus-patella').addEventListener('click', () => focusCameraOn(1.35, 0.55, 0.45, 2.7));
    document.getElementById('cam-focus-abdomen').addEventListener('click', () => focusCameraOn(0, 0.55, -1.22, 3.4));
    document.getElementById('cam-preset-front')?.addEventListener('click', () => setCameraPreset('front'));
    document.getElementById('cam-preset-side')?.addEventListener('click', () => setCameraPreset('side'));
    document.getElementById('cam-preset-top')?.addEventListener('click', () => setCameraPreset('top'));
    document.getElementById('btn-reset-cam').addEventListener('click', () => setCameraPreset('three-quarter'));

    const dial = document.getElementById('angle-dial');
    let isDraggingDial = false;
    dial.addEventListener('pointerdown', event => {
        isDraggingDial = true;
        dial.classList.add('is-dragging');
        if (dial.setPointerCapture) dial.setPointerCapture(event.pointerId);
        updateDialFromPointer(event);
        event.preventDefault();
    });
    window.addEventListener('pointermove', event => {
        if (isDraggingDial) updateDialFromPointer(event);
    });
    const finishDial = () => {
        isDraggingDial = false;
        dial.classList.remove('is-dragging');
    };
    window.addEventListener('pointerup', finishDial);
    window.addEventListener('pointercancel', finishDial);
}

    function updateDialFromPointer(event) {
        const dial = document.getElementById('angle-dial');
        const rect = dial.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rad = Math.atan2(event.clientY - cy, event.clientX - cx);
        let deg = Math.round(rad * 180 / Math.PI);
        if (deg < 0) deg += 360;
        if (spiderGroup) spiderGroup.rotation.y = rad;
        updateDialUI(deg);
    }

    function focusCameraOn(x, y, z, distance) {
        const target = new THREE.Vector3(x, y, z);
        const direction = new THREE.Vector3().subVectors(camera.position, controls.target);
        if (direction.lengthSq() < 0.01) direction.set(0.5, 0.35, 1);
        direction.normalize();
        controls.target.copy(target);
        camera.position.copy(target).add(direction.multiplyScalar(distance));
        camera.lookAt(target);
        controls.update();
    }


function setCameraPreset(preset) {
    const target = new THREE.Vector3(0, 0.48, -0.02);
    let offset;
    if (preset === 'front') {
        camera.up.set(0, 1, 0);
        offset = new THREE.Vector3(0, 3.5, 8.0);
    } else if (preset === 'side') {
        camera.up.set(0, 1, 0);
        offset = new THREE.Vector3(10.8, 2.6, 0);
    } else if (preset === 'top') {
        // Set a stable screen-up vector so the abdomen is at the top of the top view
        // and the face is at the bottom, matching the provided overhead reference.
        camera.up.set(0, 0, -1);
        offset = new THREE.Vector3(0, 13.3, 0.015);
    } else {
        camera.up.set(0, 1, 0);
        offset = new THREE.Vector3(5.2, 4.0, 7.3);
    }
    controls.target.copy(target);
    camera.position.copy(target).add(offset);
    camera.lookAt(target);
    controls.update();
}

    function updateDialUI(degrees) {
        const deg = ((Math.round(degrees) % 360) + 360) % 360;
        document.getElementById('angle-display').textContent = `${deg}°`;
        document.getElementById('dial-hand').style.transform = `rotate(${deg}deg)`;
    }

    function updateSetaeReadout() {
        const output = document.getElementById('setae-count');
        if (output) output.textContent = setaeInstanceCount.toLocaleString('en-US');
    }

    function onWindowResize() {
        if (!renderer || !camera || !macroRenderer || !macroCamera) return;
        const container = document.getElementById('canvas-container');
        camera.aspect = container.clientWidth / Math.max(container.clientHeight, 1);
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        const macroContainer = document.getElementById('macro-canvas-container');
        macroCamera.aspect = macroContainer.clientWidth / Math.max(macroContainer.clientHeight, 1);
        macroCamera.updateProjectionMatrix();
        macroRenderer.setSize(macroContainer.clientWidth, macroContainer.clientHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        const delta = Math.min(clock.getDelta(), 0.05);
        const elapsed = clock.elapsedTime;
        if (isTurntableActive && spiderGroup) {
            spiderGroup.rotation.y += turntableSpeed * delta;
            let degrees = spiderGroup.rotation.y * 180 / Math.PI;
            degrees = ((degrees % 360) + 360) % 360;
            updateDialUI(degrees);
        }
        if (spiderGroup) spiderGroup.position.y = Math.sin(elapsed * 1.4) * 0.008;
        if (abdomenMesh) abdomenMesh.scale.y = 1 + Math.sin(elapsed * 1.8) * 0.008;

        controls?.update();
        renderer.render(scene, camera);
        macroRenderer.render(macroScene, macroCamera);

        frameCount++;
        const now = performance.now();
        if (now - lastTime >= 1000) {
            document.getElementById('fps-counter').textContent = String(frameCount);
            frameCount = 0;
            lastTime = now;
        }
    }
})();

    </script>
</body>
</html>