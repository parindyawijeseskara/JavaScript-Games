function pickUserHand(paper) {
    console.log(paper);
    /*Hide the current page*/
    let hands = document.querySelector(".hands");
    hands.style.display="none";

    /*To show the current page*/
    let compete = document.querySelector(".compete");
    compete.style.display="flex";


    /*Set the user choice*/
    document.getElementById("userPickedImage").src = handOptions[paper];

    var computerHand =pickComputerHand();
    centerContainer(paper,computerHand);

}

function pickUserHand(scissor) {
    console.log(scissor);

    /*Hide the current page*/
    let hands = document.querySelector(".hands");
    hands.style.display="none";

    /*To show the current page*/
    let compete = document.querySelector(".compete");
    compete.style.display="flex";


    /*Set the user choice*/
    document.getElementById("userPickedImage").src = handOptions[scissor];

    var computerHand =pickComputerHand();
    centerContainer(scissor,computerHand);

}
function pickUserHand(rock) {


    /*Hide the current page*/
    let hands = document.querySelector(".hands");
    hands.style.display="none";

    /*To show the current page*/
    let compete = document.querySelector(".compete");
    compete.style.display="flex";


    /*Set the user choice*/
    document.getElementById("userPickedImage").src = handOptions[rock];

    var computerHand =  pickComputerHand();

    centerContainer(rock,computerHand);

}

var handOptions={
    "rock":"assets/img/image5.jpg",
    "paper":"assets/img/image7.jpg",
    "scissor":"assets/img/image6.jpg"
}

function pickComputerHand(){
    var hands = ["rock","paper","scissor"]
    var computerHand = hands[Math.floor(Math.random()*3)]

    console.log("CCCC",computerHand);

    /*Set the computer choice*/
    document.getElementById("computerPickedImage").src = handOptions[computerHand]

    return computerHand;
}


function centerContainer(userChoice,computerHand) {
    if(userChoice == "paper" && computerHand == "scissor"){
        decision("YOU LOSE!");
    }else if (userChoice == "paper" && computerHand =="rock"){
        decision("YOU WIN!");
        score(SCORE + 1);
    }else if (userChoice == "paper" && computerHand =="paper"){
        decision("It's a tie!");
    }else if(userChoice == "rock" && computerHand =="scissor"){
        decision("YOU WIN!");
        score(SCORE + 1);
    }else if (userChoice == "rock "&& computerHand =="paper"){
        decision("YOU LOSE!");
    }else if (userChoice =="rock" && computerHand =="rock"){
        decision("It's a tie!");
    }else if (userChoice =="scissor" && computerHand == "scissor"){
        decision("It's a tie!");
    }else if(userChoice=="scissor" && computerHand == "rock"){
        decision("YOU LOSE!");
    }else if(userChoice =="scissor" && computerHand == "paper") {
        decision("YOU WIN!");
        score(SCORE + 1);
    }

}
/*Set the decision*/
function decision(decision) {
    console.log(decision);
    document.querySelector(".decision h1").innerText = decision;



}

var SCORE = 0;

/*Set the score*/
function score(scoreBox) {
    console.log(scoreBox);
    SCORE = scoreBox;
    document.querySelector(".scoreBox h1").innerText = scoreBox;


}

/*Play the game agin*/
function startAgain() {
    /*Show the next page with the hand you choose*/
    let hands = document.querySelector(".hands");
    hands.style.display="flex";

    let compete = document.querySelector(".compete");
    compete.style.display="none";


}