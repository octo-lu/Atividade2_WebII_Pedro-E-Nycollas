function promessa(time){
    const x = 100;
    return new Promise ((resolve, reject) =>{
        if(time < x){
            reject(new Error("Falha na promessa"))
        }
        
        resolve("Sucesso na promessa")

    })
}

function exibeResposta(textoResultado){
    console.log(textoResultado)
}
var texto = 'Saída'
promessa(false)
    .then((texto)=exibeResposta(texto))
    .catch((erro)=>exibeResposta(erro))