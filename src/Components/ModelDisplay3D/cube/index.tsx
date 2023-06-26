import {ModelDisplay3D} from "../index";
import * as THREE from "three";

export const GeometryCube = () => {

    const canvasDefaultObject = {
        fov: 75,
        aspect: 2,
        near: 0.1,
        far: 5,
    };
    const optionsGeometry = {
        boxWidth: 1,
        boxHeight: 1,
        boxDepth: 1,
    };
    const style = {backgroundColor: 'white', width: "100%", height: "100%", display: 'block'}
    const three = new THREE.BoxGeometry(optionsGeometry.boxDepth,optionsGeometry.boxHeight,optionsGeometry.boxWidth);

    return ModelDisplay3D({canvasDefaultObject, three, style})
}