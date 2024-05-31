
function setup()
{
    // const canvasContainer = document.getElementById("CanvasContainer");
    describe("A rotating white cube in the center of a black canvas");
    
    // Create the P5js Canvas. Storing it in a variable isn't nessescary but could be useful later on.
    let canvas = createCanvas(256,256, WEBGL);
    
    canvas.parent('CanvasContainer');
}

function draw()
{ 
    const canvasContainer = document.getElementById("CanvasContainer");
    // Scale the coordinate system so that the size of the cube stays the same relative to the canvas size.
    scale(canvasContainer.offsetWidth);
    background(0);
    
    // Display the canvas' width.
    //text(width, 42, 54);

    // Push() begins a drawing group so that the translations within this group don't affect the objects after the group.
    // See: https://p5js.org/reference/#/p5/push
    push();
    translate(0, 0, 0); // Position objects at the origin
    rotateZ(frameCount * 0.01); // Rotate the objects on the Z axis taking framerate into acount
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(0.5, 0.5, 0.5); // Draw a cube
    pop(); // End this drawing group. 
}

// Resize the canvas to its parent's size when the window is resized.
function windowResized() 
{
    const canvasContainer = document.getElementById("CanvasContainer");
    resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth);
}

