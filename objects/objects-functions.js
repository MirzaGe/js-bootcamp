let myBook = {
    title: 1984 ,
    author:'George Orwell'
    pageCount : 326
}

let otherBook = {
    tittle: 'A people History',
    author: 'Howard Zinn'
    pageCount: 723
}

let getSummary = function (book) {
    console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)
getSummary(otherBook)
