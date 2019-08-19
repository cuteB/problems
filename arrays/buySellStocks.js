

let buySellStocks = (arr) => {
    if (arr == null) {
        return null;
    }
    let len = arr.length;
    let amount = 0;

    if (len < 2) {
        return 0;
    }

    let buyAmt = arr[0];
    let sellAmt = arr[0];

    for (let i = 1; i < len; i++) {
        if (arr[i] > sellAmt) {
            sellAmt = arr[i];
        }

        if (arr[i] < buyAmt) {
            buyAmt = arr[i];
            sellAmt = arr[i];
        }

        if ((sellAmt - buyAmt) > amount) {
            amount = sellAmt - buyAmt;
        }
    }

    return amount;

}

let t = () => {
    return 1;
}

module.exports = {
    buySellStocks
};
