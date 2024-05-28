import React, { useState } from 'react';
import Modal from './Modal';

const HomeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <h2>This is a modal!</h2>
        <p>Content inside the modal.</p>
      </Modal>
    </div>
  );
};

export default HomeModal;
