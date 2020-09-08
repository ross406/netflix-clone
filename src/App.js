import React from 'react';
import Row from './components/Row';
import './App.css';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTranding} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMoview} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMoview} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMoview} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMoview} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
