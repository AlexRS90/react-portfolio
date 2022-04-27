import React from 'react';
import SocialMedia from './SocialMedia';

const About = () => (
  <section className="bg-stone-50 rounded-tr-extraLarge py-20 px-6">
    <div className="flex flex-col border-2 border-primary gap-4">
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
  </section>
);

export default About;
