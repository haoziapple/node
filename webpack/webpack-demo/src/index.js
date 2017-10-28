import _ from 'lodash';
import './style.css';
import pic from './21.jpg';
import Data from './data.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'haozixixi!'], ' ');
    element.classList.add('hello');

    var myPic = new Image();
    myPic.src = pic;
    element.appendChild(myPic);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
console.log('hot hot!');

if(module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}