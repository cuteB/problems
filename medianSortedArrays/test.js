let msa = require("./medianSortedArrays")

let testMain = () => {
  let pass = true;

  if (!testCase([1, 3], [2], 2)) {
    pass = false;
    console.log("basic")
  }

  if (!testCase([1, 2], [3, 4, 5], 3)) {
    pass = false;
    console.log("basic")
  }

  if (!testCase([1, 3, 5], [2, 4], 3)) {
    pass = false;
    console.log("basic")
  }

  if (!testCase([1, 2, 3, 4, 6, 7, 8, 9], [5], 5)) {
    pass = false;
    console.log("one val1")
  }

  if (!testCase([5], [1, 2, 3, 4, 6, 7, 8, 9], 5)) {
    pass = false;
    console.log("one val2")
  }

  if (!testCase([1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13], 7)) {
    pass = false;
    console.log("not overlaping")
  }

  if (!testCase([1, 3, 5, 7, 9], [2, 4, 6, 8, 10], 5.5)) {
    pass = false;
    console.log("not overlaping")
  }

  if (!testCase([1], [2], 1.5)) {
    pass = false;
    console.log("two")
  }

  if (!testCase([1, 1, 1, 1], [1, 1, 1, 1, 1, 2], 1)) {
    pass = false;
    console.log("two")
  }

  if (pass) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}

let testCase = (arr1, arr2, exp) => {
    let act = msa.medianSortedArrays(arr1,arr2);

    if (act != exp) {
      console.log("actual: " + act + ", expected: " + exp);
      return false;
    } else {
      return true;
    }
}


let testSearchMain = () => {
    let pass = true;

    if (!searchCase([1, 2, 3], 2, 1)) {
      pass = false;
      console.log("basic")
    }

    if (!searchCase([1, 2, 3, 5, 6, 7, 8, 9, 10], 2, 1)) {
      pass = false;
      console.log("long")
    }

    if (!searchCase([1, 2, 3, 5, 6, 7, 8, 9, 10], 1, 0)) {
      pass = false;
      console.log("first")
    }

    if (!searchCase([1, 2, 3, 5, 6, 7, 8, 9, 10], 10, 8)) {
      pass = false;
      console.log("last")
    }

    if (!searchCase([1, 5, 6, 7, 8, 9, 10], 2, 1)) {
      pass = false;
      console.log("missing")
    }


    if (pass) {
      console.log("Search Passed");
    } else {
      console.log("Search Failed");
    }
}

let searchCase = (arr, num, exp) => {
    let act = msa.binarySearch(arr, num);

    if (act != exp) {
        console.log("actual: " + act + ", expected: " + exp);
        return false;
    } else {
        return true;
    }
}

let testGetMedian = () => {
    let pass = true;

    if (!getCase([1, 2, 3], 2)) {
      pass = false;
      console.log("basic")
    }

    if (!getCase([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)) {
      pass = false;
      console.log("odd")
    }

    if (!getCase([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.5)) {
      pass = false;
      console.log("even")
    }

    if (!getCase([1, 2], 1.5)) {
      pass = false;
      console.log("two")
    }

    if (!getCase([1], 1)) {
      pass = false;
      console.log("one")
    }

    if (!getCase([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)) {
      pass = false;
      console.log("ones")
    }

    if (pass) {
      console.log("getMedian Passed");
    } else {
      console.log("getMedian Failed");
    }
}

let getCase = (arr, exp) => {
    let act = msa.getMedian(arr);

    if (act != exp) {
        console.log("actual: " + act + ", expected: " + exp);
        return false;
    } else {
        return true;
    }
}


testGetMedian();
testSearchMain();
testMain();
