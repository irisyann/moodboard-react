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
    document.getElementById('photosNotFound').style.display = "none"; // make sure error msg is hidden

    if (photos.length < 1) { // show error msg if no photos are retrieved
      document.getElementById('photosNotFound').style.display = "block";
    }
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
    document.getElementById('photosNotFound').style.display = "none"; // make sure error msg is hidden

    if (response.data.photos.length < 1) { // show error msg if no photos are retrieved
      document.getElementById('photosNotFound').style.display = "block";
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form onSubmit={this.onSearchSubmit} onSurprise={this.onSearchSurprise} />

          <div id="photosNotFound">
            <h3>😔 Uh-oh! We've searched far and wide, but couldn't find photos for you.</h3>
            <h4>Try the 🎉 button to let us surprise you instead!</h4>
          </div>
          <div className="Gallery">
            <Generator images={this.state.photos} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
