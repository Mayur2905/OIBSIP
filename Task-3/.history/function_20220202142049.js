let outputScreen = document.getElementById("output-screen");
function display(num){
    outputScreen.value += num;

}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);

    }
    catch(err){
        alert("Invalid Input")
    }
    
}
function Clear(){
    outputScreen.value="";
}