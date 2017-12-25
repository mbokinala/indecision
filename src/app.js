import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
    constructor() {
        this.name = 'Manav';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// -----------------------

class NewSyntax {
    name = 'Abinav';
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());