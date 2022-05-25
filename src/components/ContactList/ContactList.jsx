import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={styles.delBtn}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
