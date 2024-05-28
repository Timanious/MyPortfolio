precision highp float;
varying highp vec2 vTextureCoord;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_texture;
void main() 
{
    gl_FragColor = texture2D(u_texture,vTextureCoord);
}