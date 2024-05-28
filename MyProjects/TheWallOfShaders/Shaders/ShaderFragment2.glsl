precision highp float;

// Passed in from the vertex shader.
varying vec2 vTextureCoord;

uniform float u_time; // The time uniform
uniform vec2 u_resolution; // The resolution of the canvas
uniform vec2 u_mouse; // The mouse position uniform
uniform sampler2D u_texture; // The texture uniform

// Function to create a ripple effect
float ripple(vec2 uv, vec2 center, float frequency, float speed) {
    float distance = length(uv - center);
    return sin(distance * frequency - u_time * speed) * 0.005;
}

void main() {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = vTextureCoord;

    // Convert the mouse position to the same normalized coordinate system as the texture
    vec2 mouse = u_mouse / u_resolution;

    // Time varying pixel color
    vec3 col = texture2D(u_texture, uv).rgb;

    // Initialize ripple effect with no waves
    float waveSum = 0.0;

    // Create multiple ripples at the mouse position
    for(float i = 0.0; i < 5.0; i++) {
        waveSum += ripple(uv, mouse, 12.0 + i * 6.0, 3.0 + i);
    }

    // Apply the ripple effect to the texture coordinates
    uv.x += cos(length(uv - mouse) * 12.0) * waveSum;
    uv.y += sin(length(uv - mouse) * 12.0) * waveSum;

    // Output to screen
    col = texture2D(u_texture, uv).rgb;
    gl_FragColor = vec4(col, 1.0);
}
