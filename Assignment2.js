function getMotto() {
    let myMotto = prompt('What is your favorite motto or saying? Please enter it here!');
    return myMotto;
}

function getCount() {
    let myCount = prompt('How many times would you like to see your favorite motto displayed on the screen? Please enter a number.');
    return parseFloat(myCount);

}

function printMotto(myMotto, myCount){
   
    for (myCount; myCount>0; myCount--) {
        console.log(myCount + '. ' + myMotto);
        
    }

}

let a = getMotto();
let b = getCount();
let c = printMotto(a, b)



