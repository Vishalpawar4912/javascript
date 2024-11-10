var data = [
    {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
    },
    {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
    },
    {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
    },
    {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
    },
    {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
    },
    ];

/*Q1. Write a promise function to display all name starting with 'E'.
funtion : findStartNames(data)
Hint : Filter*/
function findStartNames(data) {
    return new Promise((resolve, reject) => {
      const filteredNames = data.filter((person) => person.name.startsWith('E'));
      resolve(filteredNames.map((person) => person.name));
    });
}
findStartNames(data)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
/*Q2. Write a promise function to display all name ending with 'E'.
funtion : findEndNames(data)
Hint : Filter*/
function findEndNames(data) {
    return new Promise((resolve, reject) => {
      const filteredNames = data.filter((person) => person.name.endsWith('e'));
      resolve(filteredNames.map((person) => person.name));
    });
}
findEndNames(data)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
/*Q3. Write a promise function to display total sum of all records pilotingScore+shootingScore.
function : find(data)
Hint : reduce.*/
function find(data) {
    return new Promise((resolve, reject) => {
      const totalScore = data.reduce((accumulator, person) => {
        return accumulator + person.pilotingScore + person.shootingScore;
      }, 0);
  
      resolve(totalScore);
    });
  }
  find(data)
    .then((result) => {
      console.log("Total Score:", result);
    })
    .catch((error) => {
      console.error(error);
    });
/*Q4. Write a promise function to display total sum of all records pilotingScore+shootingScore whose isForceUser===true
function : findForce(data)
Hint : filter , reduce.*/
function findForce(data) {
    return new Promise((resolve, reject) => {
      const filteredData = data.filter((person) => person.isForceUser === true);
      const totalScore = filteredData.reduce((accumulator, person) => {
        return accumulator + person.pilotingScore + person.shootingScore;
      }, 0);
  
      resolve(totalScore);
    });
  }
  
  findForce(data)
    .then((result) => {
      console.log("Total Score for Force Users:", result);
    })
    .catch((error) => {
      console.error(error);
    });
/*Q5. Write a promise function to find all records whose isForceUser===true then multiply 6 to each pilotingScore and finally find sum of all all records pilotingScore+shootingScore
function : findForceTotal(data)
Hint : filter , map , reduce.*/
function findForceTotal(data) {
    return new Promise((resolve, reject) => {
      const filteredData = data.filter((person) => person.isForceUser);
      const multipliedScores = filteredData.map((person) => person.pilotingScore * 6);
      const totalScore = multipliedScores.reduce((accumulator, score) => accumulator + score, 0);
  
      resolve(totalScore);
    });
  }
  findForceTotal(data)
    .then((result) => {
      console.log("Total Score for Force Users (pilotingScore * 6):", result);
    })
    .catch((error) => {
      console.error(error);
    });
/*Q6. Write async function to call all above function Q1 Q2 Q3 Q4.
function : async function findAll() {}*/
async function findAll() {
    try {
      const startNames = await findStartNames(data);
      const endNames = await findEndNames(data);
      const totalScore = await find(data);
      const forceTotalScore = await findForce(data);
  
      console.log("Names starting with 'E':", startNames);
      console.log("Names ending with 'E':", endNames);
      console.log("Total sum of pilotingScore + shootingScore:", totalScore);
      console.log("Total sum of pilotingScore + shootingScore for Force Users:", forceTotalScore);
    } 
    catch (error) {
      console.error(error);
    }
}
findAll();
/*Q7. Write async function in which Q1 output will act as input Q3.
function : async function findAllTotal() {}*/
async function findAllTotal() {
    try {
      const startNames = await findStartNames(data);
      const totalScore = await find(data);
  
      console.log("Names starting with 'E':", startNames);
      console.log("Total sum of pilotingScore + shootingScore for names starting with 'E':", totalScore);
    } catch (error) {
      console.error(error);
    }
}
findAllTotal();
//Q8. Using nesting of promises peform Q1 output will act as input Q3 function.
  // Nesting promises:
  findStartNames(data)
    .then((startNames) => {
      return find(data)
        .then((totalScore) => {
          console.log("Names starting with 'E':", startNames);
          console.log("Total sum of pilotingScore + shootingScore:", totalScore);
        });
    })
    .catch((error) => {
      console.error(error);
    });
/*Q9.Display only name of person having isForce===true and shooting>10
Hint : filter and map.*/
const filteredNames = data
  .filter((person) => person.isForceUser && person.shootingScore > 10)
  .map((person) => person.name);

console.log("Names of people with isForceUser===true and shootingScore>10:", filteredNames);
//Q10. Using Promise.all give a call to Q1 Q2 Q3 functions.
Promise.all([
    findStartNames(data),
    findEndNames(data),
    find(data)
])
    .then((results) => {
      const [startNames, endNames, totalScore] = results;
      console.log("Names starting with 'E':", startNames);
      console.log("Names ending with 'E':", endNames);
      console.log("Total sum of pilotingScore + shootingScore:", totalScore);
    })
    .catch((error) => {
      console.error(error);
    });
//Q11. Using Promise.race give a call to Q1 Q2. functions.
Promise.race([
    findStartNames(data),
    findEndNames(data)
])
    .then((result) => {
      console.log("First result to resolve:", result);
    })
    .catch((error) => {
      console.error(error);
    });
//Q12. Write a promise function to perform sorting on shooting in ascending order.
function sortShootingScoreAsc(data) {
    return new Promise((resolve, reject) => {
      const sortedData = [...data].sort((a, b) => a.shootingScore - b.shootingScore);
      resolve(sortedData);
    });
  }
  sortShootingScoreAsc(data)
    .then((sortedData) => {
      console.log("Sorted data by shootingScore (ascending):", sortedData);
    })
    .catch((error) => {
      console.error(error);
    });
