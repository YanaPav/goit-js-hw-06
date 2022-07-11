const categoriesCount = document.querySelectorAll('li.item')
console.log(`Number of categories: ${categoriesCount.length}`)

// Можна продовжити працювати з псевдомасивом, але мені більше подобаються справжні, тому створюю нову змінну

// const categoriesArr = [...categoriesCount]
// for (const category of categoriesArr) {
//     console.log('Category:', category.querySelector('h2').textContent)    
//     console.log(`Elements: ${category.querySelectorAll('li').length}`)
// }

categoriesCount.forEach(category => {
    console.log('Category:', category.querySelector('h2').textContent)    
    console.log(`Elements: ${category.querySelectorAll('li').length}`)
})