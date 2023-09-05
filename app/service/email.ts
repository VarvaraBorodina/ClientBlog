import emailjs from '@emailjs/browser';

import { ContactFormType } from '@/components/ContactForm/types';
import { CONFIG } from '@/constants';

const {
  NEXT_PUBLIC_EMAIL_KEY,
  NEXT_PUBLIC_EMAIL_SERVICE_ID,
  NEXT_PUBLIC_EMAIL_FULL_TEMPLATE_ID,
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
} = CONFIG;

export const sendEmail = async (params: ContactFormType) => {
  await emailjs.send(
    NEXT_PUBLIC_EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_FULL_TEMPLATE_ID,
    params,
    NEXT_PUBLIC_EMAIL_KEY
  );
};

export const subscribe = async (email: string) => {
  await emailjs.send(
    NEXT_PUBLIC_EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    { email },
    NEXT_PUBLIC_EMAIL_KEY
  );
};
