import React from 'react'
import ContactList from './ContactList.js'
import SearchWrap from '../containers/SearchWrap.js'
import SortWrap from '../containers/SortWrap.js'

export default ({contacts, search_query, favorites, mark_as_favorite, sort, sort_order}) => {
  return (
    <div>
      <div>
        <h3>Contacts</h3>
        <div className="float-right">
          <SortWrap
            sort={sort}
            sort_order={sort_order}
          />
        </div>
        <SearchWrap />
        <ContactList 
          contacts={contacts} 
          mark_as_favorite={mark_as_favorite}
        />
        <h3>Favorites</h3>
        <ContactList 
          contacts={favorites} 
          mark_as_favorite={mark_as_favorite}
        />
      </div>
      <hr />
    </div>
  )
}

