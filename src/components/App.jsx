import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import data from './App.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import initialContacts from './contacts.json';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [initialContacts]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;
    contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value.trim());
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = todoId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== todoId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className={data.titleContacts}>Contacts</h2>
      <div className={data.allContacts}>All contacts: {contacts.length}</div>

      <div>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}
