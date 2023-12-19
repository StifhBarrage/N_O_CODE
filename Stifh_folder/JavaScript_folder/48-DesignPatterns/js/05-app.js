// Module Pattern

const module1 = (function() {
    const name = 'Module 1';

    function hello() {
        console.log('Hello!');
    }

    return {
        name,
        hello
    }
})();

/* 
    In other module we can use the module1 object
    console.log(module1.name);
    module1.hello();
*/