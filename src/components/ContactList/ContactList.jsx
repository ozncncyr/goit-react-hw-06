import { useSelector, useDispatch } from "react-redux";
import style from "./ContactList.module.css";
import {
  deleteContact,
  selectContacts,
} from "../../redux/reducers/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // const search = useSelector((state) => state.filters.search.toLowerCase());
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));

  // const filteredContacts = contacts.filter(
  //   (contact) =>
  //     contact.name.toLowerCase().includes(search) ||
  //     contact.number.includes(search)
  // );

  const numberFormat = contacts.map((contact) =>
    contact.number.replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3")
  );

  return (
    <div className={style.contactContainer}>
      <ul className={style.list}>
        {contacts.map((contact, i) => (
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
