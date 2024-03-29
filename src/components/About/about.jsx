import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hobbies from '../Hobbies/hobbies';
const dev_picPath = '/images/eric-dev-pic-2.JPG';

function About() {
  document.title = 'About | Third Coast 🦡';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className='section is-large title is-1 block has-text-centered has-text-light'>
          Welcome To My <span className='orangeify'>Portfolio</span>
          <span
            id='blinky'
            className='blink-me'
            style={{ marginLeft: '1rem' }}></span>
        </div>

        <div
          className='title orangeify'
          style={{ paddingLeft: '1rem' }}>
          ABOUT
        </div>

        <hr />
        <div
          id='about'
          className='box is-size-5'>
          <div className='columns is-multiline is-vcentered'>
            <div className='column is-narrow'>
              <figure
                id='dev-photo'
                className=''>
                <img
                  src={dev_picPath}
                  alt='Developer Profile Image'
                  className='image has-ratio'
                  width='300'
                  style={{ borderRadius: '6px' }}
                />
              </figure>
            </div>

            <div className='column is-offset-1'>
              <div className='block title is-3'>Hello!</div>

              <div className='block'>
                My name is{' '}
                <span
                  id='dev_name'
                  className='has-text-weight-bold'>
                  Eric
                </span>{' '}
                and I am a Full Stack Web Developer.
              </div>

              <div className='block'>
                I have a genuine love for learning, which is why I chose the
                username <strong>Semper Curiosus</strong>. My curiosity drives
                me to understand the reasons <em>behind</em> things, and I am
                always eager to explore the world around me.
              </div>

              <div className='block'>
                I embrace the process of trying, making mistakes, getting
                started, and recognizing that perfection is not the goal. My
                passion lies in technology that empowers people, provides
                solutions, remains unintrusive, and simplifies life.
              </div>
              {/* Hobbies*/}
              <Hobbies />
            </div>
          </div>

          <br />

          <div className='section has-text-centered'>
            Please, checkout some of my{' '}
            <strong>
              <Link
                id='link-portfolio-about'
                to='/Portfolio'>
                selected works
              </Link>
            </strong>{' '}
            or{' '}
            <strong>
              <Link
                id='link-contact-about'
                to='/Contact'>
                connect with me
              </Link>
            </strong>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

