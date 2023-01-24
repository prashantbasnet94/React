import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export const ModalCmp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}  data-testid="openModal"  >Open Modal</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} role ='popup'>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

 