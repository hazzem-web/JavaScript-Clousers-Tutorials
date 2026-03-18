const incrementCounter = function(){
    let click = 0;
    const button = document.getElementById("btn");
    const result = document.getElementById("result");

    button.addEventListener("click", ()=>{
        click++;
        result.innerText = "clicks:" +  click; 
    })
}

incrementCounter();



