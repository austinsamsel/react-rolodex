import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import Tasks from '../components/Tasks.js'
import ContactsPageWrap from '../containers/ContactsPageWrap.js'
import ContactPageSingle from '../components/ContactPageSingle.js'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export default () => {
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
        <MenuLink activeOnlyWhenExact={true} to="/" label=" 🏡 Home"/>
        <MenuLink to="/contacts" label=" 😺 Contacts" />
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
  )
}
