const canvasContainer = document.getElementById("CanvasContainer");

let angle = 0;
let initialContainerWidth = 0;
let img;

// Called by P5js. Use it to import external files like textures and 3D models.
function preload() 
{
    tex = loadImage("./Textures/Earth-Albedo.jpg");
}

function setup() 
{
    // Set the initial container width
    initialContainerWidth = canvasContainer.offsetWidth;

    // Create the P5.js canvas
    createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth, WEBGL).parent('CanvasContainer');
}

function draw() 
{
    background(10);

    // Calculate the dynamic scale factor
    const scaleFactor = canvasContainer.offsetWidth / initialContainerWidth;
    console.log(scaleFactor);
    
    scale(scaleFactor);

    // Your existing rotation logic
    if (mouseIsPressed) 
    {
        angle = map(mouseX, 0, width, 0, TWO_PI);
    }
    
    rotateY(angle);
    // Apply the texture to the sphere
    texture(tex);
    sphere(200); // Adjust the sphere size as needed
}

function windowResized() 
{
    // Resize the canvas to its parent's size when the window is resized
    resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth);
}
