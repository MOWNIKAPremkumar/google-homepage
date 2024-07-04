import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    alert(`Search for: ${query}`);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search Google or type a URL" 
        />      
   
       
      <div className="buttons">
        <button onClick={handleSearch}>Google Search</button>
        <button onClick={handleSearch}>I'm Feeling Lucky</button>
      </div>
    </div>
  );
}

export default SearchBar;
