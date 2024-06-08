class BarChart3D 
{
    p           = null;
    slider      = null;
    scaleFactor = 30.0;
    camera      = 0.0;

    constructor(containerDivId, data) 
    {
        this.containerDivId = containerDivId;
        this.data = data;
        this.canvasContainer = document.getElementById(this.containerDivId);
        this.p = new p5(sketch => {
            sketch.setup = () => this.setup();
            sketch.draw = () => this.draw();
            sketch.windowResized = () => this.windowResized();
        });
    }

    setup() 
    {
        let canvas = this.p.createCanvas(this.canvasContainer.offsetWidth, this.canvasContainer.offsetWidth, this.p.WEBGL);
        canvas.parent(this.containerDivId);
        this.p.resizeCanvas(this.canvasContainer.offsetWidth, this.canvasContainer.offsetWidth);
        
        this.slider = this.p.createSlider(0,10);
        this.slider.parent(this.sliderContainer);
        this.slider.position(0, 0);
        this.slider.size(80);

        this.camera = this.p.createCamera();
        this.camera.setPosition(40,-50,400);
    }

    draw() 
    {
        this.p.background(255,255,255);
        // this.p.fill('#A251FA');
        this.p.strokeWeight(0.01);
        // this.p.scale(this.canvasContainer.offsetWidth);
        
        // Calculate the size of the chart (assuming the chart is square)
        let chartSize = this.data.length;



        // Adjust the camera position to be centered and zoomed out enough to see the entire chart
        // The parameters are: camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ)
        // this.p.camera(chartSize / 2, -chartSize / 2, (chartSize * 1.5) - this.slider.value(), 0, -chartSize/2, 0, 0, 1, 0);
        // this.p.camera(chartSize / 2, -chartSize / 2, (chartSize * 1.5) - this.slider.value(), chartSize / 2, 0, chartSize / 2, 0, 1, 0);
        // Set the camera's FOV (Field Of View) to Pi/3 radians which is about 60 degrees. Set the near plane closer to 0.1 and the far plane to 1000 to prevent objects being culled when the camera gets close. 
        // this.p.perspective(this.p.PI / 3.0, this.p.width / this.p.height, 0.1, 1000); 

        // Rotate the entire scene
        // this.p.rotateY(this.p.frameCount * 0.01);


        this.scaleFactor = this.p.width * 0.1;
        this.p.orbitControl();
        this.p.push();
        this.p.rotateY(this.p.frameCount * 0.01);
            for (let i = 0; i < this.data.length; i++) 
            {
                for (let j = 0; j < this.data[i].length; j++) 
                {
                    this.p.push();
                        this.p.fill(200/i,0,200/j);
                        // Translate the cubes to be centered around the origin
                        this.p.translate(i * this.scaleFactor - chartSize / 2, -this.data[i][j] / 2 * this.scaleFactor, j * this.scaleFactor - chartSize / 2);
                        this.p.box(this.scaleFactor, this.data[i][j] * this.scaleFactor, this.scaleFactor);


                    this.p.pop();
                }
            }
        this.p.pop();
    }

    windowResized() 
    {
        // Resize the canvas to its parent's size when the window is resized.
        this.p.resizeCanvas(this.canvasContainer.offsetWidth, this.canvasContainer.offsetWidth);
    }
}

   ////////////////////////////////////////////////////////
  // Moved to ChartManager.js, to illustrate how to use //
 // instances of a class from another script           //
////////////////////////////////////////////////////////

    // // Usage:
    // let data1 = [
    //     [0.5, 1.0, 1.5],
    //     [1.0, 1.5, 2.0],
    //     [1.5, 2.0, 3.0],
    // ]; // Replace with your data

    // let data2 = [
    //     [0.2, 1.8, 1.0],
    //     [1.5, 1.2, 3.0],
    //     [1.6, 0.8, 0.2],
    // ]; // Replace with your data

    // let data3 = [
    //     [2.1, 1.6, 0.2],
    //     [1.1, 2.1, 3.1],
    //     [0.2, 0.2, 0.7],
    // ]; // Replace with your data

    // let myChart = new BarChart3D('CanvasContainer', data1);
    // let myChart2 = new BarChart3D('CanvasContainer', data2);
    // let myChart3 = new BarChart3D('CanvasContainer', data2);