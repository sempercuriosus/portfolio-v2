import { useEffect } from 'react';
import PageTitle from '../ui/pageTitle';
import SectionTitle from '../ui/sectionTitle';
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
      {/*  */}
      <PageTitle
        id='contact-title'
        title='Contact'
      />

      <div className='is-size-5'>
        <div
          className='block'
          style={{ padding: '3rem 0' }}>
          <h2 className='title is-3'></h2>

          <SectionTitle
            id='contact-title'
            title='Around the Web'
          />

          <p className='block'>
            {' '}
            {/* I do not use social media.  */}
            Here is how I can be found, but it may be a day or two for me to
            return.
          </p>

          <div className='section'>
            <div className='grid is-gap-6'>
              <div className='cell'>
                <ContactButton
                  name='Email'
                  icon='📬'
                  color='is-info'
                  text='has-text-dark'
                  action='email'
                  target={links.email}
                />
              </div>

              <div className='cell'>
                <ContactButton
                  name='GitHub'
                  icon='💾'
                  color='is-dark'
                  text='has-text-light'
                  action='github'
                  target={links.github}
                />
              </div>

              <div className='cell'>
                <ContactButton
                  name='Linkedin'
                  icon='🌐'
                  color='is-link'
                  text='has-text-light'
                  action='linkedin'
                  target={links.linkedin}
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

