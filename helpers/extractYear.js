const extractYear = (releaseDate) => {
    const year = releaseDate.split('-')[0];
    if (year) {
        return year;
    }
    return 'TBD';
};

export default extractYear;
