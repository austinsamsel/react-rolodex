import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Tasks from '../components/Tasks.js'
import ContactsPageWrap from '../containers/ContactsPageWrap.js'
import ContactPageSingle from '../components/ContactPageSingle.js'
require('es6-promise').polyfill()
require('isomorphic-fetch')

class App extends Component {

  constructor() {
    super()
    this.state = {
      favorites: [],
    }
  }

  componentDidMount() {
    //this.loadContacts();
  }

  render() {

    const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <Link to={to}  style={match ? {color:'darkturquoise', fontWeight:'bold'} : {color:'deeppink'}}>
          {label}
        </Link>
      )}/>
    )

    return (
      <Router>
        <div className="container">          
          <div>
            <MenuLink activeOnlyWhenExact={true} to="/" label=" 🏡 Home"/>
            <MenuLink to="/contacts" label=" 😺 Contacts" />
          </div>
          <hr/>
          <Route exact path="/" component={Tasks}  />
          <Route path="/contact/:id" 
            render={(match) => {
              return (
                <ContactPageSingle
                  match={match}
                /> )
              }
            }  
          />
          <Route 
            path="/contacts" 
            component={ContactsPageWrap}
          />
          <Route 
            render={() => {
              return (
                  <Redirect to="/contacts" /> 
                )
              }
            }
          />
        </div>
      </Router>
    );
  }

  // loadContacts = () => {
  //   let counter = 1;
  //   const call_5_x = () =>
  //   {
  //     this.fetchContacts();
  //     if (counter < 5){
  //       counter++
  //       window.setTimeout(call_5_x, 500);
  //     }
  //   }
  //   call_5_x();
  // }

  // fetchContacts = () => {
  //   fetch('https://randomuser.me/api/')
  //   .then(response => {
  //       if (response.status >= 400) {
  //       throw new Error("Bad response from server");
  //     }
  //     return response.json();
  //   })
  //   .then(contacts => {
  //     const contact = contacts.results[0]
  //     const contact_format = {
  //       id: Date.now(),
  //       name: `${contact.name.first} ${contact.name.last}`,
  //       phone: `${contact.cell}`,
  //       email: `${contact.email}`,
  //       address: `${contact.location.street}, ${contact.location.city} ${contact.location.state} ${contact.location.postcode}`,
  //     }
  //     const contact_array = this.state.contacts
  //     contact_array.push(contact_format)
  //     this.setState({
  //       contacts: contact_array
  //     })
  //   })
  //   .catch(() => {
  //     console.warn('error')
  //   })
  // }

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

}

export default App;
