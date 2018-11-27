import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from '../components/PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state={
      pokemonList: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({
      pokemonList: data
    }))
  }

  handleSearchChange = (event, {value}) => {
    this.setState({
      searchTerm: value
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemonList: [...this.state.pokemonList, pokemon]
    })
  }


  render() {

    const searchedPokemon = this.state.pokemonList.filter(pokemon=> {
      return pokemon.name.includes(this.state.searchTerm)
    })

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <h1>Hello From Pokemon Collection</h1>
        <PokemonCollection pokemonList={searchedPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
