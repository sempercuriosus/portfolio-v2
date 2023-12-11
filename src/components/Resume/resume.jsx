import ResumePlaceholder from '/src/assets/resume/eric-hulse-placeholder.pdf';

const liveResume = ResumePlaceholder;
const downloadName = 'Eric-Hulse-Resume2023Dec';

function Resume() {
  document.title = 'Resume | Third Coast 🦡';
  return (
    <section
      id='resume'
      className='container'>
      <h2
        id='experience-title'
        className='subtitle is-5'>
        Tech Stack
      </h2>

      <div
        id='experience'
        className='section  tile is-child notification'>
        <ul id='experience-list'>
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

      <h2
        id='other-title'
        className='subtitle is-5'>
        Other Projects
      </h2>

      <div
        id='other-experience '
        className='section  tile is-child notification'>
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

      <div id='resume-download'>
        <p>
          My resume is available as downloadable PDF and can be found below.
        </p>
        <a
          id='resume-link'
          href={liveResume}
          download={downloadName}
          target='_blank'
          rel='noopener noreferrer'>
          <button className='button is-info'>Download My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;

