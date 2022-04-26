import React from 'react';
import SocialMedia from './SocialMedia';

const MainView = () => (
  <main
    className="h-screen bg-stone-50 bg-hero-pattern bg-cover rounded-bl-extraLarge h-fit"
  >
    <section className="flex flex-col py-44 px-6 gap-5 lg:p-72">
      <h1 className="text-6xl">
        I&apos;m Alejandro
        <br />
        Glad to see you!!
      </h1>
      <p>
        I’m a software developer! I can help you build a product,
        feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
      </p>
      <p className="text-primary">Let&apos;s connect</p>
      <SocialMedia />
    </section>
  </main>
);

export default MainView;
