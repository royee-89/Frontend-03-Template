function match( string ) {
    let state = start;

    for (const char of string) {
        state = state(char);
    }

    return state === end;
}

function start( char ) {
    if (char === 'a') {
        return foundA1;
    } else {
        return start;
    }
    
}

function end( char ){
    return end;
}

function foundA1( char ) {
    if (char === 'b') {
        return foundB1;
    } else {
        return start(char)
    }
}

function foundB1( char ) {
    if (char === 'a') {
        return foundA2;
    } else {
        return start(char);
    }
}

function foundA2( char ){
    if (char === 'b') {
        return foundB2;
    } else {
        return start(char);
    }
}

function foundB2( char ){
    if (char === 'a') {
        return foundA3;
    } else {
        return start(char);
    }
}

function foundA3( char ){
    if (char === 'b') {
        return foundB3;
    } else {
        return start(char);
    }
}

function foundB3( char ){
    if (char === 'x') {
        return end;
    } else {
        return foundB2(char);
    }
}

console.log( match('ababababx') )