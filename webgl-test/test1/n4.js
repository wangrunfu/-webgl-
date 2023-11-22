const canvas=document.getElementById("web04");
const gl=canvas.getContext("webgl");
const VERTEX_SHADER=""+
    "attribute vec4 a_pos;"+
    "void main(){"+
    "gl_Position=a_pos;"+
    "gl_PointSize=15.0;"+
    "}";
const FRAG_SHADER=""+
    "void main(){"+
    "gl_FragColor=vec4(0.0,1.0,0.0,1.0);"+
    "}";
const program=initShader(gl,VERTEX_SHADER,FRAG_SHADER);
const dataVertices=new Float32Array([
    0.0,0.0,
    0.5,0.5,
    0.5,-0.5,
    -0.5,-0.5,
    -0.5,0.5
]);
const  buffer=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
gl.bufferData(gl.ARRAY_BUFFER,dataVertices,gl.STATIC_DRAW);
const a_pos=gl.getAttribLocation(program,"a_pos");
gl.vertexAttribPointer(a_pos,2,gl.FLOAT,false,0,0);
gl.enableVertexAttribArray(a_pos);
gl.drawArrays(gl.POINTS,0,5);