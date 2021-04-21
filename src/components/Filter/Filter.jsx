import PropTypes from "prop-types";
import styles from "./Filter.module.css";

<<<<<<< HEAD
const Filter = ({ filter, filterContact }) => {
  // console.log(filter);
  // console.log(filterContact);
=======
const Filter = ({ filter, onChange }) => {
>>>>>>> parent of 2420ec0 (main task files added and modified)
  return (
    <div className={styles.filter_wrap}>
      <p className={styles.filter_title}>Find contacts by name</p>
      <input
        className={styles.filter_input}
        type="text"
        value={filter}
<<<<<<< HEAD
        onChange={filterContact}
=======
        onChange={onChange}
>>>>>>> parent of 2420ec0 (main task files added and modified)
      />
    </div>
  );
};

Filter.propTypes = {
<<<<<<< HEAD
  filter: PropTypes.func.isRequired,
  filterContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => {
  return (
    console.log(filter),
    {
      filter: filter,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterContact: (event) =>
    dispatch(contactActions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
=======
  value: PropTypes.string.isRequired,
};

export default Filter;
>>>>>>> parent of 2420ec0 (main task files added and modified)
