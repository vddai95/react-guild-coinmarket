import React from "react";
import PropTypes from "prop-types";

function CoinTable(props) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return (
        <table style={{width: '100%'}}>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Market Cap</th>
                <th>Price</th>
                <th>Circulating Supply</th>
                <th>Volume(24h)</th>
                <th>% 1h</th>
                <th>% 24h</th>
                <th>% 7d</th>
            </tr>

            {props.coins.map(coin => {
                return (
                    <tr key={coin.id}>
                        <td>{coin.cmc_rank}</td>
                        <td>
                            <img style={{ width: '5rem', height: '5rem' }} src={coin.logo} alt="coin img" />
                            <div style={{ width: '40%', paddingLeft: '.5rem'}}>{coin.name}</div>
                        </td>
                        <td>{coin.symbol}</td>
                        <td>{formatter.format(coin.quote.USD.market_cap)}</td>
                        <td>{formatter.format(coin.quote.USD.price)}</td>
                        <td>{coin['circulating_supply'] + ' ' + coin.name}</td>
                        <td>{formatter.format(coin.quote.USD.volume_24h)}</td>
                        <td>{coin.quote.USD.percent_change_1h.toFixed(2) + '%'}</td>
                        <td>{coin.quote.USD.percent_change_24h.toFixed(2) + '%'}</td>
                        <td>{coin.quote.USD.percent_change_7d.toFixed(2) + '%'}</td>
                    </tr>
                );
            })}
        </table>
    );
}

CoinTable.prototype = {
    coins: PropTypes.array.isRequired,
}

export default CoinTable;