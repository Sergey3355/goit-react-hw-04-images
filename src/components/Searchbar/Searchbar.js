import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({onSubmit}) => {
const [inputData, setInputData] = useState('')

 const onChangeInput = e => {
    setInputData( e.currentTarget.value.toLowerCase() );
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputData);
    setInputData('')
    resetForm();
  };

 const resetForm = () => {
    setInputData('')
  };

  
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchForm_button}></button>

          <input
            className={css.SearchForm_input}
            name="inputData"
            value={inputData}
            onChange={onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }


Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar