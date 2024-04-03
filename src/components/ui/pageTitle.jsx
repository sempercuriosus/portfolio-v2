import PropTypes from 'prop-types';

function PageTitle(props) {
  return (
    <div
      id={props.id}
      className='block'>
      <h2 className='title is-3'>{props.title}</h2>
    </div>
  );
}

PageTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageTitle;

