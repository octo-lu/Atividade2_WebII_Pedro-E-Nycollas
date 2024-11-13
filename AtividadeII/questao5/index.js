async function fetchDataFromAPI(url){
    let response = fetch(url);
    if(response.status !== 200){
        throw new Error("Falha")
    }
    return await response.json()
}

fetchDataFromAPI('https://jsonplaceholder.typicode.com')
    .then((data)=>console.log(data))
    .catch((erro)=>console.log(erro.message))


    
