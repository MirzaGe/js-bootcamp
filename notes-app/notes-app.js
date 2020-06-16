// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//       p.textContent = '******'
//     // p.remove()
// })

const ps = document.querySelectorAll('p')

ps.forEach(function(p){
  p.textContent = '****'
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from Javascript'
document.querrySelector('body').appendChild(newParagraph)
