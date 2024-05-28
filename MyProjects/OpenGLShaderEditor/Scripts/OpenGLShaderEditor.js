// Mouse position in pixels
let mousePos = { x: 0, y: 0 };

// Update mouse position
function updateMousePosition(evt) 
{
    const rect = evt.target.getBoundingClientRect();
    mousePos.x = evt.clientX - rect.left;
    mousePos.y = rect.height - (evt.clientY - rect.top); // Flip Y
}

// Add mouse event listeners to the canvas
// document.getElementById('glCanvas1').addEventListener('mousemove', updateMousePosition);
// document.getElementById('glCanvas2').addEventListener('mousemove', updateMousePosition);
// document.getElementById('glCanvas3').addEventListener('mousemove', updateMousePosition);
// document.getElementById('glCanvas4').addEventListener('mousemove', updateMousePosition);
// document.getElementById('glCanvas5').addEventListener('mousemove', updateMousePosition);
// document.getElementById('glCanvas6').addEventListener('mousemove', updateMousePosition);
document.getElementById('glCanvas7').addEventListener('mousemove', updateMousePosition);

// Get the canvas elements and their WebGL contexts
// const canvas1   = document.getElementById('glCanvas1');
// const gl1       = canvas1.getContext('webgl2',);
// const canvas2   = document.getElementById('glCanvas2');
// const gl2       = canvas2.getContext('webgl2');
// const canvas3   = document.getElementById('glCanvas3');
// const gl3       = canvas3.getContext('webgl2');
// const canvas4   = document.getElementById('glCanvas4');
// const gl4       = canvas4.getContext('webgl2',);
// const canvas5   = document.getElementById('glCanvas5');
// const gl5       = canvas5.getContext('webgl2');
// const canvas6   = document.getElementById('glCanvas6');
// const gl6       = canvas6.getContext('webgl2');
const canvas7   = document.getElementById('glCanvas7');
const gl7       = canvas7.getContext('webgl2');

// Load textures for both shaders
// const texture1 = loadTexture(gl1, './Textures/Bricks.jpg'); // Replace with your texture file
// const texture2 = loadTexture(gl2, './Textures/SwimmingPoolTiles.png'); // Replace with your texture file
// const texture3 = loadTexture(gl3, './Textures/Grass.jpg'); // Replace with your texture file
// const texture4 = loadTexture(gl4, './Textures/Bricks.jpg'); // Replace with your texture file
// const texture5 = loadTexture(gl5, './Textures/SwimmingPoolTiles.png'); // Replace with your texture file
// const texture6 = loadTexture(gl6, './Textures/Grass.jpg'); // Replace with your texture file
const texture7 = loadTexture(gl7, './Textures/Grass.jpg'); // Replace with your texture file


// Start the process of loading shader programs
loadShadersAndStart();

