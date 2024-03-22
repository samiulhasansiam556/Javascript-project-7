
 let bmi1,bmi2,bmiresult;
  
  bmi1= document.querySelector('.bmi1');
  bmi2= document.querySelector('.bmi2');
  bmiresult= document.querySelector('.bmiresult');

  let b1 = document.getElementById('b1');



b1.addEventListener('click',()=> {



    let height = (bmi2.value*0.3048) *  (bmi2.value*0.3048)

       result = bmi1.value / height ;
         
    
         bmiresult.value =  result;

})



let bmr1,bmr2,bmr3,bmr4,bmrresult;
  
bmr1= document.querySelector('.bmr1');
bmr2= document.querySelector('.bmr2');
bmr3= document.querySelector('.bmr3');
bmr4= document.querySelector('.bmr4');
bmrresult= document.querySelector('.bmrresult');

let b11 = document.getElementById('b11');



b11.addEventListener('click',()=> {



     if(bmr4.value == "Male"){
    
          let Result = 66 + (13.7 * bmr1.value) + (5 * bmr2.value * 30.48) - (6.8 * bmr3.value)
        
          bmrresult.value =  Result;
    }
    else{
     
         
        let Result = 655 + (9.6 * bmr1.value) + (1.8 * bmr2.value * 30.48) - (4.7 * bmr3.value)
        
        bmrresult.value =  Result;
         
    }

  

})