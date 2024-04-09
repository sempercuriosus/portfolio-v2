import PropTypes from 'prop-types';
import { removeSpaces } from '../../utils/transform';
import uuidv4 from '../../utils/createId';

function ListContainer(props) {
  const listTitle = removeSpaces(props.title);

  return (
    <>
      <div
        id={listTitle + '-list'}
        className='notification'
        style={{ marginBottom: '2rem' }}>
        <p
          id={listTitle + '-title'}
          className='title is-4'
          style={{
            // padding: '0 0 1.5rem 0.75rem',
            borderBottom: 'thin lightgrey solid',
          }}>
          <strong>{props.title}</strong>
        </p>

        <ul id={listTitle + '-list'}>
          {props.list.map((data) => {
            const id = uuidv4();

            return (
              <li key={id}>
                {data.name}
                {data.details ? (
                  <ul id={data.name + '-details'}>
                    <li>{data.details}</li>
                  </ul>
                ) : (
                  ''
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

ListContainer.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default ListContainer;

