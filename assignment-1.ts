// input data
interface Score {
    math : number,
    english : number,
    science : number
}
interface Student {
    name : string,
    scores : Score,
    percentage ?: number,
    grade  ?: string,
}
const students : Student[] = [
    { name: "Alice", scores: { math: 95, english: 88, science: 92 } },
    { name: "Bob", scores: { math: 78, english: 82, science: 85 } },
    { name: "Charlie", scores: { math: 85, english: 90, science: 87 } },
    { name: "Daisy", scores: { math: 65, english: 70, science: 72 } },
    { name: "Eve", scores: { math: 98, english: 94, science: 96 } },
  ];

//function to calculate and add percentage and grade of all the students
function calculatePercentageGrade() : void{
    for(const student of students){
        let totalScore : number = 0
        let numberOfSubjects : number = 0
        for(const key of Object.keys(student.scores)){
            numberOfSubjects += 1
            totalScore += student.scores[key as keyof Score]
        }
        student.percentage = parseFloat((totalScore/numberOfSubjects).toFixed(2))
    
        if(student.percentage> 90) student.grade = 'A'
        else if(student.percentage> 80) student.grade = 'B'
        else if(student.percentage> 70) student.grade = 'C'
        else if(student.percentage> 60) student.grade = 'D'
        else if(student.percentage> 50) student.grade = 'E'
        else student.grade = 'fail'
    }
}
calculatePercentageGrade()
students.sort((a, b)=>(b.percentage || 0)-(a.percentage || 0));
for(const student of students as Student[])
    console.log(`Name : ${student.name}, Percentage : ${student.percentage}%, Grade : ${student.grade}`)

