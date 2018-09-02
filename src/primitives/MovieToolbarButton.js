import React from 'react';
import PropTypes from 'prop-types';


const MovieToolbarButton = ({
    movieTitle,
    buttonText,
    buttonLabel,
    clickHandler,
    keyDownHandler,
    tabIndex,
    innerRef
}) => {
    const ariaLabel = buttonLabel || `${buttonText} ${movieTitle}`;

    return (
        <button
            className="btn btn-secondary"
            aria-label={ariaLabel}
            onClick={clickHandler}
            onKeyDown={keyDownHandler}
            tabIndex={tabIndex}
            ref={innerRef}
        >
            {buttonText}
        </button>
    );
};

MovieToolbarButton.defaultProps = {
    buttonText: '',
    buttonLabel: null,
    clickHandler: () => {},
    keyDownHandler: () => {},
    tabIndex: 0,
    innerRef: () => {}
};

MovieToolbarButton.propTypes = {
    movieTitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonLabel: PropTypes.string,
    clickHandler: PropTypes.func,
    keyDownHandler: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    innerRef: PropTypes.func
};


export default MovieToolbarButton;
