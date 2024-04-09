/**
 * @name name
 * @description removes spaces from a single string passed in
 * @param {stringPassedIn} string
 * @returns
 */
export const removeSpaces = (stringPassedIn) => {
  if (!stringPassedIn) {
    return '';
  }
  return stringPassedIn.toLowerCase().replaceAll(' ', '');
}; //  [ end : removeSpaces ]

