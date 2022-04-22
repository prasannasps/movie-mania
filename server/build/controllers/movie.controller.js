"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
var connection_1 = require("../database/connection");
var MovieController = /** @class */ (function (_super) {
    __extends(MovieController, _super);
    function MovieController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MovieController.prototype.fetchAllMovies = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, movies, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = 'SELECT * from s_movie_mania.movies where is_deleted = false';
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, query)];
                    case 1:
                        result = _a.sent();
                        if (!result || !result.rows) {
                            return [2 /*return*/, res.status(200).json({ Error: result })];
                        }
                        movies = result.rows || [];
                        res.status(200).json({ List: movies });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        res.status(500).json({ message: error_1 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MovieController.prototype.fetchMovieOnId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, query, result, movies, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = Number(req.query.id) || 0;
                        query = "SELECT * from s_movie_mania.movies where id = ".concat(id, " and is_deleted = false");
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, query)];
                    case 1:
                        result = _a.sent();
                        if (!result || !result.rows) {
                            return [2 /*return*/, res.status(200).json({ Error: result })];
                        }
                        movies = result.rows || [];
                        res.status(200).json({ Data: movies[0] });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        res.status(500).json({ message: error_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MovieController.prototype.searchMovies = function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var searchKey, query, result, filteredMovies, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        searchKey = ((_a = req.query.search_key) === null || _a === void 0 ? void 0 : _a.toString()) || '';
                        query = "select * from s_movie_mania.movies where is_deleted = false and (lower(name) like '%".concat(searchKey, "%' or lower(director) like '%").concat(searchKey, "%')");
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, query)];
                    case 1:
                        result = _b.sent();
                        if (!result || !result.rows) {
                            return [2 /*return*/, res.status(200).json({ Error: result })];
                        }
                        filteredMovies = result.rows || [];
                        res.status(200).json({ List: filteredMovies || [] });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        console.log(error_3);
                        res.status(500).json({ message: error_3 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MovieController.prototype.filterMoviesOnGenre = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var genres, query, result, filteredMovies, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        genres = req.body.genres || [];
                        query = "select * from s_movie_mania.movies where is_deleted = false and ARRAY[".concat(genres.map(function (genre) { return "'".concat(genre.trim(), "'"); }), "]::character varying[] <@ genre");
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, query)];
                    case 1:
                        result = _a.sent();
                        if (!result || !result.rows) {
                            return [2 /*return*/, res.status(200).json({ Error: result })];
                        }
                        filteredMovies = result.rows || [];
                        res.status(200).json({ List: filteredMovies || [] });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        res.status(500).json({ message: error_4 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MovieController.prototype.insertMovie = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var movie, query, result, filteredMovies, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        movie = req.body.movie;
                        query = "INSERT INTO s_movie_mania.movies(_99popularity, director, imdb_score, name, genre, created_by) VALUES ( ".concat(movie._99popularity, ", '").concat(movie.director, "', ").concat(movie.imdb_score, ", '").concat(movie.name, "',array[").concat(movie.genre.map(function (genre) { return "'".concat(genre.trim(), "'"); }), "], ").concat(movie.created_by || 0, ") returning *");
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, query)];
                    case 1:
                        result = _a.sent();
                        if (!result || !result.rows) {
                            return [2 /*return*/, res.status(200).json({ Error: result })];
                        }
                        filteredMovies = result.rows || [];
                        res.status(200).json({ Data: filteredMovies[0] || [] });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        res.status(500).json({ message: error_5 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MovieController.prototype.updateMovie = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var movie, query, result, filteredMovies, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        movie = req.body.movie;
                        query = "Update s_movie_mania.movies set id = ".concat(movie.id, ", name = '").concat(movie.name, "', _99popularity = ").concat(movie._99popularity, ", director = '").concat(movie.director, "', imdb_score = ").concat(movie.imdb_score, ", genre = array[").concat(movie.genre.map(function (genre) { return "'".concat(genre.trim(), "'"); }), "] where id = ").concat(movie.id, " returning *");
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, query)];
                    case 1:
                        result = _a.sent();
                        if (!result || !result.rows) {
                            return [2 /*return*/, res.status(200).json({ Error: result })];
                        }
                        filteredMovies = result.rows || [];
                        res.status(200).json({ Data: filteredMovies[0] || [] });
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        res.status(500).json({ message: error_6 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MovieController.prototype.deleteMovie = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, query, result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = Number(req.query.id);
                        if (!id || id <= 0) {
                            return [2 /*return*/, res.status(200).json({ Error: 'Invalid Data' })];
                        }
                        query = "Update s_movie_mania.movies set is_deleted = true where id = ".concat(id);
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, query)];
                    case 1:
                        result = _a.sent();
                        if (!result || !result.rows) {
                            return [2 /*return*/, res.status(200).json({ Error: result })];
                        }
                        this.fetchAllMovies(req, res);
                        return [2 /*return*/];
                    case 2:
                        error_7 = _a.sent();
                        console.log(error_7);
                        res.status(500).json({ message: error_7 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MovieController.prototype.generateMovies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var movies, _i, movies_1, movie, queryy, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        movies = require('../data/movies');
                        _i = 0, movies_1 = movies;
                        _a.label = 1;
                    case 1:
                        if (!(_i < movies_1.length)) return [3 /*break*/, 4];
                        movie = movies_1[_i];
                        queryy = "INSERT INTO s_movie_mania.movies(_99popularity, director, imdb_score, name, genre) VALUES ( ".concat(movie._99popularity, ", '").concat(movie.director, "', ").concat(movie.imdb_score, ", '").concat(movie.name, "',array[").concat(movie.genre.map(function (genre) { return "'".concat(genre.trim(), "'"); }), "])");
                        console.log(queryy);
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, queryy)];
                    case 2:
                        result = _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MovieController.prototype.generateGenres = function () {
        return __awaiter(this, void 0, void 0, function () {
            var genres, _i, genres_1, genre, query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        genres = require('../data/genres');
                        _i = 0, genres_1 = genres;
                        _a.label = 1;
                    case 1:
                        if (!(_i < genres_1.length)) return [3 /*break*/, 4];
                        genre = genres_1[_i];
                        query = "INSERT INTO s_movie_mania.genres( name) VALUES ( '".concat(genre.name, "')");
                        console.log(query);
                        return [4 /*yield*/, _super.prototype.dbConnection.call(this, query)];
                    case 2:
                        result = _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return MovieController;
}(connection_1.DatabaseConnection));
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map