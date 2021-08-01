import { directive, react } from '@babel/types';
import React, { useState} from 'react'; // useState is an react hooks
import './App.css';
import Person from './Person/Person';  // use ./ bcz it is a relative path 

// react hooks 
const App=props=> { 
    // personState= current state(is equal to this.state), setpersonstate= allow us to set a new state
    const [personState, setPersonState] = useState( //it is like a method
    { 
      person:[ //person array
        {name:'saiful',age:'25'}, //object
        {name:'jewel',age:'26'},
        {name:'easin',age:'24'},
       ],
      otherstate: 'others value',

    });

    const [otherState,setotherState]=useState('some other value');
    console.log(personState,otherState);

    const SwitchNameHandelar=()=>{
      //console.log('SwitchNameHandelar clicked');
     
       //Don't use like bcz react can't recognize it  //this.state.person[0].name='saiful islam'; 
  
      setPersonState({ //react merge this change to the state obj
          person:[ //person array
          {name:'saiful Islam',age:'26'}, //object
          {name:'jewel',age:'28'},
          {name:'easin Ali',age:'24'}
          ]
        });
    }


    
    return (
        <div className='App'> 
            <h1> Hello dear</h1>
            <p>React APP!!</p>
            <button onClick={SwitchNameHandelar}>Switch name</button>

            <Person name={personState.person[0].name} age={personState.person[0].age} />
            <Person name={personState.person[1].name} age={personState.person[1].age} />
            <Person name={personState.person[2].name} age={personState.person[2].age} />

            {/*<Person name='saiful' age='25'/>
            <Person name='jewel' age='26'> hobies is traveling </Person>
            <Person name='easin' age='24'/>*/}

        </div>
    );

    
 }
  



export default App;

