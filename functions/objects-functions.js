let myBook = {
    title: '1984' ,
    author:'George Orwell',
    pageCount: 326, 
}

let otherBook = {
    tittle: 'A people History',
    author: 'Howard Zinn',
    pageCount: 723 ,
}

let getSummary = function (book) {
    return {
summary:`${book.title} is ${book.pageCount}`,
pageCountSummary: `${book.title} is ${book.pageCount}pages long`
    }
}

let bookSummary=getSummary(myBook)
let otherBookSummary=getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

