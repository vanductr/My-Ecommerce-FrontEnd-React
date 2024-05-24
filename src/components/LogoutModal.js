// src/components/LogoutModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const LogoutModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Logout Confirmation"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2 className="text-xl font-bold mb-4">ĐĂNG XUẤT</h2>
      <p>Bạn có chắc chắn muốn Đăng xuất?</p>
      <div className="flex justify-end mt-4">
        <button
          onClick={onRequestClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 mr-2"
        >
          Huỷ bỏ
        </button>
        <button
          onClick={onConfirm}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Đăng xuất
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
