import { FunctionComponent } from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactForm from './ContactForm';
import SplitText from './SplitText';

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <section>
      <h1>
        <SplitText
          textComponent="Contact&nbsp;Me."
          textStyling="headerContainer"
          letterStyling="headerStyling"
          reverse
        />
      </h1>
      <div className="flex flex-row items-center justify-center gap-8 py-10">
        <a href="https://www.facebook.com/S.O.Duller">
          <FaFacebookF size="2.5em" />
        </a>
        <a href="https://www.linkedin.com/in/scottduller/">
          <FaLinkedinIn size="2.5em" />
        </a>
        <a href="https://github.com/scottduller">
          <FaGithub size="2.5em" />
        </a>
      </div>
      <hr className="w-full border-white" />
      <ContactForm />
    </section>
  );
};

export default Contact;
