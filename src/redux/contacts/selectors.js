export const getContacts = state => {
  const normalizedFilter = state.contacts.filter.toLowerCase();

  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const getIsLoading = state => state.contacts.isLoading;
