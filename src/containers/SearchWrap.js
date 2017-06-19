import React from 'react'
import { connect } from 'react-redux'
import { SearchQuery } from '../actions/search.js'
import Search from '../components/Search.js'

let SearchWrap = ({dispatch, search_query}) => {
  const query = (user_input) => {
    dispatch(SearchQuery(user_input))
  }
  return(
    <Search 
      search_query={query} 
    />
  )
}
SearchWrap = connect()(SearchWrap)
export default SearchWrap