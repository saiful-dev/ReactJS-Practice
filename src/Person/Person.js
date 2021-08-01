import React from 'react';

const person =(props)=>{

    
    // if we use {} brace then need to return..if we use () no need to return
    // explicit return required inside block,

    //add dynamic content by adding {}
    //(max - min)  + min;
    // return <p1>I'm a person and {Math.floor(Math.random()*(30-20))+20} years old!!</p1>
    return (
        <div>
            <p1>I'm {props.name}  and {props.age} years old!! <br/></p1>
           
            <p>{props.children}</p>
        </div>
    );
}

 //add external text between enter <person> </person> 

export default person;
