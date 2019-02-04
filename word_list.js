var word=require("./word")
var word_list=function(word_list){
    this.word_list=[]
    this.create_words=function(){
        word_list.forEach(element => {
            var word_obj=new word(element)
            this.word_list.push(word_obj)
        });

    }
    this.select_word=function(){
        while(true){
            var number=Math.floor(Math.random() * this.word_list.length);   
            if(this.word_list[number].available){
                this.word_list[number].available=false;
                break;
            }
        }
        return this.word_list[number]
    }
}
    module.exports=word_list;