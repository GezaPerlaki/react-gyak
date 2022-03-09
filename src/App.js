
import './App.css';
import React, {Component, useState} from 'react';
import Person from './Person/Person';
import forintEuroCheck from './ForintEuroCheck/ForintEuroCheck';

const App = props => {

  const [aktualisState, ujState] = useState({    
    person: [
    {name: 'Géza', age: '35'},
    {name: 'Valcsi', age: '35'},
  ]});

  const nameChangeHendler = () => {
    ujState({
      person: [
        {name: 'Gézu', age: '35'},
        {name: 'Valcsi', age: '35'}
      ]}
    )
  }

  return(
    <div className='App'>
      <h1>
      Hello World!
      </h1>
      <div>
        <button onClick={forintEuroCheck}>Forint</button>
      </div>
      
      <button onClick={nameChangeHendler}>Name Change</button>
      <Person name = {aktualisState.person[0].name} age = {aktualisState.person[0].age}/>
      <Person name = {aktualisState.person[1].name} age = {aktualisState.person[1].age}/>
      <Person>Gyerek elem</Person>
    </div>
  )
}

/*
class App extends Component {

  state = {
    person: [
      {name: 'Géza', age: '35'},
      {name: 'Valcsi', age: '35'}
    ]
  }

nameChangeHendler = () => {
  this.setState({
    person: [
      {name: 'Gézu', age: '35'},
      {name: 'Valcsi', age: '35'}
    ]}
  )
}

  render() {
    return(
      <div className='App'>
        <h1>
        Hello World!
        </h1>
        <div>
          <button onClick={forintEuroCheck}>Forint</button>
        </div>
        
        <button onClick={this.nameChangeHendler}>Name Change</button>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age}/>
        <Person name = {this.state.person[1].name} age = {this.state.person[1].age}/>
        <Person>Gyerek elem</Person>
      </div>
    )
  }
}
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
