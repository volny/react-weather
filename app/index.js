var React = require('react');
var ReactDOM = require('react-dom');

function Hello (props) {
  return (
    <h1>Hello React</h1>
  )
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
);

