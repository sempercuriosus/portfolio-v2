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
      <section id='about'>
        <div className='section is-large title is-1 block has-text-centered has-text-light'>
          Welcome To My <span className='orangeify'>Portfolio</span>
          <span
            id='blinky'
            className='blink-me'
            style={{ marginLeft: '1rem' }}></span>
        </div>
        {/* 
        <div
          className='title orangeify'
          style={{ paddingLeft: '1rem' }}>
          ABOUT
        </div> */}

        <hr />
        <br />

        <div className='box is-size-5'>
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
              <div className='block title is-3'>Hello! 👋</div>

              <div className='block'>
                <p>
                  My name is{' '}
                  <span
                    id='dev_name'
                    className='has-text-weight-bold'>
                    Eric
                  </span>{' '}
                  and I am a Full Stack Web Developer currently based in South
                  Carolina, USA, originally hailing from Wisconsin 🧀.
                </p>
              </div>

              <div className='block'>
                <p>I love working with my hands, crafting, and creating.</p>
              </div>

              <div className='block'>
                <p>
                  I have a genuine joy for learning, which is why I chose the
                  username <strong>Semper Curiosus</strong>. It is my curiosity
                  about what surounds me drives me to understand the{' '}
                  <em>why</em> behind them.
                  {/* I am always eager to explore the
                  world around me. */}
                </p>
              </div>

              <div className='block'>
                <p>
                  I embrace the process of trying, to get started and make
                  mistakes, recognizing that perfection is not the goal. I
                  believe that technology that empowers people, provides
                  solutions, remains unintrusive, and simplifies life. I aim to
                  make that kind of technology.
                </p>
              </div>
              {/* Hobbies*/}
              <Hobbies />
            </div>
          </div>

          <br />

          <div className='section has-text-centered'>
            Here are some of my{' '}
            <strong>
              <Link
                id='link-portfolio-about'
                to='/Portfolio'>
                selected works
              </Link>
            </strong>{' '}
            or if you would like to{' '}
            <strong>
              <Link
                id='link-contact-about'
                to='/Contact'>
                connect
              </Link>
            </strong>{' '}
            with me
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

