import React from 'react'
import ReactDOM from 'react-dom'

let clock = function(){
  return <h1>{new Date().toLocaleTimeString()}</h1>
}

ReactDOM.render(
  clock(),
  document.getElementById('root')
);
