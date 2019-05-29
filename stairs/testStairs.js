let S = require("./stairs")

let testMain = () => {
  let pass = true;

  if (!testCase(2, 2)) {
    pass = false;
    console.log("basic")
  }

  if (pass) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}

let testCase = (num, exp) => {
    let act = S.climbStairs(num);

    if (act != exp) {
      console.log("actual: " + act + ", expected: " + exp);
      return false;
    } else {
      return true;
    }
}

testMain();
