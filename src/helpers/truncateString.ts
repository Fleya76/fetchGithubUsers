/**
 * Description: Function to truncate a string.
 */
const truncateString = (str: string, num: number): string => {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
};

export { truncateString }
