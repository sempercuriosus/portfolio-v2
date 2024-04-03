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

  return (
    <>
      <div
        className='card'
        style={{ margin: '0 1rem' }}>
        <div
          className='columns'
          style={{ paddingTop: '1rem' }}>
          {/* Image */}
          <div
            className='column'
            style={{}}>
            <div className='card-image'>
              <figure className='image has-ratio'>
                <img
                  src='https://bulma.io/assets/images/placeholders/1280x960.png'
                  alt='Placeholder image'
                />
              </figure>
            </div>
          </div>

          {/* Info */}
          <div className='column'>
            <header
              className='title is-size-3-mobile'
              style={{
                padding: '1.5rem',
              }}>
              <strong>{titleCase(title)}</strong>
            </header>

            <div className='card-content'>
              <div className='content has-'>
                <p id='project-desc'>{description}</p>
                <br />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <footer
          className='columns'
          style={{
            margin: '0 1rem',
            borderTop: 'thin lightgray solid',
            paddingTop: '1rem',
          }}>
          <div className=' column'>
            {codeRepo && (
              <button
                onClick={() => window.open(codeRepo, '_blank')}
                className='button is-medium is-fullwidth is-info is-outlined'>
                <strong className=''>View Code</strong>
              </button>
            )}
          </div>

          <div className=' column'>
            {deployedLink && (
              <button
                onClick={() => window.open(deployedLink, '_blank')}
                className='button is-medium is-fullwidth is-link is-outlined'>
                <strong>View Application</strong>
              </button>
            )}
          </div>
        </footer>
      </div>
    </>
  );
}

export default Projects;

