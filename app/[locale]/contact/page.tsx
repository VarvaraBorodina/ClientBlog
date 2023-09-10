'use client';

import { ContactForm } from '@components/ContactForm';
import { Map } from '@components/Map';
import { LOCATIONS } from '@constants';
import React from 'react';

const Contact = () => {
  return (
    <>
      <ContactForm />
      <Map places={LOCATIONS} />
    </>
  );
};

export default Contact;
