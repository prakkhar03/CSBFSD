// console.log("Hello World");
// // var a=23;
// console.log("a"+a);
// let a=23;
// var a=23;
// if (a===23){
//     // let a=300;
//     console.log("Equal");
// }
// else{
//     console.log("Not Equal");
// }
// console.log(a);

// const name="Inferno";
// console.log(name);
// const data=`hello...${name}`;
// console.log(data);

// function msg(){
//     return "Hello World";
// }
// const name1=msg();
// console.log(name1);

// const data=function msg(name){
//     return `Hello...${name}`;
// }
// const name1=data("Inferno");
// console.log(name1);

// const data=(name)=>{
//     return `Hello...${name}`;
// }
// const name1=data("Inferno");
// console.log(name1);

// const data=msg=>msg;
// console.log(data("Hello World"));


//IIFE
// (function(){
//     console.log("Hello World");
// })();

// (()=>{
//     console.log("Hello World");

// })();

// setTimeout(()=>{
//     console.log("Hello World");
// },1000);

// function greeting(message="Hello World"){
//     console.log(message);
// }
// greeting();
// greeting("Hello Inferno");

function selectlanguage(lang){
    let data;
    if (lang=='java'){
        function javaCompiler(){
            return "Java Compiler";
        }
        data=javaCompiler();

    }
    else if (lang=='python'){
        function pythonCompiler(){
            return "Python Interpreter";
        }
        data=pythonCompiler();
    }
    else if (lang=='c'){
        function cCompiler(){
            return "C Compiler";
        }
        data=cCompiler();
    }
    else{
        data="Not Found";
    }
    return data;
}
console.log(selectlanguage('java'));
console.log(selectlanguage('python'));
console.log(selectlanguage('c'));
console.log(selectlanguage('ruby'));