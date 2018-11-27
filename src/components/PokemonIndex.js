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

  handleFormSubmit = (data) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => this.addPokemon(data))
  }

  addPokemon = (data) => {
    this.setState({
      pokemons: [...this.state.pokemons, data]
    })
  }

  render() {
    console.log(this.state.pokemons)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()}/>
        <br />
        <PokemonForm handleSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
