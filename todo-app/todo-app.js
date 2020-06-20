const todos= [{
    text: 'Order cat food',
    completed: false
},{
    text: 'clean kitchen',
    completed: true
}, {
    text:'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed:false
}, {
    text: 'Exercise',
    completed: true
}]

const incompleteTodos= todos.filter(function (todo){
    return !todo.completed
})

const summary = document.createElement('h4')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo){
    const para = document.createElement('p')
    para.textContent = todo.text
    document.querySelector('body').appendChild(para)

})

