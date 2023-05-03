// Easy
// 1. Create an array of your favorite movies, and log the second movie in the array to the console.

const favoriteMovies = [];
favoriteMovies[0] = "spider man ";
favoriteMovies[1] = "ocean 11";
console.log(favoriteMovies)

// 2. Create an object that represents your favorite animal, with properties for name, species, and age. Log the object to the console.
const favoriteAnimal = {};
// favoriteAnimal = {name:'Mike'}
favoriteAnimal.name = "great white"
favoriteAnimal.species = "shark"
// favoriteAnimal.age = 40
favoriteAnimal['age'] = 40
console.log(favoriteAnimal['age'])
console.log(favoriteAnimal.age)

// 3. Create a function that takes an array of numbers as an argument, and returns the sum of all the numbers in the array.
function sumArray(numbers) {
  // Add your code here
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total;
}

console.log(sumArray([2, 3, 5, 6]))

// Medium
// 4. Create an object that represents a car, with properties for make, model, and year. Add a method to the object that returns a formatted string with the car's make, model, and year.
const car = {
  make: "Tesla",
  model: "W",
  year: 2024,
  startCar() { console.log("start a car") }
};

console.log(car);

// 5. Create a function that takes an array of objects representing books, with properties for title and author, 
//and returns a new array of objects with properties for title, author, and a boolean value indicating 
//whether the book has been read or not.
function markBooksRead(books) {
  // Add your code here
  for (book in books) {

    books[book]["read"] = true

  }
  return books
}

const bookArr = [
  {
    title: "run with the run ",
    author: "King David"
  },
  {
    title: "full stack ",
    author: "Prince Wally"
  },
]
console.log(markBooksRead(bookArr))


// 6. Create a function that takes an object representing a person, with properties for name, age, and gender,
//  and returns a formatted string with the person's name, age, and pronouns (he/she/they).
function formatPerson(person) {
  // Add your code here
  let pronoun;
  if (person.gender == "female") {
    pronoun = "she"

  } else {
    pronoun = "he"
  }

  let result = `${person.name}, ${person.age}, ${pronoun}`;
  return result;
}

const person = {
  name: "Angela Lee",
  age: 50,
  gender: "female"
}

console.log(formatPerson(person));

// Difficult
// 7. Create an object that represents a bank account, 
//with properties for account number, balance, 
// and a transaction history(an array of objects representing each transaction, 
// with properties for date, amount, and type).
//Add methods to the object for depositing and withdrawing money, 
// and for getting the account balance and transaction history.
const bankAccount = {
  acct_nbr: 101010,
  balance: 2000.00,
  trans_history: [
    {
      date: "10/23/23",
      amt: 100,
      type: "withdraw"
    },
    {
      date: "10/26/23",
      amt: 200,
      type: "deposit"
    },
  ],
  deposit(amount) {
    bankAccount.trans_history.push({
      type: "deposit",
      amt: amount,
      date: "10/28/23"
    });

    this.balance += amount;
    console.log(`"deposit ", ${amount}`)
  },
  withdraw(amount) {
    bankAccount.trans_history.push({
      type: "withdraw",
      amt: amount,
      date: "10/29/23"
    });

    this.balance -= amount;
    console.log(`"withdraw ", ${amount}`)
  },
  getBal() {
    console.log(`${this.acct_nbr}, ", balance: ", ${this.balance}`)
  },
  getTransHist() {
    console.log(this.trans_history)
  },
};

console.log("\n bank account\n")
bankAccount.deposit(100)
bankAccount.withdraw(300)
bankAccount.getBal()
bankAccount.getTransHist()

// 8. Create a function that takes an array of objects representing students, 
//with properties for name, grade level, and test scores.
//The function should return an object with properties for average test score, highest test score, 
//and lowest test score.

function analyzeTestScores(students) {
  // Add your code here
  const test_result = {}

  let highest = 0
  let total = 0;
  let lowest = students[0].test_scores;;

  for (student in students) {

    total += students[student].test_scores;
    if (students[student].test_scores > highest) {
      highest = students[student].test_scores;
      // console.log(`"highest: ", ${highest}`)
    }
    if (students[student].test_scores < lowest) {
      lowest = students[student].test_scores;
      // console.log(`"lowest: ", ${lowest}`)
    }
  }

  let avg = total / students.length
  console.log(`"average score: ", ${avg}`);
  console.log(`"highest: ", ${highest}`)
  console.log(`"lowest: ", ${lowest}`)

  test_result.highest = highest;
  test_result.lowest = lowest;
  test_result.avg = avg;

  return test_result;
}


