const Button = document.querySelector('button')
const Body = document.querySelector('body')

function Change() {
    let i = Math.floor(Math.random() * 256);
    let j = Math.floor(Math.random() * 256);
    let k = Math.floor(Math.random() * 256);

    Body.style.backgroundColor = `rgb(${i}, ${j}, ${k})`
    Button.style.backgroundColor = `rgb(${i}, ${j}, ${k})`

    console.log(i, j, k)

    if (i === 255 && j === 255 && k === 255) {
        Button.classList.add('black')
    } else if (i === 255 && j === 250 && k === 250) {
        Button.classList.add('black')
    }
    else if (i === 248 && j === 248 && k === 248) {
        Button.classList.add('black')
    }
    else if (i === 245 && j === 245 && k === 245) {
        Button.classList.add('black')
    }
    else if (i === 240 && j === 240 && k === 240) {
        Button.classList.add('black')
    }
    else if (i === 238 && j === 238 && k === 238) {
        Button.classList.add('black')
    }
    else if (i === 132 && j === 254 && k === 240) {
        Button.classList.add('black')
    }
}

Button.addEventListener('click', Change)