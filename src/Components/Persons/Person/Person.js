 import React, {Component} from 'react';
 //import Radium from 'radium';

 import Aux from '../../../hoc/Aux'
import './Person.css';

class Person extends Component{ //state less componet

    
    render(){
        console.log('[Person.js] rendering');
        //React.fragment is same as aux component
        return (
            <Aux>
            {/*<div className='Person' > */} {/*class has no props.. we should use this.props */}
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        {/*</div> */}
        </Aux>
        );

    } //render close
   
    
}//Person class close

 //add external text between enter <person> </person> 

export default Person;
