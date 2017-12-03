// install --> import --> use
import React from react;
import ReactDOM from react-dom;
console.log(React);
const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'));