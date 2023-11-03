import { useState, useMemo } from 'react';
import { node } from 'prop-types';
import ContatosContext from './ContatosContext';

function ContatosProvider({ children }) {
  const [OpenModal, setOpenModal] = useState(false);

  const values = useMemo(() => ({
    OpenModal,
    setOpenModal,
  }), [
    OpenModal,
  ]);

  return (
    <ContatosContext.Provider value={ values }>
      {children}
    </ContatosContext.Provider>
  );
}
ContatosProvider.propTypes = {
  children: node.isRequired,
};

export default ContatosProvider;