

let buySellStocks = (arr) => {
    let buy = 0,
        sell = 0,
        amount = 0,
        n = arr.length;

    //        v
    // [7,1,5,3,6,4]

    if (n <= 1) {
        return 0;
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] < arr[buy]) {
            buy = i;
            if (sell < i) {
                sell = i;
            }
        } else if (arr[i] > arr[sell]) {
            sell = i;
            if (amount < (arr[sell] - arr[buy])) {
                amount = arr[sell] - arr[buy];
            }
        }
    }


    return amount;
}


module.exports = {
    buySellStocks
};
