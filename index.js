function receivesAFunction (callback){
    callback();
    return 

}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}