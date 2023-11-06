function hello(){
    let input=prompt('Type your name');
    let card='Hello'+' '+ input ;
    if(input == ""){
        alert("There is no name entered!!") 
    }
     else {
        document.getElementById("card").innerHTML = card;
     }
}