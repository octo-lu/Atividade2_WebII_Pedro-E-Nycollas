const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
    const x = 100;
    if(x !== 100){
        reject(new Error("Falha na promessa"))
    }
    
    resolve("Sucesso na promessa")
  });


const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 2000, '2 segundos');
});


Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
