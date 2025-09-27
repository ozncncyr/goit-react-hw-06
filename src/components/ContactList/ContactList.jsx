import { useSelector, useDispatch } from 'react-redux';
import style from './ContactList.module.css';
import { deleteContact } from '../../redux/reducers/contactsSlicer';

const ContactList = () => {
  const selectedContacts = useSelector(state => state.items.contacts);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  const numberFormat = selectedContacts.map(contact =>
    contact.number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3')
  );

  return (
    <div className={style.contactContainer}>
      <ul className={style.list}>
        {selectedContacts.map((contact, i) => (
          <li className={style.item} key={contact.id}>
            <p className={style.text}>
              {contact.name}: {numberFormat[i]}
            </p>
            <button
              onClick={() => handleDelete(contact.id)}
              className={style.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
