export function FavoriteContact(id) {
  return {
    type: 'FAVORITE_CONTACT',
    id,
  }
}

export function AddContact(contact) {
  return {
    type: 'ADD_CONTACT',
    contact,
  }
}

export function Delete(id) {
  return {
    type: 'DELETE_CONTACT',
    id,
  }
}