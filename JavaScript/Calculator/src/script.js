function getValues(){
    let firstValue = parseInt(document.getElementById('firstNumber').value)

    let secondValue =parseInt(document.getElementById('SecondNum').value);

   if (firstValue && secondValue) {
     return [firstValue,secondValue];
   }else{
     alert("Enter a valid Number")
   }

 }

   function add() {

     let [firstValue, secondValue] = getValues();
     let result = firstValue + secondValue;
     document.getElementById("result").innerHTML = result;
   }
   function Sub(){
     let [firstValue ,secondValue] =getValues();
     let result =firstValue - secondValue;
     document.getElementById('result').innerHTML =result;
   }

   function Mul(){
     let [firstValue,secondValue] =getValues();
     let result =firstValue * secondValue;
     document.getElementById('result').innerHTML =result;
   }
   function Div(){
     let [firstValue,secondValue] =getValues();
     let result =firstValue / secondValue;
     document.getElementById('result').innerHTML =result;
   }

   function Mod(){
     let [firstValue,secondValue] =getValues();
     let result =firstValue % secondValue;
     document.getElementById('result').innerHTML =result;
   }

   function Clear(){
     document.getElementById('firstNumber').value="";
     document.getElementById('SecondNum').value ="";
     document.getElementById('result').innerHTML = "";
   }
   