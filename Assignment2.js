function getMotto() {
    let myMotto = prompt('What is your favorite motto or saying? Please enter it here!');
    return myMotto;
}

function getCount() {
    let myCount = prompt('How many times would you like to see your favorite motto displayed on the screen? Please enter a number.');
    return parseFloat(myCount);

}

function printMotto(myMotto, myCount){ //Is it okay to use the same name as previous variables that were used in above function?
   let i = 1;
    for (i; i<=myCount; i++) {
        
     console.log(i + '. ' + myMotto);
        
    }
//Do I need a return here?

}

let a = getMotto();
let b = getCount();
printMotto(a, b);