async function loadShadersAndStart() {
    
    // const shaderProgram1 = await initShaderProgram(gl1, './Shaders/ShaderVertex.glsl', './Shaders/HelloTextureFragment.glsl');
    // const shaderProgram2 = await initShaderProgram(gl2, './Shaders/ShaderVertex.glsl', './Shaders/ShaderFragment2.glsl');
    // const shaderProgram3 = await initShaderProgram(gl3, './Shaders/ShaderVertex.glsl', './Shaders/DasNeuralNetwork.glsl');
    // const shaderProgram4 = await initShaderProgram(gl4, './Shaders/ShaderVertex.glsl', './Shaders/ShaderFragment4.glsl');
    // const shaderProgram5 = await initShaderProgram(gl5, './Shaders/ShaderVertex.glsl', './Shaders/ShaderFragment5.glsl');
    // const shaderProgram6 = await initShaderProgram(gl6, './Shaders/ShaderVertex.glsl', './Shaders/ShaderFragment6.glsl');
    
    var shaderCode7     =  document.getElementById('shaderInput1').value;
    var shaderProgram7  = await initShaderProgramFromString(gl7, './Shaders/ShaderVertex.glsl', shaderCode7);
    
    // Collect all the info needed to use the shader programs
    // const programInfo1 = {
    //     program: shaderProgram1,
    //     attribLocations: {
    //         vertexPosition: gl1.getAttribLocation(shaderProgram1, 'aVertexPosition'),
    //         textureCoord:   gl1.getAttribLocation(shaderProgram1, 'aTextureCoord'),
    //     },
    //     uniformLocations: {
    //         uTime:          gl1.getUniformLocation(shaderProgram1, 'u_time'),
    //         uResolution:    gl1.getUniformLocation(shaderProgram1, 'u_resolution'),
    //         uMouse:         gl1.getUniformLocation(shaderProgram1, 'u_mouse'),
    //         uTexture:       gl1.getUniformLocation(shaderProgram1, 'u_texture'), // Texture uniform
    //     },
    // };

    // const programInfo2 = {
    //     program: shaderProgram2,
    //     attribLocations: {
    //         vertexPosition: gl2.getAttribLocation(shaderProgram2, 'aVertexPosition'),
    //         textureCoord:   gl2.getAttribLocation(shaderProgram2, 'aTextureCoord'),
    //     },
    //     uniformLocations: {
    //         uTime:          gl2.getUniformLocation(shaderProgram2, 'u_time'),
    //         uResolution:    gl2.getUniformLocation(shaderProgram2, 'u_resolution'),
    //         uMouse:         gl2.getUniformLocation(shaderProgram2, 'u_mouse'),
    //         uTexture:       gl2.getUniformLocation(shaderProgram2, 'u_texture'), // Texture uniform
    //     },
    // };

    // const programInfo3 = {
    //     program: shaderProgram3,
    //     attribLocations: {
    //         vertexPosition: gl3.getAttribLocation(shaderProgram3, 'aVertexPosition'),
    //         textureCoord:   gl3.getAttribLocation(shaderProgram3, 'aTextureCoord'),
    //     },
    //     uniformLocations: {
    //         uTime:          gl3.getUniformLocation(shaderProgram3, 'u_time'),
    //         uResolution:    gl3.getUniformLocation(shaderProgram3, 'u_resolution'),
    //         uMouse:         gl3.getUniformLocation(shaderProgram3, 'u_mouse'),
    //         uTexture:       gl3.getUniformLocation(shaderProgram3, 'u_texture'), // Texture uniform
    //     },
    // };

    // const programInfo4 = {
    //     program: shaderProgram4,
    //     attribLocations: {
    //         vertexPosition: gl4.getAttribLocation(shaderProgram4, 'aVertexPosition'),
    //         textureCoord:   gl4.getAttribLocation(shaderProgram4, 'aTextureCoord'),
    //     },
    //     uniformLocations: {
    //         uTime:          gl4.getUniformLocation(shaderProgram4, 'u_time'),
    //         uResolution:    gl4.getUniformLocation(shaderProgram4, 'u_resolution'),
    //         uMouse:         gl4.getUniformLocation(shaderProgram4, 'u_mouse'),
    //         uTexture:       gl4.getUniformLocation(shaderProgram4, 'u_texture'), // Texture uniform
    //     },
    // };

    // const programInfo5 = {
    //     program: shaderProgram5,
    //     attribLocations: {
    //         vertexPosition: gl5.getAttribLocation(shaderProgram5, 'aVertexPosition'),
    //         textureCoord:   gl5.getAttribLocation(shaderProgram5, 'aTextureCoord'),
    //     },
    //     uniformLocations: {
    //         uTime:          gl5.getUniformLocation(shaderProgram5, 'u_time'),
    //         uResolution:    gl5.getUniformLocation(shaderProgram5, 'u_resolution'),
    //         uMouse:         gl5.getUniformLocation(shaderProgram5, 'u_mouse'),
    //         uTexture:       gl5.getUniformLocation(shaderProgram5, 'u_texture'), // Texture uniform
    //     },
    // };

    // const programInfo6 = {
    //     program: shaderProgram6,
    //     attribLocations: {
    //         vertexPosition: gl6.getAttribLocation(shaderProgram6, 'aVertexPosition'),
    //         textureCoord:   gl6.getAttribLocation(shaderProgram6, 'aTextureCoord'),
    //     },
    //     uniformLocations: {
    //         uTime:          gl6.getUniformLocation(shaderProgram6, 'u_time'),
    //         uResolution:    gl6.getUniformLocation(shaderProgram6, 'u_resolution'),
    //         uMouse:         gl6.getUniformLocation(shaderProgram6, 'u_mouse'),
    //         uTexture:       gl6.getUniformLocation(shaderProgram6, 'u_texture'), // Texture uniform
    //     },
    // };

    let programInfo7 = {
        program: shaderProgram7,
        attribLocations: {
            vertexPosition: gl7.getAttribLocation(shaderProgram7, 'aVertexPosition'),
            textureCoord:   gl7.getAttribLocation(shaderProgram7, 'aTextureCoord'),
        },
        uniformLocations: {
            uTime:          gl7.getUniformLocation(shaderProgram7, 'u_time'),
            uResolution:    gl7.getUniformLocation(shaderProgram7, 'u_resolution'),
            uMouse:         gl7.getUniformLocation(shaderProgram7, 'u_mouse'),
            uTexture:       gl7.getUniformLocation(shaderProgram7, 'u_texture'), // Texture uniform
        },
    };



    // Add event listener to the button
    document.getElementById('shaderButton1').addEventListener('click', async function() 
    {
        const newShaderCode1 = document.getElementById('shaderInput1').value;
        shaderProgram7 = await initShaderProgramFromString(gl7, './Shaders/ShaderVertex.glsl', newShaderCode1);
        programInfo7.program = shaderProgram7;
        programInfo7.attribLocations.vertexPosition = gl7.getAttribLocation(shaderProgram7, 'aVertexPosition');
        programInfo7.attribLocations.textureCoord   = gl7.getAttribLocation(shaderProgram7, 'aTextureCoord');
        programInfo7.uniformLocations.uTime         = gl7.getUniformLocation(shaderProgram7, 'u_time');
        programInfo7.uniformLocations.uResolution   = gl7.getUniformLocation(shaderProgram7, 'u_resolution');
        programInfo7.uniformLocations.uMouse        = gl7.getUniformLocation(shaderProgram7, 'u_mouse');
        programInfo7.uniformLocations.uTexture      = gl7.getUniformLocation(shaderProgram7, 'u_texture');
    });


    // Here's where we call the routine that builds all the objects we'll be drawing
    // const buffers1 = initBuffers(gl1);
    // const buffers2 = initBuffers(gl2);
    // const buffers3 = initBuffers(gl3);
    // const buffers4 = initBuffers(gl4);
    // const buffers5 = initBuffers(gl5);
    // const buffers6 = initBuffers(gl6);
    const buffers7 = initBuffers(gl7);

    
    // Draw the scene repeatedly
    function render(now) {
        now *= 0.001;  // convert to seconds
        u_time = now;
        // drawScene(gl1, programInfo1, buffers1, texture1, now, mousePos);
        // drawScene(gl2, programInfo2, buffers2, texture2, now, mousePos);
        // drawScene(gl3, programInfo3, buffers3, texture3, now, mousePos);
        // drawScene(gl4, programInfo4, buffers4, texture4, now, mousePos);
        // drawScene(gl5, programInfo5, buffers5, texture5, now, mousePos);
        // drawScene(gl6, programInfo6, buffers6, texture6, now, mousePos);
        drawScene(gl7, programInfo7, buffers7, texture7, now, mousePos);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);    
}

