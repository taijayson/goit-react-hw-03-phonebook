import { ADDCONTACT, FILTERCONTACT, DELETECONTACT } from "./contactsConstanse";

const addContact = (contact) => {
  return {
    type: ADDCONTACT,
    payload: contact,
  };
};

const filterContact = (value) => {
  return {
    type: FILTERCONTACT,
    payload: value,
  };
};

const deleteContact = (id) => {
  return {
    type: DELETECONTACT,
    payload: id,
  };
};

export default { addContact, filterContact, deleteContact };
