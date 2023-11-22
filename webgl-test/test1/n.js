const canvas = document.getElementById("web01");
const gl=canvas.getContext("webgl");
if(!gl)
{
    alert("error");
}
gl.clearColor(0.0,1.0,1.0,1.0);
gl.clear(gl.COLOR_BUFFER_BIT);