function initBuffers(gl) {
    // Create a buffer for the square's positions
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Now create an array of positions for the square
    const positions = [
        1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        -1.0, -1.0,
    ];

    // Pass the list of positions into WebGL to build the shape
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Create a buffer for the texture coordinates
    const textureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

    const textureCoordinates = [
        // Texture coordinates for the square
        1.0, 1.0,
        0.0, 1.0,
        1.0, 0.0,
        0.0, 0.0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
        gl.STATIC_DRAW);

    return {
        position: positionBuffer,
        textureCoord: textureCoordBuffer,
    };
}

function drawScene(gl, programInfo, buffers, texture, deltaTime, mousePos) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Tell WebGL to use our program when drawing
    gl.useProgram(programInfo.program);

    // Set the resolution uniform
    gl.uniform2f(programInfo.uniformLocations.uResolution, gl.canvas.width, gl.canvas.height);

    // Set the mouse position uniform
    gl.uniform2f(programInfo.uniformLocations.uMouse, mousePos.x, mousePos.y);

    // Set the texture uniform
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(programInfo.uniformLocations.uTexture, 0);

    // Set the shader uniforms
    gl.uniform1f(programInfo.uniformLocations.uTime, deltaTime);

    // Bind the position buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);

    // Bind the texture coordinate buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(
        programInfo.attribLocations.textureCoord,
        2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.textureCoord);

    // Draw the square
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
}

// Initialize a shader program, so WebGL knows how to draw our data
async function initShaderProgram(gl, vsPath, fsPath) {

    const vertexShaderSource = await fetch(vsPath).then(response => response.text());
    const fragmentShaderSource = await fetch(fsPath).then(response => response.text());

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Create the shader program
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

// Initialize a shader program, so WebGL knows how to draw our data
async function initShaderProgramFromString(gl, vsPath, fsString) {

    const vertexShaderSource = await fetch(vsPath).then(response => response.text());
    const fragmentShaderSource = fsString;

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Create the shader program
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

// Creates a shader of the given type, uploads the source and compiles it.
function loadShader(gl, type, source) 
{
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) 
    {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function loadTexture(gl, url) 
{
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Placeholder pixel
    const level = 0;
    const internalFormat = gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
        width, height, border, srcFormat, srcType,
        pixel);

    const image = new Image();
    image.onload = function () 
    {
        console.log("Image loaded: " + url); // Log when the image is loaded
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
            srcFormat, srcType, image);

        if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
            gl.generateMipmap(gl.TEXTURE_2D);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }
        gl.bindTexture(gl.TEXTURE_2D, null); // Unbind the texture
    };

    image.onerror = function () 
    {
        console.error("Error loading image: " + url); // Log if there's an error
    };
    image.src = url;

    return texture;
}

function isPowerOf2(value) 
{
    return (value & (value - 1)) == 0;
}