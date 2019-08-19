
let stringRotate = (str) => {
    let output = str;
    let len = str.length;
    let temp;
    let last = len-1;

    for (let i = 0; i < len; i++) {
        output = setChar(output, str[i], last - i);
    }

    return output;


}

let setChar = (str, char, ind) => {
    if (ind > str.length-1 || ind < 0 ) {
        return str;
    }
    return str.substr(0, ind) + char + str.substr(ind + 1)
}



module.exports = {
    stringRotate
};
