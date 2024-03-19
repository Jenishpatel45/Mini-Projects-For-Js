const form = document.querySelector('form')
form.addEventListener('submit',(e) =>{
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
    //results.textContent="jenish"
  if(height === '' || height< 0 || isNaN(height))
  {
   results.innerHTML=`please give a valid Height ${height}`;
  }
  else if(weight === '' || weight< 0 || isNaN(weight))
  {
    results.innerHTML=`please give a valid weight ${weight}`;
  }
else{
    const bmi6 = (weight/((height*height)/10000)).toFixed(2);
    console.log(bmi6);
         if ( bmi6 <=18.6) {
           results.innerHTML=`Your bmi is ${bmi6} and you are Under Weight`
         }
         else if(bmi6>18.6 && bmi6<=24.9){
          results.innerHTML=`Your bmi is ${bmi6} and you are Normal Weight`
         }
         else{
          results.innerHTML=`Your bmi is ${bmi6} and you are Over Weight`
         }
    }
  
})