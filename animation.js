let mult = 2;

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let currentElement = inputArr[j];
            let previousElement = inputArr[j - 1];
            let nextElement = inputArr[j + 1];
            // setTimeout(() => {
            //     updateSlowPointer(currentElement, previousElement);
            //     updateFastPointer(nextElement);
            // }, mult++ * 1000); 
           
            if (inputArr[j] > inputArr[j + 1]) {
                let currentElement = inputArr[j];
                let nextElement = inputArr[j + 1];
                setTimeout(() => {
                    swap(currentElement, nextElement);
                }, mult++ * 300);
               
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

function updateSlowPointer(index, prev) {
    if(index == undefined) {
    }
    let currentElement = document.querySelector('.n' + index);
    if (prev) {
        let previousElement = document.querySelector('.n' + prev);
        previousElement.classList.remove('slowPointer');

    }
    if (currentElement.classList.contains('fastPointer')) {
        currentElement.classList.remove('fastPointer');
    }
    currentElement.classList.add('slowPointer');
}

function updateFastPointer(index) {
    if (!index) return;
    let currentElement = document.querySelector('.n' + index);
    if (currentElement.classList.contains('slowPointer')) {
        currentElement.classList.remove('slowPointer');
    }
    currentElement.classList.add('fastPointer');
}

function swap(i, j) {
    console.log("Swapping " + i + " With " + j);
    let firstElement = document.querySelector('.n' + i);
    let secondElement = document.querySelector('.n' + j);

    firstElement.classList.remove('n' + i);
    firstElement.classList.add('n' + j);


    secondElement.classList.remove('n' + j);
    secondElement.classList.add('n' + i);
}
bubbleSort([9, 4, 2, 7, 3, 10, 1, 0, 6, 5]);
/*
    - call bubble sort on array in the exact order we have rn
    - update i pointer in top of i loop
    - update j pointer in top of j loop
    - How To Swap Values ?
        - swap n classes
        - what to do with i and j pointers it's possible that they may be affected
            - if we swap, and 


*/