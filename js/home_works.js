// HOME WORKS BY EMIR
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{6,30}@gmail.com$/

gmailInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter'){
        validate()
    }
})
gmailButton.onclick = validate
function validate (){
    if (regExp.test(gmailInput.value)) {
        gmailResult.textContent = 'Your gmail verified!'
        gmailResult.style.color = 'yellow'
    }else if (gmailInput.value === ''){
        gmailResult.textContent = 'The field must not be empty!'
        gmailResult.style.color = 'red'
    }else{
        gmailResult.textContent = 'Such user does not exist!'
        gmailResult.style.color = 'red'
    }
}

// PART 2

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
const width = parentBlock.offsetWidth - childBlock.offsetWidth

let x = 0
let y = 0
function recursionCount() {
    if( x < width && y===0) {
        setTimeout(function() {
            x += 1
            recursionCount()
        }, 10)
    }else if (x === width && y < width) {
        setTimeout(function() {
            y += 1
            recursionCount()
        }, 10)
    }else if (y === width && x > 0) {
        setTimeout(function() {
            x -= 1
            recursionCount()
        }, 10)
    }else if (x === 0 && y > 0) {
        setTimeout(function() {
            y -= 1
            recursionCount()
        }, 10)
    }
    childBlock.style.top = y + 'px'
    childBlock.style.left = x + 'px'
}
recursionCount()


// HOME WORK 2

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton= document.querySelector('#reset')
const msec = document.querySelector('#ml-secondsS')
const sec = document.querySelector('#secondsS')
const min = document.querySelector('#minutesS')

let timer
let ms = 0

startButton.addEventListener('click',() => {
    timer = setInterval( ()=>{
        ms += 10
        update()
    } , 10)
})
stopButton.addEventListener('click',() => {
    clearInterval(timer)
})
resetButton.addEventListener('click',() => {

    clearInterval(timer)
    ms = 0
    update()
})
function update (){
    let milliseconds = ms
    const minutes = Math.floor(milliseconds/60000)
    milliseconds -= minutes * 60000
    const seconds = Math.floor(milliseconds/1000)
    milliseconds -= seconds * 1000
    msec.textContent = milliseconds
    sec.textContent = seconds
    min.textContent = minutes
}


