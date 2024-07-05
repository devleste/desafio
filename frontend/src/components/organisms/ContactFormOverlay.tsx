import React from 'react';
import ContactForm from '../cells/ContactForm';
import { useSystem } from '@context/useSystem';

const ContactFormOverlay = () => {
  const { isContactFormOverlayActive, setIContactFormOverlayActive }: any =
    useSystem();

  return (
    <div
      className={`${
        isContactFormOverlayActive
          ? 'opacity-1 pointer-events-initial '
          : 'opacity-0 pointer-events-none '
      } ContactFormOverlay transition-all duration-300 w-screen h-screen fixed top-0 left-0 bg-[#00000080] z-40`}
      onClick={() => {
        setIContactFormOverlayActive(false);
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormOverlay;
