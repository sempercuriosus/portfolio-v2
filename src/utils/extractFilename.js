// const path = require('path');

/**
 * @name extractFilename
 * @description accepts a filepath that must contain a file
 * @param {string} incomingPath
 * @returns filename from the path passed in
 */
const extractFilename = (incomingPath) => {
  const pathArray = incomingPath.split('/');
  const arrayLength = pathArray.length - 1;
  const filename = pathArray[arrayLength];

  return filename;
}; //  [ end : extractFilename ]

export default extractFilename;

