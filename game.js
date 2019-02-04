var word_list=require("./word_list")
var list=["cat", "dogs"]
var word_list_obj=new word_list(list)
word_list_obj.create_words()
var word

module.exports={
    guessed:[],
    life:6,
    state:"",
    setup:function(){
        //select a word and then display the word
       word=word_list_obj.select_word()
       word.construction()
    },
    lettercheck:function(guess){
        var good = true;
            this.guessed.forEach(element=>{
                if (guess === element) {
                    good = false;
                }
            })
        return good;
    },
    guess_check:function(guess){
        console.log(`You are guessing ${guess}`)
        var wrong = true;
        // console.log(parseInt(guess)==NaN)
        //check if more than 1 chareacter if its a number and if it had been guessed
        if (guess.length===1&&this.lettercheck(guess)||this.guessed.length===0) {
             guess=guess.toLowerCase();// to allow uppercase entries
           this.guessed.push(guess)
            word.letters.forEach(element=>{
                if(element.check(guess)){
                   wrong=false
                }
            })  

            if (wrong) {

                console.log("Wrong")
                this.life--;
                if(this.life===0){
                   this.state="lost"
                }
                else{
                    console.log(` You have ${this.life} lives remaining`)
                    word.display_letters()
                    this.state="playing"

                }
                }else if(this.word_state()){
                    console.log("won")
                    this.state="won"
                    //you won
                 }else{
                    word.display_letters()
                    this.state="playing"
                 }
            }
        else{
            console.log("Try again ")
            this.state="playing"
            word.display_letters()

        }
        console.log(`You have guessed the following ${this.guessed}`)
        return this.state
        },
    word_state:function(){
        var done=true
        word.letters.forEach(element=>{
            if(element.status){
                 done=false
            }
        })
        return done

},
    endstate:function(){
        if(this.state==="won"){
            console.log("Nice one")
            return true;
            //win condition
        }
        else{
            console.log("You lost")
            console.log(`The word was ${word.word}`)
            this.life=6
            word_list_obj.word_list.forEach(elemenet=>{
                    elemenet.reset()

            })
            return false;
            //lose results
        }
        
        }
        
}