'use client';
import React, { useEffect, useState } from 'react';
import Button from '@components/atoms/Button';
import ContactCardAvatar from '@components/cells/ContactCardAvatar';
import ContactCardInfo from '@components/cells/ContactCardInfo';
import ContactCardButtons from '@components/cells/ContactCardButtons';
import { iContactItem } from '@interfaces/index';

const ContactCard = ({
  contact,
  layoutMode,
}: {
  contact: iContactItem;
  layoutMode: string;
}) => {
  const { first_name, last_name, email, birthdate, gender, language, avatar } =
    contact;

  return (
    <div
      className={`contactCard relative flex justify-between items-center sm:flex border [&:last-of-type]:border-b-transparent  border-b-[#00937333] pb-4 ${
        layoutMode === 'list' ? 'listLayout' : 'gridLayout'
      }`}
    >
      <ContactCardAvatar
        full_name={first_name + ' ' + last_name}
        avatar={avatar}
        gender={gender}
      />

      <ContactCardInfo
        full_name={first_name + ' ' + last_name}
        email={email}
        birthdate={birthdate}
        language={language}
      />

      <ContactCardButtons
        contact={contact}
        layoutMode={layoutMode}
      />
    </div>
  );
};

export default ContactCard;
