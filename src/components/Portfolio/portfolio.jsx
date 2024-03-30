import { useState, useEffect } from 'react';
import Project from '../Project/project.jsx';

// The Portfolio is a COLLECTION of many various Projects I am featuring

function Portfolio() {
  document.title = 'Portfolio | Third Coast 🦡';

  // Scrolling to the top, after render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  {
    /*
   * Project Code is a kind of part number I can use as a reference
   * Title is a label of the project
   * description is a brief about the project
   * deployed link is where the project is deployed, if at all
   * codeRepo is where the code is hosted online
   *
   * Titles have "title case applied to them"
  
  template
  {
    featuredProject: false,
    projectCode: '',
    title: '',
    description: '',
    deployedLink: '',
    codeRepo: '',
  },
  
  */
  }

  const [projects] = useState([
    {
      featuredProject: true,
      projectCode: 'dyfab',
      title: "don't you forget about me",
      description:
        'While planning a family day, my mother-in-law "forgot I was a person", so I decided to remind her that I was by sending her an email of me every day!',
      codeRepo: 'https://github.com/sempercuriosus/dont_you_forget_about_me',
      deployedLink: '',
    },
    {
      featuredProject: false,
      projectCode: 'shws',
      title: 'study hacks blog web scrape',
      description:
        'I wanted to learn more about Web Scraping, Python, and what Cal Newport has to offer. I hit a trifecta here with this project.',
      codeRepo: 'https://github.com/sempercuriosus/study_hacks_scrape_public',
      deployedLink: '',
    },
    {
      featuredProject: false,
      projectCode: 'doom',
      title: 'dooms date algorithm',
      description:
        "Taking inspiration from John Conway's Doomsday Algorithm, I made this little script to return the day of the week any date falls on.",
      codeRepo: 'https://github.com/sempercuriosus/doomsdate_public',
      deployedLink: '',
    },
    {
      featuredProject: false,
      projectCode: 'fittr',
      title: 'fitness tracker',
      description:
        'This was our first group project, and I was in a Developer role. I am  responsible for the HTML after the initial framework, CSS for layout to make the application mobile friendly, and Javascript General Functionality and Exercise API integration.',
      codeRepo: 'https://github.com/vonjareew/FitnessTracker',
      deployedLink: 'https://vonjareew.github.io/FitnessTracker/',
    },
    {
      featuredProject: false,
      projectCode: 'tool',
      title: 'tool rental application',
      description:
        'This was our second project, and I was in a Project Manager role as well as Developer. Making me responsible for the API, Front-End funtionality, and Back-End functionality.',
      codeRepo: 'https://github.com/sempercuriosus/tool-manager',
      deployedLink:
        'https://rocky-journey-83321-4f006da2de0c.herokuapp.com/login',
    },
    {
      featuredProject: true,
      projectCode: 'statelinefc',
      title: 'Stateline Family Chiropractic',
      description:
        'I put this website together for a local Chiropractor, my wife, when she wanted to refresh what her website looked like.',
      codeRepo: 'https://github.com/sempercuriosus/stateline-fc',
      deployedLink: 'https://statelinechiro.com',
    },
    // {
    // featuredProject: false,
    // projectCode: 'readme',
    //   title: 'readme helper',
    //   description: '',
    //   codeRepo: '',
    //   deployedLink: '',
    // },
  ]);

  const featureStored = projects.sort((a, b) =>
    a.featuredProject === b.featuredProject ? 0 : a.featuredProject ? -1 : 1,
  );

  return (
    // <>
    //   <section className='container notification is-dark'>
    //     <h1 className='title'>PORTFOLIO</h1>
    //     <hr />
    //     <br />
    //     <div
    //       id='projects'
    //       className='columns is-multiline'>
    //       {/* NOTE this map is using an IMPLICIT return with parens not curly braces */}

    //       {/* Map over all the projects above to create project cards */}
    //       {featureStored.map((singleProject) => {
    //         return (
    //           // eslint-disable-next-line react/jsx-key
    //           // Rendering the column here
    //           <section
    //             key={singleProject.projectCode}
    //             // If the project is featured, then use the applying color and ⭐ (in project)
    //             className={
    //               singleProject.featuredProject
    //                 ? 'container content notification column is-11 block is-primary has-background-primary-dark has-text-black-bis'
    //                 : 'container column is-5 notification has-background-grey-lighter has-text-black-bis'
    //             }>
    //             <Project project={singleProject} />
    //           </section>
    //         );
    //       })}
    //     </div>
    //     <br />
    //   </section>
    // </>
    <>
      <section>
        <div className='section title is-1 block has-text-centered orangeify'>
          Projects
        </div>

        <hr />
        <br />

        <div className='section is-large box'>
          <p className='title'>I am refactoring this section.</p>
        </div>
      </section>
    </>
  );
}

export default Portfolio;

