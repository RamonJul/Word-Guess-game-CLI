var game=require("./game")
var inquirer=require("inquirer")
var state="start"
word_guess()
function word_guess(){
switch(state){
    case"start":
    inquirer.prompt([
        {
            type:"confirm",
            message:"Do you want to play",
            name:"playing"
        }
    ]).then(function(response){
        if(response.playing){
            state="guessing"
            game.setup()
            word_guess()
        }
    })
   
    break;
    case"guessing":
  
    inquirer.prompt([
        {
            type:"input",
            name:"input"
        }
    ]).then(function(response){
       
        if(game.guess_check(response.input)!="playing"){
            state="game_over"
        }
        
        word_guess()   
    })
    break;

    case"game_over":
    if( game.endstate()){
        state="guessing"
        game.setup()
        word_guess()
    }
    else{
        inquirer.prompt([
            {
                type:"confirm",
                message:"Do you want to play again",
                name:"playing"
            }
        ]).then(function(response){
            if(response.playing){
                state="guessing"
                game.setup()

            }
            else{
                state="start"
            }
            word_guess()
        })
   
    }
   
    break;



}
}