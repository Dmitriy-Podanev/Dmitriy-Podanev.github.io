import * as THREE from 'three';
import React, {useEffect} from "react";


export const ModelDisplay3D = (data: { canvasDefaultObject: Object; three: any; style: Object; }): JSX.Element => {

    const {
        canvasDefaultObject = {
            fov: 75,
            aspect: 2,
            near: 0.1,
            far: 5,
        },
        style = {backgroundColor: 'white', width: "100%", height: "100%", display: 'block'},
        three,
    } = data
    let reqId = null;


    const canvasRef = React.createRef<HTMLCanvasElement>()


    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    const createAnimation = (scene, camera, renderer, geometryObject) => {
        return function render(time) {
            console.log(time);
            time *= 0.001;  // convert time to seconds

            geometryObject.rotation.x = time;
            geometryObject.rotation.y = time;

            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }

            renderer.render(scene, camera);

            reqId = requestAnimationFrame(render);
        }
    }

    function createMaterial() {
        const material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
        });

        const hue = Math.random();
        const saturation = 1;
        const luminance = .5;
        material.color.setHSL(hue, saturation, luminance);

        return material;
    }

    const createSceneForCanvas = (canvas, cameraOptions, geometry) => {
        const {fov, aspect, near, far} = cameraOptions;
        console.log('useEffect');
        console.log('canvasRef.current:', canvasRef.current);

        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.setPixelRatio(window.devicePixelRatio);


        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;

        const scene = new THREE.Scene();

        const material = createMaterial();  // greenish blue

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);

        scene.background = new THREE.Color(0xffffff)

        return {
            scene, camera, renderer, cube
        }
    }

    useEffect(() => {

        if (canvasRef && canvasRef.current !== null) {
            const {renderer, camera, scene, cube} = createSceneForCanvas(canvasRef.current, canvasDefaultObject, three);
            //TODO прокидывать THREE геометрию через пропс компонента, для создания компонента, который может быть переиспольхован
            const animationCallBack = createAnimation(scene, camera, renderer, cube)
            reqId = requestAnimationFrame(animationCallBack);
            console.log('reqId:',reqId);
        }

        return () => {
            console.log('UnMount')
            cancelAnimationFrame(reqId);
        }


    }, [])


    return <>
        <canvas id={`canvas3DModel_${reqId}`} ref={canvasRef} style={style}/>
    </>
}


