import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor () {
    super();
    this.state = {
      fetchedPokemon: [],
      pokemon: [],
      searchTerm: ''
    };
  };

  //After mounting, we will fetch our pokemon
  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(json => {
      this.setState({
        fetchedPokemon: json,
        pokemon: json
      });
    });
  }

  handleOnSearch = (e, { value }) => {
    if (value === '') {this.setState({pokemon: this.state.fetchedPokemon})}

    let filtered = this.state.fetchedPokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().slice(0, value.length) === value.toLowerCase()
    });

    this.setState({
      searchTerm: value,
      pokemon: filtered
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleOnSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
        <br />
        <PokemonForm fetchPokemon={this.fetchPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
