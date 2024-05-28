precision highp float;

varying highp vec2 vTextureCoord;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_texture;

void main() 
{
    vec2 uv = gl_FragCoord.xy/u_resolution;

    gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}