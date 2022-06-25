import React from 'react';
import Form from './Form';
import Generator from './Generator';
import pexels from './pexels';
import './App.css';

class App extends React.Component {

  state = { photos: [] };

  onSearchSubmit = async (keywords) => {

    const arrKeywords = keywords.split(';');
    let photos = [];

    for (const keyword of arrKeywords) {
      const response = await pexels.get(`/v1/search`, {
          params: {
              query: keyword,
              per_page: 15,
              page: 1
          }
      });
      photos = photos.concat(response.data.photos)
    }

    this.setState({ photos: photos });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form onSubmit={this.onSearchSubmit } />
          <Generator images={this.state.photos} />
        </header>
      </div>
    );
  }
}

export default App;
