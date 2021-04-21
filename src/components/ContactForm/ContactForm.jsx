import { Component } from "react"
import styles from "./ContactForm.module.css"
import PropTypes from "prop-types"

class ContactForm extends Component {
<<<<<<< HEAD
  state = {
    name: "",
    number: "",
  };

  //   addContact = (data) => {
  // const { contacts } = this.props.contacts;
  // } else {
  //   this.setState((contacts) => ({
  //     contacts: [newContact, ...contacts.contacts],
  //   }));
  // }
  //   };

  //   checkContact = (name) => {
  //     const contacts = this.props.contacts;
  //     // const normalizeName = name.toLowerCase();
  //     return contacts.some(
  //       (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //     );
  //   };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);

    const { name, number } = this.state;

    // if (this.checkContact(name)) {
    //   alert(`Contact with name "${name}" already in base`);
    //   return;
    // }
=======
    state = {
        name: "",
        number: "",
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget
        this.setState({ [name]: value })
    }
>>>>>>> parent of 2420ec0 (main task files added and modified)

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit({ ...this.state })
        this.setState({ name: "", number: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
            <label className={styles.label}>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                className={styles.input}
                value={this.state.name}
                onChange={this.handleChange}
            />
            <label className={styles.label}>Number</label>
            <input
                type="tel"
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                required
                className={styles.input}
                value={this.state.number}
                onChange={this.handleChange}
            />
            <button className={styles.button} type="submit" onSubmit={this.handleAddContact}>
            Add contact
            </button>    
        </form>
        )
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

<<<<<<< HEAD
const mapStateToProps = (state) => {
  console.log(state);
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
=======
export default ContactForm
>>>>>>> parent of 2420ec0 (main task files added and modified)
