// const path = require('path');

/**
 * @name extractFilename
 * @description takes the incoming path in and returns the filename that was included.
 * @param {string} incomingPath
 * @returns
 */
const extractFilename = (incomingPath) => {
  console.info('[ extractFilename ] : called');
  const pathArray = incomingPath.split('/');
  const arrayLength = pathArray.length - 1;
  const filename = pathArray[arrayLength];

  return filename;
}; //  [ end : extractFilename ]

export default extractFilename;

