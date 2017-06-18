import React, { Component } from 'react'
import ContactList from './ContactList.js'
import Tasks from './Tasks.js'
import Search from './Search.js'
import Sort from './Sort.js'
import _ from 'lodash'
require('es6-promise').polyfill()
require('isomorphic-fetch')

class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: [],
      favorites: [],
      search_query: '',
      sort_order: null,
    }
  }

  componentDidMount() {
    this.loadContacts();
  }

  render() {

    // search
    const search_check = (query, field) => {
      const field_string = field.toString();
      if (!query){
        query = ' ';
      }
      return field_string.toLowerCase().indexOf(query.toLowerCase()) > -1;
    }
    
    let matches = [];
    this.state.contacts.map((contact, i) => {
      let contact_fields = Object.keys(contact)
      contact_fields.map((key, i) => {
        if (search_check(this.state.search_query, contact[key])) {
          matches.push(contact)
        }
        return false;
      })
      return false;
    })

    // contacts assignment
    // search:
    let contacts = this.state.contacts;
    if (this.state.search_query) {
      contacts = _.uniq(matches)
    }
    // sort order:
    if (this.state.sort_order === true){
      contacts.sort((a, b) => {
        return a.name > b.name;
      })
    }
    if (this.state.sort_order === false){
      contacts.sort((a, b) => {
        return a.name < b.name;
      })
    }

    return (
      <div className="container">
        <div>
          <h3>Contacts</h3>
          <div className="float-right">
            <Sort
              sort={this.sort}
              sort_order={this.state.sort_order}
            />
          </div>
          <Search 
            search_query={this.search_query} 
          />
          <ContactList 
            contacts={contacts} 
            mark_as_favorite={this.mark_as_favorite}
          />
          <h3>Favorites</h3>
          <ContactList 
            contacts={this.state.favorites} 
            mark_as_favorite={this.mark_as_favorite}
          />
        </div>
        <hr />
        <Tasks />
      </div>
    );
  }

  loadContacts = () => {
    let counter = 1;
    const call_5_x = () =>
    {
      this.fetchContacts();
      if (counter < 5){
        counter++
        window.setTimeout(call_5_x, 500);
      }
    }
    call_5_x();
  }

  fetchContacts = () => {
    fetch('https://randomuser.me/api/')
    .then(response => {
        if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(contacts => {
      const contact = contacts.results[0]
      const contact_format = {
        id: Date.now(),
        name: `${contact.name.first} ${contact.name.last}`,
        phone: `${contact.cell}`,
        email: `${contact.email}`,
        address: `${contact.location.street}, ${contact.location.city} ${contact.location.state} ${contact.location.postcode}`,
      }
      const contact_array = this.state.contacts
      contact_array.push(contact_format)
      this.setState({
        contacts: contact_array
      })
    })
    .catch(() => {
      console.warn('error')
    })
  }

  favorite = (contact, id) => {
    if (contact.id !== id) {
      return contact
    }
    return {
      favorite: !contact.favorite
    }
  }
  
  mark_as_favorite = (id) => {
    const contacts = this.state.contacts.map(contact => {
      if (contact.id === id){
        contact.favorite = !contact.favorite;
      }
      return contact;
    })
    this.setState({contacts: contacts})
    this.filter_favorites();
  }

  filter_favorites = () => {
    const favorites = this.state.contacts.filter(contact => {
      return contact.favorite === true;
    })
    this.setState({ favorites: favorites })
  }

  search_query = (query) => {
    this.setState({search_query: query})
  }

  sort = () => {
    console.log('clicked')
    this.setState({sort_order: !this.state.sort_order});
    console.log(this.state.sort_order)
  }

}

export default App;
