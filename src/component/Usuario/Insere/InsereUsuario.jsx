import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-materialize';
import ListaUsuario from '../Lista/ListaUsuario';
import './estilo.css';

class InsereUsuario extends Component {
  state = {
    nome: '',
    email: ''
  };

  handleChange_nome = event => {
    this.setState({
      nome: event.target.value
    });
  };
  handleChange_email = event => {
    this.setState({
      email: event.target.value
    });
  };

  _criarUsuario = evento => {
    evento.preventDefault();
    evento.stopPropagation();
    const usuario = {
      nome: this.state.nome
    };

    axios
      //.post(`http://127.0.0.1/api/all/administradores`, administrador )
      .post(`https://agenda-backend-nodered.herokuapp.com/usuario`, usuario)
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        document.getElementById('create-form').reset();
        this.clickChild();
      });
  };

  render() {
    return (
      <section className="insere">
        <form id="create-form" onSubmit={this._criarUsuario.bind(this)}>
          Usuario:
          <br />
          <label>
            Nome:
            <input type="text" name="nome" onChange={this.handleChange_nome} />
          </label>
          <p />
          <Button waves="light">Salvar</Button>
          <div />
        </form>
        <ListaUsuario setClick={click => (this.clickChild = click)} />
      </section>
    );
  }
}
export default InsereUsuario;
