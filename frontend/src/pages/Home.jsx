import { Container } from '@/components/Container';
import { Header } from '@/components/header';
import { Hero, HeroSubtitle, HeroTitle } from '@/components/hero';
import React from 'react';

export const Home = () => {
  return (
    <div className='bg-backgroundLin text-white'>
     <Header/>
      <Container >
        <Hero>
          <HeroTitle>
            Linear is a better way <br /> to build products
          </HeroTitle>
          <HeroSubtitle>
            Meet the new software framework that enhances development speed.
          </HeroSubtitle>
        </Hero>
      </Container>
    </div>
  );
};
