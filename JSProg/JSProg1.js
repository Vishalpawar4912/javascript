//Q. Write a program to perform async and await on following data

const data = [
    {
    name: 'Butters',
    age: 3,
    type: 'dog'
    },
    {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
    },
    {
    name: 'Red',
    age: 1,
    type: 'cat'
    },
    {
    name: 'Joey',
    age: 3,
    type: 'dog'
    },
    ];
    
    
    /*Q1. Write a promise function to display all types having dog.
    funtion : findDogs(data)
    Hint : Filter*/
    
    
      function findDogs(data) {
        return new Promise((resolve) => {
          const dogTypes = data.filter((name) => name.type === 'dog');
          resolve(dogTypes);
        });
      }
      async function displayDogs() {
        try {
          const dogs = await findDogs(data);
          console.log('Types with dogs:', dogs);
        } catch (error) {
          console.error(error.message);
        }
      }
      displayDogs();
    
    
    /*Q2. Write a promise function to display all names starting with "B".
    function : findSpecific(data,'b');
    Hint : filter*/
    
    
    function findSpecific(data, letter) {
      return new Promise((resolve) => {
        const specificNames = data.filter((item) => item.name.toLowerCase().startsWith(letter.toLowerCase()));
        resolve(specificNames);
      });
    }
    async function displayNamesStartingWithB() {
      try {
        const specificNames = await findSpecific(data, 'b');
        console.log('Names starting with "B":', specificNames);
      } catch (error) {
        console.error(error.message);
      }
    }
    displayNamesStartingWithB();
    
    
    /*Q3. Write a promise function to display sum of all ages.
    function : findAges(data)
    Hint : reduce*/
    
    
    function findAges(data) {
      return new Promise((resolve) => {
        const sumOfAges = data.reduce((total, name) => total + name.age, 0);
        resolve(sumOfAges);
      });
    }
    async function displaySumOfAges() {
      try {
        const sumOfAges = await findAges(data);
        console.log('Sum of ages:', sumOfAges);
      } catch (error) {
        console.error(error.message);
      }
    }
    displaySumOfAges();
    
    
    /*Q4. Write a promise function total of ages of records whose type==='dog' and age>3.
    function : findTotal(data)*/
    
    
    function findTotal(data) {
      return new Promise((resolve) => {
        const totalAges = data
          .filter((name) => name.type === 'dog' && name.age > 3)
          .reduce((total, name) => total + name.age, 0);
        resolve(totalAges);
      });
    }
    async function displayTotalAges() {
      try {
        const totalAgesForDogs = await findTotal(data);
        console.log('Total ages for dogs with age > 3:', totalAgesForDogs);
      } catch (error) {
        console.error(error.message);
      }
    }
    displayTotalAges();
    
    
    /*Q5. Write async function to call all above function Q1 Q2 Q3 Q4.
    function : async function findAll() {}*/
    
    
      // Main async function to call all the above functions
        async function findAll() {
          try {
            const dogs = await findDogs(data);
            console.log('Types with dogs:', dogs);
    
            const specificNames = await findSpecific(data, 'b');
            console.log('Names starting with "B":', specificNames);
    
            const sumOfAges = await findAges(data);
            console.log('Sum of ages:', sumOfAges);
    
            const totalAgesForDogs = await findTotal(data);
            console.log('Total ages for dogs with age > 3:', totalAgesForDogs);
          } catch (error) {
            console.error(error.message);
          }
        }
        findAll();
    
    
    /*Q6. Write async function in which Q1 output will act as input Q3.
    function : async function*/
    
    
    // Async function that uses Q1 and Q3
    async function processAnimalData(data) {
      try {
        const dogTypes = await findDogs(data);
        console.log('Types with dogs:', dogTypes);
    
        const sumAges = await findAges(data);
        console.log('Sum of ages:', sumAges);
      } catch (error) {
        console.error(error);
      }
    }
    // Call the async function
    processAnimalData(data);
    
    
    //Q7. Using nesting of promises peform Q1 output will act as input Q3 function.
    
    
    // Nesting promises: Q1's output as input for Q3.
    findDogs(data)
      .then(dogTypes => {
        console.log('Types with "dog":', dogTypes);
        return findAges(data); // Chain Q3 promise
      })
      .then(sumOfAges => {
        console.log('Sum of ages:', sumOfAges);
      })
      .catch(error => {
        console.error(error);
      });
    
    
    //Q8. Using Promise.all give a call to Q1 Q2 Q3 functions.
    
    
    // Use Promise.all to call Q1, Q2, and Q3 functions.
    Promise.all([
      findDogs(data),
      findSpecific(data, 'b'),
      findAges(data)
    ])
      .then(results => {
        const [dogTypes, specificNames, sumOfAges] = results;
        console.log('Types with "dog":', dogTypes);
        console.log('Names starting with "B":', specificNames);
        console.log('Sum of ages:', sumOfAges);
      })
      .catch(error => {
        console.error(error);
      });
    
    
    //Q9. Using Promise.race give a call to Q1 Q2. functions.
    
    
    // Use Promise.race to call Q1 and Q2 functions.
    Promise.race([
      findDogs(data),
      findSpecific(data, 'b')
    ])
      .then(result => {
        console.log('The first completed promise:', result);
      })
      .catch(error => {
        console.error(error);
      });    
