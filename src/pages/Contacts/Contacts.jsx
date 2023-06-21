import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading, getContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/actions';
import { ContactModal } from 'components/ContactModal/ContactModal';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { AiFillPlusCircle } from 'react-icons/ai';
import { HeaderText, Button } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    switch (isModalOpen) {
      case false:
        return setIsModalOpen(true);
      case true:
        return setIsModalOpen(false);
      default:
        return;
    }
  };

  return (
    <>
      {isModalOpen && <ContactModal onClose={toggleModal} />}

      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
      >
        <HeaderText>Contacts</HeaderText>
        <Button onClick={toggleModal}>
          <AiFillPlusCircle style={{ width: '22px', height: '22px' }} />
        </Button>
      </div>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {contacts.length !== 0 ? (
        <ContactList />
      ) : (
        <p>There is no contacts yet.</p>
      )}
    </>
  );
}
