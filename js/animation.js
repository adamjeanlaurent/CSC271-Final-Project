let mult = 2;
let startArray = [9, 4, 2, 7, 3, 10, 1, 0, 8, 6, 5];
let startButton = document.querySelector('#startButton');
let randomizeButton = document.querySelector('#randomizeButton');
let slider = document.querySelector('#slider');
let speed = document.querySelector('#speed');
let choiceOfSpeed = 1;

/*
    TODO 
    give licesnse for images 
    add disclaimer instructions for animation page 
    add new font to all pages
    make gif sizes smaller
    form validation 
    accessibility
*/

function animatedBubbleSort(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let currentElement = inputArr[j];
            let nextElement = inputArr[j + 1];
            setTimeout(() => {
                updateSlowPointer(currentElement);
                updateFastPointer(nextElement);
                if (i == len - 1 && j == len - 1) {
                    clearAllPointers();
                    mult = 2;
                    showPlayer();
                }
            }, choiceOfSpeed * (mult++ * 100));

            if (inputArr[j] > inputArr[j + 1]) {
                let currentElement = inputArr[j];
                let nextElement = inputArr[j + 1];
                setTimeout(() => {
                    swap(currentElement, nextElement);
                }, choiceOfSpeed * (mult++ * 100));
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

function shuffleArray() {
    let numbersUsed = new Set();
    startArray = [];
    for (let i = 0; i <= 10; i++) {
        let randNum = genRandNum();
        if (numbersUsed.has(randNum)) {
            while (numbersUsed.has(randNum)) {
                randNum = genRandNum();
            }
        }
        numbersUsed.add(randNum);
        startArray.push(randNum);
    }
    let verticalLines = document.querySelectorAll('.vl');
    for (let i = 0; i <= 10; i++) {
        verticalLines[i].className = '';
        verticalLines[i].classList.add('vl');
        verticalLines[i].classList.add('n' + startArray[i]);
    }
}

function genRandNum() {
    return Math.floor(Math.random() * 11);
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

startButton.addEventListener('click', () => {
    animatedBubbleSort(startArray);
    hidePlayer();
});

randomizeButton.addEventListener('click', () => {
    shuffleArray();
});

slider.addEventListener('click', () => {
    speed.textContent = slider.value + 'x speed';
    let requestedValue = parseInt(slider.value);
    updateSpeed(requestedValue);
});

slider.addEventListener('keydown', () => {
    speed.textContent = slider.value + 'x speed';
    let requestedValue = parseInt(slider.value);
    updateSpeed(requestedValue);
});

function updateSpeed(requestedValue) {
    if (requestedValue == 1) {
        choiceOfSpeed = 1;
    } else if (requestedValue == 2) {
        choiceOfSpeed = 0.80;
    } else if (requestedValue == 3) {
        choiceOfSpeed = 0.60;
    } else if (requestedValue == 4) {
        choiceOfSpeed = 0.40;
    } else if (requestedValue == 5) {
        choiceOfSpeed = 0.20;
    }
}

function hidePlayer() {
    startButton.style.display = 'none';
    randomizeButton.style.display = 'none';
    slider.style.display = 'none';
    speed.style.display = 'none';
}

function showPlayer() {
    startButton.style.display = 'inline-block';
    randomizeButton.style.display = 'inline-block';
    slider.style.display = 'inline-block';
    speed.style.display = 'inline-block';
}

slider.value = 1;
slider.click();