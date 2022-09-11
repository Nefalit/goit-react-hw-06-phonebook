import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { add, remove } from '../redux/contacts/contacts-slice';
import { toFilter } from '../redux/filter/filter-slice';
import { getContacts } from '../redux/contacts/contacts-selector';
import { getFilter } from '../redux/filter/filter-selector';

const App = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  function addContact(obj) {
    if (contacts.some(el => el.name === obj.name)) {
      return alert(`${obj.name} is already in contacts.`);
      console.log("here");
    }
    dispatch(add(obj));
  }

  const removeContact = useCallback(
    id => {
      dispatch(remove(id));
    },
    [dispatch]
  );

  const handleFilter = ({ target }) => dispatch(toFilter(target.value));

  function getFilteredContact() {
    if (!filter) {
      return contacts;
    }
    const normalizeInput = filter.toLowerCase();
    const renderArr = contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeInput)
    );
    return renderArr;
  }
  const filteredContact = getFilteredContact();

  return (
    <div>
      <h1 className="titleOne">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="titleTwo">Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={filteredContact} removeContact={removeContact} />
    </div>
  );
};

export default App;
