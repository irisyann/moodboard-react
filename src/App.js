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

    // randomise the pages generated from Pexel to get different pics everytime
    let pageNumber = Math.floor(Math.random() * 10) + 1;

    for (const keyword of arrKeywords) {
      const response = await pexels.get(`/v1/search`, {
          params: {
              query: keyword,
              per_page: 20,
              page: pageNumber
          }
      });
      photos = photos.concat(response.data.photos)
    }
    this.setState({ photos: photos });
  }

  onSearchSurprise = async() => {

    // randomise the pages generated from Pexel to get different pics everytime
    let pageNumber = Math.floor(Math.random() * 10) + 1;

    const response = await pexels.get(`/v1/curated`, {
        params: {
            per_page: 20,
            page: pageNumber
        }
    });

    this.setState({ photos: response.data.photos });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form onSubmit={this.onSearchSubmit} onSurprise={this.onSearchSurprise} />
          <div className="Gallery">
            <Generator images={this.state.photos} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
