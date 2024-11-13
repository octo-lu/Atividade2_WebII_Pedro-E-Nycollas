function promise() {
    var promise = new Promise(function(resolve, reject) {
        throw('Erro');
    });

    return promise.catch(function(error) {
        throw(error);
    });
}

promise().catch(function(error) {
    console.log('log do catch', error);
});