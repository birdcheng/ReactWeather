function addPromise(a, b) {
    return new Promise(function (resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }else{
            reject('Not a number');
        }
    });
}

addPromise(2, 5).then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});


addPromise(2, 'peter').then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});
