import { Fragment } from 'react';
const devPicPath = '/src/assets/images/eric_developer_pic.jpeg';
const welcomeMessage = 'Hello! Welcome to my portfolio.';

function About() {
  document.title = 'About | Third Coast 🦡';

  return (
    <Fragment>
      <p className='title container'>{welcomeMessage} </p>
      <br />
      <section
        id='about'
        className='container columns'>
        <aside
          id='dev-photo'
          className='column is-one-third '>
          <img
            src={devPicPath}
            alt='Developer Profile Image'
            className='image has-ratio'
            width='250'
          />
        </aside>

        <div className='column'>
          <div id='about-blurb'>
            <h2
              id='blurb-title'
              className='title is-5'>
              About Me
            </h2>
            <p>
              Hi! My name is <span id='dev_name'>Eric</span> and I am a Full
              Stack Web Developer.
            </p>
            <br />
            <p>
              I genuinely enjoy learning. That is why I picked the username{' '}
              <strong>Semper Curiosus</strong> for my github account. I am
              always curious about things around me trying to understand the{' '}
              <em>why</em> behind those things.
            </p>
          </div>

          <br />

          <div id='dev-hobby'>
            <h2
              id='hobby-title'
              className='title is-5'>
              Outside Work
            </h2>
            <ul id='hobby-list'>
              <li>Hike</li>
              <li>Read</li>
              <li>
                Exploring new-to-me places or revisiting previous places to
                learn some more
              </li>
              <li>
                Woodworking and building with my hands. Most of these projects
                are utilitarian in nature, namely fixing my home or maintaining
                my cars
              </li>
              <li>Play Disc Golf</li>
              <li>Most Importantly, spending time with my family</li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;

