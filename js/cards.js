async function request(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(item => {
            const cards = document.querySelector('.cards_item')
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.innerHTML = `
                <h1>${item.id}</h1>
                <img class="cards_img" src="../image/самурай.jpg" alt="user">
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            `
            cards.append(div)
        })
    }catch{
        console.error('ERROR')
    }
}
request()