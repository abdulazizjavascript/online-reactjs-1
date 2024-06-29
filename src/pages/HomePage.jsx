import React, { Fragment } from 'react'

import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  )
}

export default HomePage