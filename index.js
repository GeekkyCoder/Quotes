const wrapperEl  = document.getElementById('wrapper')
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const quoteBtn = document.getElementById('btn')

let quotesArray = []


quoteBtn.addEventListener('click', getQuoteData)

async function getQuoteData(){
    let response = await fetch('https://type.fit/api/quotes')
    let data = await response.json()
    quotesArray = data.slice(0,50)
    getRandomQuote(quotesArray)
}


function getRandomQuote(quotesArray){
 let index = Math.floor(Math.random()* quotesArray.length)
 quoteEl.textContent = quotesArray[index].text
 authorEl.textContent = !quotesArray[index].author ? 'Faraz Ahmed' : quotesArray[index].author 
}

