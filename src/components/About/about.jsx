import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hobbies from '../Hobbies/hobbies';
import SectionTitle from '../ui/sectionTitle';

const dev_picPath = '/images/eric-dev-pic-2.jpg';

function About() {
  document.title = 'About | Third Coast 🦡';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        id='about'
        className='is-size-5'>
        <div className='section is-large title is-2 block has-text-centered'>
          Welcome To My{' '}
          <span className='orangeify'>Website</span>
          <span
            id='blinky'
            className='blink-me'
            style={{ marginLeft: '1rem' }}></span>
        </div>

        <hr />
        <br />

        <div className='block'>
          {/* <div
            className='columns is-multiline is-centered'
            style={{ flexDirection: 'row-reverse', display: 'flex' }}> */}
          {/* <div className='column is-3'>
              
            </div> */}

          {/* <div className='column is-9 block'> */}

          <SectionTitle
            id='about-title'
            title='Hello! 👋'
          />

          <div className='block'>
            <p>
              My name is{' '}
              <span
                id='dev_name'
                className='has-text-weight-bold'>
                Eric
              </span>{' '}
              and I am a Full Stack Web Developer currently based
              in South Carolina 🌴, originally hailing from
              Wisconsin 🧀.
            </p>
          </div>

          <div className='block'>
            <p>
              I love working with my hands, crafting, and
              creating.
            </p>
          </div>
        </div>

        <br />

        <figure className='block image'>
          <img
            src={dev_picPath}
            alt='Developer Profile Image'
            className='container'
            style={{ borderRadius: '10px', width: '80%' }}
          />
        </figure>

        <div className='block'>
          <p>
            I have a genuine joy for learning, which is why I
            chose the username <strong>Semper Curiosus</strong>.
            It is my curiosity about what surounds me drives me
            to understand the <em>why</em> behind them.
          </p>

          <br />

          <p>
            I embrace the process of trying, to get started and
            make mistakes, recognizing that perfection is not the
            goal. It is the action in taking knowledge and
            building a deeper understanding that matters. I
            believe that technology that empowers people,
            provides solutions, is unintrusive, and simplifies
            life. This is what I want to create -- technology to
            help.
          </p>
        </div>

        {/* Hobbies*/}
        <Hobbies />
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
        {/* </div> */}
      </section>
    </>
  );
}

export default About;

