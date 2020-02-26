import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Title from './Title';
import './style.css';
/*                                                                            */
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      title: 'My first stackblitz app',
      bodycopy: 'Just a small sentence for the body area'
    };
  }

  render() {
    return (
      <div>
        <Title title={this.state.title} />
        <Hello name={this.state.name} />
        <p>
          {this.state.bodycopy}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
