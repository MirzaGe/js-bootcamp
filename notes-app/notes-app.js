// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//       p.textContent = '******'
//     // p.remove()
// })

const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
 p.textContent = '******'
 
  //console.log(p.textContent)
  // p.remove()
})

const newParagraph = document.createElement('h')
newParagraph.textContent = 'This is a new element from JavaScript'

document.querySelector('body').appendChild(newParagraph)
