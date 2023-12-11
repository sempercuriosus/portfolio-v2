
/**
 * @name titleCase
 * @description take in a string and capitalize each letter after a space
 * @param {string} title
 * @returns 
*/
const titleCase = (title) => {

    if (!title) {
        return '';
    }

    const newTitle = title.split(' ').map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });

    return newTitle.join(' ');
}; //  [ end : titleCase ]

export default titleCase;