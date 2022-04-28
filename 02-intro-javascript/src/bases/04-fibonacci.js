

const fibonacci = (num) => {
    const fib = [0, 1];
    for(let i = 2; i <= num; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[num];

}

console.log("El número de la posición 10 en la sucesión de fibonacci es: " + fibonacci(10));
