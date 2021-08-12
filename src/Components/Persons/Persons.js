import React,{PureComponent} from 'react';
import Person from './Person/Person';



class PersonsCom extends PureComponent{

// static getDerivedStateFromProps(props,state){
//     console.log('persons.js getDrivedStateFromProps');
//     return state;
// }

// componentWillReceiveProps(props){
//     console.log('Persons.js componentWillReceiveProps')
// }

// we can simply replace shouldComponentUpdate by PureComponent
// shouldComponentUpdate(nextProps, nextState){
//     console.log('persons.js shouldComponentUpdate');
//     if(nextProps.personsApp !== this.props.personsApp){
//         return true;
//     }
//     else{
//         return false;
//     }

//    // return true; // true for allow to update
// }

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Persons.js getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};

}

// componentWillUpdate(){

// }

componentDidUpdate(prevProps,prevState,snapshot){
    console.log('Persons.js componentdidupdate');
    console.log(snapshot);
}

componentWillUnmount(){

    console.log('[Persons.js] componentWillUnmount');
  }

    render(){

        console.log('[Persons.js] rendering');
        return this.props.personsApp.map((person,index) =>{
            return (<Person 
                click={()=>this.props.clicked(index)}
                name={person.name}
                age={person.age} 
                key={person.id}
                changed={(event)=>this.props.changed(event,person.id)}
                isAuth={this.props.isAuthenticated}/>
            )
        } )

    }
    
};

export default PersonsCom;
