import React from 'react'
import search_logo from '../assests/search-icon.svg'

const Search = () => {
  return (
    <div>
      <input type='text' />
      <div>
        <img src={search_logo} alt="logo_icon" />
      </div>
    </div>
  )
}

export default Search
