import React from 'react';

// A Project represents a single piece of work

// eslint-disable-next-line react/prop-types
function Projects({ project }) {
  // remember, this is the same name your prop has when defining it in the initial <Project />
  // in the event that this CANNOT get a given project adding this such that my project still displays and does not take down the rest of the site.
  const emptyObj = {
    title: '',
    description: '',
    codeRepo: '',
    deployedLink: '',
  };
  const { title, description, codeRepo, deployedLink } = project || emptyObj;

  return (
    <React.Fragment>
      <div className='project-details'>
        <h2 className='project-title'>{title}</h2>
        <p className='project-desc'>{description}</p>
      </div>
      <div className='project-links'>
        {codeRepo && <a href={codeRepo}>Code Repository</a>}

        {deployedLink && <a href={deployedLink}>Deployed Application</a>}
      </div>
    </React.Fragment>
  );
}

export default Projects;

