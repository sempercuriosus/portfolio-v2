import { useState } from 'react';

function Contact() {
  document.title = 'Contact | Third Coast 🦡';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    <section id='contact'>
      <form>
        <label>First Name: </label>
        <input
          name='firstName'
          placeholder='First Name'
          type='text'
          defaultValue={formData.firstName}
          // onChange={setFormValue}
          onBlur={setFormValue}
        />{' '}
        <br />
        <label>Last Name: </label>
        <input
          name='lastName'
          placeholder='Last Name'
          type='text'
          defaultValue={formData.lastName}
          // onChange={setFormValue}
          onBlur={setFormValue}
        />
        <br />
        <label>Email: </label>
        <input
          name='email'
          placeholder='email@email.com'
          type='email'
          defaultValue={formData.email}
          // onChange={setFormValue}
          onBlur={setFormValue}
        />
        <br />
        <label>Message: </label>
        <textarea
          rows={3}
          cols={33}
          name='message'
          placeholder='Note to send...'
          type='text'
          defaultValue={formData.message}
          // onChange={setFormValue}
          onBlur={setFormValue}
        />
        <br />
        <button type='submit'>Send it!</button>
      </form>
    </section>
  );
}

export default Contact;

