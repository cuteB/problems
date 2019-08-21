
let oneAwayEdit = (orig, edit) => {
    return editNum(orig, edit) == 1;
}

let editNum = (orig, edit) => {
    let origLen = orig.length;
    let editLen = edit.length;
    let origI = 0;
    let editI = 0;
    let edits = 0;

    while (origI < origLen && editI < editLen) {
        if (orig[origI] != edit[editI]) {
            edits++;
            if (origI+1 < origLen && orig[origI+1] == edit[editI]) {
                // delete
                origI++;
            } else if (editI+1 < editLen && orig[origI] == edit[editI+1]) {
                // insert
                editI++;
            }
            // else changed
        }
        origI++;
        editI++;
    }

    edits += (origLen - origI) + (editLen - editI);
    return edits;
}



module.exports = {
    oneAwayEdit,
    editNum
};
