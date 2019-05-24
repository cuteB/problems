
let binarySearch = (arr, num) => {
    let len = arr.length,
        firstI = 0,
        lastI = len - 1,
        midI;

    if (num <= arr[firstI]) {
        return firstI;
    } else if (num >= num[lastI]) {
        return lastI;
    }

    while (firstI < lastI) {
        midI = Math.floor((lastI - firstI) / 2) + firstI;
        if (num == arr[midI]) {
            return midI;
        } else if (num > arr[midI]) {
            firstI = midI;
        } else {
            lastI = midI;
        }

        if (lastI == firstI + 1) {
            if (num <= arr[firstI]) {
                return firstI;
            } else {
                return lastI;
            }
        }
    }

    return midI;
}

let getMedian = (arr) => {
    let len = arr.length,
        odd = len % 2,
        mid = Math.floor(len / 2);

    if (odd == 1) {
        return arr[mid];
    } else {
        return (arr[mid-1] + arr[mid])/2;
    }
}

let medianSortedArrays = (arr1, arr2) => {
    let size1,
        midI1,
        med1,
        size2,
        midI2,
        med2,
        median,
        medianId,
        odd,
        count = 0;

    size1 = arr1.length;
    size2  = arr2.length;
    midI1 = Math.floor(size1 / 2);
    midI2 = Math.floor(size2 / 2);

    med1 = getMedian(arr1);
    med2 = getMedian(arr2);
    // console.log('mid ' + midI1 + " " + midI2);
    medianId = Math.floor((size1 + size2) / 2);
    odd = (size1 + size2) % 2;
    medianId += odd;

    if (med1 <= med2) {
        midI2 = binarySearch(arr2, med1);
    } else {
        midI1 = binarySearch(arr1, med2);
    }


    // 1, 2, 3, 4, 5
    // 2, 3, 4, 5, 6, 7


    count = midI1 + midI2;
    if (arr1[midI1] <= arr2[midI2]) {
        median = arr1[midI1];
    } else {
        median = arr2[midI2];
    }

    // console.log(median + " | " + count +"<" + medianId + " | " + midI1 + " | " + midI2);

    while (count < medianId) {
        if (midI1 >= size1) {
            median = arr2[midI2];
            midI2++;
            count++;
        } else if (midI2 >= size2) {
            median = arr1[midI1];
            midI1++;
            count++;
        } else {

            if (arr1[midI1] <= arr2[midI2]) {
                median = arr1[midI1];
                // console.log(arr1[midI1] + '<=' + arr2[midI2]);
                midI1++;
                count++;
            } else {
                // console.log(arr1[midI1] + '>=' + arr2[midI2]);
                median = arr2[midI2];
                midI2++;
                count++;
            }
        }
        // console.log(median + " | " + count +"<" + medianId + " | " + arr1[midI1] + " | " + arr2[midI2]);
    }

    if (odd == 0) { // even
        // console.log("even");
        if (arr1[midI1] <= arr2[midI2]) {
            median += arr1[midI1];
            median /= 2;
        } else {
            median += arr2[midI2];
            median /= 2;
        }
    }

    return median

}

module.exports = {
    medianSortedArrays,
    binarySearch,
    getMedian
};
