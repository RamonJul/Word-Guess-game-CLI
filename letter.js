var letter=function(letter){
    this.letter=letter
    this.display="_"
    this.status=true
    this.check=function(guess){
        if(this.status){
        if(guess===this.letter){
            this.status=false
            this.display=this.letter
            return true
        }else{
            return false
        }
    }
}    
}
module.exports=letter