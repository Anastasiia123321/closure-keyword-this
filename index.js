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
console.log(getMiddleTaxes.call(latvia));

// Task #3
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(latvia));

// Task #4
function getMySalary() {
      const max = 2000;
      const min = 1500;
    const salary = Math.floor(Math.random() * (max - min)) + min;
    const taxes = getMyTaxes.call(this,salary);
    const profit = salary - taxes;
    return {
      salary,
      taxes,
      profit
    };
  }
    let interval = setInterval(() => {
  console.log(getMySalary.call(latvia))
}, 10000);
setTimeout(() => clearInterval(interval),5000);