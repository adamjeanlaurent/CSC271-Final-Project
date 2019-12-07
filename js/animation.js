/*
    Short Rundown Of How This Code Works:
        - in animation.html, there are 10 vertical lines, each with a class .n{x}, where x is a number between
        0 and 10.
        - these classes represent the length of the bar as well as the number inside it
        - when animatedBubbleSort() is called, it sorts the global array startArray that represents the shown array 
        on screen.
        - It also calls timeout functions with increasing intervals that mock the sorting algorithm.
        - after bubble sort is completed (because of the javascript event loop), the set timeout functions go off which create
        the animation you see.
        - You can read the code & comments to understand what each function do, the reason for the increasing time 
        intervals (see the variable mult) is because the animation needs to play in a human readable speed, having a constant
        time interval there would play the whole animation in a fraction of a second because all the animations would
        happen at the same time. 
*/

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
    form validation 
*/

/*
    This function animates the bubble sort algorithm
*/
function animatedBubbleSort(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let currentElement = inputArr[j];
            let nextElement = inputArr[j + 1];
            // This setTimeout animates the two pointers walking through the array on an increasing time interval
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
                // this function swaps values on an increasing time intervals
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

/*
    this function moves along the 'slow pointer' in the animation which in the j pointer in bubble sort
*/
function updateSlowPointer(index) {
    // Before updating a pointer in animation the we get rid of the prior one
    let oldPointers = document.querySelectorAll('.slowPointer');
    for (let slowPointer of oldPointers) {
        slowPointer.classList.remove('slowPointer');
    }
    let currentElement = document.querySelector('.n' + index);
    currentElement.classList.add('slowPointer');
}

/*
     this function moves along the 'fast pointer' in the animation which in the j + 1 pointer in bubble sort
*/
function updateFastPointer(index) {
    // Before updating a pointer in animation the we get rid of the prior one
    let oldPointers = document.querySelectorAll('.fastPointer');
    for (let fastPointer of oldPointers) {
        fastPointer.classList.remove('fastPointer');
    }

    if (index === undefined) return;

    let currentElement = document.querySelector('.n' + index);
    currentElement.classList.add('fastPointer');
}

/*
    this function swaps two elements in the animation
*/
function swap(i, j) {
    let firstElement = document.querySelector('.n' + i);
    let secondElement = document.querySelector('.n' + j);

    firstElement.classList.remove('n' + i);
    firstElement.classList.add('n' + j);

    secondElement.classList.remove('n' + j);
    secondElement.classList.add('n' + i);
}

/*
    This function randomizes the array to values between 0 and 10 with no duplicates
*/
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

/*
    Generates a random number between 0 and 10
*/
function genRandNum() {
    return Math.floor(Math.random() * 11);
}
3
/*
    removes all 'slow' and 'fast' pointers from the array container
*/
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

// starts animation and hides the player so that the user can't interfere with the animation
startButton.addEventListener('click', () => {
    animatedBubbleSort(startArray);
    hidePlayer();
});

randomizeButton.addEventListener('click', () => {
    shuffleArray();
});

// updates speed when range slider is clicked on 
slider.addEventListener('click', () => {
    speed.textContent = slider.value + 'x speed';
    let requestedValue = parseInt(slider.value);
    updateSpeed(requestedValue);
});

// updates speed when range slider is pressed on by a key (for accessibility reasons) 
slider.addEventListener('keydown', () => {
    speed.textContent = slider.value + 'x speed';
    let requestedValue = parseInt(slider.value);
    updateSpeed(requestedValue);
});

// updates current speed multiplier
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

// hides buttons and range slider
function hidePlayer() {
    startButton.style.display = 'none';
    randomizeButton.style.display = 'none';
    slider.style.display = 'none';
    speed.style.display = 'none';
}

// shows buttons and range slider
function showPlayer() {
    startButton.style.display = 'inline-block';
    randomizeButton.style.display = 'inline-block';
    slider.style.display = 'inline-block';
    speed.style.display = 'inline-block';
}

// starts the speed off as 1x when the page loads
slider.value = 1;
slider.click();