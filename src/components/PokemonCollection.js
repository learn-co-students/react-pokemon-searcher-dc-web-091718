import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


//Our props being sent are pokemon that need to be rendered.


class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* Here we will do a map on all the pokemon */}
        {this.props.pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
