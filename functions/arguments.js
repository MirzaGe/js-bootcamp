let add = function (a, b) {
    return a+b


}

let result = add(10,2)
console.log(result)



let scoreTy = function (name,score){
return `Name ${name}       - Score: ${score}`
}

let scoreTe = scoreTy('Sherry',6)
console.log(scoreTe)

//total, tipPercent .2
 
let getTip = function (total, tipPercent) {
let percent = tipPercent * 100
let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(1250, .25)
console.log(tip)

