import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/actions';
import { toast } from 'react-hot-toast';
import { Container, Text, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const contact = {
      name: form.elements.name.value.trim(),
      number: form.elements.phone.value.trim(),
    };

    form.reset();

    const used = contacts.find(
      ({ name, number }) =>
        name.toLowerCase() === contact.name.toLowerCase() ||
        number === contact.number
    );

    if (used) {
      return toast.error(
        `${contact.name} or ${contact.number} is already in contacts.`
      );
    }

    dispatch(addContact(contact));
    toast.success(`Contact ${contact.name} was successfully added.`);
    onClose();
  };

  return (
    <Container onSubmit={onFormSubmit} autoComplete="off">
      <label>
        <Text>Name</Text>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          maxLength="16"
          required
        />
      </label>

      <label>
        <Text>Phone</Text>

        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          maxLength="12"
          required
        />
      </label>

      <ul>
        <li>
          <Button type="submit">Confirm</Button>
        </li>

        <li>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </li>
      </ul>
    </Container>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
