question = prompt("Salut ! Quoi de neuf ?")

function botReply(){

    if (question.charAt(question.length-1) == "?"){

        return "Blablablabla..";} 

    else if (question && question === question.toUpperCase()){

        return "Wooow, calme-toi..."
    ;}

    else if (question.includes("Eldenring")){
        return "On s'fait une partie soum-soum ?";}

    else if (question === ""){
        return "T'es en PLS ?"
   ;} 
    else 
    return "Ain't nobody got time for this, Adios"
;}
        


console.log(botReply(question))

