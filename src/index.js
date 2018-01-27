import React from 'react'
import ReactDOM from 'react-dom'

setInterval(function(){
  ReactDOM.render(
    clock(),
    document.getElementById('root')
  );
},1000);

let clock = function(){
  return <h1>{new Date().toLocaleTimeString()}</h1>
}
