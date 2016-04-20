//loops.js

//while loops

var i = 0;
var countLimit = 8;

while(i < countLimit){
    //console.log('while: ' + i);
    i++;
}

//for loops
for (i = 0; i<countLimit; i++){
    //console.log('for: '+ i);
}


//challenge

//method countDown(startingPoint, stopingPoint)

function countDownWhile(startingPoint, stopingPoint){
    while(startingPoint > stopingPoint){
        console.log('while: ' + startingPoint);
        startingPoint--;
    }
}

function countDownFor(startingPoint, stopingPoint){
    for (startingPoint;  startingPoint > stopingPoint; startingPoint--){
        console.log('for: ' + startingPoint);        
    }
}

countDownWhile(10,1);
countDownFor(10,1);