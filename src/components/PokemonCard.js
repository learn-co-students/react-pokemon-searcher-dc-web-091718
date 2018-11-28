import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      toggleBack: false
    }
  }

  render() {
    return (
      <Card onClick = {()=>this.setState({
        toggleBack: !this.state.toggleBack
      })}>
        <div>
      {/*used ternary opertater to compare toggle back for proper image rendering*/}
        {(!this.state.toggleBack)?
          <div className="image">
            <img src={this.props.pokemon.sprites.front}alt={"oh no!"} />
          </div>: <div className="image">
            <img src={this.props.pokemon.sprites.back}alt={"oh no!"} />
          </div>}
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
