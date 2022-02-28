function func1()
{
    var x=document.getElementById("unit-height").value;
    if(x=="in-feet")
    {
    document.getElementById("input-in-feet").style.display="block";
    document.getElementById("input-in-cm").style.display="none";
    }
}
function func2()
{
    x=document.getElementById("unit-height-1").value;
    if(x=="in-cm")
    {
    document.getElementById("input-in-feet").style.display="none";
    document.getElementById("input-in-cm").style.display="block";
    console.log(7)
    }
    
}
function bmicalculate(){
var weight=document.getElementById("weight-input").value;
var heightunit=document.getElementById("unit-height").value;
var heightunit1=document.getElementById("unit-height-1").value;
var weightunit=document.getElementById("unit-weight").value;
if(heightunit=="in-cm"||heightunit1=="in-cm")
{
    var height=document.getElementById("height-input").value;
    height=height/100;
}
else if(heightunit=="in-feet"||heightunit1=="in-feet")
{
    var heightfeet=parseInt(document.getElementById("height-input-feet").value);
    var heightinch=parseInt(document.getElementById("height-input-inch").value);
    console.log(heightfeet);
    height=(heightfeet*12)+heightinch;
    height=0.0254*height;
    console.log(height);
}
if(weightunit=="in-pound")
weight=weight*0.453592;
var bmi=weight/(height*height);
if (height === "" || isNaN(height)) 
        alert("Provide a valid Height!");
    else if (weight === "" || isNaN(weight)) 
        alert("Provide a valid Weight!");
if(isNaN(bmi)==false)
{
let result = document.querySelector("#short-result");
if (bmi < 18.6)
result.innerHTML="Your BMI Index is "+bmi.toFixed(2)+ " (Under Weight)";
else if (bmi >= 18.5 && bmi < 25) 
result.innerHTML="Your BMI Index is "+bmi.toFixed(2)+ " (Normal)";
else
result.innerHTML="Your BMI Index is "+bmi.toFixed(2)+ " (Over Weight)";
}
}