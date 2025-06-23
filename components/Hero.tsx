import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 border-2 border-red-500'>
      <div className='hero-map' />
      {/* Left */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src='/camp.svg'
          alt='Camp'
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w[50px]'
        />
        <h1 className='bold-52 lg:bold-52 pt-10'>
          Start Your CyberSecurity With ITSC
        </h1>
      </div>
    </section>
  );
};

export default Hero;
