import React from "react";
import PropTypes from "prop-types";

function CoinItemEdit(props) {
    const onItemClick = () => {
        props.onClick(props.coin);
    };

    return (
        <tr key={props.coin.id}>
            <td>{props.coin.cmc_rank}</td>
            <td>
                <img style={{width: '60%', height: '60%'}} src={props.coin.logo} alt="coin img"/>
            </td>
            <td>{props.coin.name}</td>
            <td>
                <div className="icon-btn" onClick={onItemClick}>{props.isInWatchList ? '-' : '+'}</div>
            </td>
        </tr>
    );
}

CoinItemEdit.propTypes = {
    coin: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    isInWatchList: PropTypes.bool
}

export default CoinItemEdit;