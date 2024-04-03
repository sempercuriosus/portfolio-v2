import { useEffect } from 'react';
import ContactButton from '../ui/contactButton';
import links from '../../utils/links';

function Contact() {
  document.title = 'Contact | Third Coast 🦡';

  // Scrolling to the top, after render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id='contact'
      className=''>
      <div className='section title is-1 block has-text-centered orangeify'>
        Contact
      </div>

      <hr />
      <br />

      <div className='box is-size-5'>
        <div
          className='block'
          style={{ padding: '3rem 0' }}>
          <h2 className='title is-3'>Around the Web</h2>

          <p className='block'>
            {' '}
            I do not use social media. Here is how I can be found, but it may be
            a day or two for me to return.
          </p>

          <div className='section'>
            <div className='grid is-gap-6'>
              <div className='cell'>
                <ContactButton
                  name='Email'
                  icon='📬'
                  color='is-info is-light'
                  text='has-text-dark'
                  action='email'
                  target={links.email}
                />
              </div>

              <div className='cell'>
                <ContactButton
                  name='GitHub'
                  icon='💾'
                  color='is-info is-light'
                  text='has-text-dark'
                  action='github'
                  target={links.github}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

