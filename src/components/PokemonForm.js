import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      stats: [{
        value: 0,
        name: "hp"
      }],
      sprites: {
        front: "",
        back: ""
      }
    }
  }

  handleFormChange = (e) => {
    const formData = {...this.state}

    switch (e.target.name) {
      case "name":
        formData.name = e.target.value
        break;
      case "hp":
        formData.stats[0].value = e.target.value
        break;
      case "frontUrl":
        formData.sprites.front = e.target.value
        break;
      case "backUrl":
        formData.sprites.back = e.target.value
        break;
      default:
        formData
      break
    }

    this.setState(formData)
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleFormChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleFormChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleFormChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleFormChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
