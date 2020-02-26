const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Task #1

function getMyTaxes(salary) {
  return this.tax * salary;
}
console.log(getMyTaxes.call(latvia, 1000));

// Task #2
function getMiddleTaxes(country) {
  return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

// Task #3
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

// Task #4
const getMySalary = function(country){
    setInterval(() => {
        const min = 1500;
        const max = 2000;
        const salary = Math.floor(Math.random()*(max - min + 1) + min);
        
        console.log({ 
            salary:salary,
            taxes: country.tax,
            profit: salary - country.tax       
        });
    }, 10000); 
}
getMySalary(ukraine);
