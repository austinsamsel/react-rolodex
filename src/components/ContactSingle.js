import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteWrap from '../containers/FavoriteWrap.js'
import DeleteContactWrap from '../containers/DeleteContactWrap.js'

export default ( props ) => {
  const contact = props;
  return(
    <tr>
      <td>
        <FavoriteWrap contact={contact} />
      </td>
      <td>
        <strong>
          <Link 
            to={{
              pathname: `contact/${contact.name}`,
              state: {
                name: contact.email
              },
              contact: contact,
            }}
          >  
            {contact.name}
          </Link>
        </strong> 
      </td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.address}</td>
      <td><DeleteContactWrap id={contact.id} /></td>
    </tr>
  )
}