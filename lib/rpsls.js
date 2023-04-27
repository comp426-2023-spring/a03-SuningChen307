export { rps } 
export { rpsls }

//rps
function rps(move){

const avaliable_move = ["rock", "paper", "scissors"]; 

if (move === undefined){
     return {'player': avaliable_move[Math.floor(Math.random() * 3)]};
}
