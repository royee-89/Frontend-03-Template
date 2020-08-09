function matchAB( str ) {
    let getA = false;
    for (const char of str) {
        if (char === 'a') {
            getA = true;
        } else if ( getA && char === 'b') {
            return true
        } else {
            getA = false
        }
    }
}

console.log(matchAB( 'fesdfabfaab'))