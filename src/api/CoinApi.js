import axios from 'axios';


export const GetAllCoin = async () => {
    let res = await axios({
        method: 'get',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=7&convert=USD',
        headers: {
            'X-CMC_PRO_API_KEY': '04f7ec50-91b1-4915-9965-249b406d584f'
          }
    });

    let coins = res.data.data;

    for(let coin of coins){
        const logo = await GetLogo(coin.id);
        coin.logo = logo;
    }

    return coins;
}

export const GetLogo = async (coinId) => {
    const coinInfo = await axios({
        method: 'get',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=' + coinId,
        headers: {
            'X-CMC_PRO_API_KEY': '04f7ec50-91b1-4915-9965-249b406d584f'
          }
    });

    return coinInfo.data.data[coinId].logo;
}