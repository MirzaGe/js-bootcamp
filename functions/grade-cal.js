let gradeCalc = function (score,totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade='A'
    } else if (percent >=80) {
        letterGrade = 'B'
    } 

    return `you got a ${letterGrade} (${percent}%)!`

}


let result = gradeCalc(19,20) 
console.log(result)
