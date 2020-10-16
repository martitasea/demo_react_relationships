import React, { Component } from 'react';
import { MainConsumer } from '../../userContext';
import './Child.css';

class Child extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <MainConsumer>
        {(cont)=>(
            <div>
              <p>Aquí abajo está el contexto mostrado desde Child</p>
              <h1>{cont.contexto}</h1>
            </div>  
        )}
      </MainConsumer>
    );
  }
}

export default Child;