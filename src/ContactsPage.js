import React from 'react'
import ContactList from './ContactList.js'
import Search from './Search.js'
import Sort from './Sort.js'

export default ({contacts, search_query, favorites, mark_as_favorite, sort, sort_order}) => {
  return (
    <div>
      <div>
        <h3>Contacts</h3>
        <div className="float-right">
          <Sort
            sort={sort}
            sort_order={sort_order}
          />
        </div>
        <Search 
          search_query={search_query} 
        />
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

