// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import styled from 'styled-components';
// import { render } from '@testing-library/react';

// const TextDiv = styled.div`
//     width: 100%;
//     text-align: center;
//     z-index: 12;
// `;

// const Text = () => {

//     const mount2 = useRef(null);

//     useEffect(
//         ()=>{

//             // const scene = new THREE.Scene();

//             // const camera = new THREE.PerspectiveCamera(
//             //     75, window.innerWidth / window.innerHeight, 0.1, 1000
//             // );

//             // const renderer = new THREE.WebGLRenderer();
//             // renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

            

//             // var loader = new THREE.FontLoader();

//             // loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font){
//             //     var geometry = new THREE.TextGeometry( 'Hello three.js!', {
//             //         font: font,
//             //         size: 80,
//             //         height: 5,
//             //         curveSegments: 12,
//             //         bevelEnabled: true,
//             //         bevelThickness: 10,
//             //         bevelSize: 8,
//             //         bevelOffset: 0,
//             //         bevelSegments: 5
//             //     } );
//             // });

//             // scene.add(loader);

//             // mount.current.appendChild(render.domElement);

//             // return () => {
//             //     mount.current.removeChild(renderer.domElement);

//             // }
            
//             let scene, camera, renderer, text;

//             let ADD = 0.01

//             let createGeometry = function(){
                

//                 loader.load(
//                     './helvetiker_regular.typeface.json',
//                     function ( font ) {
//                         // do something with the font

//                         let geometry = new THREE.TextGeometry("Hello World!",{
//                             font:font, 
//                             size:80,
//                             height:1,
//                             curveSegments: 12,
//                             bevelEnabled: true,
//                             bevelThickness: 10,
//                             bevelSize: 8,
//                             bevelOffset: 0,
//                             bevelSegments: 5   
//                         });

//                         let material = new THREE.MeshBasicMaterial({color:0x035b59});
             
//                         text = new THREE.Mesh(geometry, material);


//                         scene.add( text );

//                     },
                
//                     // onProgress callback
//                     function ( xhr ) {
//                         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
//                     },
                
//                     // onError callback
//                     function ( err ) {
//                         console.log( 'An error happened' );
//                     }
//                 );

//                 // let font = loader.parse(fontJSON);
//                 // text.position.x = -15;
                
//             }

//             let init = function(){

//                 scene = new THREE.Scene();

//                 scene.background = new THREE.Color(0xffffff);
           
//                 camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1000);
           
//                 camera.position.set(0,5,40);
           
//                 createGeometry();
            
//                 renderer = new THREE.WebGLRenderer();
            
//                 renderer.setSize(window.innerWidth*0.375,window.innerHeight*0.375);
            
//             }

//             let render = function(){
                
//                     // text.rotation.x += ADD;
                
//                     renderer.render(scene,camera);
                
//                     requestAnimationFrame(render);
//             }
//             init()
//             render()
//             mount2.current.appendChild(renderer.domElement);
//         }, []
//     );

//     return (
//         <div ref={mount2}>
            
//         </div>
//     );
// }

// export default Text;