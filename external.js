// //We Must Create our array variable first of course//
// const arr = ["rock", "paper", "scissors"];

// //Next we create a function that will get computer choice//

// function getComputerChoice(){
//     let random = arr[Math.floor(Math.random() * arr.length)]; 
//     return (random);
// }

// //After we make sure the random choice works we can now get results//
// function roundPlay(selection, computerSelection){
//     let playerSelection = selection.toLowerCase(); 

//     if (playerSelection == computerSelection){
//         return "tie";
//     }
//     else if (playerSelection == 'rock'){
//         if (computerSelection == 'paper'){
//             return "lose";
//         }
//         else{
//             return "win";
//         }
//     }
//     else if (playerSelection == 'paper'){
//         if (computerSelection == 'scissors'){
//             return "lose";
//         }
//         else {
//             return "win";
//         }
//     }
//     else if (playerSelection == 'scissors'){
//         if (computerSelection == 'rock'){
//             return "lose";
//         }
//         else {
//             return 'win'; 
//         }
//     }
//     else {
//         return "invalid";
//     }
// }

// function game(){
//     let playerWins = 0;
//     let compWins = 0;

//     while (playerWins < 5 && compWins < 5){
//         let choice = prompt('Choose your hand!');
//         let compChoice = getComputerChoice(); 

//         let result = roundPlay(choice, compChoice); 
//         console.log(compChoice);

//         switch (result){
//             case "win":
//                 playerWins = playerWins + 1;
//                 alert('Win -- Current Score / Player: ' + playerWins + ' Computer Wins: ' + compWins);
//                 break;
//             case "lose":
//                 compWins = compWins + 1; 
//                 alert('Lose! -- Current Score / Player: ' + playerWins + ' Computer Wins: ' + compWins);
//                 break; 
//             case "tie":
//                 alert('Tie! -- Current Score / Player: ' + playerWins + ' Computer Wins: ' + compWins);
//                 break;
//             default: 
//                 alert('No Contest! -- Current Score / Player: ' + playerWins + ' Computer Wins: ' + compWins);
//                 break; 
//         }
//     }
//     if (playerWins > compWins){
//         alert('Final Score -- You Won!! / Player: ' + playerWins + ' Computer Wins: ' + compWins);
//     }
//     else {
//         alert('Final Score -- You Lost!! / Player: ' + playerWins + ' Computer Wins: ' + compWins);
//     }
//     return 0; 

// }
