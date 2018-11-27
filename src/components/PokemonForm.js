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

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
