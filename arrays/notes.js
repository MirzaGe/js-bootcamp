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
const filter = {
    searchText: ''
}
const renderNotes = function (notes,filter){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText)

    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


const note = findNote(notes, 'Office modification')
console.log(note) 