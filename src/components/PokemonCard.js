import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {
      front: true
    }
  }

  cardUrl = () => {
    const sprites = this.props.pokemon.sprites
    return this.state.front ? sprites.front : sprites.back
  }

  handleCardClick = () => {
    this.setState({ front: !this.state.front })
  }

  render() {
    let {name, sprites, stats} = this.props.pokemon
    let hp = this.props.pokemon.stats.find(stat => stat.name === "hp")

    return (
      <Card onClick={this.handleCardClick}>
        <div>
          <div className="image">
            <img src={this.cardUrl()} alt={name}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
