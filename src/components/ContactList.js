import React from 'react'
import ContactSingle from './ContactSingle.js'

export default ({contacts, mark_as_favorite}) => {
  const contact_items = contacts.map((contact, i) => {
    return(
      <ContactSingle
        key={i}
        id={contact.id}
        name={contact.name}
        phone={contact.phone}
        email={contact.email}
        address={contact.address}
        favorite={contact.favorite}
        mark_as_favorite={mark_as_favorite}
      />
    )
  })
  return(
    <table>
      <thead>
        <tr>
          <td></td>
          <td><span role="img" aria-label="name">😸</span></td>
          <td><span role="img" aria-label="email">📱</span></td>
          <td><span role="img" aria-label="phone">📞</span></td>
          <td><span role="img" aria-label="address">🏠</span></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {contact_items}
      </tbody>
    </table>
  )
}