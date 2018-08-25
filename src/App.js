import React, { Component } from 'react';
import { Redirect, Router } from '@reach/router';

import Login from './login/Login';
import MovieWishlist from './wishlist/MovieWishlist';
import MovieBrowser from './browse/MovieBrowser';
import genres from './movies';


const buildMovieList = () => {
    const movieList = {};

    Object.entries(genres).forEach(([genre, movies]) => {
        Object.entries(movies).forEach(([movieId, movie]) => {
            movieList[movieId] = {
                ...movie,
                genre
            }
        });
    });

    return movieList;
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wishlist: {}
        };

        this.movies = buildMovieList();

        this.updateMovie = this.updateMovie.bind(this);
        this.setMovieAsUnwatched = this.setMovieAsUnwatched.bind(this);
        this.setMovieAsWatched = this.setMovieAsWatched.bind(this);
        this.addMovieToWishlist = this.addMovieToWishlist.bind(this);
        this.removeMovieFromWishlist = this.removeMovieFromWishlist.bind(this);
    }

    updateMovie(movieId, updatedDetails) {
        const { wishlist } = this.state;

        if (!(movieId in wishlist)) return;

        const updatedMovie = Object.assign({}, wishlist[movieId], updatedDetails);

        this.setState({
            wishlist: Object.assign({}, wishlist, { [movieId]: updatedMovie })
        });
    }

    setMovieAsUnwatched(movieId) {
        this.updateMovie(movieId, { watched: false });
    }

    setMovieAsWatched(movieId) {
        this.updateMovie(movieId, { watched: true });
    }

    addMovieToWishlist(movieId) {
        const { wishlist } = this.state;

        if (movieId in wishlist) return;

        const newMovie = {
            ...this.movies[movieId],
            watched: false
        };

        this.setState({
            wishlist: Object.assign({}, wishlist, { [movieId]: newMovie })
        });
    }

    removeMovieFromWishlist(movieId) {
        const { wishlist } = this.state;

        if (!(movieId in wishlist)) return;

        // eslint-disable-next-line no-unused-vars
        const { [movieId]: omitMovie, ...updatedWishlist } = wishlist;

        this.setState({
            wishlist: updatedWishlist
        });
    }

    render() {
        const { wishlist } = this.state;

        return (
            <div className="container-fluid">
                <Router>
                    {/* Login */}
                    <Redirect from='/' to='/login' noThrow />
                    <Login path="/login" />

                    {/* Wish List - default to Unwatched */}
                    <Redirect from='/wishlist' to='/wishlist/unwatched' noThrow />
                    <MovieWishlist path="/wishlist/:status"
                        wishlist={wishlist}
                        updateMovie={this.updateMovie}
                        setAsWatched={this.setMovieAsWatched}
                        setAsUnwatched={this.setMovieAsUnwatched}
                        removeMovie={this.removeMovieFromWishlist}
                    />

                    {/* Browse - default to Action genre */}
                    <Redirect from='/browse' to='/browse/action' noThrow />
                    <MovieBrowser path="/browse/:genre"
                        wishlist={wishlist}
                        addToWishlist={this.addMovieToWishlist}
                        removeFromWishlist={this.removeMovieFromWishlist}
                    />
                </Router>
            </div>
        );
    }
}

export default App;
