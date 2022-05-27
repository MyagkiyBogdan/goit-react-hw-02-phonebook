import styles from './ContactList.module.css';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelClick }) => {
  if (contacts.length === 0) {
    return <p className={styles.emptyFilter}>No contact with this name</p>;
  }
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={onDelClick}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;
