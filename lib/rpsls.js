export { rps } 
export { rpsls }

//rps
function rps(move){

const avaliable_move = ["rock", "paper", "scissors"]; 

if (move === undefined){
     return {'player': avaliable_move[Math.floor(Math.random() * 3)]};
}else if (!availableMoves.includes(move)){
        console.error('Error: Available moves are rock, paper, or scissors.')
        throw new RangeError()
}else{
  const player_move = avaliable_move[random_move];
  let result;
 
 
