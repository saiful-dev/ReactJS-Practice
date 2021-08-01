import { directive, react } from '@babel/types';
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';  // use ./ bcz it is a relative path 


class App extends Component{
  state={ // state object property
    person:[ //person array
            {name:'saiful',age:'25'}, //object
            {name:'jewel',age:'26'},
            {name:'easin',age:'24'}
    ],
    otherstate: 'others value',

}
  SwitchNameHandelar=()=>{
      //console.log('SwitchNameHandelar clicked');
     
       //Don't use like bcz react can't recognize it  //this.state.person[0].name='saiful islam'; 
 
      this.setState({ //react merge this change to the state obj
          person:[ //person array
          {name:'saiful Islam',age:'26'}, //object
          {name:'jewel',age:'25'},
          {name:'easin Ali',age:'24'}
  ]
      })


      }

  render(){

    return (
        <div className='App'> 
            <h1> Hello dear</h1>
            <p>React APP!!</p>
            <button onClick={this.SwitchNameHandelar}>Switch name</button>

            <Person name={this.state.person[0].name} age={this.state.person[0].age} />
            <Person name={this.state.person[1].name} age={this.state.person[1].age} />
            <Person name={this.state.person[2].name} age={this.state.person[2].age} />

            {/*<Person name='saiful' age='25'/>
            <Person name='jewel' age='26'> hobies is traveling </Person>
            <Person name='easin' age='24'/>*/}

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
