import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
    ],
    name: '',
  };

  addContact = elem => {
    console.log(elem);
    this.setState(prevState => {
      console.log(prevState);
      const newObj = { id: 'id-4', name: 'NewName' };
      return {
        contacts: [...prevState.contacts, newObj],
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter />
        {/* <ContactList contacts={this.state.contacts} /> */}
      </div>
    );
  }
}
