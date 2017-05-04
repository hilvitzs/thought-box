import React, { Component } from 'react';

export default class CreateThought extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
    }
  }

  submitIdea() {
    this.props.createThought(this.state)
    this.setState({title: '', body: ''})
  }

  render() {
    return(
      <div>
        <h1>CreateThought</h1>
        <input value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
        <input value={this.state.body} onChange={(e) => this.setState({body: e.target.value })} />
        <button onClick={() => this.submitIdea() }>Submit</button>
      </div>
    );
  }
}
