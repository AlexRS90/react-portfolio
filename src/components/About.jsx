import React from 'react';
import SocialMedia from './SocialMedia';
import TechStack from './TechStack';
import Footer from './Footer';

const About = () => (
  <section className="bg-stone-50">
    <section className="bg-stone-50 rounded-tr-extraLarge py-20 px-6 flex flex-col md:flex-row md:gap-10">
      <div className="flex flex-col gap-4 md:w-6/12">
        <p className="text-3xl">
          About
          <br />
          Myself
        </p>
        <p>
          Hello I’m a software developer!
          I can help you build a product,
          feature or website Look through
          some of my work and experience!
          If you like what you see and have
          a project you need coded, don’t
          hestiate to contact me.
        </p>
        <p className="text-primary">Let&apos;s Connect</p>
        <SocialMedia />
        <button
          type="button"
          className="border border-primary w-fit rounded-md p-2 text-center text-primary hover:bg-primary hover:text-stone-50 active:bg-focus active:border-focus"
        >
          Get my resume
        </button>
      </div>
      <div className="md:w-6/12">
        <TechStack />
      </div>
    </section>
    <Footer />
  </section>
);

export default About;
