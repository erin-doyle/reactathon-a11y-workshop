import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TabList = ({ ariaLabel, activeTab, tabList }) => {
    const tabItems = tabList.map((tabItem) => {
        const { id, title, linkTo } = tabItem;
        const isActiveTab = id === activeTab;
        return (
            <li key={`${id}-tab`}
                id={`${id}-tab`}
                className="nav-item"
                role="tab"
                aria-selected={isActiveTab}
                aria-controls={`${id}-panel`}
            >
                <NavLink to={linkTo} className="nav-link" activeClassName="active">{title}</NavLink>
            </li>
        );
    });

    return (
        <ul className="nav nav-tabs nav-justified" role="tablist" aria-label={ariaLabel}>
            {tabItems}
        </ul>
    );
};

TabList.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    activeTab: PropTypes.string.isRequired,
    tabList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        linkTo: PropTypes.string,
        title: PropTypes.string
    })).isRequired
};


export default TabList;
