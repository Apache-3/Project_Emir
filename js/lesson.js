// PHONE CHECKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.addEventListener('click',() =>{
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'cyan'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

// TAB SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')



const hideTabContent = () => {
    tabContentBlocks.forEach(tabContentBlock=> {
        tabContentBlock.style.display = 'none'
    })
    tabsBlocks.forEach(tabBlock => {
        tabBlock.classList.remove('tab_content_item_active')

    })
}
const showTabContents = (indexElement = 0) => {
    tabContentBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContents()

tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabsBlocks.forEach((tabBlock, tabIndex)=> {
            if (event.target === tabBlock){
                hideTabContent()
                showTabContents(tabIndex)
            }
        })
    }
}
let sliderIndex = 0
const autoSlider = () => {
    hideTabContent()
    sliderIndex = (sliderIndex + 1) % tabContentBlocks.length
    showTabContents(sliderIndex)
}
setInterval(autoSlider, 5000)

// CONVERTER
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element,target,target2,isTrue)=> {
    element.oninput = ()=> {
        const request = new XMLHttpRequest()
        request.open("GET","../data/converter.json")
        request.setRequestHeader("Contend-type","application/json")
        request.send()
        request.onload = ()=> {
            const response = JSON.parse(request.response)
            if (isTrue === 'som'){
                target.value = (element.value / response.usd).toFixed(2)
                target2.value = (element.value / response.eur).toFixed(2)
            }
            else if (isTrue === 'usd'){
                target.value = (element.value * response.usd).toFixed(2)
                target2.value = (element.value * response.eur / response.usd).toFixed(2)
            }
            else if (isTrue === 'eur'){
                target.value = (element.value * response.eur).toFixed(2)
                target2.value = (element.value * (response.usd / response.eur)).toFixed(2)
            }
            if (element.value === ''|| target.value === '0') {
                target.value = '';
                target2.value = '';
            }
        }
    }
}
converter(som,usd,eur,'som')
converter(usd,som,eur,'usd')
converter(eur,som,usd,'eur')

// CARD SWITCHER
const cards = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let id = 1;
function loadCardData(cardNumber) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
        .then(response => response.json())
        .then(data => {
            cards.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
}
loadCardData(id);
btnNext.onclick = () => {
    id++;
    if (id > 200) {
        id = 1;
    }
    loadCardData(id);
};
btnPrev.onclick = () => {
    id--;
    if (id < 1) {
        id = 200;
    }
    loadCardData(id);
};

// PART 2
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Произошла ошибка при запросе к серверу:', error);
    });