// Link to Resume (changes based on version)
import ResumePlaceholder from '/src/assets/resume/eric-hulse-placeholder.pdf';

const liveResume = ResumePlaceholder;
const downloadName = 'Eric-Hulse-Resume2023Dec';

function Resume() {
  document.title = 'Resume | Third Coast 🦡';
  return (
    <section
      id='resume'
      className='container notification is-dark'>
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
          <ul
            id='experience-list'
            className='content'>
            <li>Javascript</li>
            <li>Express</li>
            <li>Node</li>
            <li>Python</li>
            <li>C#</li>
            <li>React</li>
            <li>T-Sql and NoSql</li>
            <li>MongoDB</li>
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
              I have setup a dedicated Pi for a Homelab server to deploy
              projects to
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
          </p>

          {/* Resume Link */}
          <a
            id='resume-link'
            href={liveResume}
            download={downloadName}
            target='_blank'
            rel='noopener noreferrer'>
            <button className='button is-info'>Download My Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;

