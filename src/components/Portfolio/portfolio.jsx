import { useState } from 'react';
import Project from '../Project/project.jsx';

// The Portfolio is a COLLECTION of many various Projects I am featuring

function Portfolio() {
  document.title = 'Portfolio | Third Coast 🦡';

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
    projectCode: '',
    title: '',
    description: '',
    deployedLink: '',
    codeRepo: '',
  },
  
  */
  }

  const [featuredProjects] = useState([
    {
      projectCode: 'dyfab',
      title: "don't you forget about me",
      description:
        'While planning a family day, my mother-in-law "forgot I was a person", so I decided to remind her that I was by sending her an email of me every day!',
      codeRepo: 'https://github.com/sempercuriosus/dont_you_forget_about_me',
      deployedLink: '',
    },
    {
      projectCode: 'shws',
      title: 'study hacks blog web scrape',
      description:
        'I wanted to learn more about Web Scraping, Python, and what Cal Newport has to offer. I hit a trifecta here with this project.',
      codeRepo: 'https://github.com/sempercuriosus/study_hacks_scrape_public',
      deployedLink: '',
    },
    {
      projectCode: 'doom',
      title: 'dooms date algorithm',
      description:
        "Taking inspiration from John Conway's Doomsday Algorithm, I made this little script to return the day of the week any date falls on.",
      codeRepo: 'https://github.com/sempercuriosus/doomsdate_public',
      deployedLink: '',
    },
    {
      projectCode: 'fittr',
      title: 'fitness tracker',
      description:
        'This was our first group project, and I was in a Developer role. I am  responsible for the HTML after the initial framework, CSS for layout to make the application mobile friendly, and Javascript General Functionality and Exercise API integration.',
      codeRepo: 'https://github.com/sempercuriosus/FitnessTracker',
      deployedLink: 'https://vonjareew.github.io/FitnessTracker/',
    },
    {
      projectCode: 'tool',
      title: 'tool rental application',
      description:
        'This was our second project, and I was in a Project Manager role as well as Developer. Making me responsible for the API, Front-End funtionality, and Back-End functionality.',
      codeRepo: 'https://github.com/sempercuriosus/tool-manager',
      deployedLink:
        'https://rocky-journey-83321-4f006da2de0c.herokuapp.com/login',
    },
    {
      projectCode: 'readme',
      title: 'readme helper',
      description: '',
      codeRepo: '',
      deployedLink: '',
    },
  ]);

  return (
    <section id='projects'>
      {/* NOTE this map is using an IMPLICIT return with parens not curly braces */}
      {featuredProjects.map((singleProject) => (
        <Project
          key={singleProject.projectCode}
          project={singleProject}
        />
      ))}
    </section>
  );
}

export default Portfolio;

