import React from 'react'

let form, name, phone, email, address;
export default ({add_contact}) =>  {
  return(
    <form 
      ref={(node) => {
        form = node;
      }}
      onSubmit={ e => {
        e.preventDefault();
        if (!name.value.trim()){
          return
        }
        let contact = {
          name: name.value.trim() || '',
          phone: phone.value.trim() || '',
          email: email.value.trim() || '',
          address: address.value.trim() || '',
        }
        add_contact(contact)
        form.reset()
      }}
      >
      <h3>Add Contact</h3>
      <div>
        <label htmlFor="name">name</label>
        <input 
          type="text" 
          name="name"
          ref={(node) => {
            name = node;
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <input 
          type="text" 
          name="phone"
          ref={(node) => {
            phone = node;
          }}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input 
          type="email" 
          name="email"
          ref={(node) => {
            email = node;
          }}
        />
      </div>
      <div>
        <label htmlFor="address">address</label>
        <input 
          type="text" 
          name="address"
          ref={(node) => {
            address = node;
          }}
        />
      </div>
      <br />
      <input className="button-primary" type="submit" value="Submit" />
      <hr />
    </form>
  )
}