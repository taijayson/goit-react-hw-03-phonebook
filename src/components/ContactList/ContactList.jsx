import styles from "./ContactList.module.css"
import PropTypes from "prop-types"

const ContactList = ({ contacts, onRemoveContact }) => {
  // console.log(contacts);
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={styles.item} key={id}>
            {name + " : " + number}
            <button
                className={styles.delete_btn}
                onClick={() => onRemoveContact(id)}
            >
                Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

// const mapStateToProps = (state) => {
//   const { contacts, filter } = state.contacts;
//   const normalizeFilter = filter.toLowerCase();
//   const getFilteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
//   return {
//     contacts: getFilteredContacts,
//   };
// };
// const mapStateToProps = ({ contacts, filter }) => {
//   const normalizeFilter = filter.toLowerCase();
//   const getFilteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
//   return {
//     contacts: getFilteredContacts,
//   };
//////==|or|==///////
// return {
//   contacts: contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   ),
// };
// };
// };

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (contactId) =>
    dispatch(contactActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
<<<<<<< HEAD
=======

export default ContactList
>>>>>>> parent of 2420ec0 (main task files added and modified)
