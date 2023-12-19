// Factory Pattern

/*
    Factory Pattern creates objects 
    based on certain conditions

*/

class InputHTML {
    // type = text, tel, email
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
    // create the HTML based on the type
    createInput() {
        return `<input type="${this.type}" name="${this.name}" id="${this.name}">`;
      }
}

// The next class will be the factory
class HTMLFactory {
    // create an element based on the type
    createElements(type, name) {
        // validate the type
        switch(type) {
            case 'text':
                return new InputHTML(type, name);
            case 'tel':
                return new InputHTML(type, name);
            case 'email':
                return new InputHTML(type, name);
            default:
                return;
        }
    }
}

/*
    The factory will create the objects
    based on the type of element that we pass
*/
const element = new HTMLFactory();
const inputText = element.createElements('text', 'username');
console.log(inputText.createInput());

const element2 = new HTMLFactory();
const inputTel = element2.createElements('tel', 'telephone');
console.log(inputTel.createInput());

const element3 = new HTMLFactory();
const inputEmail = element3.createElements('email', 'email');
console.log(inputEmail.createInput());


