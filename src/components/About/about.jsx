import { Fragment } from 'react';
const devPicPath = '/src/assets/images/eric_developer_pic.jpeg';
const welcomeMessage = 'Welcome to my portfolio.';

function About() {
  document.title = 'About | Third Coast 🦡';

  return (
    <Fragment>
      <section className='container  notification is-dark'>
        <div className='container  notification is-light'>
          <p className='title block'>{welcomeMessage} </p>

          <div
            id='about'
            className='container columns'>
            <aside
              id='dev-photo'
              className='column '>
              <img
                src={devPicPath}
                alt='Developer Profile Image'
                className='image has-ratio'
                width='350'
              />
            </aside>

            <div className='column is-four-fifths '>
              {/* About */}

              <div className='content'>
                {/* Title  */}

                <h2
                  id='blurb-title'
                  className='title is-5'>
                  About Me
                </h2>

                {/* Name */}

                <p>
                  Hi! My name is <span id='dev_name'>Eric</span> and I am a Full
                  Stack Web Developer.
                </p>

                {/* Blurb */}

                <p>
                  I genuinely enjoy learning. That is why I picked the username{' '}
                  <strong>Semper Curiosus</strong> for my github account. I am
                  always curious about things around me trying to understand the{' '}
                  <em>why</em> behind those things.
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

