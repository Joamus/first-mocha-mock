module.exports.convertGrade = function(grade, fromFormat, toFormat) {
    

    const americanGrades = ["A", "B", "C", "D", "E", "Fx", "F"]
    const danishGrades = ["12", "10", "7", "4", "2", "0", "-3"]

    const grades = {
        "USA" : americanGrades,
        "DK" : danishGrades
    }

    const indexOfGrade = grades[fromFormat].indexOf(grade)

    return grades[toFormat][indexOfGrade];

}