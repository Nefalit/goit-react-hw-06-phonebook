const storage = JSON.parse(localStorage.getItem('contacts'));

export const initialState = {
  items: storage ?? [],
  filter: '',
};
