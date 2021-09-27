import React from 'react';
import CoinTable from "./CoinTable";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function WatchListCoinTable(props) {

    return (
        <div>
            <CoinTable
                coins={props.coins}
            />

            <Link className="btn" to="/EditWatchList" style={{ width: '17rem', fontSize: '2rem', margin: '2rem 0rem 0rem 2rem' }}>
                + Add symbol
            </Link>
        </div>
    );
}

WatchListCoinTable.prototype = {
    coins: PropTypes.array.isRequired,
}
export default WatchListCoinTable;