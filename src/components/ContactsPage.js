import React from 'react'
import ContactList from './ContactList.js'
import SearchWrap from '../containers/SearchWrap.js'
import SortWrap from '../containers/SortWrap.js'
import AddFormWrap from '../containers/AddFormWrap.js'

export default ({contacts, search_query, order, favorites}) =>  {
  return(
    <div>
       <AddFormWrap />
      <div className="float-right">
        <SortWrap />
      </div>
      <SearchWrap />
      <h4>contacts ({contacts.length})</h4>
      <ContactList 
        contacts={contacts} 
        search_query={search_query} 
        order={order}
      />
      <hr />
      <h4>favorites ({favorites.length})</h4>
      <ContactList 
        contacts={favorites} 
      />
    </div>
  )
}