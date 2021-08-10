import React from 'react';
import './Cockpit.css';

const cockpit=(props)=>{

    //const classes=['red','bold'].join(' ');
    // we can write also 'red bold' in className
   const classes=[];
   if(props.personCoc.length <=2){
        classes.push('red'); //classes=['red']
   }
   if(props.personCoc.length <=1){
     classes.push('bold'); //classes=['red','bold']

  }

    return (
        <div> 
        <h1> {props.title}</h1>
          <p className={classes.join(' ')}>React APP!</p> {/* we need to join bcz classes takes string */}
           <button 
              style={props.stylejs}
              onClick={props.toggle}>Toggle Persons</button>
              
              {/* when needs to updates anythings,(means we click toggle button) then render method will 
              execute and not only return  */} 
        </div>
    );
};

export default cockpit;