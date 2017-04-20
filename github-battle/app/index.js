const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

// old component declaration (soon to be deprecated).

// more updated way to declare component
class App extends React.Component {
  render() {
    return (
      <div>
        Hello React Training!
      </div>
    )
  }
}

// This ^ component ^ is concerned about 3 things:

  // - state (any state of data that can live in it)
  // lifecycle event (transformations that it may undertake)
  // UI (what it looks like)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// Above, we have told ReactDOM to a) what to render (our App component) and b) where to render it (the element with the id of 'app').
