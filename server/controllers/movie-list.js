const fetchAllMovies = (req, res) => {
    try {
        const movies = require('../movies');
        res.status(200).json({ List: movies });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

module.exports = { fetchAllMovies };