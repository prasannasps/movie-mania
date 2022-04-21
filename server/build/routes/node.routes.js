"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeRoutes = void 0;
var genre_controller_1 = require("../controllers/genre.controller");
var movie_controller_1 = require("../controllers/movie.controller");
var user_controller_1 = require("../controllers/user.controller");
var jwt = __importStar(require("jsonwebtoken"));
//To DO : Incorporate Authentication
var authenticateToken = function (req, res, next) {
    var authHeader = req.headers['authorization'];
    console.log(authHeader);
    var token = authHeader && authHeader.split(' ')[1];
    if (token === null)
        res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        if (err)
            return res.sendStatus(403);
        console.log(user);
        req.user = user;
        next();
    });
};
var NodeRoutes = /** @class */ (function () {
    function NodeRoutes() {
    }
    NodeRoutes.prototype.initNodeRoutes = function (app, baseUrl) {
        this.userRoutes(app, baseUrl);
        this.movieRoutes(app, baseUrl);
        this.genreRoutes(app, baseUrl);
    };
    NodeRoutes.prototype.userRoutes = function (app, baseUrl) {
        var userCtrl = new user_controller_1.UserController();
        app.post(baseUrl + '/login', function (req, res) {
            userCtrl.getUser(req, res);
        });
        // app.get(baseUrl + '/posts', authenticateToken, (req: any, res: Response) => {
        //     // userCtrl.getUser(req, res);
        //     console.log(req.user);
        //     res.json(this.users.find(user => user.id === req['user'].userId));
        // });
    };
    NodeRoutes.prototype.movieRoutes = function (app, baseUrl) {
        var movieController = new movie_controller_1.MovieController();
        app.get(baseUrl + '/movies-all', function (req, res) {
            movieController.fetchAllMovies(req, res);
        });
        app.get(baseUrl + '/movie', function (req, res) {
            movieController.fetchMovieOnId(req, res);
        });
        app.get(baseUrl + '/movies-search', function (req, res) {
            movieController.searchMovies(req, res);
        });
        app.post(baseUrl + '/movies-genre-search', function (req, res) {
            movieController.filterMoviesOnGenre(req, res);
        });
        app.post(baseUrl + '/movie-insert', function (req, res) {
            movieController.insertMovie(req, res);
        });
        app.post(baseUrl + '/movie-update', function (req, res) {
            movieController.updateMovie(req, res);
        });
    };
    NodeRoutes.prototype.genreRoutes = function (app, baseUrl) {
        var genreControler = new genre_controller_1.GenreController();
        app.get(baseUrl + '/genres-all', function (req, res) {
            genreControler.fetchAllGenres(req, res);
        });
    };
    return NodeRoutes;
}());
exports.NodeRoutes = NodeRoutes;
//# sourceMappingURL=node.routes.js.map