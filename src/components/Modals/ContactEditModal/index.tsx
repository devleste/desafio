import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Contact from '../../../types/Contact';
import FormattedContact from '../../../types/FormattedContact';

import Input from '../../Form/Input';
import RadioInput from '../../Form/RadioInput';

import { useContacts } from '../../../contexts/ContactsContext';
import { useToast } from '../../../contexts/ToastContext';

import { Container, Modal, Divider, Buttons, CancelButton, SaveButton, DeleteButton } from './styles';

interface EditContactProps {
  contact: FormattedContact;
  setContactEdit: Dispatch<SetStateAction<FormattedContact | null>>;
  setContactDetail: Dispatch<SetStateAction<FormattedContact | null>>;
  setContactDelete: Dispatch<SetStateAction<FormattedContact | null>>;
}

interface Errors {
  [key: string]: string;
}

const ContactEditModal: React.FC<EditContactProps> = ({ contact, setContactEdit, setContactDetail, setContactDelete }) => {
  const formRef = useRef<FormHandles>(null);
  const { editContact } = useContacts();
  const { addToast } = useToast();

  useEffect(() => {
    setContactDetail(null);
  }, [setContactDetail]);

  const handleSubmit = useCallback(async (data: Contact) => {
    try {
      const schema = Yup.object().shape({
        first_name: Yup.string().required('Nome obrigatório'),
        last_name: Yup.string().required('Sobrenome obrigatório'),
        avatar: Yup.string().url('Avatar precisa ser uma url').required('Avatar obrigatório'),
        email: Yup.string().email('Digite um email válido').required('Email obrigatório'),
        gender: Yup.string().typeError('Gênero obrigatório').required('Gênero obrigatório'),
        language: Yup.string().required('Linguagem obrigatória'),
        birthday: Yup.date().typeError('Nascimento precisa ser uma data válida').required('Nascimento obrigatório'),
      });
      await schema.validate(data, { abortEarly: false });
      editContact({ ...data, id: contact.id });
      setContactEdit(null);
      addToast({
        type: 'success',
        description: 'Contato editado com sucesso.'
      })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: Errors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path || ''] = err.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  }, [setContactEdit, editContact, contact.id, addToast]);

  return (
    <Container>
      <Modal>
        <h1>Editar Contato</h1>
        <Divider />
        <Form 
          onSubmit={handleSubmit}
          ref={formRef}
          initialData={{
            first_name: contact.first_name,
            last_name: contact.last_name,
            avatar: contact.avatar,
            email: contact.email,
            gender: contact.gender,
            language: contact.language,
            birthday: contact.birthday
          }}
        >
          <div>
            <label htmlFor="first_name">Nome</label>
            <Input name="first_name" placeholder="Ex.: João" />
          </div>
          <div>
            <label htmlFor="last_name">Sobrenome</label>
            <Input name="last_name" placeholder="Ex.: Silva" />
          </div>
          <div>
            <label htmlFor="avatar">Avatar</label>
            <Input name="avatar" placeholder="Ex.: https://avatar.png" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input name="email" placeholder="Ex.: joao@email.com" />
          </div>
          <div>
            <label>Gênero</label>
            <RadioInput name="gender" options={[{ id: 'M', label: 'Masculino' }, { id: 'F', label: 'Feminino' }]} />
          </div>
          <div>
            <label htmlFor="language">Linguagem</label>
            <Input name="language" placeholder="Ex.: Portuguese" />
          </div>
          <div>
            <label htmlFor='birthday' >Nascimento</label>
            <Input name="birthday" placeholder="Ex.: 01/01/2001" type="date" />
          </div>
          <Buttons>
            <CancelButton type="reset" onClick={() => setContactEdit(null)}>Cancelar</CancelButton>
            <DeleteButton type="button" onClick={() => setContactDelete(contact)}>Deletar</DeleteButton>
            <SaveButton type="submit">Salvar</SaveButton>
          </Buttons>
        </Form>
      </Modal>
    </Container>
  );
}

export default ContactEditModal;