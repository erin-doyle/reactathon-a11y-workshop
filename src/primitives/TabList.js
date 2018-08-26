import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class TabList extends Component {
    constructor(props) {
        super(props);

        const { tabList, match } = this.props;

        this.state = {
            // Default the selectedTab to the one matching the current URL (which matches the tabpanel content)
            selectedTab: tabList.find((tab) => tab.linkTo === match.url) || tabList[0]
        };

        this.tabList = null;

        this.setTabListRef = this.setTabListRef.bind(this);
        this.focusTabList = this.focusTabList.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.gotoFirstTab = this.gotoFirstTab.bind(this);
        this.gotoLastTab = this.gotoLastTab.bind(this);
        this.gotoPreviousTab = this.gotoPreviousTab.bind(this);
        this.gotoNextTab = this.gotoNextTab.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    componentDidMount() {
        this.focusTabList();
    }

    componentDidUpdate() {
        this.focusTabList();
    }

    setTabListRef(element) {
        this.tabList = element;
    }

    focusTabList() {
        const { doFocus } = this.props;

        if (doFocus && this.tabList) {
            this.tabList.focus();
        }
    }

    selectTab (tab) {
        const { history } = this.props;

        this.setState({selectedTab: tab});

        // Navigate to the selected tab's URL in order to display it in the tabpanel
        history.push(tab.linkTo);
    }

    gotoFirstTab () {
        const { tabList } = this.props;
        this.selectTab(tabList[0]);
    }

    gotoLastTab () {
        const { tabList } = this.props;
        this.selectTab(tabList[tabList.length - 1]);
    }

    gotoPreviousTab (currentTab) {
        const { tabList } = this.props;
        const index = tabList.findIndex((tab) => tab.name === currentTab.name);

        // If the current tab is already the first tab, circle round to the last tab
        if (index === 0) {
            this.gotoLastTab();
        } else {
            // Else go to the previous tab
            this.selectTab(tabList[index - 1]);
        }
    }

    gotoNextTab (currentTab) {
        const { tabList } = this.props;
        const index = tabList.findIndex((tab) => tab.name === currentTab.name);

        // If the current tab is already the last tab, circle round to the first tab
        if (index === tabList.length - 1) {
            this.gotoFirstTab();
        } else {
            // Else go to the next tab
            this.selectTab(tabList[index + 1]);
        }
    }

    handleClick (e, tab) {
        e.preventDefault();
        this.selectTab(tab)
    }

    /**
     * Per the WAI ARIA Tab List Design Pattern the following interaction is supported:
     *
     * When focus is on a tab element in a horizontal tab list:
     *      Left Arrow: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab.
     *      Right Arrow: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab.
     *
     * When focus is on a tab in a tablist with either horizontal or vertical orientation:
     *      Space or Enter: Activates the tab if it was not activated automatically on focus.
     *      Home (Optional): Moves focus to the first tab.
     *      End (Optional): Moves focus to the last tab.
     *
     * WAI ARIA recommendation is that when a tab receives focus it "automatically activates" the newly focused tab.
     */
    handleKeydown (e, tab) {
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.gotoPreviousTab(tab);
                break;

            case 'ArrowRight':
                e.preventDefault();
                this.gotoNextTab(tab);
                break;

            case 'Home':
                e.preventDefault();
                this.gotoFirstTab();
                break;

            case 'End':
                e.preventDefault();
                this.gotoLastTab();
                break;

            case 'Enter':
            case ' ':
            case 'Spacebar': // for older browsers
                e.preventDefault();
                this.selectTab(tab);
                break;

            default:
                break;
        }
    }

    render() {
        const { ariaLabel, tabList } = this.props;
        const { selectedTab } = this.state;

        const tabItems = tabList.map((tabItem) => {
            const { name, title } = tabItem;
            const isSelectedTab = tabItem.name === selectedTab.name;
            const tabClass = isSelectedTab ? 'nav-item nav-link active' : 'nav-item nav-link';

            return (
                <button
                    key={`${name}-tab`}
                    id={`${name}-tab`}
                    className={tabClass}

                    role="tab"
                    aria-selected={isSelectedTab}
                    aria-controls={isSelectedTab ? `${name}-panel` : null}
                    tabIndex={-1}

                    onClick={e => this.handleClick(e, tabItem)}
                >
                    {title}
                </button>
            );
        });

        return (
            <Fragment>
                <legend id="tablist-title" className="screen-reader-text">{ariaLabel}</legend>
                <div
                    className="nav nav-tabs nav-justified"
                    role="tablist"
                    aria-describedby="tablist-title"
                    aria-activedescendant={`${selectedTab.name}-tab`}
                    tabIndex="0"

                    onKeyDown={e => this.handleKeydown(e, selectedTab)}

                    ref={this.setTabListRef}
                >
                    {tabItems}
                </div>
            </Fragment>
        );
    }
}

TabList.defaultProps = {
    doFocus: false
};

TabList.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    tabList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        linkTo: PropTypes.string,
        title: PropTypes.string
    })).isRequired,
    doFocus: PropTypes.bool,
    // supplied by withRouter
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};


export default withRouter(TabList);
