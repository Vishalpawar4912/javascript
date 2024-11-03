const data = [
    {name: "Butters", age: 3,type: "dog" },
    {name: "Lizzy", age: 6, type: "dog"} ,
    {name: "Red", age: 1, type: "cat" },
    {name: "Joey",age: 3, type: "dog" }
];

/*Q1. Write a function which will display all records with type ==='dog'
function Name ---> findAllDogs(data)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array
HINT : Use filter.*/
function findAllDogs(data)
 {
    var filteredData = data.filter(dog=> dog.type === "dog");
  
    if (filteredData.length == 0) 
    {
        return "No Records Found";
    } 
    else 
    {
      return filteredData;
    }
  }
  console.log(findAllDogs(data));

  /*Q2. Write a function which will display all the records starting with name 'B' or any character passed as parameter.
  function Name ---> findSpecificStartChar(data,'B')
  If there are no records matching criteria then reject with message "NO RECORDS FOUND"
  If there are records matching criteria then resolve with the data in form of array.
  HINT : Use filter and string functions.*/
  function findSpecificStartChar(data) {
    const filtered_Data = data.filter(item => item.name.startsWith('L'));

  
    if (filtered_Data.length === 0) {
      return "No Records Found";
    } else {
      return filtered_Data;
    }
  }
  console.log(findSpecificStartChar(data));

 /* Q3. Write a function which will display sum of all ages.
  function Name ---> findSumAges(data)
  If there are no records matching criteria then reject with message "NO RECORDS FOUND"
  If there are records matching criteria then resolve with the data in form of array.
  HINT : Use reduce functions.*/

    function findSumAges(data) {
      const sum_ages= data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.age;
      }, 0);

      if(sum_ages===0){
        return 'No Records Found'
      }
      else{
        return sum_ages;
      }
    }
    console.log(findSumAges(data));

   /* Q4. Write a function which will display all the records with only name & ages.
   function Name ---> findAll(data)
   If there are no records matching criteria then reject with message "NO RECORDS FOUND"
   If there are records matching criteria then resolve with the data in form of array.
   HINT : Use map.*/

   function findAll(data) {
    const name_age= data.map(item => ({
      name: item.name,
      age: item.age
    }));
    if(name_age==0){
      return 'No Records Found'
    }
    else{
    return name_age;
    }
  }
  console.log(findAll(data));

  /*Q5. Write a function to display sum of all ages of records having type as dog.
  Use nesting function which first call Q1 function its output will be given to Q3 and display total of ages
  HINT : nesting of functions.*/

  function findAllDogs(data) {
    var filteredData = data.filter(dog => dog.type === "dog");
  
    if (filteredData.length === 0) {
      return "No Records Found";
    } else {
      return findSumAges(filteredData); // Nesting findSumAges inside findAllDogs
    }
  }
  
  function findSumAges(data) {
    const sum_ages = data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.age;
    }, 0);
  
    if (sum_ages === 0) {
      return 'No Records Found';
    } else {
      return sum_ages;
    }
  }
  
  console.log(findAllDogs(data));

  /*Q6. Write a function which will display all the records in sorting according to names.
  function Name ---> Sorting(data,'ASC')
  ASC -> ASCENDING/ DESC -> DESCENDING
  If there are no records in array reject with message "NO RECORDS"
  If there are records in Array then according to sorting order display result and return in resolve of promises.
  HINT : sort on objects.*/

  function Sorting(data, order) {
    if (data.length === 0) {
      return "NO RECORDS";
    }
  
    const sortedData = data.slice(); // Create a copy to avoid modifying the original array
  
    sortedData.sort((a, b) => {
      if (order === 'ASC') {
        return a.name.localeCompare(b.name);
      } else if (order === 'DESC') {
        return b.name.localeCompare(a.name);
      } else {
        return 0; // Return 0 for an invalid sorting order
      }
    });
  
    return sortedData;
  }
  const sortedData = Sorting(data, 'ASC');
  
    if (sortedData === "NO RECORDS") {
      console.log("NO RECORDS FOUND");
    } else {
      console.log(sortedData);
    }


  function Sorting(data, order) {
      if (data.length === 0) {
        return "NO RECORDS";
      }
    
      const sortedDataa = data.slice(); // Create a copy to avoid modifying the original array
    
      sortedDataa.sort((a, b) => {
        if (order === 'ASC') {
          return a.name.localeCompare(b.name);
        } else if (order === 'DESC') {
          return b.name.localeCompare(a.name);
        } else {
          return 0; // Return 0 for an invalid sorting order
        }
      });
    
      return sortedDataa;
    }
    const sortedDataa = Sorting(data, 'DESC');
    
      if (sortedDataa === "NO RECORDS") {
        console.log("NO RECORDS FOUND");
      } else {
        console.log(sortedDataa);
      }