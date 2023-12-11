import ResumePlaceholder from '/src/assets/resume/eric-hulse-placeholder.pdf';

const liveResume = ResumePlaceholder;
const downloadName = 'Eric-Hulse-Resume2023Dec';

function Resume() {
  document.title = 'Resume | Third Coast 🦡';
  return (
    <section
      id='resume'
      className='container'>
      <div
        id='experience'
        className='content'>
        <h2
          id='experience-title'
          className='subtitle'>
          <strong>Tech Stack</strong>
        </h2>

        <p>
          This is what I have experience in, there is no particular order to it,
          and I am always willing to add to it.{' '}
        </p>

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

      <div
        id='other-experience '
        className='content'>
        <h2
          id='other-title'
          className='subtitle'>
          <strong>Other Projects</strong>
        </h2>

        <p id='other-title-pi'>
          Recently, I have been learning some about Rasperry Pi. Here are my
          projects:
        </p>

        <ul id='other-list-pi'>
          <li>Pi Hole</li>
          <li>Retro Pi</li>
          <li>
            I have setup a dedicated Pi for a Homelab server to deploy projects
            to
          </li>
        </ul>
      </div>

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

        <a
          id='resume-link'
          href={liveResume}
          download={downloadName}
          target='_blank'
          rel='noopener noreferrer'>
          <br />

          <button className='button is-info'>Download My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;

