import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

interface ModalProps {
  isOpen: boolean;
  body: React.ReactNode;
  title: string;
}

export interface ContactsProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  language: string;
  avatar: string;
  birthday: string;
}

interface ContextProps {
  modal: ModalProps;
  setModal: Dispatch<SetStateAction<ModalProps>>;
  contacts: ContactsProps[];
  setContacts: Dispatch<SetStateAction<ContactsProps[]>>;
}

const INITIAL_MODAL_STATE: ModalProps = {
  isOpen: false,
  body: <></>,
  title: '',
};

const Context = createContext<ContextProps>({
  modal: INITIAL_MODAL_STATE,
  setModal: () => {},
  contacts: [],
  setContacts: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modal, setModal] = useState<ModalProps>(INITIAL_MODAL_STATE);
  const [contacts, setContacts] = useState<ContactsProps[]>([]);

  const saveMemo = useMemo(
    () => ({
      modal,
      setModal,
      contacts,
      setContacts,
    }),
    [modal, contacts]
  );

  return <Context.Provider value={saveMemo}>{children}</Context.Provider>;
};

export const useContextModal = () => useContext(Context);
