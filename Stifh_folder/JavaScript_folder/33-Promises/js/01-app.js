const countries = 
[
    'France',
     'Spain',
      'Portugal',
       'Australia',
        'England',
         'Ireland'
        ];

function newCountry(country, callback){
    setTimeout(() => {
        countries.push(country);
        callback();
    }, 3000);
}



// Traditional way

function showCountries() {
    setTimeout(() => {
        countries.forEach(country => {
            console.log(country);
        });
    }, 2000);
}

showCountries();


newCountry('Germany', showCountries);