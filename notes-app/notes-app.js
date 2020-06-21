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

const filters = {
  searchText: ''
}

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function (note){
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  filteredNotes.forEach(function(note){
    const noteEl= document.createElement('p')
    noteEl.textContent= note.title
    document.querySelector('#notes').appendChild(noteEl)
  })
}

document.querySelector('#remove-all').addEventListener('click',function(e){
 e.target.textContent = 'The button was clicked'
})
document.querySelector('#create-note').addEventListener('click',function(){
  document.querySelectorAll('.note').forEach(function(note){
note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input',function(e){
  console.log(e.target.value)
  removeEventListener(notes,filters)
})