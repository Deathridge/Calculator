var currentCalc = [];

document.getElementById("AC").addEventListener("click", function(){
  currentCalc = [];
  document.getElementById("screen").value = currentCalc.join(" ");
});
                                                
document.getElementById("%").addEventListener("click", function(){
  currentCalc.push("%");
  document.getElementById("screen").value = currentCalc.join(" ");
});

document.getElementById("/").addEventListener("click", function(){
  currentCalc.push("/");
  document.getElementById("screen").value = currentCalc.join(" ");
});

document.getElementById("x").addEventListener("click", function(){
  currentCalc.push("*");
  document.getElementById("screen").value = currentCalc.join(" ");
});

document.getElementById("-").addEventListener("click", function(){
  currentCalc.push("-");
  document.getElementById("screen").value = currentCalc.join(" ");
});

document.getElementById("+").addEventListener("click", function(){
  currentCalc.push("+");
  document.getElementById("screen").value = currentCalc.join(" ");
});



document.getElementById("0").addEventListener("click", function(){
  currentCalc.push("0");
  document.getElementById("screen").value = currentCalc.join(" ");
});

document.getElementById("1").addEventListener("click", function(){
  currentCalc.push("1");
  document.getElementById("screen").value = currentCalc.join(" ");
});
document.getElementById("2").addEventListener("click", function(){
  currentCalc.push("2");
  document.getElementById("screen").value = currentCalc.join(" ");
});
document.getElementById("3").addEventListener("click", function(){
  currentCalc.push("3");
  document.getElementById("screen").value = currentCalc.join(" ");
});
document.getElementById("4").addEventListener("click", function(){
  currentCalc.push("4");
  document.getElementById("screen").value = currentCalc.join(" ");
});
document.getElementById("5").addEventListener("click", function(){
  currentCalc.push("5");
  document.getElementById("screen").value = currentCalc.join(" ");
});
document.getElementById("6").addEventListener("click", function(){
  currentCalc.push("6");
  document.getElementById("screen").value = currentCalc.join(" ");
});
document.getElementById("7").addEventListener("click", function(){
  currentCalc.push("7");
  document.getElementById("screen").value = currentCalc.join(" ");
});
document.getElementById("8").addEventListener("click", function(){
  currentCalc.push("8");
  document.getElementById("screen").value = currentCalc.join(" ");
});
document.getElementById("9").addEventListener("click", function(){
  currentCalc.push("9");
  document.getElementById("screen").value = currentCalc.join(" ");
});

document.getElementById(".").addEventListener("click", function(){
  currentCalc.push(".");
  document.getElementById("screen").value = currentCalc.join(" ");
});

document.getElementById("=").addEventListener("click", function(){  
  document.getElementById("screen").value = sumTotal(currentCalc);
});

function sumTotal(calc){
  return eval(calc.join(""));
}