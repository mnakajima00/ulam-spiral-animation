const STEP = 4;

let currPos = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    step: STEP
}

let count = 1;

let directionCount = 0;
let maxDirectionCount = 1;

let pathCount = 0;

let currDirection = 0;

const DIRECTIONS = ['RIGHT', 'UP', 'LEFT', 'DOWN'];

setup = () => {
    createCanvas(window.innerWidth, window.innerHeight);
    ellipseMode(CENTER);
    background(0);
}

windowResized = () => {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0)return false;
    return num > 1;
}

drawCircle = () => {
    if(isPrime(count)) {
        fill(255, 195, 0)
    } else {
        fill(0)
    }
    switch(DIRECTIONS[currDirection]) {
        case "UP":
            ellipse(currPos.x, currPos.y, currPos.step, currPos.step);
            currPos.y = currPos.y - currPos.step;
            break;
        case "DOWN":
            ellipse(currPos.x, currPos.y, currPos.step, currPos.step);
            currPos.y = currPos.y + currPos.step;
            break;
        case "LEFT":
            ellipse(currPos.x, currPos.y, currPos.step, currPos.step);
            currPos.x = currPos.x - currPos.step;
            break;
        case "RIGHT":
            ellipse(currPos.x, currPos.y, currPos.step, currPos.step);
            currPos.x = currPos.x + currPos.step;
    }
    ++directionCount;
}

updateDirection = () => {
    if(directionCount >= maxDirectionCount) {
        if(currDirection >= 3) {
            currDirection = 0;
        } else {
            currDirection++;
        }
        pathCount++;
        if(pathCount >= 2) {
            maxDirectionCount++;
            pathCount = 0;
        }

        directionCount = 0;
    }
    
}

render = () => {
    /***
     * 1. Draw circle for each count
     * 2. Update direction
     * 3. Draw Path
     * 4. Repeat
     */
     drawCircle();
     drawPath();
     updateDirection();
}

drawPath = () => {
    noFill();
    switch(DIRECTIONS[currDirection]) {
        case "UP":
            ellipse(currPos.x, currPos.y, currPos.step/2, currPos.step/2);
            currPos.y = currPos.y - currPos.step;
            break;
        case "DOWN":
            ellipse(currPos.x, currPos.y, currPos.step/2, currPos.step/2);
            currPos.y = currPos.y + currPos.step;
            break;
        case "LEFT":
            ellipse(currPos.x, currPos.y, currPos.step/2, currPos.step/2);
            currPos.x = currPos.x - currPos.step;
            break;
        case "RIGHT":
            ellipse(currPos.x, currPos.y, currPos.step/2, currPos.step/2);
            currPos.x = currPos.x + currPos.step;
    }
}

draw = () => {
    render();
    count++;
}