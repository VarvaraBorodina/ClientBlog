import React from 'react';

import { Map } from '@/components/Map';
import { LOCATIONS } from '@/constants';

const Contact = () => {
  return (
    <div>
      <Map places={LOCATIONS} />
    </div>
  );
};

export default Contact;
