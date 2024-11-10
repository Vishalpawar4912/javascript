//CARD SCOPE
const data = [
    {
        name: "Butters", age: 3,type: "dog" 
    },
    {
        name: "Lizzy", age: 6, type: "dog"
    },
    {
        name: "Red", age: 1, type: "cat" 
    },
    {
        name: "Joey",age: 3, type: "dog" 
    }
    ];

/*Q1. Write a promise function which will display all records with type ==='dog'
function Name ---> findAllDogs(data)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array
HINT : Use filter.*/

function findAllDogs(data) {
    return new Promise((resolve, reject) => {
      const dogRecords = data.filter(record => record.type === 'dog');
      
      if (dogRecords.length === 0) {
        reject('NO RECORDS FOUND');
      } else {
        resolve(dogRecords);
      }
    });
  }
  findAllDogs(data)
    .then(dogs => {
      console.log('Dogs:', dogs);
    })
    .catch(error => {
      console.error('Error:', error);
    });


/*Q2. Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.
function Name ---> findSpecificStartChar(data,'B')
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use filter and string functions.*/

function findSpecificStartChar(data, startChar) {
    return new Promise((resolve, reject) => {
      const filteredRecords = data.filter(record => record.name.startsWith(startChar));
      
      if (filteredRecords.length === 0) {
        reject('NO RECORDS FOUND');
      } else {
        resolve(filteredRecords);
      }
    });
  }
  
  findSpecificStartChar(data, 'L')
    .then(records => {
      console.log('Matching Records:', records);
    })
    .catch(error => {
      console.error('Error:', error);
    });


/*Q3. Write a promise function which will display sum of all ages.
function Name ---> findSumAges(data)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use reduce functions.*/

function findSumAges(data) {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject('NO RECORDS FOUND');
      } else {
        const sumOfAges = data.reduce((total, record) => total + record.age, 0);
        resolve(sumOfAges);
      }
    });
  }
  
  findSumAges(data)
    .then(sum => {
      console.log('Sum of Ages:', sum);
    })
    .catch(error => {
      console.error('Error:', error);
    });


/*Q4. Write a promise function which will display all the records with only name & ages.
function Name ---> findAll(data)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use map.*/

function findAll(data) {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject('NO RECORDS FOUND');
      } else {
        const FilteredData = data.map(record => ({ name: record.name, age: record.age }));
        resolve(FilteredData);
      }
    });
  }
  
  findAll(data)
    .then(records => {
      console.log('Filtered Records:', records);
    })
    .catch(error => {
      console.error('Error:', error);
    });


/*Q5. Write a function to display sum of all ages of records having type as dog.
Use nesting promises function which first call Q1 function its output will be given to Q3 and display total.
HINT : nesting of promises.*/

function findSumAgesOfDogs(data) {
    return new Promise((resolve, reject) => {
      const dogRecords = data.filter(record => record.type === 'dog');
      
      if (dogRecords.length === 0) {
        reject('NO RECORDS FOUND');
      } else {
        const sumOfAges = dogRecords.reduce((total, record) => total + record.age, 0);
        resolve(sumOfAges);
      }
    });
  }
    findSumAgesOfDogs(data)
    .then(sum => {
      console.log('Sum of Ages of Dogs:', sum);
    })
    .catch(error => {
      console.error('Error:', error);
    });


/*Q6. Write a promise function which will display all the records in sorting according to names.
function Name ---> Sorting(data,'ASC')
ASC -> ASCENDING/ DESC -> DESCENDING
If there are no records in array reject with message "NO RECORDS"
If there are records in Array then according to sorting order display result and return in resolve of promises.
HINT : sort on objects.*/

function Sorting(data, order) {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject('NO RECORDS');
      } else {
        if (order === 'ASC') {
          data.sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === 'DESC') {
          data.sort((a, b) => b.name.localeCompare(a.name));
        } else {
          reject('Invalid sorting order');
        }
        resolve(data);
      }
    });
}
  
  Sorting(data, 'ASC')
    .then(data => {
      console.log('Sorted Data (ASC):', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });


function Sorting(data, order) {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject('NO RECORDS');
      } else {
        if (order === 'DESC') {
            data.sort((a, b) => b.name.localeCompare(a.name));
        } else {
            reject('Invalid sorting order');
        }
        resolve(data);
      }
    });
}

  Sorting(data, 'DESC')
    .then(data => {
      console.log('Sorted Data (DESC):', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });