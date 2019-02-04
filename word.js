// this function selects a word and ensure that there is no repeat
var letter_obj=require("./letter")
var word=function(word){
    this.word=word
    this.letters=[]
    this.available=true
    this.display=[]
    this.construction=function(){
        word.split("").forEach(element => {
            var letter= new letter_obj(element)
            this.letters.push(letter)
        });
        this.display_letters()
    }
    this.display_letters=function(){
        this.display=[]
        this.letters.forEach(element=>{
            this.display.push(element.display)
        })
        console.log(this.display)
    }
    this.reset=function(){
        this.available=true
        this.display=[]
        this.letters=[]
    }
    }
    
    module.exports=word;