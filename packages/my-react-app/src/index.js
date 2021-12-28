import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "components";

ReactDOM.render(
  <>
    <h1>React App</h1>
    <Button onClick={e => console.log("REACT APP")}>
      Click me
    </Button>
  </>,
  document.getElementById('root')
);

