const canvas=document.getElementById("web03");
const gl=canvas.getContext("webgl");
if(!gl)
{
    alert("error gl");
}
const VERTEX_SHADER=""+
    "attribute vec4 a_pos;"+
    "void main(){"+
    "gl_Position=a_pos;"+
    "gl_PointSize=25.0;"+
    "}";
const FRAG_SHADER=""+
    "precision lowp float;"+
    "uniform vec4 u_color;"+
    "void main(){"+
    "gl_FragColor=u_color;"+
    "}";
const vertex=gl.createShader(gl.VERTEX_SHADER);
const frag=gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(vertex,VERTEX_SHADER);
gl.shaderSource(frag,FRAG_SHADER);
gl.compileShader(vertex);
gl.compileShader(frag);
const program=gl.createProgram();
gl.attachShader(program,vertex);
gl.attachShader(program,frag);
gl.linkProgram(program);
gl.useProgram(program);
const a_position=gl.getAttribLocation(program,"a_pos");
const u_color=gl.getUniformLocation(program,"u_color");
gl.vertexAttrib4f(a_position,0.0,0.0,1.0,1.0);
gl.uniform4f(u_color,0.0,1.0,0.0,1.0);
gl.drawArrays(gl.POINTS,0,1);