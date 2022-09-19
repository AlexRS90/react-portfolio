import React from 'react';
// import SocialMedia from './SocialMedia';

const Footer = () => (
  <div className="bg-stone-50" id="contact">
    <footer className="bg-primary rounded-tl-extraLarge p-20">
      <div className="bg-footer-pattern bg-no-repeat">
        <div className="flex flex-col gap-5 pb-10">
          <p className="text-stone-50 text-4xl md:text-5xl lg:text-6xl">Contact me</p>
          <p className="text-stone-50 md:text-lg lg:text-xl md:px-40">
            If you have an application you are interested in developing,
            a feature that you need built or a project that needs coding.
            I’d love to help with it.
          </p>
        </div>
        <form
          className="flex flex-col gap-5 items-center"
          id="contact-form"
          name="simple-contact-form"
          acceptCharset="utf-8"
          action="https://formspree.io/f/moqyrpzk"
          method="post"
        >
          <fieldset id="fs-frm-inputs" className="flex flex-col gap-5">
            <input type="text" name="name" id="full-name" placeholder="Full name" required maxLength="30" className="rounded-md p-2 md:w-80 lg:w-96" />
            <input type="email" name="email" id="email-address" placeholder="Email address" required className="rounded-md p-2" />
            <textarea name="message" id="message" placeholder="Enter text here" required maxLength="500" rows="6" className="rounded-md p-2" />
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          </fieldset>
          <div className="border border-second w-32 rounded-md p-2 text-center text-second hover:bg-second hover:text-primary active:bg-focus active:border-focus">
            <input type="submit" value="Get in touch" />
            <ul className="errors menu-hidden" />
          </div>
        </form>
      </div>
    </footer>
  </div>
);

export default Footer;
