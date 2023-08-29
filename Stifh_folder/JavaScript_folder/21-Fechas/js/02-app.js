const date = new Date();

moment.locale('es');

//  
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// friendly formar for dates
console.log(moment().format('LLLL'));

// time available from now to 3 days
console.log(moment().add(3, 'days').calendar());