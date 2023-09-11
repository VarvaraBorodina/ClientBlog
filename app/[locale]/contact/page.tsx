import { LOCATIONS } from '@constants';
import React, { lazy } from 'react';

const ContactForm = lazy(() =>
  import('@components/ContactForm').then((module) => ({ default: module.ContactForm }))
);

const Map = lazy(() => import('@components/Map').then((module) => ({ default: module.Map })));

const Contact = () => (
  <>
    <ContactForm />
    <Map places={LOCATIONS} />
  </>
);

export default Contact;
