function matchStr( target, str ) {

    return result = str.split('').reduce( ( tempResult, curChar) => {
        let {
            result,
            index,
            targets
        } = tempResult
        
        if ( index === targets.length - 1){
            return {
                result: true,
                index,
                targets
            }
        } else if ( hasChar( curChar, targets[index] ) ) {
            return {
                result,
                index: index + 1,
                targets
            }
        } else {
            return {
                result,
                index: 0,
                targets
            }
        }
   }, {
       result: false,
       index: 0,
       targets: target.split('')
    } ).result;

}

function hasChar( char, target ) {
    if ( char === target ) {
        return true;
    }
    return false;
}

console.log( matchStr('abc',  'addsabcdef') )