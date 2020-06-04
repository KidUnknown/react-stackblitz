import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    // props = {
    //   headerProps: {
    //     HeaderTitle: '',
    //     HeaderRole: '',
    //     HeaderClass: ''
    //   },
    //   footerProps: {
    //     FooterTitle: '',
    //     FooterClass: ''
    //   }
    // };
    
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      }
    )
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) return <div>Error: {error.message}</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
      <ul>
        {items.map(item => {
          const {albumId,id,thumbnailUrl} = item;
          <li key={id}>
            <img id={id} alt={albumId} src={thumbnailUrl} />
          </li>
        })}
      </ul>
    );
  }
}

render(<MyComponent />, document.getElementById('root'));
