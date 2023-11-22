function initShader(gl,VERTEX_SHADER,FRAG_SHADER){
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
    return program;
}