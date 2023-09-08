'use client';

import React from 'react';

import { ContactForm } from '@/components/ContactForm';
import { Map } from '@/components/Map';
import { LOCATIONS } from '@/constants';

const Contact = () => {
  return (
    <>
      <ContactForm />
      <Map places={LOCATIONS} />
    </>
  );
};

export default Contact;
