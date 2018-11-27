import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state={
      isClicked: false
    }
  }

  toggleClick = ()=> {
    this.setState({
      isClicked: !(this.state.isClicked)
    })
  }


  findHP = () => {
    return this.props.pokemon.stats.find(stat => stat.name === 'hp').value
  }

  render() {
    return (
      <Card>
        <div onClick={this.toggleClick}>
          <div className="image">
          {this.state.isClicked ? <img src={this.props.pokemon.sprites.back} alt="oh no!" /> : <img src={this.props.pokemon.sprites.front} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHP()}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
