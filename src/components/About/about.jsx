function About() {
  document.title = 'About | Third Coast 🦡';

  return (
    <section id='about'>
      <div id='dev-photo'>
        <img
          src='../../../Assets/images/eric_developer_pic.jpeg'
          alt='Developer Profile Image'
        />
      </div>

      <h2 className='title'>About Me</h2>

      <p>
        Hi! My name is <span id='dev_name'>Eric</span> and I am a Full Stack Web
        Developer with experience in:
      </p>

      <div id='about_me_blurb'>
        I genuinely enjoy learning. That is why I picked the username{' '}
        <strong>Semper Curiosus</strong> for my github account. I am always
        curious about things around me. Trying to understand the <em>why</em>{' '}
        behind things.
      </div>

      <div id='dev_hobby'>
        <strong>Outside of work I like to:</strong>
        <ul>
          <li>Hike</li>
          <li>Read</li>
          <li>
            Exploring new-to-me places or revisiting previous places to learn
            some more
          </li>
          <li>
            Woodworking and building with my hands. Most of these projects are
            utilitarian in nature, namely fixing my home or maintaining my cars
          </li>
          <li>Play Disc Golf</li>
          <li>Most Importantly, spending time with my family</li>
        </ul>
      </div>
    </section>
  );
}

export default About;

