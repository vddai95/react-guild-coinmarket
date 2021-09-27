import React from "react";

function Tab(props){
    const onclick = () => {
        props.onClick(props.label);
    }

    let className = 'tab-list-item';
    if(props.label === props.activeTab){
        className += ' tab-list-active';
    }

    return(
        <li className={className} onClick={onclick}>
           {props.label}
        </li>
    );
}

export default Tab;