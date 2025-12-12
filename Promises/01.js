const promiseOne = new Promise(function(resolve, reject){
      // Do an Async Task
      // Db calls , cryptigraphy  ,networkcalls 
      setTimeout(function(){
            console.log('Async task is complete');
            resolve()
      },1000)
}).then(function(){
      console.log("Task one is consumed");
      
})

new Promise(function(resolve, reject){
      setTimeout(function(){
            console.log("Async Task 2");
            resolve();
            
      },1000)
}).then(function(){
      console.log("Async Task is 2 Consumed");
})


const PromiseThree = new Promise(function(resolve, reject){
      setTimeout(() => {
            resolve({username:"Rahul",
                  email : "poddarrahul@gmail.com"
            })
      }, 1000);
}).then(function(user){
      console.log(user);     
})

const PromiseFour = new Promise(function(resolve, reject){
      setTimeout(() => {
            let error = true;
            if(!error){
                  resolve({username:"Rahul", password:"123"})
            }
            else{
                  reject("ERROR:Something went Wrong");
            }
      }, 2000)
}).then((user) => {
      console.log(user.username);
}).catch()