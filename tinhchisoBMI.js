let w=prompt("Enter your weight (kg)")
let h=prompt("Enter your height (m)")
bmi=w/(h*h);
if (bmi<18.5){
    alert('Your BMI is '+bmi+ ' Underweight')
}else if(bmi<25){
    alert('Your BMI is '+bmi+ ' Normal')
}else if(bmi<30){
    alert('Your BMI is '+bmi+ ' Overweight')
}else{
    alert('Your BMI is '+bmi+ ' Dangerous !')
}

