import React from 'react'
import { Link } from 'react-router-dom'
import Favorite from './Favorite.js'

export default ( props ) => {
  const contact = props;
  const mark_as_favorite = props.mark_as_favorite;
  return(
    <tr>
      <td>
        <Favorite 
          contact={contact}
          mark_as_favorite={mark_as_favorite} 
        />
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
    </tr>
  )
}