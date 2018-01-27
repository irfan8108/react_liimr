import React from 'react'
import ReactDOM from 'react-dom'

class Liimr extends React.Component {
  render(){
    return <h1>LA IlahaIlLalLah...</h1>
  }
}

function Liimr(props){
  return <h1>
  Darood Shareef:&nbsp;
  {props.title}
  </h1>
}

ReactDOM.render(
  <Liimr title = 'DeepDiveinTo'/>,
  document.getElementById('root')
);
