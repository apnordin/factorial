const inquirer = require("inquirer");

const fact = (n) => {
    if (n >= 1) {
        return (
            n * fact(n-1)
            )
    } else if (n === 0) {
        return (1)
    }
}

const fib = (n) => {
    console.log("You are using a for loop!");
    const fibSeq = [1, 1]
    for (let i=1; i < n-1; i++) {
        fibNum = fibSeq[i-1] + fibSeq[i]
        fibSeq.puscah(fibNum)
    }
    return(fibSeq.slice(-1)[0])
}

const fibRecursive = (n) => {
    if (n > 2) {
        return (
            fibRecursive(n-2) + fibRecursive(n-1)
            );
        } return (1)
}

const start = () => {
    inquirer
        .prompt({
            name: "whatCalc",
            type: "list",
            choices: [
                "Calculate a factorial",
                "Calculate the number at a certain position of the Fibonacci sequence",
            ],
            message: "Would you like to calculate a factorial, or calculate the number at a certain position of the Fibonacci sequence?"
        })
        .then((answer) => {
            answer.whatCalc === "Calculate a factorial"
            ? inquirer
            .prompt({
                name: "whatNum",
                type: "input",
                message: "Please enter an integer",
            })
            .then((answer) => {
                console.log("The factorial of", answer.whatNum, "is", fact(answer.whatNum));
            })
            : inquirer
            .prompt({
                name: "howCalc",
                type: "list",
                choices: [
                    "Use a for loop",
                    "Use recursive code",
                ],
                message: "How would you like to calculate your answer?"
            }).then((answer) => {
                answer.howCalc === "Use a for loop"
                ? inquirer.prompt({
                    name: "whatNum",
                    type: "input",
                    message: "Please enter an integer",
                })
                .then((answer) => {
                    console.log("The number at position", answer.whatNum, "of the Fibonacci sequence is", fib(answer.whatNum));
                })
                : inquirer.prompt({
                    name: "whatNum",
                    type: "input",
                    message: "Please enter an integer",
                })
                .then((answer) => {
                    console.log("You are using recursive code!");
                    console.log("The number at position", answer.whatNum, "of the Fibonacci sequence is", fibRecursive(answer.whatNum));
                })
            })
        })

}



start();