import React from 'react'
import { connect } from 'react-redux'
import ContactsPage from '../components/ContactsPage.js'
import _ from 'lodash'

let ContactsPageWrap = ({dispatch, contacts, search_query, order}) => {
  
  // search
  const search_check = (query, field) => {
    const field_string = field.toString();
    if (!query){
      query = ' ';
    }
    return field_string.toLowerCase().indexOf(query.toLowerCase()) > -1;
  }
  let matches = [];
  contacts.map((contact, i) => {
    let contact_fields = Object.keys(contact)
    contact_fields.map((key, i) => {
      if (search_check(search_query, contact[key])) {
        matches.push(contact)
      }
      return false;
    })
    return false;
  })

  // favorites
  const favorites = contacts.filter((contact, i) => {
    return contact.favorite === true;
  })

  // contacts collection
  if (search_query){
    contacts = _.uniq(matches);
  }
  if (order === true){
    contacts.sort(function(a, b){
      return a.name > b.name;
    })
  }
  if (order === false){
    contacts.sort(function(a, b){
      return a.name < b.name;
    })
  }

  return(
    <ContactsPage 
      contacts={contacts} 
      favorites={favorites}
      search_query={search_query}
      sort_order={order}
    />
  )
}
ContactsPageWrap = connect(mapStateToProps)(ContactsPageWrap)
export default ContactsPageWrap

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    search_query: state.search.search_query,
    order: state.sort.order,
  }
}