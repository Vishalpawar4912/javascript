//CARD SCOPE
const users = [
    {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages:34
    },
    {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages:23
    }
    ];

/*Q1. Write a promise function to add a new record at the end of array users using spread operator,
functions : addLast(users,temp).*/

function addLast(users, temp1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const updatedUsers = [...users, temp1];
          resolve(updatedUsers);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
  }
  
  const temp1 = {
    id: 4,
    name: "rupali suroshe",
    username: "rupalis",
    email: "newuser@example.com",
    phone: "1-234-567-8900",
    website: "example.com",
    password: "new_hashed_password",
    age: 30
  };
  
  addLast(users, temp1)
    .then(updatedUsers => {
      console.log("Updated Users:", updatedUsers);
    })
    .catch(error => {
      console.error("Error:", error);
    });


/*Q2. Write a promise function to add a new record at the begining of array users using spread operator,
functions : addFirst(users,temp).*/

function addFirst(users, temp) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const updatedUsers = [temp, ...users];
          resolve(updatedUsers);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
}
  
  const temp = {
    id: 1,
    name: "Vishal Pawar",
    username: "vishalP00",
    email: "newuser@example.com",
    phone: "1-234-567-8900",
    website: "example.com",
    password: "new_hashed_password",
    age: 30
  };
  
  addFirst(users, temp)
    .then(updatedUsers => {
      console.log("Updated Users:", updatedUsers);
    })
    .catch(error => {
      console.error("Error:", error);
    }
 );


/*Q3. Write a promise function to display all records only 3 fields id,name,username.
functions : display(users)
HINT : map.*/

function display(users) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const displayedUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username
          }));
          resolve(displayedUsers);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
  }
  
  display(users)
    .then(displayedUsers => {
      console.log("Displayed Users:", displayedUsers);
    })
    .catch(error => {
      console.error("Error:", error);
    });


/*Q4. Write a promise function which will display all records with name ==='Dean John'
function Name ---> findNameEquals(users)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array
HINT : Use filter.*/

const findNameEquals = (users) => {
  return new Promise((resolve, reject) => {
    const filteredUsers = users.filter(user => user.name === 'Dean John');

    if (filteredUsers.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(filteredUsers);
    }
  });
};

findNameEquals(users)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });


/*Q5. Write a promise function which will display all the records starting with name 'J' or any character passed as parameter.
function Name ---> findSpecificStartChar(data,'J')
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use filter and string functions.*/

const findSpecificStartChar = (data, startChar) => {
  return new Promise((resolve, reject) => {
    const filteredData = data.filter(user => user.name.startsWith(startChar));

    if (filteredData.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(filteredData);
    }
  });
};

findSpecificStartChar(users, 'J')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });


/*Q6. Write a promise function which will display sum of all ages.
function Name ---> findSumAges(users)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use reduce functions.*/

const findSumAges = (users) => {
  return new Promise((resolve, reject) => {
    const sumAges = users.reduce((accumulator, user) => accumulator + user.ages, 0);

    if (sumAges === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(sumAges);
    }
  });
};

findSumAges(users)
  .then((result) => {
    console.log("Sum of ages:", result);
  })
  .catch((error) => {
    console.error(error);
  });


/*Q7. Write a promise function which will display all the records with only name & ages.
function Name ---> findAll(users)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array.
HINT : Use map.*/

const findAll = (users) => {
  return new Promise((resolve, reject) => {
    const selectedData = users.map(user => ({
      name: user.name,
      ages: user.ages,
    }));

    if (selectedData.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(selectedData);
    }
  });
};

findAll(users)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });


/*Q8. Write a function to display sum of all ages of records having name starting with 'J'
Use nesting promises function which first call Q1 function its output will be given to Q3 and display total of ages.
function : findNameAges(users,'J')
HINT : nesting of promises.*/

const findNameAges = (users, startChar) => {
  return new Promise((resolve, reject) => {
    const filteredUsers = users.filter(user => user.name.startsWith(startChar));

    if (filteredUsers.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      // Calculate the sum of ages in the filteredUsers array
      const sumAges = filteredUsers.reduce((accumulator, user) => accumulator + user.ages, 0);
      resolve(sumAges);
    }
  });
};

findNameAges(users, 'J')
  .then((result) => {
    console.log("Sum of ages for records with names starting with 'J':", result);
  })
  .catch((error) => {
    console.error(error);
  });