const students = [
  {
    name: "tom",
    grade_level: "12",
    test_scores: 67
  },
  {
    name: "tom",
    grade_level: "12",
    test_scores: 85
  },
  {
    name: "tom",
    grade_level: "12",
    test_scores: 97
  },
];

console.log("\n after calling analyzeTestScores\n")
console.table(analyzeTestScores(students));

// 9. Create a function that takes an array of objects representing employees, 
//with properties for name, job_title, and salary.
//The function should return a new array of objects with properties for name, job_title, salary, 
// and a boolean value indicating whether the employee's salary is above or below the average salary.
function analyzeEmployeeSalary(employees) {
  // Add your code here
  let total = 0;
  for (employee in employees) {
    total += employees[employee].salary
  }

  let avg = total / employees.length;
  console.log(`"average salary: ", ${avg}`);

  for (employee in employees) {
    if (employees[employee].salary > avg) {
      employees[employee].above_avg = true;
    } else {
      employees[employee].above_avg = false;
    }
  }
  return employees;


}

const employees = [
  {
    name: "alex",
    job_title: "sr engineer",
    salary: 50000,
  },
  {
    name: "emily",
    job_title: "jr engineer",
    salary: 40000,
  },
  {
    name: "rosa",
    job_title: "trainee",
    salary: 20000,
  },
]

console.log("\n before calling analyzeEmployeeSalary\n")
console.table(employees)

console.log("\n after calling analyzeEmployeeSalary\n")
console.table(analyzeEmployeeSalary(employees))

// 10. Create an object that represents a weather forecast, 
//with properties for date, temperature, humidity, and precipitation.
//Add methods to the object for getting the current weather conditions, 
//predicting the weather for the next day based on historical data, 
//and generating a formatted report with the weather forecast for the next week.

const weatherForecast = {
  days: [
    {
      date: "05/01/2023",
      temperature: 50,
      humidity: 51,
      precipitation: 1.5,
    },
    {
      date: "05/02/2023",
      temperature: 60,
      humidity: 51,
      precipitation: 0.5,
    },
    {
      date: "05/03/2023",
      temperature: 55,
      humidity: 51,
      precipitation: 1.0,
    },
    {
      date: "05/04/2023",
      temperature: 70,
      humidity: 51,
      precipitation: 1.6,
    },
    {
      date: "05/05/2023",
      temperature: 67,
      humidity: 51,
      precipitation: 2.5,
    },
    {
      date: "05/06/2023",
      temperature: 45,
      humidity: 51,
      precipitation: 3.5,
    },
    {
      date: "05/07/2023",
      temperature: 55,
      humidity: 51,
      precipitation: 1.2,
    },
  ],
  curr_weather() {
    return this.days[this.days.length - 1];
  },
  next_day_weather() {
    const next_day = {}
    let total_temp = 0;
    let total_humid = 0;
    let total_prec = 0;
    for (day in this.days) {
      total_temp += this.days[day].temperature;
      total_humid += this.days[day].humidity;
      total_prec += this.days[day].precipitation;
    }

    next_day.avg_temp =   Math.floor(total_temp / this.days.length);
    next_day.avg_humid =  Math.floor(total_humid / this.days.length);
    next_day.avg_prec =   Math.floor(total_prec / this.days.length);

    return next_day;
  },
  next_week_weather() {
    const next_week = []
    
    for (day in this.days) {
      let one_day = {}
      one_day.temperature = this.days[day].temperature + Math.floor(Math.random() * 4);
      one_day.humidity = this.days[day].humidity + Math.floor(Math.random() * 4);
      one_day.precipitation = this.days[day].precipitation + Math.floor(Math.random() * 4);
      console.log(one_day)
      next_week.push(one_day)
    }
    return next_week;
  },
};


console.log("\n after calling weatherForecast, curr_weather\n")
console.table(weatherForecast.curr_weather());

console.log("\n after calling weatherForecast, next_day_weather\n")
console.table(weatherForecast.next_day_weather());

console.log("\n after calling weatherForecast, next_week_weather\n")
console.table(weatherForecast.next_week_weather());


