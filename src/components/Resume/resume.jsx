// Link to Resume (changes based on version)
import { Fragment } from 'react';
import ResumePath from '/src/assets/resume/2024-jan-resume-eric-hulse.pdf';
import extractFilename from '../../utils/extractFilename';

let resumeFilename = extractFilename(ResumePath);

function Resume() {
  document.title = 'Resume | Third Coast 🦡';

  console.log(resumeFilename);

  return (
    <Fragment>
      <section
        id='resume'
        className='container notification has-background-dark'>
        <h1 className='title has-text-light'>RESUME</h1>
        <hr />
        <br />
        <div className='container  notification is-light'>
          {/* Experience */}

          <div
            id='experience'
            className='content block'>
            {/* Experience Title */}

            {/* Tech Stack List */}
            <h2
              id='experience-title'
              className='subtitle'>
              <strong>Tech Stack</strong>
            </h2>

            {/* Blurb */}
            <p>
              This is what I have experience in, there is no particular order to
              it, and I am always willing to add to it.{' '}
            </p>

            {/* Experience List */}
            <h3>Backend</h3>
            <ul
              id='experience-list'
              className='content'>
              <li>Javascript, Node, Express</li>
              <li>Python</li>
              <li>C#</li>
              <li>T-Sql, NoSql, MongoDB</li>
            </ul>

            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>
                <a
                  href='https://bulma.io'
                  target='blank'>
                  Bulma CSS
                </a>
              </li>
              <li>
                <a
                  href='https://getbootstrap.com'
                  target='blank'>
                  Bootstrap CSS
                </a>
              </li>
            </ul>
          </div>

          {/* Random Tech Stuff */}
          <div
            id='other-experience '
            className='content block'>
            <h2
              id='other-title'
              className='subtitle'>
              <strong>Other Projects</strong>
            </h2>

            <p id='other-title-pi'>
              Recently, I have been learning some about Rasperry Pi. Here are my
              projects:
            </p>

            {/* Random Tech List */}
            <ul id='other-list-pi'>
              <li>Pi Hole</li>
              <li>Retro Pi</li>
              <li>
                I have setup a dedicated Pi as a server to deploy projects to
                for a start to my Homelab
              </li>
            </ul>
          </div>

          {/* Download Resume */}
          <div
            id='resume-download'
            className='content'>
            <h2
              id='other-title'
              className='subtitle'>
              <strong>Resume</strong>
            </h2>

            <p>
              My resume is available as downloadable PDF and can be found below.
              The current version of my resume is{' '}
              <strong>{resumeFilename}</strong>
            </p>

            {/* Resume Link */}
            <a
              id='resume-link'
              href={ResumePath}
              download={resumeFilename}
              target='_blank'
              rel='noopener noreferrer'>
              <button className='button is-info'>Download My Resume</button>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Resume;

