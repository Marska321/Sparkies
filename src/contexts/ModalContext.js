// src/contexts/ModalContext.js
import React, { useContext, useState, useCallback } from 'react';

const ModalContext = React.createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    content: null,
  });

  const showModal = useCallback((title, content) => {
    setModalState({ isOpen: true, title, content });
  }, []);

  const hideModal = useCallback(() => {
    setModalState({ isOpen: false, title: '', content: null });
  }, []);

  const value = {
    ...modalState,
    showModal,
    hideModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}
