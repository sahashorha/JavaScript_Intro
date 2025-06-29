 const form = document.querySelector('form')
 const clearBtn = document.querySelector('.clear');
 clearBtn.innerHTML = "clear"
 clearBtn.style.backgroundColor = "red";
 const Calculate = document.querySelector('.submits');
 Calculate.style.backgroundColor = "green";
form.addEventListener('submit',function(e){
      e.preventDefault()
      const height = parseInt(document.querySelector('#height').value)
      const weight = parseInt(document.querySelector('#Weight').value)
      const result = document.querySelector('#result')

      if(height ==='' || height < 0 || isNaN(height)){
            result.innerHTML = `Please give Valid Height ${height}`;
      }
      else if(weight ==='' || weight < 0 || isNaN(weight)){
            result.innerHTML = `Please give Valid weight ${weight}`;
      }
      else{
      const BMI =   (weight/((height *weight)/1000)).toFixed(2);
      // show the reesult
      result.innerHTML = `<span>${BMI}</span>`;
      const message = document.querySelector('.message');
      message.style.fontSize = "30px"
      message.style.color = "red";
      
      if(BMI <18.6){
            message.innerHTML = "You are Under Weight";
      }
      else if(18.6 <= BMI && BMI <= 24.9 ){
            message.innerHTML = "You are Normal Range"
      }
      else if(BMI > 24.9){
            message.innerHTML = 'You are Over Weight'

      }
      }
})
clearBtn.addEventListener('click', function(){
      document.querySelector('#height').value = "";
      document.querySelector('#Weight').value = "";
      document.querySelector('#result').innerHTML = "";
      document.querySelector('.message').innerHTML = "";
})
