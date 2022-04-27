import { FunctionComponent, useState } from 'react';

interface ContactFormProps {}

const ContactForm: FunctionComponent<ContactFormProps> = () => {
  const initialState = {
    name: '',
    email: '',
    msg: '',
  };

  const [payload, setPayload] = useState(initialState);

  const onChange = (e: { target: { name: any; value: any } }) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      setPayload(initialState);
    }
  };

  const { name, email, msg } = payload;

  return (
    <div>
      <h2>Email Me.</h2>
      <div>
        <div>
          <label>
            <span>Name</span>
            <input type="text" name="name" value={name} onChange={onChange} />
          </label>
          <label>
            <span>Email Address</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Message</span>
            <textarea rows={5} name="msg" value={msg} onChange={onChange} />
          </label>
          <a className="mt-3 md:ml-auto" href="contact ">
            <button className="ctaBtn w-full md:w-auto ">Send email</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
