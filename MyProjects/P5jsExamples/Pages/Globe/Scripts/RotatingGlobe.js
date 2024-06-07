const canvasContainer = document.getElementById("CanvasContainer");

let angle = 0.0;
let initialContainerWidth = 0;
let earthTexture = null;
let scaleFactor = 1.0;

// Called by P5js. Use it to import external files like textures and 3D models.
function preload() 
{
    earthTexture = loadImage("./Textures/Earth-Albedo.jpg");
}

function setup() 
{
    // Set the initial container width
    initialContainerWidth = canvasContainer.offsetWidth;

    // Create the P5.js canvas
    const canvas = createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth, WEBGL);
    canvas.parent(canvasContainer.id);
}

function draw() 
{
    background(10);
    noStroke();

    // Calculate the dynamic scale factor
    scaleFactor = canvasContainer.offsetWidth / initialContainerWidth;
    // console.log(scaleFactor);
    
    push();
        translate(0,0,0);
        scale(scaleFactor);

        // Your existing rotation logic
        if (mouseIsPressed) 
        {
            angle = map(mouseX, 0, width, 0, TWO_PI);
            rotateY(angle);
        }
        else
        {
            rotateY(frameCount * 0.01);
        }
        
        // Apply the texture to the sphere
        texture(earthTexture);
        sphere(200); // Adjust the sphere size as needed
    pop();
}

function windowResized() 
{
    // Resize the canvas to its parent's size when the window is resized
    resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth);
}
