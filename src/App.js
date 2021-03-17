import React from 'react';

import './App.css';
import Row from './Row/Row';
import request from './Requests/request'
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';

function App() {
  return (
    <div className="app">
      <Nav></Nav>
     <Banner></Banner>
     <Row title="NETFLEX ORIGINALS" requests={request.featchNetFlixOriginal} isLargeRow></Row>
     <Row title="Trending Now" requests={request.featchTrending}></Row>
     <Row title="Top Rated" requests={request.featchTopRated}></Row>
     <Row title="Action Movies" requests={request.featchActionMovies}></Row>
     <Row title="Comedy Movies" requests={request.featchComedyMovies}></Row>
     <Row title="Horror Movies" requests={request.featchHororMovies}></Row>
     <Row title="Romance Movies" requests={request.featchRomanceMovies}></Row>
     <Row title="Documentaries" requests={request.featchDoumentMovies}></Row>
    
    </div>
  );
}

export default App;
