// import { useState } from 'react';

const email = 'hulse@hey.com';

function Contact() {
  document.title = 'Contact | Third Coast 🦡';

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // Set Values
  // const setFormValue = (event) => {
  //   const { target } = event;
  //   const name = target.name;
  //   const value = target.value;

  //   if (!value) {
  //     return alert(name + ' is required. Please enter in a value.');
  //   }

  //   setFormData((prevData) => {
  //     const updatedData = {
  //       ...prevData,
  //       [name]: value,
  //     };

  //     return updatedData;
  //   });
  // };

  // Input Form
  return (
    <section
      id='contact'
      className='container notification has-background-dark'>
      <h1 className='title has-text-light'>CONTACT</h1>
      <hr />
      <div className='container notification has-background-light'>
        {/*
         Form Title
          */}
        <h2 className='title is-4'>Send me a message 📤</h2>

        {/* Email  */}

        <p>
          I do not use social media, so an{' '}
          <a href={`mailto:${email}`}>
            <strong>Email</strong>
          </a>{' '}
          is the best way to contact me.
        </p>

        <p>
          It may be a day or two for me to return. Scanning the QR code will
          also send me an email.
        </p>
        <br />

        <figure className='image is-128x128'>
          <img src='/images/qr-email.png' />
        </figure>
        <br />
      </div>
    </section>
  );
}

export default Contact;

