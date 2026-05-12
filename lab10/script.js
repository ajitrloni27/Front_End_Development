function run() {

    let n = document.getElementById("num").value;
    let out = document.getElementById("out");

    // Validation
    if (n < 1 || n > 10) {
        out.innerHTML = "Enter number between 1 and 10";
        return;
    }

    // Fibonacci using while loop
    let a = 0, b = 1, i = 0;
    let fib = "";

    while (i < n) {
        fib += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
        i++;
    }

    // Factorial using do-while loop
    let fact = 1;
    let j = n;

    do {
        fact *= j;
        j--;
    } while (j > 0);

    // Output
    out.innerHTML =
        "Fibonacci: " + fib + "<br>" +
        "Factorial: " + fact;
}