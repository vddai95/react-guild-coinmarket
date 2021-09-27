import React, { useState } from "react";
import PropTypes from "prop-types";
import Tab from './Tab';

function Tabs(props) {
    const [activeTab, setActiveTab] = useState(props.activeTab);

    const onClickTabItem = (tabLabel) => {
        setActiveTab(tabLabel);
    };

    return (
        <div className="tabs">
            <ol className="tab-list">
                {props.children.map(child => {
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={child.props.label}
                            label={child.props.label}
                            onClick={onClickTabItem}
                        />
                    );
                })}
            </ol>

            <div className="tab-content">
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) {
                        return undefined;
                    }
                    return child.props.children
                })}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    children: PropTypes.array.isRequired,
    activeTab: PropTypes.string.isRequired,
};

export default Tabs;