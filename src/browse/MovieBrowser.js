import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import movies from '../movies';
import Header from '../primitives/Header';
import TabList from '../primitives/TabList';

import BrowseList from './BrowseList';
import getBrowseActions from './getBrowseActions';


const MovieBrowser = ({
    genre,
    wishlist,
    addToWishlist,
    removeFromWishlist
}) => {
    const goToWishlist = () => navigate('/wishlist');

    // NOTE: name value should match :genre path in linkTo URL
    // since we're using match.params.genre to identify the activeTab
    const tabList = [
        { name: "action", linkTo: "/browse/action", title: "Action" },
        { name: "drama", linkTo: "/browse/drama", title: "Drama" },
        { name: "comedy", linkTo: "/browse/comedy", title: "Comedy" },
        { name: "scifi", linkTo: "/browse/scifi", title: "Sci Fi" },
        { name: "fantasy", linkTo: "/browse/fantasy", title: "Fantasy" }
    ];
    const movieActions = getBrowseActions(addToWishlist, removeFromWishlist);
    const moviesInGenre = movies[genre];

    return (
        <Fragment>
            <Header
                title="Browse Movies"
                buttonOptions={{
                    text: "< Back",
                    label: "Back to Wish List",
                    handleClick: goToWishlist
                }}
            />

            <main>
                <TabList ariaLabel="Select a Movie Genre to Browse" tabList={tabList} />

                <div
                    id={`${genre}-panel`}
                    role="tabpanel"
                    aria-labelledby={`${genre}-tab`}
                    tabIndex="0"
                >
                    <BrowseList
                        movieList={moviesInGenre}
                        wishlist={wishlist}
                        movieActions={movieActions}
                    />
                </div>
            </main>
        </Fragment>
    );
};

MovieBrowser.propTypes = {
    wishlist: PropTypes.object.isRequired,
    addToWishlist: PropTypes.func.isRequired,
    removeFromWishlist: PropTypes.func.isRequired,
    // supplied by <Router>
    genre: PropTypes.string
};


export default MovieBrowser;