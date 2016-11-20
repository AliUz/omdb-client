'use strict';

const getGenres = (genres) => {
    return (
        genres
            .map(genre => genre.name)
            .join(', ')
    );
};

export default getGenres;
