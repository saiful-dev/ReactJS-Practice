 import React from 'react';
 //import Radium from 'radium';
import './Person.css';

const person =(props)=>{ //state less componet

    console.log('[Person.js] rendering');
    // we need to add js code in string with jsx
    // const style={
    //     '@media (min width: 500px':{
    //         width:'450px'
    //     }
    // }
    
    // if we use {} brace then need to return..if we use () no need to return
    // explicit return required inside block,

    //add dynamic content by adding {}
    //(max - min)  + min;
    // return <p1>I'm a person and {Math.floor(Math.random()*(30-20))+20} years old!!</p1>
    //The onclick event occurs when the user clicks on an element.
    return (
        <div className='Person' >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    );
}

 //add external text between enter <person> </person> 

export default person;
