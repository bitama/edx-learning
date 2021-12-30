document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#submit").disabled=true;

    document.querySelector("#tasks").onkeyup=function(){
        if(document.querySelector("#tasks").value.length > 0){
            document.querySelector("#submit").disabled=false;
        }else{
            document.querySelector("#submit").disabled=true;
        }
        document.querySelector("#tasks").style.background="blue"

    }
    document.querySelector("form").onsubmit=()=>{
        const task = document.querySelector("#tasks").value;
       const li =document.createElement("li")
       li.innerHTML = task
       document.querySelector("#task").append(li)
       document.querySelector("input").value = "";
       document.querySelector("#submit").disabled=true
       
        return false;
    }
})