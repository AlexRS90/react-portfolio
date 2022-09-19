import React from 'react';
import SocialMedia from './SocialMedia';
import TechStack from './TechStack';

const About = () => (
  <section className="bg-stone-50 rounded-tr-extraLarge" id="about">
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
        <a
          href="https://docs.google.com/document/d/1mzpKE0Hy7y8OE0BBDvKLi4kwW3NODXyykR1EUqq7JP0/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="border border-primary w-40 rounded-md p-2 text-center text-primary hover:bg-primary hover:text-stone-50 active:bg-focus active:border-focus"
        >
          Get my resume
        </a>
      </div>
      <div className="md:w-6/12">
        <TechStack />
      </div>
    </section>
  </section>
);

export default About;
