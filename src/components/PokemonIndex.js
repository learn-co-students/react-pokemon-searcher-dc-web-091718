import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state={
      pokemons: [],
      searchString: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => this.setState({pokemons: data}))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({searchString: value})
  }

  filteredPokemon = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchString))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
