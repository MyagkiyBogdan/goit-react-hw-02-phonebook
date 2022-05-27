import styles from './ContactListItem.module.css';
import PropTypes from 'prop-types';
const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>
        <span className={styles.text__name}>{name}:</span> {number}
      </p>
      <button className={styles.delBtn} onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactListItem;
