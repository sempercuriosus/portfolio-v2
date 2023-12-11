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
  const classList = 'container ';

  return (
    <Fragment>
      <section
        // if the project is featured doing full width
        className={
          featuredProject
            ? classList + ' notification is-info column is-full'
            : ' notification is-light column is-5'
        }>
        {/* Project */}

        <div
          id='project-details'
          className='content'>
          {/* TITLE */}
          <h2 id='project-title'>
            <strong>{titleCase(title)}</strong>
          </h2>

          {/* Description */}
          <p id='project-desc'>{description}</p>
        </div>

        {/* Repo Link */}
        <div id='project-links'>
          {codeRepo && (
            <div className='block'>
              <a href={codeRepo}>Code Repository</a>
            </div>
          )}

          {/* Deployed Link */}
          {deployedLink && (
            <div className='block'>
              <a href={deployedLink}>Deployed Application</a>
            </div>
          )}
        </div>
      </section>

      {/* Empty Column will render if the project is NOT featured*/}
      {featuredProject ? '' : <div className='column is-one'></div>}
    </Fragment>
  );
}

export default Projects;

