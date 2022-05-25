import styles from './ContactForm.module.css';
import React, { Component } from 'react';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // приходит из пропсов формы из компонента App - по факту мы вызываем функцию addContact(куда передаем state формы)

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          className={styles.input}
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number" className={styles.label}>
          Number
          <input
            className={styles.input}
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={styles.addBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
