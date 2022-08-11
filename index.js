// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield);
    return cats;
}

function  destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo);
    return cats;
}

function appendCat(name){
    const allcats = [...cats, name];
    return allcats;
}

function prependCat(name){
    const allcats = [name, ...cats];
    return allcats;
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}