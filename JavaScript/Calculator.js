num1=parseInt(prompt("Enter a Number1:"));
num2=parseInt(prompt("Enter a Number2:"));
operator=prompt("Choose Operation:add/sub/mul/div-")
if(operator=="add"){
      console.log("Addition of "+num1+" and "+num2+" is "+(num1+num2))
}
else if(operator=="sub"){
    console.log("Subtraction of "+num1+" and "+num2+" is "+(num1-num2))
}
else if(operator=="mul"){
    console.log("Multiplication of "+num1+" and "+num2+" is "+(num1*num2))
}
else if(operator=="div"){
      console.log("Division of "+num1+" and "+num2+" is "+(num1/num2))
}
else{
    console.log("Operation is invalid")
}
