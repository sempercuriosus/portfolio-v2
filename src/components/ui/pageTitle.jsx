import PropTypes from 'prop-types';

function PageTitle(props) {
  return (
    <>
      <div
        id={props.id}
        className='section title is-1 block has-text-centered orangeify'>
        {props.title}
        <span
          id='blinky'
          className='blink-me'
          style={{ marginLeft: '1rem' }}></span>
      </div>
      <hr />
      <br />
    </>
  );
}

PageTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageTitle;

