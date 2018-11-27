import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let params = {
      name: this.state.name,
      stats: [{
        value: this.state.hp,
        name: 'hp'}],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    };

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
    .then(this.props.fetchPokemon)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" 
                              placeholder="Name" 
                              name="name"
                              onChange={event => this.setState({name: event.target.value})} />
            <Form.Input fluid label="hp" 
                              placeholder="hp" 
                              name="hp"
                              onChange={event => this.setState({hp: event.target.value})} />
            <Form.Input fluid label="Front Image URL" 
                              placeholder="url" 
                              name="frontUrl"
                              onChange={event => this.setState({frontUrl: event.target.value})} />
            <Form.Input fluid label="Back Image URL" 
                              placeholder="url" 
                              name="backUrl"
                              onChange={event => this.setState({backUrl: event.target.value})} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
