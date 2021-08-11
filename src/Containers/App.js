import { directive, react } from '@babel/types';
import React, { Component} from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium'; // styleroot for media queries
 
import Persons from '../Components/Persons/Persons';
// .. means we need up one level of App from container, then path of the persons 

import Cockpit from '../Cockpit/Cockpit';

class App extends Component {

  constructor(props){ // constructor call only once
    super(props);
    console.log('App Constructor');

  }
  
  state = { // state object property
    person: [ //person array
        {id:'s101', name:'saiful1',age:25}, //object
        {id:'s102',name:'jewel2',age:26},
        {id:'s103',name:'easin3',age:24}
    ],
    otherstate: 'others value',
    showPerson: false,
    showCockpit: true

}
/*
getDerivedStateFromProps(props, state) is a static method that is called 
just before render() method in both mounting and updating phase in React. 
It takes updated props and the current state as arguments.

We have to return an object to update state or null to indicate 
 that nothing has changed.

*/
static getDrivedStateFromProps(props,state){ // we add static bcz it is a static method
  console.log('[App.js] gerDrivedStateFromprops');
  return state;
}

/*
The componentWillMount() lifecycle hook is primarily used to implement server-side 
logic before the actual rendering happens, such as making an API call to the server. In this guide, you will learn to use componentWillMount() 
and make API calls after the initial component rendering

** the function will only trigger once in the lifespan of a component.

*/

componentWillMount(){
  console.log('[App.js] componet will mount');
}
/*
The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM 
(Document Object Model). This method is called during the Mounting phase of the React Life-cycle
 i.e after the component is rendered.

*/
componentDidMount(){
  console.log('[App.js] comnponentdid mount');
}

shouldComponentUpdate(prevState,prevProps){
  console.log('App.js shouldComponentUpdate');
  return true;

}
componentDidUpdate(){
  console.log('App.js componentDidUpdate');

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

    console.log('[App.js] render running');
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
      <button onClick={()=>{
        this.setState({showCockpit: false});
      }}>Remove Button</button>
      
      {this.state.showCockpit? (
            <Cockpit 
            title={this.props.appTitle} // we set props in index.js file
            personCocLen={this.state.person.length}
            stylejs={this.styleJS}
            toggle={this.togglePersonhandaler}
           

             /> ) :null }


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