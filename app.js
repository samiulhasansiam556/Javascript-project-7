



document.addEventListener('DOMContentLoaded', () => {
  let bmi1 = document.querySelector('.bmi1');
  let bmi2 = document.querySelector('.bmi2');
  let bmi21 = document.querySelector('.bmi21');
  let bmiresult = document.querySelector('.bmiresult');

  let b1 = document.getElementById('b1');

  b1.addEventListener('click', () => {
    
    // Parse input values as numbers
      let weight = parseFloat(bmi1.value);
      let feet = parseFloat(bmi2.value);
      let inches = parseFloat(bmi21.value);

      // Convert height to meters
      let heightInInches = feet * 12 + inches;
      let heightInMeters = heightInInches * 0.0254;


      // Calculate BMI
      let result = weight / (heightInMeters * heightInMeters);

      // Update BMI result
      bmiresult.value = result.toFixed(2); 
  });
});



let bmr1,bmr2,bmr21,bmr3,bmr4,bmrresult;
  
bmr1= document.querySelector('.bmr1');
bmr2= document.querySelector('.bmr2');
bmr21= document.querySelector('.bmr21');
bmr3= document.querySelector('.bmr3');
bmr4= document.querySelector('.bmr4');
bmrresult= document.querySelector('.bmrresult');

let b11 = document.getElementById('b11');



b11.addEventListener('click',()=> {

  let feet = parseFloat(bmr2.value);
  let inches = parseFloat(bmr21.value);

  // Convert height to meters
  let heightInInches = feet * 12 + inches;
  let heightCentiMeters = heightInInches * 2.54;



     if(bmr4.value == "Male"){
    
          let Result = 66 + (13.7 * bmr1.value) + (5 *heightCentiMeters ) - (6.8 * bmr3.value)
        
          bmrresult.value =  Result;
    }
    else{
     
         
        let Result = 655 + (9.6 * bmr1.value) + (1.8 * bmr2.value * 30.48) - (4.7 * bmr3.value)
        
        bmrresult.value =  Result;
         
    }

  

})