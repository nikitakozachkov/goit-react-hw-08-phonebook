import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { Item, Text, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} was successfully deleted.`);
  };

  return (
    <Item>
      <Text>
        Name: {name} <br /> Phone: {number}
      </Text>
      
      <Button type="button" onClick={handleClick}>
        <AiFillDelete style={{ width: '18px', height: '18px' }} />
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
