import PropTypes from 'prop-types';

function ContactButton(props) {
  return (
    // icon, name, color
    <div className='column is-narrow is-offset-1'>
      <button
        className={'button is-large ' + props.text + ' ' + props.color}
        style={{ width: '250px', padding: '3rem 0' }}
        onClick={props.action}>
        <span className='icon is-medium'>
          <i>{props.icon}</i>
        </span>
        <span className='is-size-4 has-text-weight-semibold'>{props.name}</span>
      </button>
    </div>
  );
}

ContactButton.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  action: PropTypes.string,
  icon: PropTypes.string,
};

export default ContactButton;

