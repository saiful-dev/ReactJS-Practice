import { directive, react } from '@babel/types';
import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';  // use ./ bcz it is a relative path 


class App extends Component {
  state = { // state object property
    person: [ //person array
            {name:'saiful',age:25}, //object
            {name:'jewel',age:26},
            {name:'easin',age:24}
    ],
    otherstate: 'others value'

}
  SwitchNameHandelar = (newName)=>{
      //console.log('SwitchNameHandelar clicked');
     
       //Don't use like bcz react can't recognize it  //this.state.person[0].name='saiful islam'; 
 
      this.setState({ //react merge this change to the state obj
          person:[ //person array
          {name: newName,age:26}, //object
          {name:'jewel',age:25},
          {name:'easin',age:25}
          ]
        } )

      } // close SwitchNameHandelar

 
  nameChangedHandler = (event) => {
        this.setState( {
          person: [
            { name: 'saiful', age: 25 },
            { name: event.target.value, age: 26 },
            { name: 'easin', age: 24 }
          ]
        } )
  }

  render(){

    const styleJS={ // JS Object, We define css style in js

        backgroundColor: 'white', //we add property in quatation bcz all are string in js
        font:'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
    };

    return (
        <div className="App"> 
            <h1> Hello dear</h1>
            <p>React APP!</p>
            <button 
              style={styleJS}
              onClick={()=> this.SwitchNameHandelar('Saiful Islam')}>Switch name</button>

            <Person 
                  name={this.state.person[0].name} 
                  age={this.state.person[0].age}      />

            <Person 
                    name={this.state.person[1].name} 
                    age={this.state.person[1].age} 
                    click={this.SwitchNameHandelar.bind(this,'Saiful!!')} 
                    changed={this.nameChangedHandler} > Hobies: traveling</Person>


            <Person 
                    name={this.state.person[2].name} 
                    age={this.state.person[2].age} 
                  />

            

        </div>
    );

    

    // createElement is a method is takes atleast three arguments
    // first tag, object ,currently we pass nul, tag..

    //return React.createElement('div',null,'h1','hello dear');
    // pass an object className: 'App' for css style
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'H1 tag embeded'));
  }

}

export default App;