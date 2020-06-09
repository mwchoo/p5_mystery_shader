precision mediump float;

uniform vec2 u_resolution; 
uniform vec2 u_mouse; // [mouseX, mouseY]
uniform float u_time;
void main() {

vec2 st = gl_FragCoord.xy/
u_resolution.xy;
gl_FragColor = vec4( st.x, sin(u_time),
0.5, 1.0);
}