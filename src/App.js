import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormCode from './components/record-msmt'
import { btxt, ADD_MSMT, Headline, RenderLineChart } from './components/measurement-chart';


function App() {
  const submit = (values) => {
    alert("submitted");
    console.log(values);
  }

  return (
    <div className="container">
        <h3 className="jumbotron">My health stats</h3>
        <FormCode onSubmit={submit} /> 
        <RenderLineChart /> 
    </div>
  );
}

export default App;
