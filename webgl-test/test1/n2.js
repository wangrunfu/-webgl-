//获取HTML文档中id为"web02"的<canvas>元素，并将其赋值给一个常量canvas
const canvas=document.getElementById("web02");
//从canvas元素中获取一个WebGL的绘图上下文，并将其赋值给一个常量gl。如果浏览器不支持WebGL，那么gl的值将为null
const gl=canvas.getContext("webgl");
if(!gl)
{
    alert("error");
}
//定义一个顶点着色器的源代码，并将其赋值给一个常量VERTEX_SHADER。顶点着色器是一种在GPU上执行的特殊效果代码，
//用来处理每个顶点的属性，如位置、颜色、法向量等。这里的顶点着色器只有一个主函数，将顶点的位置设为(0.0,-0.5,1.0,1.0)，
//这是一个齐次坐标，表示在裁剪空间中的位置。它还将顶点的大小设为10.0像素。
const VERTEX_SHADER=""+
    "void main(){"+
    "gl_Position=vec4(0.0,-0.5,1.0,1.0);"+
    "gl_PointSize=10.0;"+
    "}";
//定义一个片元着色器的源代码，并将其赋值给一个常量FRAG_SHADER。片元着色器是一种在GPU上执行的特殊效果代码，
//它用来处理每个像素的颜色，如纹理、光照、透明度等。这里的片元着色器只有一个主函数，它将每个像素的颜色设为(1.0,0.0,0.0,1.0)，
//这是一个RGBA向量，表示红色不透明的颜色
const FRAG_SHADER=""+
    "void main(){"+
    "gl_FragColor=vec4(1.0,0.0,0.0,1.0);"+
    "}";
//创建一个顶点着色器对象，并将其赋值给一个常量vertex。
const vertex=gl.createShader(gl.VERTEX_SHADER);
//创建一个片元着色器对象，并将其赋值给一个常量frag。
const frag=gl.createShader(gl.FRAGMENT_SHADER);
//将顶点着色器的源代码赋值给顶点着色器对象。
gl.shaderSource(vertex,VERTEX_SHADER);
//将片元着色器的源代码赋值给片元着色器对象。
gl.shaderSource(frag,FRAG_SHADER);
//编译顶点着色器对象，检查是否有语法错误或其他问题。
gl.compileShader(vertex);
//编译片元着色器对象，检查是否有语法错误或其他问题。
gl.compileShader(frag);
//创建一个着色器程序对象，并将其赋值给一个常量program。着色器程序对象是用来连接顶点着色器和片元着色器的。
const program=gl.createProgram();
//将顶点着色器对象附加到着色器程序对象上。
gl.attachShader(program,vertex);
//将片元着色器对象附加到着色器程序对象上。
gl.attachShader(program,frag);
//链接着色器程序对象，检查是否有连接错误或其他问题。
gl.linkProgram(program);
//使用着色器程序对象，将其设置为当前的渲染状态。
gl.useProgram(program);
//设置清除颜色缓冲区时使用的颜色，这里是黑色不透明的颜色。
gl.clearColor(0.0,0.0,0.0,1.0);
//清除颜色缓冲区，使用上一行代码设置的颜色填充整个画布。
gl.clear(gl.COLOR_BUFFER_BIT);
//绘制一个点，使用当前的渲染状态。
//第一个参数是指定绘制的图元类型，这里是点。第二个参数是指定从哪个顶点开始绘制，这里是0。第三个参数是指定绘制多少个顶点，这里是1。
//因为没有指定顶点的数据，所以默认使用顶点着色器中设置的顶点位置和大小。
gl.drawArrays(gl.POINTS,0,1);