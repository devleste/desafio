import React, { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import Input from '../../Form/Input';
import RadioInput from '../../Form/RadioInput';

import { useContacts } from '../../../contexts/ContactsContext';
import { useToast } from '../../../contexts/ToastContext';

import { Container, Modal, Divider, Buttons, CancelButton, SaveButton } from './styles';

interface CreateContactProps {
  setShow: Dispatch<SetStateAction<boolean>>;
}

interface CreateFormData {
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  gender: string;
  language: string;
  birthday: string;
}

interface Errors {
  [key: string]: string;
}

const ContactCreateModal: React.FC<CreateContactProps> = ({ setShow }) => {
  const formRef = useRef<FormHandles>(null);
  const { createContact } = useContacts();
  const { addToast } = useToast();


  const handleSubmit = useCallback(async (data: CreateFormData) => {
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
      createContact(data);
      setShow(false);
      addToast({
        type: 'success',
        description: 'Contato criado com sucesso.'
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: Errors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path || ''] = err.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  }, [setShow, createContact, addToast]);

  return (
    <Container>
      <Modal>
        <h1>Criar Contato</h1>
        <Divider />
        <Form onSubmit={handleSubmit} ref={formRef} >
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
            <CancelButton onClick={() => setShow(false)} type="reset">Cancelar</CancelButton>
            <SaveButton type="submit">Salvar</SaveButton>
          </Buttons>
        </Form>
      </Modal>
    </Container>
  );
}

export default ContactCreateModal;