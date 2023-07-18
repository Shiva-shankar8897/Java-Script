const students=[
    {
     name:'shiva',
     age:15,
     id:1,
     rollno:26,
     result:'pass',
     marks:[{
         subject:'telugu',
         marks:45
        },
        {
            subject:'telugu',
            marks:45
           },
           {
            subject:'telugu',
            marks:45
           },
           {
            subject:'telugu',
            marks:45
           },
           {
            subject:'telugu',
            marks:45
           },
           {
            subject:'telugu',
            marks:45
           },
    ]
    },
    {
     name:'shankar',
     age:18,
     id:2,
     rollno:63,
     result:'fail',
     marks:[{
        subject:'telugu',
        marks:45
       },
       {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
   ]
    },
    {
     name:'shanku',
     age:20,
     id:3,
     rollno:263,
     result:'pass',
     marks:[{
        subject:'telugu',
        marks:45
       },
       {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
   ]
    },
    {
     name:'shiv',
     age:24,
     id:4,
     rollno:11,
     result:'fail',
     marks:[{
        subject:'telugu',
        marks:45
       },
       {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
          {
           subject:'telugu',
           marks:45
          },
   ]
    }
]
//Foreach
students.forEach((student,index)=>{console.log(student.result)})

//Map
const studentName= students.map((student,index) => {
         return {...student, status:'Single'}
        })
const studentName1= students.map((student,index) => {student.name})
const studentName2= students.map((student,index) => [student.age])

console.log(studentName)
console.log(studentName1)
console.log(studentName2)

//Filter
const getstudentage=students.filter((student,index)=> student.age==18)
console.log(getstudentage)

//Reduce
const studentsmarks=[55,65,75,85,95,45]
let acc=0
var totalmarks= studentsmarks.reduce((total,value) =>{ return total=total+value},acc)
console.log(totalmarks)








