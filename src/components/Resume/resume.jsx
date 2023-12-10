function Resume() {
  document.title = 'Resume | Third Coast 🦡';
  return (
    <section id='resume'>
      <div id='dev_experience'>
        <ul>
          <h3>Tech Stack</h3>
          <li>Javascript</li>
          <li>Express</li>
          <li>Node</li>
          <li>Python</li>
          <li>C#</li>
          <li>React</li>
          <li>T-Sql and NoSql</li>
          <li>MongoDB</li>
        </ul>

        <h3>Other Projects</h3>
        <li>
          Recently, I have been learning some about Rasperry Pi. Here are my
          projects:
        </li>
        <ul>
          <li>Pi Hole</li>
          <li>Retro Pi</li>
          <li>
            I have setup a dedicated Pi for a Homelab server to deploy projects
            to
          </li>
        </ul>
      </div>
      <div>
        <p>
          My resume is downloadable and can be found <a href='#'>here</a>.
        </p>
      </div>
    </section>
  );
}

export default Resume;

