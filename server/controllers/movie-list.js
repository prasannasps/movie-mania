const fetchAllMovies = (req, res) => {
    try {
        const movies = require('../movies');
        res.status(200).json({ List: movies });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

const searchMovies = (req, res) => {

    try {
        const movies = require('../movies');
        if (!movies || movies.length === 0) {
            return res.status(200).json({ List: [] });
        }

        const searchKey = req.query.search_key;
        let filteredMovies;
        if (searchKey) {
            filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchKey.toLowerCase())
                || movie.director.toLowerCase().includes(searchKey.toLowerCase()));
            console.log(filteredMovies);
        }
        res.status(200).json({ List: filteredMovies || movies });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }

}

module.exports = { fetchAllMovies, searchMovies };