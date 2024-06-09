    let data1 = [
        [0.5, 1.0, 1.5],
        [1.0, 1.5, 2.0],
        [1.5, 2.0, 3.0],
    ]; // Replace with your data

    let data2 = [
        [0.2, 1.8, 1.0],
        [1.5, 1.2, 3.0],
        [1.6, 0.8, 0.2],
    ]; // Replace with your data

    let data3 = [
        [2.1, 1.6, 0.2, 0.5, 1.8],
        [1.1, 2.1, 3.1, 2.4, 2.3],
        [0.2, 0.2, 0.7, 3.1, 3.4],
        [0.7, 0.8, 1.0, 1.2, 1.5],
        [0.3, 0.4, 0.8, 1.2, 1.5],
    ]; // Replace with your data

    let myChart =  new BarChart3D('CanvasContainer1', data1);
    let myChart2 = new BarChart3D('CanvasContainer2', data2);
    let myChart3 = new BarChart3D('CanvasContainer3', data3);

// fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365')
//     .then(response => response.json())
//     .then(data => {
//         // The data object includes two arrays: prices and market_caps
//         // Each array contains pairs of timestamps and prices or market caps
//         let prices = data.prices.map(pair => pair[1]); // Extract the prices
//         console.log(prices);
//     })
//     .catch(error => console.error('Error:', error));