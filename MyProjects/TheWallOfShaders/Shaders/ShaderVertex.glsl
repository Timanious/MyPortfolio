precision highp float;
varying highp vec2 vTextureCoord;
attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;
void main() {
    gl_Position = aVertexPosition;
    vTextureCoord = aTextureCoord;
}