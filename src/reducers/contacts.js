const contacts_initial = [
  {
    id: 1,
    name: 'austin',
    phone: '1-800-awesome',
    email: 'a@hightops.co',
    address: 'new york city',
    favorite: true,
  },
  {
    id: 2,
    name: 'paris',
    phone: '1-800-paris',
    email: 'paris@hightops.co',
    address: 'texas',
    favorite: true,
  },
  {
    id: 3,
    name: 'they',
    phone: '1-800-haters',
    email: 'nobody@they.com',
    address: 'going nowhere',
    favorite: false,
  },
  {
    id: 4,
    name: 'austin',
    phone: '1-800-dopple',
    email: 'dopple@ganger.co',
    address: 'new jersey',
    favorite: false,
  },
]

const favorite = (contact, action) => {
  if (contact.id !== action.id) {
    return contact
  }
  return {
    ...contact,
    favorite: !contact.favorite
  }
}

export default function contacts(state = contacts_initial, action){
  switch (action.type) {
    case 'FAVORITE_CONTACT':
      return state.map((contact) =>
        favorite(contact, action)
      )
    case 'DELETE_CONTACT':
      return state.filter(contact =>
        contact.id !== action.id
      )
    case 'ADD_CONTACT':
      const new_state = [
        ...state,
        {
          id: Date.now(),
          name: action.contact.name,
          phone: action.contact.phone,
          email: action.contact.email,
          address: action.contact.address,
          favorite: false
        }
      ]
      return new_state;
    default:
      return state
  }
}
