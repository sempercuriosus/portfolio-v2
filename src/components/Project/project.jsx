import { Fragment } from 'react';
import titleCase from '../../utils/titleCase';

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
    <Fragment>
      {/* Project Details*/}

      <div
        id='project-details'
        className='content'>
        {/* TITLE */}
        <h2 id='project-title'>
          <strong>{titleCase(title)}</strong>
        </h2>

        {/* Description */}
        <p
          id='project-desc'
          className='container'>
          {description}
        </p>
      </div>

      {/* Repo Link */}
      <div
        id='project-links'
        className='buttons block'>
        {codeRepo && (
          <button
            onClick={() => window.open(codeRepo, '_blank')}
            className='block button is-dark'>
            <strong>Code Repository</strong>
          </button>
        )}
        <br />

        {/* Deployed Link */}
        {deployedLink && (
          <button
            onClick={() => window.open(deployedLink, '_blank')}
            className='block button is-info'>
            <strong>Deployed Application</strong>
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default Projects;

