const countries = [];

const newCountry = country => new Promise(resolve => {

    setTimeout(() => {

        countries.push(country);
        resolve(`applied: ${country}`);

    }, 3000);

});

newCountry('Germany')
    .then(result => {
        console.log(result);
        console.log(countries);
        return newCountry('France');
    })
    .then(result => {
        console.log(result);
        console.log(countries);
        return newCountry('Spain');
    })
    .then(result => {
        console.log(result);
    })