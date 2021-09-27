import React, { useState } from "react";
import PropTypes from "prop-types";
import CoinItemEdit from "./CoinItemEdit";
import {Link} from "react-router-dom";

function EditWatchList(props){
    const [listTemp, setListTemp] = useState(props.watchList);
    const [coinsShowed, setcoinsShowed] = useState(props.allCoins);

    const onItemClick = (item) => {
        if(listTemp.some(i => i.id === item.id)){
            const newList = listTemp.filter(i => i.id !== item.id);
            setListTemp(newList);
        }
        else{
            const newList = [...listTemp, item];
            setListTemp(newList);
        }
    }
    const searchCoinChange = (e) => {
        const newCoinsShowed = props.allCoins?.filter(coin => coin.name.includes(e.target.value));
        setcoinsShowed(newCoinsShowed);
    }
    const updateWatchList = () => {
        props.setWatchList(listTemp);
    }

    return(
        <div>
            <h2>Add Watch List</h2>

            <input
                type="text"
                id="coin-search"
                placeholder="Search blog posts"
                name="CoinName"
                onChange={searchCoinChange}
            />

            <table>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                </tr>

                {coinsShowed?.map(coin => {
                    const isInWatchList = listTemp.some(i => i.id === coin.id);
                    return(
                        <CoinItemEdit
                            coin={coin}
                            onClick={onItemClick}
                            isInWatchList={isInWatchList}
                        />
                    );
                    
                })}
            </table>

            <Link className="btn" style={{width: '10rem', fontSize : '2rem', margin : '2rem 0rem 0rem 2rem'}} onClick={updateWatchList} to="/">
                Done
            </Link>
        </div>
    );
};

EditWatchList.propTypes = {
    allCoins: PropTypes.array,
    watchList: PropTypes.array,
    setWatchList: PropTypes.func.isRequired,
}

export default EditWatchList;