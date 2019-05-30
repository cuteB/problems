let jumpGame = (A) => {
    let n = A.length;
    let max = A[0];

    for (let i = 0; i < n && i <= max; i++) {
        if ((i + A[i]) > max) {
            max = i + A[i];
        }
    }

    return max >= n;
}

module.exports = {
    jumpGame
}
