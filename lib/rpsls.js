export { rps } 
export { rpsls }

//rps
function rps(move){

const avaliable_move = ["rock", "paper", "scissors"]; 

if (move === undefined){
     return {'player': avaliable_move[Math.floor(Math.random() * 3)]};
}else if (!available_moves.includes(move)){
        console.error('Error: Available moves are rock, paper, or scissors.')
        throw new RangeError()
}else{
  const player_move = avaliable_move[random_move];
  let result;
 
  switch (move.toLowerCase()) { 
     case 'rock':
                result = (other_move === 'rock') ? 'tie' :
                         (other_move === 'paper') ? 'lose' : 'win';
                break;
     case 'paper':
                result = (other_move === 'paper') ? 'tie' :
                         (other_move === 'scissors') ? 'lose' : 'win';
                break;
     case 'scissors':
                result = (other_move === 'scissors') ? 'tie' :
                         (other_move === 'rock') ? 'lose' : 'win';
                break;
  }
   return{
      player: move.toLowerCase()
      other: other_move,
      result: result
   };
  }
}
// rpsls
function rpsls(move){

    const avaliable_move = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

if (move === undefined){
     return {'player': avaliable_move[Math.floor(Math.random() * 5)]};
}else if (!available_moves.includes(move)){
        console.error('Error: Available moves are rock, paper, scissors, lizard, or spock.')
        throw new RangeError();
}else{
   const player_move = avaliable_move[random_move];
   let result;

    switch (move.toLowerCase()) {
       case 'rock':
                result = (other_move === 'rock') ? 'tie' :
                (other_move === 'paper' || other_move === 'spock') ? 'lose' : 'win';
                break;
      case 'paper':
                result = (other_move === 'paper') ? 'tie' :
                         (other_move === 'scissors' || other_move === 'lizard') ? 'lose' : 'win';
                break;  
      case 'scissors':
                result = (other_move === 'scissors') ? 'tie' :
                         (other_move === 'rock' || other_move === 'spock') ? 'lose' : 'win';
                break;
