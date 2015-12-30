var student = {
  id: '14',
  name: 'Joey',
  age: 23,
  grades: [9, 10, 7, 8],
  classes: undefined
};

console.log(student);

//verifying whether a property exists
console.log('classes' in student); 

//assigning a value to a property
student.classes = ['Mathematics', 'Physics']; 
console.log(student);

//deleting a property
delete student.classes; 
console.log('classes' in student);