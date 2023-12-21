// console.log("hello");
const newgame = document.querySelector(".new-btn");
const screen = document.querySelector(".intro");
const mainscreen = document.querySelector(".match");
const player_choice = document.querySelectorAll("#choice");
const computer_options = ["rock", "paper", "scissor"];
const computer_hand = document.querySelector(".computer-hand");
const player_hand = document.querySelector(".player-hand");
const winner = document.querySelector(".winner");
const player_score = document.querySelector("#player_s");
const computer_score = document.querySelector("#computer_s");
const hands= document.querySelectorAll(".hands img");
const reset=document.querySelector(".reset-btn");

let player_points = 0;
let computer_points = 0;

newgame.addEventListener("click", () => {
    // console.log("hello");
    screen.classList.add("hide");
    mainscreen.classList.remove("hide");
    reset.classList.remove("hide");
});

reset.addEventListener("click",()=>{
    player_points=0;
    computer_points=0;
    player_score.innerText = player_points;
    computer_score.innerText = computer_points;

});


let computer_nu = 0;
let computer_choice = "";


const computer_choices = () => {
    computer_nu = Math.floor(Math.random() * 3);
    computer_choice = computer_options[computer_nu];
}

function playgame()
 {

    player_choice.forEach((choice) => {
        choice.addEventListener("click", () => {
            //   console.log(choice.innerText);

            computer_choices();
            setTimeout(()=>{
                winning_statement(choice.innerText, computer_choice);

                // console.log(computer_choice);
                player_hand.src = `${choice.innerText}.png`;
                computer_hand.src = `${computer_choice}.png`;
            },2000);
           

            //shaking animations
             player_hand.style.animation= 'shakeplayer 2s ease';
             computer_hand.style.animation = 'shakeComputer 2s ease';
        });
    });

    hands.forEach(hand=>{
       hand.addEventListener("animationend",function()
       {
        this.style.animation="";
       });
    });
}
playgame();

function winning_statement(player_option, computer_choice) {
    //tie condition
    // console.log(player_option);
    // console.log(computer_choice);
    if (player_option === computer_choice) {
        winner.innerText = "It's a Tie";
        return;
    }

    //if player choose rock
    if (player_option === "rock") {
        if (computer_choice === "scissor") {
            winner.innerText = "Player Wins";
            player_points++;
            update();
            return;
        }
        else {
            winner.innerText = "Computer Wins";
            computer_points++;
            update();
            return;
        }
    }

    //if player choose paper
    if (player_option === "paper") {
        if (computer_choice === "rock") {
            winner.innerText = "Player Wins";
            player_points++;
            update();
            return;
        }
        else {
            winner.innerText = "Computer Wins";
            computer_points++;
            update();
            return;
        }
    }

    //if player choose scissor
    if (player_option === "scissor") {
        if (computer_choice === "paper") {
            winner.innerText = "Player Wins";
            player_points++;
            update();
            return;
        }
        else {
            winner.innerText = "Computer Wins";
            computer_points++;
            update();
            return;
        }
    }
};

const update = () => {
    player_score.innerText = player_points;
    computer_score.innerText = computer_points;
};