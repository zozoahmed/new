var input = document.getElementById("Answer");
// input.setAttribute("type","number");

function EnterEqual(){
    var sum = input.value;
    if(sum){
        input.value = eval(sum);
    }
   console.log(input.value);
}
function EnterNumber(x){
    input.value += x;
    console.log(x);
}
function EnterOperator(x){
    input.value +=x;
}
function EnterClear(){
    input.value = "";
}