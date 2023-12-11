import { useState } from 'react';

function Contact() {
  document.title = 'Contact | Third Coast 🦡';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Set Values
  const setFormValue = (event) => {
    const { target } = event;
    const name = target.name;
    const value = target.value;

    if (!value) {
      return alert(name + ' is required. Please enter in a value.');
    }

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      return updatedData;
    });
  };

  // Input Form
  return (
    <section
      id='contact'
      className='container notification is-dark'>
      <h1 className='title'>CONTACT</h1>
      <hr />
      <div className='container  notification is-light'>
        {/*
         Form Title
          */}
        <h2 className='title is-4'>Send me a message 📤</h2>
        <p>
          I do not use social media, so this is the best way to contact me. It
          may be a day or two for me to return.
        </p>
        <form className='section'>
          {/*
           Name Label
            */}
          <label className='label'>Name: </label>
          {/*
           Name
            */}
          <input
            name='name'
            placeholder='Bill F. Murray'
            type='text'
            defaultValue={formData.name}
            onBlur={setFormValue}
            className='input block'
          />{' '}
          {/*
           Email Label
            */}
          <label className='label'>Email: </label>
          {/*
           Email
            */}
          <input
            name='email'
            placeholder='email@email.com'
            type='email'
            defaultValue={formData.email}
            onBlur={setFormValue}
            className='input block'
          />
          {/*
           Message Label
            */}
          <label className='label'>Message: </label>
          {/*
           Message
            */}
          <textarea
            rows={3}
            cols={33}
            name='message'
            placeholder='Note to send...'
            type='text'
            defaultValue={formData.message}
            onBlur={setFormValue}
            className='textarea block'
          />
          <button
            className='button is-success is-outlined is-medium'
            type='submit'>
            <strong>Send it!</strong>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

