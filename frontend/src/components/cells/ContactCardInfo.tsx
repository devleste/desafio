import React, { memo, useEffect, useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { MdOutlineEmail } from 'react-icons/md';
import { formatDate } from '@utils/formatDate';
import { iContactCardInfo } from '@interfaces/index';
import { useSystem } from '@context/useSystem';

const ContactCardInfo = ({
  full_name,
  email,
  birthdate,
  language,
}: iContactCardInfo) => {
  const { layoutMode, setLayoutMode }: any = useSystem();

  const enshortString = (string: string, maxlength: number) => {
    let new_string = string;

    if (new_string.length > maxlength) {
      new_string = string.slice(0, maxlength) + '...';
    }
    return new_string;
  };

  const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  return (
    <div className="contactCardInfo flex flex-col items-start gap-1">
      <h2 className="w-full flex-none text-lg text-[#009373] font-bold leading-none">
        {full_name} ({calculateAge(birthdate)}y)
      </h2>

      <div
        className="cardInfo flex items-center gap-1 text-gray-500 text-sm"
        title={email}
      >
        <span>
          <MdOutlineEmail className="text-base" />
        </span>
        <span>{layoutMode == 'grid' ? enshortString(email, 22) : email}</span>
      </div>

      <div className="cardInfo flex items-center gap-1 text-gray-500 text-sm">
        <span>
          <LiaBirthdayCakeSolid className="text-base" />
        </span>
        <span>{formatDate(birthdate)}</span>
      </div>

      <div className="cardInfo flex items-center gap-1 text-gray-500 text-sm">
        <span>
          <IoLanguage className="text-base" />
        </span>
        <span>{language}</span>
      </div>
    </div>
  );
};

export default ContactCardInfo;
