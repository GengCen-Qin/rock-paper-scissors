function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        computerChoice = "rock";
    } else if (computerChoice < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "平局";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "你赢了"; 
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "你赢了";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "你赢了";
    } else {
        return "你输了";
    }
}

function game() {
    let userChoice = prompt("请输入您的选择：(rock | paper | scissors)")
    let computerChoice = getComputerChoice();
    let result = playRound(userChoice, computerChoice); 
    if (result === "你赢了") {
        alert(`You Win! ${userChoice} beats ${computerChoice}`)
        userPoint++;
    } else if (result === "你输了") {
        alert(`You Lose! ${computerChoice} beats ${userChoice}`)
        computerPoint++;
    } else {
        alert("平局，不算")
    }
}
let userPoint = 0;
let computerPoint = 0;


alert("欢迎来到剪刀，石头，布游戏大赛，我们将进行五轮游戏，五轮结束后，我们将计算到底是谁赢了，我们开始吧！！！")

// 循环五轮
for (let i = 0; i < 5; i++) {
    game();
}

if (userPoint > computerPoint) {
    alert("恭喜你，你赢了")
} else if (userPoint < computerPoint) {
    alert("很遗憾，你输了")  
} else {   
    alert("平局")
}