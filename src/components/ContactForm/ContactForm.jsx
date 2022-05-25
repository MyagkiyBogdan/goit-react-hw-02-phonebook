import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  return (
    <form className={styles.form}>
      <label htmlFor="name" className={styles.label}>
        Name
      </label>
      <input
        className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button
        type="submit"
        className={styles.addBtn}
        onClick={() => addContact()}
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
