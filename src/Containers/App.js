import { directive, react } from '@babel/types';
import React, { Component} from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium'; // styleroot for media queries
 
import Persons from '../Components/Persons/Persons';
// .. means we need up one level of App from container, then path of the persons 

import Cockpit from '../Cockpit/Cockpit';

class App extends Component {
  state = { // state object property
    person: [ //person array
        {id:'s101', name:'saiful1',age:25}, //object
        {id:'s102',name:'jewel2',age:26},
        {id:'s103',name:'easin3',age:24}
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

    } //close SwitchNameHandelar

    nameChangeHandelar=(event,id)=>{

      const personIndex=this.state.person.findIndex(p=>{
        return p.id===id; //we just set condition 
    });
    
    const personIndexedArray={
            ...this.state.person[personIndex]
    };

    personIndexedArray.name=event.target.value;
    const personNew=[...this.state.person];
    personNew[personIndex]=personIndexedArray;

    this.setState({ //react merge this change to the state obj
      person:personNew
    } )

 } //nameChangeHandelar


  deletePersonHadeler=(personIndex)=>{

      // as object and arrray is refference type so we should avoid direct copy
      // better if we use spread operator or slice method
      //const personNew=this.state.person.slice();
      const personNew=[...this.state.person]; // shallow copy through spread operator
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

        backgroundColor: 'green', //we add property in quatation bcz all are string in js
        color:'white',
        font:'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        // ':hover':{
        //   backgroundColor:'lightgreen',
        //   color:'black',
        // }
    };
    // we add string in ' quatation'

    //normally we can't use pseodu code here , so we install
    //Radium is a set of tools to manage inline styles on React elements. 
    //It gives you powerful styling capabilities without CSS.
   //radium is all about style
    let persons=null; //js code
    if(this.state.showPerson){ // we can use if here bcz we can add here JS code
      persons=( // it is also Jsx code
        <div>
            <Persons
              personsApp={this.state.person}
              clicked={this.deletePersonHadeler}
              changed={this.nameChangeHandelar} />
      
        </div>
    ) //persons close
    styleJS.backgroundColor='silver';
    // styleJS[':hover']={ //assign new js object
    //       backgroundColor:'salmon',
    //       colro:'black',
    //  }

  } 

  


    return (
      //<StyleRoot>  {/*for radium (media quries) */}
      <div className="App"> 
            <Cockpit 
            personCoc={this.state.person}
            stylejs={this.styleJS}
            toggle={this.togglePersonhandaler}
           

             />
            {persons}  
        </div>
        //</StyleRoot>
    );

    

    // createElement is a method is takes atleast three arguments
    // first tag, object ,currently we pass nul, tag..

    //return React.createElement('div',null,'h1','hello dear');
    // pass an object className: 'App' for css style
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'H1 tag embeded'));
  }

}

export default App;

// call radium as a function and wrap app with it