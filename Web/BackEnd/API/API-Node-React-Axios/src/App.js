
import React, { Component } from 'react';
import api from './api';
import styles from './estilo.module.css';


class App extends Component {

  state= {
    lista: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    this.setState({lista: response.data});

  }

  render(){
    const { lista } = this.state
    



    return(
      <div>
        {console.log(lista)}

        {lista.map((list, id) => (
        <div className={styles.container}>    
          <lu className={styles.lista}>
            <li key={id}>
              <h2>ID: {id}</h2>
              <h3>Atleta: <strong>{list.athlete}</strong></h3>
              <p>Idade: {list.age}</p>
              <p>Cidade: {list.country}</p>
              <p>Sport: {list.sport}</p>
              <div>
                <h4>Medalhas</h4>
                <p>Data: {list.date}</p>
                <p>Ouro: {list.gold}</p>
                <p>Prata: {list.silver}</p>
                <p>Bronze: {list.bronze}</p>
                <p>Total: <strong>{list.total}</strong></p>
              </div>
            </li>
          </lu>
        </div>
        ))}
      </div>
    );
  };
};

export default App;
