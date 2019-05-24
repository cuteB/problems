

let climbStairs = (n) => {
    if (n == 1) {
        return 1;
    } else if (n ==2) {
        return 2;
    }

    let memo = [];
    memo.push(0);
    memo.push(1);
    memo.push(2);

    for (let i = 2; i <= n; i++) {
        memo.push(memo[i] + memo[i-1]);

    }

    return memo[n];
}

module.export = {
    climbStairs
}

let t = () => {
    let x = 7;
    for (let i = 1; i < 20; i++) {
        console.log(climbStairs(i));
    }
}

t();
