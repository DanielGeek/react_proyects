
const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //! I want my money
        resolve(100);
        // reject('My friend lost my money');
    }, 2000);
});

myPromise
    .then((myMoney) => {
        console.log(`I Have my money ${myMoney}`);
    }).catch((reason) => {
        console.warn(reason);
    })
    .finally(() => {
        console.log('I will continue with my life');
    });
