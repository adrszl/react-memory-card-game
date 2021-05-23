import React from 'react';
import Header from './components/Header';
import CardGrid from './containers/CardGrid';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <CardGrid />
      </main>
    </React.Fragment>
  );
}

export default App;
