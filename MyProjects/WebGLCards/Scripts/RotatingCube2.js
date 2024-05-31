
// var sketch = function(p)
// {
//     p.setup = function()
//     {
//         // const canvasContainer = document.getElementById("CanvasContainer2");
//         describe("A rotating white cube in the center of a black canvas");
        
//         // Create the P5js Canvas. Storing it in a variable isn't nessescary but could be useful later on.
//         let canvas = createCanvas(256,256, WEBGL);
        
//         canvas.parent('CanvasContainer2');
//     }

//     p.draw = function()
//     {
//         const canvasContainer = document.getElementById("CanvasContainer2");
//         // Scale the coordinate system so that the size of the cube stays the same relative to the canvas size.
//         p.scale(canvasContainer.offsetWidth);
//         p.background(0);
        
//         // Display the canvas' width.
//         //text(width, 42, 54);
    
//         // Push() begins a drawing group so that the translations within this group don't affect the objects after the group.
//         // See: https://p5js.org/reference/#/p5/push
//         p.push();
//         p.translate(0, 0, 0); // Position objects at the origin
//         p.rotateZ(frameCount * 0.01); // Rotate the objects on the Z axis taking framerate into acount
//         p.rotateX(frameCount * 0.01);
//         p.rotateY(frameCount * 0.01);
//         p.box(0.5, 0.5, 0.5); // Draw a cube
//         p.pop(); // End this drawing group. 
//     }

//     p.windowResized = function()
//     {
//         const canvasContainer = document.getElementById("CanvasContainer2");
//         p.resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth);
//     }
// }

// var myp5 = new p5(sketch);


// // // Resize the canvas to its parent's size when the window is resized.
// // function windowResized() 
// // {
// //     const canvasContainer = document.getElementById("CanvasContainer2");
// //     resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth);
// // }
