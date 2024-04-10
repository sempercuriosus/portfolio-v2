import PropTypes from 'prop-types';

function ContactButton(props) {
  //

  const openLink = (action, target) => {
    if (action == 'email') {
      window.location.href = 'mailto:' + target;
    } else if (action == 'github') {
      window.open(target, '_blank', 'noopener,noreferrer');
    } else {
      console.log('Action not found');
    }
  };

  return (
    <button
      className={'button is-medium ' + props.color + ' ' + props.text}
      style={{
        width: '100%',
        maxWidth: '350px',
        height: '100%',
        maxHeight: '250px',
        padding: '3rem 1rem',
        borderColor: 'black !important',
      }}
      onClick={() => {
        openLink(props.action, props.target);
      }}>
      <span className='icon is-medium'>{props.icon}</span>
      <span className='is-size-4 has-text-weight-semibold'>{props.name}</span>
    </button>
  );
}

ContactButton.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  action: PropTypes.string,
  target: PropTypes.string,
};

export default ContactButton;

