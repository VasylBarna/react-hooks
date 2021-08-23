import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/Pokemon/Form';
import PokemonInfo from './components/Pokemon/Info';

export default class App extends Component {
  state = {
    pokemonName: '',
  };
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm submit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}
