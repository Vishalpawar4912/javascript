const user =[
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
    
    /*Q1. Write a function to add a new record at the end of array users using spread operator,
    functions : addLast(users,temp) */
    
    function addLast(user, temp1) {
      // Use the spread operator to add the temp object to the end of the users array
      const updatedUsers = [...user, temp1];
      return updatedUsers;
    }
        const temp1 = {
      id: 4,
      name: "Shubham Medhane",
      username: "shubhM",
      email: "shubh@example.com",
      phone: "123-456-7890",
      website: "example.com",
      password: "new_hashed_password",
      ages: 25,
    };
        const updatedUser = addLast(user, temp1);
    console.log(updatedUser);


/*Q2. Write a function to add a new record at the begining of array users using spread operator,
functions : addFirst(users,temp)*/

function addFirst(user, temp2) {
  // Use the spread operator to add the temp object at the beginning of the users array
  const updatedUsers = [temp2, ...user];
  return updatedUsers;
}
const temp2 = {
  id: 1,
  name: "Vishal Pawar",
  username: "vishalP",
  email: "newuser@example.com",
  phone: "123-456-7890",
  website: "example.com",
  password: "new_hashed_password",
  ages: 25,
};
const updatedUsers = addFirst(user, temp2);
console.log(updatedUsers);
 
      
/*Q3. Write a function to display all records only 3 fields id,name,username.
functions : display(users)
HINT : map*/

function display(user) {
  // Use the map function to extract and display the desired fields
  const displayedRecords = user.map((user) => {
    const { id, name, username } = user;
    return { id, name, username };
  });
  // Log the displayed records to the console
  displayedRecords.forEach((record) => {
    console.log(`ID: ${record.id}, Name: ${record.name}, Username: ${record.username}`);
  });
}
display(user);

/*Q4. Write a function which will display all records with name ==='Dean'
function Name ---> findNameEquals(users)
HINT : Use filter.*/

function findNameEquals(users) {
  // Use the filter method to find records with name === 'Dean John'
  const records = users.filter(user => user.name === 'Dean John');
  // Display the filtered records
  records.forEach(record => {
    console.log(record);
  });
}
findNameEquals(user);


/*Q5. Write a function which will display all the records starting with name 'B' or any character passed as parameter.
function Name ---> findSpecificStartChar(users,'B')
HINT : Use filter and string functions.*/

function findSpecificStartChar(users, char) {
  // Use the filter method to find records with name starting with the specified character
  const filteredRecords = users.filter(user => user.name.startsWith(char));
  // Display the filtered records
  filteredRecords.forEach(record => {
    console.log(record);
  });
}
// Find and display records with names starting with 'D'
findSpecificStartChar(user, 'D');


/*Q6. Write a function which will display sum of all ages.
function Name ---> findSumAges(users) .
HINT : Use reduce functions.*/

function findSumAges(users) {
  // Use the reduce method to calculate the sum of ages
  const sumOfAges = users.reduce((total, user) => total + user.age, 0);
  // Display the sum of ages
  console.log(`The sum of all ages is: ${sumOfAges}`);
}
findSumAges(user);


/*Q7. Write a function which will display all the records with only name & ages.
function Name ---> findAll(users)
HINT : Use map.*/

function findAll(users) {
  // Use the map method to create a new array with name and age properties
  const nameAndAgeRecords = users.map(user => ({
    name: user.name,
    age: user.age,
  }));
    // Display the new array
  nameAndAgeRecords.forEach(record => {
    console.log(record);
  });
}
findAll(user);


/*Q8. Write a function to display sum of all ages of records having name starting with 'J'.*/

function sumAgesWithJNames(users) {
  // Use the reduce method to calculate the sum of ages for records with names starting with 'J'
  const sum = users
    .filter(user => user.name.startsWith('J'))
    .reduce((total, user) => total + user.age, 0);
    // Display the sum of ages
  console.log(`The sum of ages for records with names starting with 'J' is: ${sum}`);
}
sumAgesWithJNames(user);


/*Q9. Write a function which will display all the records in sorting according to names.
function Name ---> Sorting(data,'ASC')
ASC -> ASCENDING/ DESC -> DESCENDING*/

function Sorting(users, order) {
  // Sort the data based on the 'name' property
  if (order === 'ASC') {
    users.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === 'DESC') {
    users.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    console.error("Invalid sorting order. Use 'ASC' for ascending or 'DESC' for descending.");
    return;
  }
    // Display the sorted data
  users.forEach(record => {
  console.log(record);
  });
}
// Sort data in ascending order by name
Sorting(user, 'ASC');
//  Sort data in descending order by name
Sorting(user, 'DESC');


/*Q10 Delete an object with specific array index.
HINT : splice
function : deleteRecord(users,1) // 1 means delete object with index 1 in array.*/

  function deleteRecord(users, index) {
    // Check if the index is within valid bounds
    if (index >= 0 && index < users.length) {
      users.splice(index, 1); // Delete the object at the specified index
    } else {
      console.error("Invalid index. Index should be within the array bounds.");
    }
  }
 // Delete the object at index 1
  deleteRecord(user, 0);
  // Display the updated array
  console.log(user);


/*Q11. Insert an object at specific array index.
HINT : splice
function : InsertRecord(users,temp,1) // 1 means inset object at index 1 in array.*/

function InsertRecord(users, temp3, index) {
  // Check if the index is within valid bounds
  if (index >= 0 && index <= users.length) {
    users.splice(index, 0, temp3); // Insert the object at the specified index
  } else {
    console.error("Invalid index. Index should be within the array bounds.");
  }
}
const temp3 = {
  id: 0,
  name: "Tej Pawar",
  username: "tejP",
  email: "tejp@google.com",
  phone: "1-123-543-1857 123212",
  website: "tp.net",
  password: "TP_hashed_password",
  age: 23
};
  // Insert the 'temp' object at index 0
InsertRecord(user, temp3, 0);
  // Display the updated array
console.log(user);