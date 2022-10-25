alert("I am Functioning!"); 

//We Must Create our array variable first of course//
const arr = ["rock", "paper", "scissors"];

//Next we create a function that will get computer choice//

function getComputerChoice(){
    let random = arr[Math.floor(Math.random() * arr.length)]; 
    return (random);
}

//After we make sure the random choice works we can now get results//
function roundPlay(selection, computerSelection){
    let playerSelection = selection.toLowerCase(); 

    if (playerSelection == computerSelection){
        return "tie";
    }
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            return "lose";
        }
        else{
            return "win";
        }
    }
    else if (playerSelection == 'paper'){
        if (computerSelection == 'scissors'){
            return "lose";
        }
        else {
            return "win";
        }
    }
    else if (playerSelection == 'scissors'){
        if (computerSelection == 'rock'){
            return "lose";
        }
        else {
            return 'win'; 
        }
    }
    else {
        return "invalid"
    }


}