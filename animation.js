let mult = 2;
let startArray = [9, 4, 2, 7, 3, 10, 1, 0, 8, 6, 5];

function animatedBubbleSort(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let currentElement = inputArr[j];
            let nextElement = inputArr[j + 1];
            setTimeout(() => {
                updateSlowPointer(currentElement);
                updateFastPointer(nextElement);
                if(i == len - 1 && j == len - 1) {
                    clearAllPointers();
                }
            }, mult++ * 300);

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
}

function updateSlowPointer(index) {
    let oldPointers = document.querySelectorAll('.slowPointer');
    for (let slowPointer of oldPointers) {
        slowPointer.classList.remove('slowPointer');
    }
    let currentElement = document.querySelector('.n' + index);
    currentElement.classList.add('slowPointer');
}

function updateFastPointer(index) {
    let oldPointers = document.querySelectorAll('.fastPointer');
    for (let fastPointer of oldPointers) {
        fastPointer.classList.remove('fastPointer');
    }

    if (index === undefined) return;

    let currentElement = document.querySelector('.n' + index);
    currentElement.classList.add('fastPointer');
}

function swap(i, j) {
    let firstElement = document.querySelector('.n' + i);
    let secondElement = document.querySelector('.n' + j);

    firstElement.classList.remove('n' + i);
    firstElement.classList.add('n' + j);

    secondElement.classList.remove('n' + j);
    secondElement.classList.add('n' + i);
}

function shuffleArray(startArray) {
    startArray = [];
    for (let i = 0; i <= 10; i++) {
        startArray.push(genRandNum());
    }
    // assign class values, repeated elements shouldn't be as issue ?
}

function genRandNum() {
    return Math.floor(Math.random() * 10) + 1;
}

function clearAllPointers() {
    let fastPointers = document.querySelectorAll('.fastPointer');
    for (let fastPointer of fastPointers) {
        fastPointer.classList.remove('fastPointer');
    }

    let slowPointers = document.querySelectorAll('.slowPointer');
    for (let fastPointer of slowPointers) {
        fastPointer.classList.remove('slowPointer');
    }
}
animatedBubbleSort(startArray);
console.log(startArray);