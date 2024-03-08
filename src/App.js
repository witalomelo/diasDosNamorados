import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Seus olhos são poesia, sua presença é uma canção em meu coração.",
      "Com você, descobri o significado do amor verdadeiro.",
      "Sua força me inspira, seu amor me completa.",
      "Seu sorriso é a luz que ilumina meus dias.",
      "Você é a personificação da beleza, da graça e do amor.",
      "Nos seus abraços, encontro conforto e segurança.",
      "Sua ternura é um bálsamo para minha alma cansada.",
      "Com você, cada dia é uma aventura maravilhosa.",
      "Você é a musa dos meus sonhos mais profundos.",
      "Sua presença transforma o ordinário em extraordinário.",
      "Em seu amor, encontro paz e plenitude.",
      "Você é o tesouro mais valioso que já encontrei.",
      "Seu toque é o remédio para todas as minhas aflições.",
      "Com você, cada momento é uma celebração do amor.",
      "Sua inteligência e bondade são incomparáveis.",
      "Você é a inspiração por trás de todas as minhas melhores criações.",
      "Seu amor me dá asas para voar mais alto do que jamais imaginei.",
      "Você é a personificação da graça e da delicadeza.",
      "Com você, o amor se torna uma jornada mágica e inesquecível.",
      "Sua presença em minha vida é um presente que nunca deixarei de valorizar.",
      "Você é o sol que ilumina o meu mundo.",
      "Sua bondade é um farol que guia meu caminho.",
      "Com você, aprendi o verdadeiro significado da felicidade.",
      "Seu amor é o maior tesouro que já encontrei.",
      "Você é a razão pela qual eu acredito em contos de fadas.",
      "Com você, descobri o verdadeiro sentido da palavra amor.",
      "Sua determinação e coragem me inspiram todos os dias.",
      "Você é a rainha do meu coração, minha amada.",
      "Com você, cada dia é uma nova página de uma história de amor eterno.",
      "Seu amor é o mais belo presente que já recebi, e sou eternamente grato por tê-lo em minha vida.",
    ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/coracao.png")} className="img" />
        <Botao
          nome="Clique aqui!"
          acaoBtn={this.quebraBiscoito}
        />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
