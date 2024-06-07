let canvasContainer = document.getElementById("CanvasContainer");

let scaleFactor = 1.0;
let mic; 
let fft;

function setup() {

    initialContainerWidth = canvasContainer.offsetWidth;
    
    const canvas = createCanvas(256, 256, WEBGL);
    canvas.parent(canvasContainer.id);
    // console.log(canvasContainer.id);

    resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth);


    // noFill();

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() 
{
    background(0);
    // noStroke();

    scaleFactor = canvasContainer.offsetWidth / initialContainerWidth;

    let spectrum = fft.analyze();

    
    push();
    
        beginShape();

        translate(0,0,0);
        scale(scaleFactor);
        // let sp = sphere(120);
        let mySphere = sphere(120);
        let vertices = mySphere.vertices;
        console.log(`Vertices: ${mySphere.vertices}`);
        let level = mic.getLevel();

        for (let i = 0; i < vertices.length; i++) 
        {
            let v = vertices[i];
            let x = v.x;
            let y = v.y;
            let z = v.z * (1 + level * 50); // Adjust the z-coordinate based on mic level
            vertex(x, y, z);
        }
    
        endShape();

    pop();
}

function windowResized() 
{
    resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth);
}