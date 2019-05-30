

let robHouses = (A) => {
    let sum = 0;
    let n = A.length;

    // one or two houses
    if (n == 1) {
        return A[0];
    } else if (n == 2) {
        if (A[0] > A[1]) {
            return A[0];
        } else {
            return A[1];
        }
    } else {
        let i
        for (i = 0; i < n-1; i++) {
            if (A[i] > A[i+1]) {
                sum += A[i];
                ++i;
            } else {
                if (i == n-5) { // exactly 5 left
                    if ((A[i] + A[i+2] + A[i+4]) > (A[i+1] + A[i+3])) {
                        sum += A[i] + A[i+2] + A[i+4];
                        i += 5;
                        break;
                    }
                }

                if (i < n-3) { // 4+ left
                    if ((A[i] + A[i+2]) > (A[i+1] + A[i+3])) {
                        sum += A[i];
                        ++i;
                    } else {
                        ++i;
                        sum += A[i];
                        ++i;
                    }
                } else if (i < n-2) { // 3 left
                    if ((A[i] + A[i+2]) > A[i+1]) {
                        sum += A[i];
                        i += 2;
                        sum += A[i];
                        ++i;
                    } else {
                        sum += A[i+1];
                        i += 2;
                    }
                } else { // 2 left
                    sum += A[i+1];
                    i += 2;
                }
            }
        }

        if (i < n) { // get last one
            sum += A[i];
            i++;
        }
    }

    return sum;
}

module.exports = {
    robHouses
}
