/*
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

let counter = outer();

counter() // 1
counter() // 2
counter() // 3
*/




function createCounter(){
    let count = 0;
    return { 
        increment: function(){
            count++;
            console.log(count);
            return count;
        },
        decrement: function(){
            count--
            console.log(count);
            return count;
        }
    }
}


let counter = createCounter();

counter.increment() // 1
counter.increment() // 2
counter.decrement() // 1