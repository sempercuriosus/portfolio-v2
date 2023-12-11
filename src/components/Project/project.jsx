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

  const { title, description, codeRepo, deployedLink, featuredProject } =
    project || emptyObj;

  const featuredTitle = featuredProject ? title + ' ⭐' : title;

  return (
    <Fragment>
      {/* Project Details*/}

      <div id='project-details'>
        {/* TITLE */}
        <h2
          id='project-title'
          className='title is-5'>
          <strong>{titleCase(featuredTitle ? featuredTitle : title)}</strong>
        </h2>

        {/* Description */}
        <p id='project-desc'>{description}</p>
      </div>
      <br />

      {/* Repo Link */}
      <div
        id='project-links'
        className='buttons block'>
        {codeRepo && (
          <button
            onClick={() => window.open(codeRepo, '_blank')}
            className='block button has-background-dark'>
            <strong className='has-text-light'>Code Repository</strong>
          </button>
        )}

        {/* Deployed Link */}
        {deployedLink && (
          <button
            onClick={() => window.open(deployedLink, '_blank')}
            className='block button is-info has-background-info-dark'>
            <strong>Deployed Application</strong>
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default Projects;

