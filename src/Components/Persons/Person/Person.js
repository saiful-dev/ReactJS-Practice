 import React, {Component} from 'react';
 //import Radium from 'radium';
import Proptypes from 'prop-types';
import Aux from '../../../hoc/Aux'

import AuthContext from '../../../context/auth-context'; 
import './Person.css';

class Person extends Component{ //state less componet
    constructor(props){
        super(props)
        this.inputElementRef=React.createRef();
    }
    //The static contextType assignment was introduced in v16.6.0 
    //as a way to use context outside of render method. 

    static contextType=AuthContext;

    componentDidMount(){
        //document.querySelector('input').focus(); 
        //alternate for react to select element by ref key
        //only works for class based component
       
       // this.inputElement.focus();
       this.inputElementRef.current.focus();
       console.log(this.context.authenticated);

    }
    
    render(){
        console.log('[Person.js] rendering');
        //React.fragment is same as aux component
        return (
            <Aux>
            
            { // simply replace by context type
                /*<AuthContext.Consumer>
                { context =>context.authenticated ? <p>authenticated!</p> : <p> Plz Log in </p>

                }
            
            </AuthContext.Consumer>  */}
            {this.context.authenticated ? <p>authenticated!</p> : <p> Plz Log in </p>}


            
            {/*<div className='Person' > */} {/*class has no props.. we should use this.props */}
           
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" 
            //ref={(inputEl)=>{this.inputElement=inputEl}}
            ref={this.inputElementRef}
            onChange={this.props.changed} 
            value={this.props.name} />
        {/*</div> */}
        </Aux>
        );

    } //render close
   
    
};//Person class close

 //add external text between enter <person> </person> 
 Person.propTypes={ // proptypes is property of js object
    click: Proptypes.func,
    name: Proptypes.string,
    age: Proptypes.number,
    changed: Proptypes.func

}; // it gies notification if we enter incorrct props

export default Person;
