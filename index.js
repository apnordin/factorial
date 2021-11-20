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

const start = () => {
    inquirer
        .prompt({
            name: "whatNum",
            type: "input",
            message: "Please enter an integer",
        })
        .then((answer) => {
            console.log(fact(answer.whatNum));
        }
        )
}



start();