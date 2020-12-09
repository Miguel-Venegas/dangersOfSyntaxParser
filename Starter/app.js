
// Automatic Semi-colon insertion

// in this example, I learned the dangers of syntax parser. The syntax parsers automatically inserts a semicolon when it sees return statement and nothing else on the same line. That can be a problem, like in the example below, when accidentally starting a new line, yet still part of the return statement's purview, as it may return undefined.

function getPerson(){
    return
    {
        firstName:'Miguel'
    }
}

console.log(getPerson()); // expected output: object {firstName: 'Miguel'} vs actual output: 
                        
// to fix said problem, simply add the bracket in the same line as the return so that the syntax parser knows that you want to return whatever is on the same line as the return statement

function getperson(){
    return {
        firstName:'Miguel'
    }
}

console.log(getperson()); // output: {firstName: 'Miguel'}
