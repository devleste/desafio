import Button from '@components/atoms/Button';
import { useSystem } from '@context/useSystem';
import { iContactItem } from '@interfaces/index';
import axios from 'axios';
import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import Cookies from 'js-cookie';

const ContactCardButtons = ({
  layoutMode = '',
  contact,
}: {
  layoutMode: string;
  contact: iContactItem;
}) => {
  const {
    isContactFormOverlayActive,
    setIContactFormOverlayActive,
    currContactEdit,
    setCurrContactEdit,
  }: any = useSystem();

  const handleContactDelete = async (contactId: string) => {
    const csrfToken = Cookies.get('csrftoken');
    if (confirm('Do you really want to delete this contact?')) {
      try {
        const response = await axios.delete(
          `https://api-server-desafio-leste-telecom.vercel.app/api/delete_contact/${contactId}/`,
          {
            headers: {
              'X-CSRFToken': csrfToken,
            },
          }
        );
        alert('Contact deleted successfully!');
        window.location.reload();
      } catch (error) {
        console.error('Error updating contact:', error);
      }
    }
  };

  return (
    <div className="contactCardButtons flex items-center gap-1 h-9  text-sm text-gray-500">
      <Button
        classes="bg-green-400 hover:bg-green-500 hover:border-green-500 border-green-300"
        handlefunction={() => {
          setCurrContactEdit(contact);
        }}
        icon={<FaPencil />}
        text={layoutMode === 'grid' ? `EDIT` : ''}
      />
      <Button
        classes="bg-red-400 hover:bg-red-500 hover:border-red-500 border-red-300"
        icon={<FaTrash />}
        handlefunction={() => {
          handleContactDelete(contact.id);
        }}
        text={layoutMode === 'grid' ? `DELETE` : ''}
      />
    </div>
  );
};

export default ContactCardButtons;
