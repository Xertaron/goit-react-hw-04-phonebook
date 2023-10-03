import data from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={data.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={data.item}>
        <div className={data.contact}>
          <p className={data.contactName}>{name}</p>
          <p className={data.contactNumber}>{number}</p>
        </div>
        <button
          className={data.btn}
          type="submit"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;