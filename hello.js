
    
// const hello=()=>{
//     const heading=document.querySelector("h1")
//     if(heading.innerHTML==="hello!"){
//         heading.innerHTML="Goodbye!"
//     }else{
//     heading.innerHTML="Hello Man!!"
//     }
// }
document.addEventListener("DOMContentLoaded",function(){
    const func =()=>{
        const name = document.querySelector("#name").value;
        document.write(`Your name is ${name}`);
    }
    document.querySelector("form").onsubmit = func

})
