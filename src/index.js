import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return <div>Hello Folks!!!!</div>;
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);