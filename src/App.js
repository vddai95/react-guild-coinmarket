import React from 'react';
import Tabs from "./components/Tabs";
import EditWatchList from "./components/EditWatchList";
import CoinTable from "./components/CoinTable";
import WatchListCoinTable from "./components/WatchListCoinTable"
import './App.css';
import { useEffect, useState } from 'react/cjs/react.development';
import { GetAllCoin } from './api/CoinApi';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [watchList, setWatchList] = useState([]);
  const [allCoins, setAllCoins] = useState(null);

  useEffect(() => {
    GetAllCoin().then(setAllCoins);
  }, []);

  return (
    <Router>
      <div className="App">
        <h1 className="App-header">
          CoinCap
        </h1>

        <Switch>
          <Route path="/" exact={true}>
            <Tabs activeTab="All coins">
              <div label="All coins">
                {allCoins ? (
                  <CoinTable
                    coins={allCoins}
                  />
                ) : (<div>loading...</div>)}

              </div>
              <div label="Watch list">
                <WatchListCoinTable
                  coins={watchList}
                />
              </div>
            </Tabs>
          </Route>

          <Route path="/EditWatchList" exact={true}>
            {
              allCoins ?
              (<EditWatchList
                watchList={watchList}
                setWatchList={setWatchList}
                allCoins={allCoins}
              />) : (<div>loading...</div>)
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
