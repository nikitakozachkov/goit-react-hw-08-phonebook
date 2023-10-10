import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Backdrop, Modal } from './ContactModal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const ContactModal = ({ onClose, isModalOpen }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen && event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, onClose]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.position = "relative";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }

    return () => document.body.removeAttribute("style");
  }, [isModalOpen]);

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
