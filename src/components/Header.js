import React from 'react';

function Header() {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-12">
          <span>React Memory Card Game</span>
          <span>[to be added zoom] + | -</span>
          <span><br/>[to be added select number of cards]</span>
          <span><br/>[to be added select images category]</span>
        </div>
      </div>
    </header>
  );
}

export default Header;