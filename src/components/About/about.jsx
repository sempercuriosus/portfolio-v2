import { Fragment } from 'react';
import titleCase from '../../utils/titleCase';
const dev_picPath = '/public/images/eric-dev-pic-2.jpg';
const welcomeMessage = titleCase('Welcome to my portfolio.');

function About() {
  document.title = 'About | Third Coast 🦡';

  return (
    <Fragment>
      <section className='container notification has-background-dark'>
        <h1 className='title has-text-light'>ABOUT</h1>
        <hr />
        <div className='container notification has-background-light'>
          <p className='title block'>{welcomeMessage} </p>

          {/* About */}
          <div
            id='about'
            className='container columns'>
            <aside
              id='dev-photo'
              className='column '>
              <img
                src={dev_picPath}
                alt='Developer Profile Image'
                className='image has-ratio'
                width='350'
              />
            </aside>

            <div className='column is-four-fifths '>
              <div className='content'>
                {/* Name */}

                <p>
                  Hi! My name is <span id='dev_name'>Eric</span> and I am a Full
                  Stack Web Developer.
                </p>

                {/* Blurb */}

                <p>
                  I have a genuine love for learning, which is why I chose the
                  username <strong>Semper Curiosus</strong>. My curiosity drives
                  me to understand the reasons <em>behind</em> things, and I am
                  always eager to explore the world around me.
                </p>
                <p>
                  I embrace the process of trying, making mistakes, and getting
                  started, recognizing that perfection is not the goal. My
                  passion lies in technology that empowers people, provides
                  solutions, remains unintrusive, and simplifies life.
                </p>
              </div>

              {/* Hobbies*/}

              <div
                id='dev-hobby'
                className='content'>
                <h2
                  id='hobby-title'
                  className='title is-5'>
                  Outside Work
                </h2>

                {/* Hobbies List*/}
                <ul id='hobby-list'>
                  <li>Hike</li>
                  <li>Read</li>
                  <li>
                    Exploring new-to-me places or revisiting previous places to
                    learn some more
                  </li>
                  <li>
                    Woodworking and building with my hands. Most of these
                    projects are utilitarian in nature, namely fixing my home or
                    maintaining my cars
                  </li>
                  <li>Play Disc Golf</li>
                  <li>Most Importantly, spending time with my family</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;

