//CARD SCOPE
const family = [
    { 
        name: "Jack", age: 26 
    },
    { 
        name: "Jill", age: 22 
    },
    { 
        name: "James", age: 5 
    },
    { 
        name: "Jenny", age: 2 
    }
    ];

/*Q1. Write a promise function which will display all the name with age > 26
function Name ---> findAge(family)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array
HINT : Use filter.*/

function findAge(family) {
    return new Promise((resolve, reject) => {
      const filteredFamily = family.filter(person => person.age > 22);
  
      if (filteredFamily.length > 0) {
        resolve(filteredFamily.map(person => person.name));
      } else {
        reject("NO RECORDS FOUND");
      }
    });
  }
  
  findAge(family)
    .then(names => {
      console.log(names);
    })
    .catch(error => {
      console.error(error);
    });


/*Q2. Write a promise function which will display all the records starting with name 'J' or any character passed as parameter.
function Name ---> findSpecificStartChar(family,'J')
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use filter and string functions.*/

function findSpecificStartChar(family, startChar) {
    return new Promise((resolve, reject) => {
      const filteredFamily = family.filter(person => person.name.startsWith(startChar));
  
      if (filteredFamily.length > 0) {
        resolve(filteredFamily);
      } else {
        reject("NO RECORDS FOUND");
      }
    });
  }
  
  findSpecificStartChar(family, 'J')
    .then(filteredRecords => {
      console.log(filteredRecords);
    })
    .catch(error => {
      console.error(error);
    });


/*Q3. Write a promise function which will display all the records ending with name 'nny' or any character passed as parameter.
function Name ---> findSpecificEndChar(family,'nny')
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use filter and string functions.*/

function findSpecificEndChar(family, endChar) {
    return new Promise((resolve, reject) => {
      const filteredFamily = family.filter(person => person.name.endsWith(endChar));
  
      if (filteredFamily.length > 0) {
        resolve(filteredFamily);
      } else {
        reject("NO RECORDS FOUND");
      }
    });
  }
  
  findSpecificEndChar(family, 'nny')
    .then(filteredRecords => {
      console.log(filteredRecords);
    })
    .catch(error => {
      console.error(error);
    });


/*Q4. Write a promise function which will display all the records with only name.
function Name ---> findAllNames(family)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use map.*/

function findAllNames(family) {
    return new Promise((resolve, reject) => {
      const names = family.map(person => person.name);
  
      if (names.length > 0) {
        resolve(names);
      } else {
        reject("NO RECORDS FOUND");
      }
    });
  }
  
  findAllNames(family)
    .then(names => {
      console.log(names);
    })
    .catch(error => {
      console.error(error);
    });  


/*Q5. Write a promise function which will display all the records in sorting according to names.
function Name ---> Sorting(family,'ASC')
ASC -> ASCENDING/ DESC -> DESCENDING
If there are no records in array reject with message "NO RECORDS"
If there are records in Array then according to sorting order display result and return in resolve of promises.
HINT : sort on objects.*/

function Sorting(family, order) {
    return new Promise((resolve, reject) => {
      if (family.length === 0) {
        reject("NO RECORDS");
      } else {
        // Sort the family array based on names
        if (order === 'ASC') {
          family.sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === 'DESC') {
          family.sort((a, b) => b.name.localeCompare(a.name));
        } else {
          reject("Invalid sorting order. Use 'ASC' or 'DESC'.");
          return;
        }
        resolve(family);
      }
    });
  }
  
  Sorting(family, 'ASC')
    .then(sortedFamily => {
      console.log(sortedFamily);
    })
    .catch(error => {
      console.error(error);
    });


    function Sorting(family, order) {
        return new Promise((resolve, reject) => {
          if (family.length === 0) {
            reject("NO RECORDS");
          } else {
            // Sort the family array based on names
            if (order === 'ASC') {
              family.sort((a, b) => a.name.localeCompare(b.name));
            } else if (order === 'DESC') {
              family.sort((a, b) => b.name.localeCompare(a.name));
            } else {
              reject("Invalid sorting order. Use 'ASC' or 'DESC'.");
              return;
            }
            resolve(family);
          }
        });
      }
      
      Sorting(family, 'DESC')
        .then(sortedFamily => {
          console.log(sortedFamily);
        })
        .catch(error => {
          console.error(error);
        });