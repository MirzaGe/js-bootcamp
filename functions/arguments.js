let add = function (a, b) {
    return a+b


}

let result = add(10,2)
console.log(result)



let scoreTy = function (name,score){
return 'Name:' + name + ' --Goals : ' + score
}

let scoreTe = scoreTy('undefined',6)
console.log(scoreTe)

//total, tipPercent .2
 
let getTip = function (total, tipPercent = .2) {
return total * tipPercent
}

let tip = getTip(100, .25)
console.log(tip)