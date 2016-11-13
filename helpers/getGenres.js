'use strict';

const getGenres = (genreIds, genres) => {
    return (
        genres
            .filter(genre => genreIds.includes(genre.id))
            .map(genre => genre.name)
            .join(', ')
    );
};

export default getGenres;
