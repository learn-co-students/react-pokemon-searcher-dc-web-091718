import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  constructor (props) {   
    super(props);
    this.state = {
      name:  props.pokemon.name,
      imageToggle: true,
      frontImage: props.pokemon.sprites.front,
      backImage: props.pokemon.sprites.back,
      hp: props.pokemon.stats.find(stat => stat.name === 'hp').value
    };
  };

  toggleImage = () => {
    this.setState({imageToggle: !this.state.imageToggle});
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
            {this.state.imageToggle ? <img src={this.state.frontImage} alt="oh no!" /> : <img src={this.state.backImage} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.state.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              hp: {this.state.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}


//Default props for a pokemon
PokemonCard.defaultProps = {
  name: 'John Doe',
  sprites: {
    front: "https://vignette.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013",
    back: "https://vignette.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013"
  },
  stats: [{name: 'hp', value: 'no np'}]
}


export default PokemonCard


