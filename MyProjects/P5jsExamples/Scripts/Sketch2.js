const sketch2 = function (containerDivId) 
{
    return function (p) 
    {
        const canvasContainer = document.getElementById(containerDivId);

        let angle = 0.0;
        let initialContainerWidth = 0;
        let tex = null;

        p.preload = function ()
        {
            tex = p.loadImage("./Textures/Earth-Albedo.jpg");
        }

        p.setup = function () 
        {
            p.describe("A 3D rendered globe that can be rotated with the mouse.");

            // Set the initial container width
            initialContainerWidth = canvasContainer.offsetWidth;

            // Create the P5.js canvas
            let canvas = p.createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth, p.WEBGL);
            canvas.parent(containerDivId);
        }

        p.draw = function () 
        {
            p.background(255, 150, 111);
            p.noStroke();

            // Calculate the dynamic scale factor
            const scaleFactor = canvasContainer.offsetWidth / initialContainerWidth;
            // console.log(scaleFactor);

            p.push();
                p.translate(0, 0, 0); // Position objects at the origin
                p.scale(scaleFactor);

                if (p.mouseIsPressed) 
                {
                    angle = p.map(p.mouseX, 0, p.width, 0, p.TWO_PI);
                    p.rotateY(angle);
                }
                else
                {
                    p.rotateY(p.frameCount * 0.01); // Rotate by time
                }
                
                p.texture(tex); // Apply the texture to the sphere
                p.sphere(150); // Adjust the sphere size as needed
            p.pop();
        }

        p.windowResized = function () 
        {
            p.resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetWidth);
        }
    }
}

// let myp5 = new p5(sketch1('CanvasContainer2')); // Moved to SketchManager.js
