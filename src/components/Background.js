import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import logo from './download.png'
import first from './images/sources/1.jpg';
import second from './images/sources/2.jpg';
import third from './images/sources/3.jpg';
import fourth from './images/sources/4.jpg'; 
import fifth from './images/sources/5.jpg';
import sixth from './images/sources/6.jpg';
import backgrounds from './images/5.jpg'; 
import { OrbitControls } from './orbitreference.js';
import { RGBADepthPacking } from 'three';

// import jsonfile from '';

const Background = () => {
    
    const mount = useRef(null);
        
    const [size, setSize] = useState([0,0]);

    useEffect(()=>{
        const scene = new THREE.Scene();
        const loaderbackground = new THREE.TextureLoader();
        const texturebackground = loaderbackground.load(
            // first, second, third, fourth
            backgrounds,
            () => {
                const backgroundtest = 
                    new THREE.WebGLCubeRenderTarget(texturebackground.image.height);
                backgroundtest.fromEquirectangularTexture(renderer, texturebackground);
                scene.background = backgroundtest;
            }
        );
        // scene.background = texturebackground;
        // scene.background = new THREE.Color(0x00ffff);
        
        const fov = 70;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 4000; 
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 1000;
        camera.position.y = 500;
        camera.position.x = -500;
        // camera.position.set(0, 0, 500);


        const controls = new OrbitControls(camera, mount.current);
        controls.target.set(0,0,0);
        controls.update();

        const renderer = new THREE.WebGLRenderer({});
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.current.appendChild(renderer.domElement);

        for(let i = 1; i <= 3; i=i+2){
            for(let j = 0 ; j < 3 ; j++){
                const geometry = new THREE.BoxGeometry(
                    500,100,100
                );
                const material = new THREE.MeshBasicMaterial(
                    {
                        color: 0x808080
                    }
                );
            
                const cube = new THREE.Mesh(
                    geometry, material
                );
                // cube.position.x = 0;
                cube.position.y = -250*i;
                cube.position.x = 700*j;
                // cube.position.z = 300;
                scene.add(cube);
            }
            
        }

        // const geometry = new THREE.BoxGeometry(
        //     500,100,100
        // );
        // const material = new THREE.MeshBasicMaterial(
        //     {
        //         color: 0xeeffee
        //     }
        // );
    
        // const cube = new THREE.Mesh(
        //     geometry, material
        // );
        // // cube.position.x = 0;
        // cube.position.y = -250;
        // // cube.position.z = 300;
        // scene.add(cube);

        
        var loader = new THREE.FontLoader();
        loader.load(
            // resource URL
            '/fonts/helvetiker_bold.typeface.json',
        
            // onLoad callback
            function ( font ) {
                // do something with the font
                var  textGeo = new THREE.TextGeometry('My Photos', {
                    size: 80,
                    height: 5,
                    curveSegments: 6,
                    font: font,
                });
                // var  color = new THREE.Color();
                // color.setRGB(125, 125, 125);
                var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ee33, specular: 0x555555, shininess: 30 });
                var  text = new THREE.Mesh(textGeo , textMaterial);
                text.position.x = -250;
                text.position.y = 300;
                // text.position.z = 100;
                scene.add( text );

                var light = new THREE.DirectionalLight( 0xffffff );
                light.position.set( 0, 1, 1 ).normalize();
                scene.add(light);

                const renderer = new THREE.WebGLRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);

                animate()
            },
        
            // onProgress callback
            function ( xhr ) {
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            },
        
            // onError callback
            function ( err ) {
                console.log( 'An error happened' );
            }
        );

        let loader2 = new THREE.TextureLoader(); 
        
        let count = 0; 
        let array = [first, second, third, fourth, fifth, sixth];
        for(let i = 0 ; i < 3 ;i++){
            for(let j = 0 ; j < 3 ; j=j+2){
                const material2 = new THREE.MeshLambertMaterial({
                    map: loader2.load(array[count]),
                    side: THREE.DoubleSide
                });        
        
                let mesh = new THREE.Mesh(
                    new THREE.PlaneGeometry(500, 500),material2
                );
                mesh.position.x = 700*i;
                mesh.position.y = -250*j;
                scene.add(mesh);

                count++;
            }
            
        }
       

        let ambientLight = new THREE.AmbientLight(0x555555);
        scene.add(ambientLight);

        let directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1,1,1).normalize();
        scene.add(directionalLight);
        
    
        const animate = function() {
            requestAnimationFrame(animate);
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
        
        return () => {
                mount.current.removeChild(renderer.domElement);  
                // scene.remove(cube)
                // geometry.dispose()
                // material.dispose()
        }
    }, []);
    
    
    return (
        <div ref={mount}>
        </div>
    );
}

export default Background;