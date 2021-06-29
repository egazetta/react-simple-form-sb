//import React, { useEffect, useState } from "react";
import React, { Component } from 'react';
import axios from 'axios';

class ListaUsuario extends Component {
  constructor(props) {
    super(props);
    this.getAlert = this.getAlert.bind(this);
  }

  state = {
    usuarios: []
  };

  componentDidMount() {
    this.props.setClick(this.getAlert);
    this.lista();
  }
  getAlert() {
    //alert('antes');
    this.lista();
    //alert('depois');
  }

  lista() {
    //axios.get(`http://127.0.0.1/api/all/administradores`).then((res) => {
    axios.get(`https://agenda-backend-nodered.herokuapp.com/usuario`).then(res => {
      const usuarios = res.data;
      console.log(usuarios);
      this.setState({ usuarios });
    });
  }

  render() {
    return (
      <ul>
        {this.state.usuarios.map((usuario, index) => (
          <li key={index}>{usuario.nome}</li>
        ))}
      </ul>
    );
  }
}

export default ListaUsuario;
