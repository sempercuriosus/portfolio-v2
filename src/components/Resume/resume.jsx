// Link to Resume (changes based on version)
import { useEffect } from 'react';
import ResumePath from '/src/assets/resume/2024-jan-resume-eric-hulse.pdf';
import extractFilename from '../../utils/extractFilename';

let resumeFilename = extractFilename(ResumePath);

function Resume() {
  document.title = 'Resume | Third Coast 🦡';

  // Scrolling to the top, after render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id='resume'>
        <div className='section title is-1 block has-text-centered orangeify'>
          Resume
        </div>
        <hr />
        <br />

        <div className='box is-size-5 block'>
          <div
            id='resume-download'
            className='block'
            style={{ padding: '3rem 0' }}>
            <h2 className='title is-4'>Resume</h2>

            <div className='block'>
              <p>
                My resume is available as downloadable PDF and can be found
                below.
              </p>
            </div>

            {/* Resume Link */}
            <div className='block'>
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

          {/* Tech Stack List */}

          <div
            className='block'
            style={{ padding: '1rem 0' }}>
            <h2
              id='experience-title'
              className='title is-4'>
              Tech Stack
            </h2>
            <p>
              My current focus is within the{' '}
              <strong>
                <a
                  href='https://wikitia.com/wiki/MERN_(solution_stack)'
                  target='blank'>
                  {' '}
                  M.E.R.N Stack
                </a>
              </strong>
              .
            </p>

            <p>
              Here is what I have experience in, there is no particular order,
              but I am always willing to add to it.{' '}
            </p>
          </div>

          <div className='content block'>
            {/* Experience List */}

            <div
              className='columns'
              style={{ padding: '1rem 0' }}>
              {/*  */}
              <div className='column is-narrow'></div>

              <div className='column is-half block'>
                <p className='title is-4'>Frontend</p>

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

              <div className='column is-narrow'></div>

              {/*  */}
              <div className='column is-half block'>
                <p className='title is-4'>Backend</p>

                <ul>
                  <li>Javascript, Node, Express</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>T-Sql, NoSql, MongoDB</li>
                </ul>
              </div>
            </div>

            <div className='block'>
              <h2
                id='other-title'
                className='title is-4'>
                <strong>Some Other Projects</strong>
              </h2>

              <ul id='other-list-pi'>
                <li>Pi Hole</li>
                <li>Retro Pi</li>
                <li>
                  I have setup a dedicated Pi as a server to deploy projects to
                </li>
                <li>
                  Converting my old computer to a NAS (I am just now starting
                  this, as of Jan 2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;

