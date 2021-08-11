import React, {useEffect} from 'react';
import './Cockpit.css';

const Cockpit=(props)=>{

  useEffect(()=>{ 
    
    // default render function that can run every render cycle

   // If you’re familiar with React class lifecycle methods, 
   //you can think of useEffect Hook as componentDidMount, componentDidUpdate, 
   //and componentWillUnmount combined.

      console.log('Cockpit.js useEffect');
      setTimeout(()=>{
        alert('Save data');
      },1000);
      // we can also return/ optional
      return ()=>{
       
        console.log('[Cockpit.js] cleanup work in useeffect')
      }

      //http request.. 
  },[]); // this effect will execute only for persons changed

  useEffect(()=>{
    console.log('Cockpit.js 2nd useEffect');
    return ()=>{
      console.log('[Cockpit.js] 2nd cleanup work in useeffect')
    }

  });

    //const classes=['red','bold'].join(' ');
    // we can write also 'red bold' in className
   const classes=[];
   if(props.personCocLen <=2){
        classes.push('red'); //classes=['red']
   }
   if(props.personCocLen <=1){
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

export default React.memo(Cockpit); 
// its for functional componet, where should componentUpdate for class component
// React.memo is also applicable for classbased component
