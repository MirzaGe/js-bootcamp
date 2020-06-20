const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

document.querySelector('#remove-all').addEventListener('click',function(e){
 e.target.textContent = 'The button was clicked'
})
document.querySelector('#create-note').addEventListener('click',function(){
  document.querySelectorAll('.note').forEach(function(note){
note.remove()
  })
})
