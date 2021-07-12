var num1=" ";
var num2=" ";
var operator;
var flag=0;//flag will track whether opeartor button clicks true or false,default value is false
var display=document.getElementById("display");
var equalTo=0;//initially 0 or false

//function SetNumber(value)
function setValue(number){
    if(equalTo ===1){
          //if equal to button clicked or true
          clearButton();
    }
    if(flag == 0){
        num1+=number;
        //alert(num1);  
        display.innerHTML+= number;
    }
    else{
      //operator button clicked
      num2+=number;
      display.innerHTML+=number;
    }
    if(num1.length > 10 || num2.length > 10)
    {
        display.innerHTML ="MAX limit of digits reached";
    }
}