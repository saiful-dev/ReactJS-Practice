import { directive, react } from '@babel/types';
import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';  // use ./ bcz it is a relative path 


class App extends Component {
  state = { // state object property
    person: [ //person array
            {name:'saiful1',age:25}, //object
            {name:'jewel2',age:26},
            {name:'easin3',age:24}
    ],
    otherstate: 'others value',
    showPerson: false,

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

 
  deletePersonHadeler=(personIndex)=>{
      const personNew=this.state.person;
      personNew.splice(personIndex,1);
      this.setState({
          person: personNew
      })
    }


  togglePersonhandaler=()=>{
        const doesShow=this.state.showPerson;
        this.setState({

                    showPerson: !doesShow
        });

  }
 

  render(){

    const styleJS={ // JS Object, We define css style in js

        backgroundColor: 'white', //we add property in quatation bcz all are string in js
        font:'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
    };

    let persons=null; //js code
    if(this.state.showPerson){ // we can use if here bcz we can add here JS code
      persons=( // it is also Jsx code
        <div>
            
            {// rendering Js array from state
              //js map function
                    this.state.person.map((person,index) =>{
                      // return jsx, every element of array map in jsx
                      // Person component
                      // here map person and return person same
                      return <Person 
                              click={()=>this.deletePersonHadeler(index)}
                              name={person.name}
                              age={person.age} />
                      
                      
                     
                    })
            }

            
            
        </div>
      )
    }

    return (
        <div className="App"> 
            <h1> Hello dear</h1>
            <p>React APP!</p>
            <button 
              style={styleJS}
              onClick={this.togglePersonhandaler}>Toggle Persons</button>
              {persons} 
              {/* when needs to updates anythings,(means we click toggle button) then render method will 
              execute and not only return  */}

            

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