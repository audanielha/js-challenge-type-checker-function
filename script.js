

function typeChecker(type){
    if(typeof(type)==="number"){
        console.log('number')
    }
    else if(typeof(type)==="string"){
        console.log('string')
    }
    else if(typeof(type)==="boolean"){
        console.log('boolean')
    }
    else if(type === null){
        console.log('null')
    }
    else if(typeof(type)==="object"){
        console.log('object')
    }
    else if(typeof(type)==="undefined"){
        console.log('undefined')
    }
    else if(Array.isArray(type)){
        console.log('Array')
    }
    else if(typeof(type)==="function"){
        console.log('function')
    }
}

typeChecker(42);            // "number"
typeChecker("Hello World"); // "string"
typeChecker(true);          // "boolean"
typeChecker({});            // "object"
typeChecker(null);          // "null"
typeChecker(undefined);     // "undefined"
typeChecker([]);            // "object" (arrays are technically objects in JavaScript)
typeChecker(function() {}); // "function"