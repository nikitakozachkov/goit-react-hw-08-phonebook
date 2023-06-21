import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';
import { Container, Text, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>Find by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={event =>
          dispatch(setFilter(event.currentTarget.value.trim()))
        }
      />
    </Container>
  );
};
