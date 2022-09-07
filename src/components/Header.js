import React from 'react';

function Header(props) {
  const { apiHandler } = props;

  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-6">
          <span>React Memory Card Game</span>
          <span>[to be added zoom] + | -</span>
          <span><br/>[to be added select number of cards]</span>
          <span><br/>[to be added select images category]</span>
        </div>

        <div className="col-6">
          <label htmlFor="api-select">Select the API to be used</label>
          <select 
            name="api-select" 
            className="form-select" 
            aria-label="Select the API to be used" 
            onChange={(event) => apiHandler(event.target.value)}>
            <option value="pexels">Pexels</option>
            <option value="unsplash">Unsplash</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;