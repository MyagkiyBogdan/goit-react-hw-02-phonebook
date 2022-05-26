import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

import Filter from './Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = this.state;
      const allContacts = contacts.reduce((acc, contact) => {
        acc.push(contact.name.toLocaleLowerCase());
        return acc;
      }, []);

      if (allContacts.includes(name.toLocaleLowerCase())) {
        return alert(`${name} already in contacts.`);
      }
      const newContact = { id: nanoid(), name, number };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  changeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  makeFilteredMarkup = () => {
    const lowerCaseFilter = this.state.filter.toLocaleLowerCase();
    const filteredArray = [...this.state.contacts].filter(contact =>
      contact.name.toLocaleLowerCase().includes(lowerCaseFilter)
    );
    return filteredArray;
  };

  render() {
    const { filter } = this.state;
    const filteredArray = this.makeFilteredMarkup();
    return (
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList contacts={filteredArray} onDelClick={this.deleteContact} />
      </div>
    );
  }
}
