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
      className='container'>
      <br />
      <p>
        I do not use social media, but you can send me a message. It may be a
        day or two for me to return.
      </p>
      <form className='section'>
        <label className='label'>Name: </label>
        <input
          name='name'
          placeholder='Bill F. Murray'
          type='text'
          defaultValue={formData.name}
          // onChange={setFormValue}
          onBlur={setFormValue}
          className='input'
        />{' '}
        <br />
        <br />
        <label className='label'>Email: </label>
        <input
          name='email'
          placeholder='email@email.com'
          type='email'
          defaultValue={formData.email}
          // onChange={setFormValue}
          onBlur={setFormValue}
          className='input'
        />
        <br />
        <br />
        <label className='label'>Message: </label>
        <textarea
          rows={3}
          cols={33}
          name='message'
          placeholder='Note to send...'
          type='text'
          defaultValue={formData.message}
          // onChange={setFormValue}
          onBlur={setFormValue}
          className='textarea'
        />
        <br />
        <br />
        <button
          className='button is-success is-outlined is-medium'
          type='submit'>
          <strong>Send it!</strong>
        </button>
      </form>
    </section>
  );
}

export default Contact;

