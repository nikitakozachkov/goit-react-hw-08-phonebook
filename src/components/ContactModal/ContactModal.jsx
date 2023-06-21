import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Backdrop, Modal } from './ContactModal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const ContactModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ContactForm onClose={onClose} />
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

ContactModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
