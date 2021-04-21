import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactActions from "../../redux/contacts/contactsActions";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  console.log(onChange);
  return (
    <div className={styles.filter_wrap}>
      <p className={styles.filter_title}>Find contacts by name</p>
      <input
        className={styles.filter_input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  filterContact: (event) =>
    dispatch(contactActions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
