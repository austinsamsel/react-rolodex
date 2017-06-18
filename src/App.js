import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {

  constructor() {
    super()
    this.state = {
      contact: {}
    }
  }

  componentDidMount() {
    this.loadContact();
  }

  loadContact(){
    fetch('https://randomuser.me/api/')
      .then(response => {
        if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(contacts => {
      const contact = contacts.results[0]
      this.setState({
        contact: {
          name: `${contact.name.first} ${contact.name.last}`,
          phone: `${contact.cell}`,
          email: `${contact.email}`,
          address: `${contact.location.street}, ${contact.location.city} ${contact.location.state} ${contact.location.postcode}`,
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h3>Contact</h3>
          name: {this.state.contact.name} <br />
          phone: {this.state.contact.phone} <br />
          email: {this.state.contact.email} <br />
          address: {this.state.contact.address} <br />
        </div>
        <hr />
        <div>
          <h3 id="module1tasks">Module #1 Tasks</h3>
          <h4 id="basic">Basic</h4>
          <ul>
          <li><span role="img" aria-label="checkmark">✅</span> Install node and create-react-app</li>
          <li><span role="img" aria-label="checkmark">✅</span> Create a new application</li>
          <li><span role="img" aria-label="checkmark">✅</span> Remove auto-generated code from the src directory
          <pre><code>Don't remove code from `src/index.js`, it's fine.
          </code></pre></li>
          <li><span role="img" aria-label="checkmark">✅</span> Create a simple component that displays a user contact
          <pre><code>A contact should have name, phone number, e-mail address and address. Consider using randomuser.me for user data
          </code></pre></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
