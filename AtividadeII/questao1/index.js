function promessa(time){
   return new Promise(resolve => setTimeout(resolve, time));

}

promessa(2000).then(() => console.log("2 segundos se passaram"));


