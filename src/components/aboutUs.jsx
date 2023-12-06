
import Link from 'next/link'
import Button from './atoms/button'
import { getAPI } from '@/utils/api'

import React from 'react';

const AboutUs = ({ aboutUs }) => {
  const { title, description, button } = aboutUs;

  return (
    <div className="py-20 mx-auto max-w-screen-md text-center">
      <h3 className="text-7xl font-medium mb-2">{title}</h3>
      <h4 className="text-3xl leading-relaxed py-6">{description}</h4>
      <div className="py-3">
        <Link href="/aboutUs">
        
            <Button rounded="semi" variant="primary">
              <h5 className="text-2xl font-light">{button.label}</h5>
            </Button>
         
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

