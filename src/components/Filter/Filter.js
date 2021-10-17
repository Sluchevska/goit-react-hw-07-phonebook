import PropTypes from 'prop-types';
import { Input, LabelInput } from '../ContactForm/ContactForm.styled';
import { contactsSelectors, contactsActions } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChangeHandler = e => dispatch(contactsActions.changeFilter(e.target.value));
  const onBlurHandler = () =>
    dispatch(contactsActions.changeFilter(''));

  return (
    <label>
      <LabelInput>Find contact by name</LabelInput>
      <Input type="text" value={value} onChange={onChangeHandler} onBlur={onBlurHandler} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
