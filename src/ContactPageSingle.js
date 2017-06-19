import React from 'react'

export default ({match}) => {
  const contact = match.location.contact || {};
  return (
    <div>
      <div>
        <h3> 
          <span role="img" aria-label="name">😸</span>&nbsp; {contact.name}
        </h3> 
      </div>
      <div><span role="img" aria-label="email">📱</span>&nbsp; {contact.email}</div>
      <div><span role="img" aria-label="phone">📞</span>&nbsp; {contact.phone}</div>
      <div><span role="img" aria-label="address">🏠</span>&nbsp;  {contact.address}</div>
    </div>
  )
}

