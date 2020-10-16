import React, { Component} from 'react';
import {MainConsumer} from '../../userContext';
import Child from '../Child/Child';
import './Father.css';

class Father extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <MainConsumer>
        {(cont)=>
          (
            <div>
              <h1>{cont.contexto}</h1>
              <p>Aqui arriba estará el contexto mostrado desde Father</p>
              <Child/>
              <button onClick={
                ()=>{
                  cont.setCont("nuevo Contexto")
              }}>
                Cambiar contexto
              </button>
            </div>
          )
        }
      </MainConsumer> 
    );
  }
}

export default Father;