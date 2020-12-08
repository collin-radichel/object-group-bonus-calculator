const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



function processEmployee( employee ) {
  let processedEmployee = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }
      if (employee.reviewRating <= 2) {
       processedEmployee.bonusPercentage = 0;
    } if (employee.reviewRating === 3) {
       processedEmployee.bonusPercentage = 0.04;
    } if (employee.reviewRating === 4){
       processedEmployee.bonusPercentage = 0.06;
    } if (employee.reviewRating === 5){
       processedEmployee.bonusPercentage = 0.1;
    } if (employee.employeeNumber.length === 4){
       processedEmployee.bonusPercentage += 0.05;
    } if(employee.annualSalary > 65000){
       processedEmployee.bonusPercentage -= 0.01;
    } if (processedEmployee.bonusPercentage > 0.13){
      processedEmployee.bonusPercentage = 0.13;
    } if (processedEmployee.bonusPercentage < 0) {
      processedEmployee.bonusPercentage = 0;
    }

    processedEmployee.totalBonus = parseInt(employee.annualSalary) * processedEmployee.bonusPercentage;

    processedEmployee.totalCompensation = processedEmployee.totalBonus + parseInt(employee.annualSalary);

    
    
  return processedEmployee;
  }


  // function displayEmployees(){
  //   let el = $('#salaryInformation')
  //   el.empty();
  //   for ( information of processedEmployee) {
  //     el.append(`<li>` + information.name + ' ' + information.bonusPercentage + ' '
  //                 + information.totalCompensation + ' ' + information.totalBonus);
  //   }
  // }
  // displayEmployees();



console.log('Testing', processEmployee(employees[0]));
console.log('Testing', processEmployee(employees[1]));
console.log('Testing', processEmployee(employees[2]));
console.log('Testing', processEmployee(employees[3]));
console.log('Testing', processEmployee(employees[4]));

console.log( employees );
