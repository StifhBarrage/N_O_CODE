const applyDiscount = new Promise ((resolve, reject) => {

    const discount = false;

    if(discount){
        resolve('Discount applied');
    } else {
        reject('Discount failed');
    }

})

// fulfill - the promise is fulfilled
// reject - the promise is rejected
// resolve - the promise is fulfilled
// pending - the promise is pending (not fulfilled or rejected yet)

applyDiscount
    // then is for resolve
    .then(result => {
        console.log(result);
    })
    // catch is for reject
    .catch(error => {
        console.log(error);
    })
