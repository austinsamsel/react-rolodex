import React from 'react'
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
        <strong>{contact.name}</strong> 
      </td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.address}</td>
    </tr>
  )
}