const persons = [
    {
      name: "Joe",
      animals: [
        { species: "dog", name: "Bolt", age: 23 },
        { species: "cat", name: "Billy", age: 24 },
      ],
    },
    {
      name: "Bob",
      animals: [
        { species: "dog", name: "Snoopy", age: 20 },
      ],
    },
    {
      name: "Slobby",
      animals: [
        { species: "cat", name: "Snoopy", age: 15 },
        { species: "turtle", name: "cappy", age: 15 },
        { species: "dog", name: "cappy", age: 10 },
      ],
    },
  ];
  
  //Q1. Display only person names.
  
  const personNames = persons.map(person => person.name);
  console.log("Person names:", personNames);
  
  
  
  //Q2. Display only person animals list.
  
  const animalsLists = persons.map(person => person.animals);
  console.log("Animals lists for each person:", animalsLists);
  
  
  
  //Q3. Display the total count of animals in person array.
  
  const totalAnimalCount = persons.reduce((total, person) => total + person.animals.length, 0);
  console.log("Total count of animals:", totalAnimalCount);
  
  
  
  //Q4. Display all names of owner who has species as dog.
  
  const dogOwners = persons
    .filter(person => person.animals.some(animal => animal.species === "dog"))
    .map(person => person.name);
  console.log("Names of owners who have dogs:", dogOwners);
  
  
  
  //Q5 Display all names of owner who has species as dog and turtle
  
  const DogTurtleOwners = persons.filter(person => person.animals.find(animal => animal.species === "dog" || animal.species === "turtle"));
  const dogTurtleOwnerNames = DogTurtleOwners.map(owner => owner.name);                         // Extract the names of the dog owners
  console.log("Names of the owners who have species as dogs and turtle:", dogTurtleOwnerNames);
  
  
  //Q6 Does all owner has dog as species Justify.
  
  const allOwnersHaveDogs = persons.every(person => person.species === "dog");
    
    /*if (allOwnersHaveDogs) {
      console.log("All owners have dogs as a species.");
    } else {
      console.log("Not all owners have dogs as a species.");
    }
    
    const dogOwners = persons
      .filter(person => person.species === "dog")
      .map(dogOwner => dogOwner.name);*/
    
    console.log("Names of dog owners:", dogOwners);
  
  
  //Q7 Does some owner has turtle please specify name of turtle.
  
  // Get the list of people who have turtles.
  const turtleOwners = persons.filter(person => person.animals.some(animal => animal.species === "turtle"));
  
  // If there are any turtle owners, print their names and the names of their turtles.
  if (turtleOwners.length > 0) {
    console.log("Some person has a turtle.");
    console.log("Names of turtle owners and their turtles:");
    turtleOwners.forEach(owner => {
      owner.animals.filter(animal => animal.species === "turtle").forEach(turtle => {
        console.log(`${owner.name} has a turtle named ${turtle.name}`);
      });
    });
  } else {
    // If there are no turtle owners, print that no one has a turtle.
    console.log("No one has a turtle.");
  }
  
  
  
  //Q8 Display name of Owner along with his total count of animals.
  
  persons.forEach((person) => {
    console.log(`${person.name} has ${person.animals.length} animals.`);
  });
  
  
  //Q9 Display list of all animals.
  
  // Flatten the array of animals using flatMap.
  const allAnimals = persons.flatMap((person) => person.animals);
    
  // Display the list of all animals.
  console.log("List of all animals:");
  allAnimals.forEach((animal) => {
    console.log(`Species: ${animal.species}, Name: ${animal.name}, Age: ${animal.age}`);
  });
  
  
  
  //Q10 Display list of only dogs
  
  // Use flatMap to flatten the array of animals and filter for only dogs.
  const dogList = persons.flatMap(({ animals }) =>
  animals.filter(({ species }) => species === "dog")
  );
  
  // Display the list of dogs.
  console.log("List of dogs:");
  dogList.forEach(({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
  });
  
  
  
  //Q11 Display the count of all dogs in Array persons.
  
  // Use reduce to count all dogs.
  const dogCount = persons.reduce((count, person) =>
    count + person.animals.filter((animal) => animal.species === "dog").length, 0);
  
  // Display the count of all dogs.
  console.log(`Count of all dogs: ${dogCount}`);
  
  
  
  //Q12 Display names of owner who has all species such as dog cat and turtle.
  
  const AllSpeciesOwners = persons.filter(person => person.animals.find(animal => animal.species === "dog" || animal.species === "cat" || animal.species === "turtle"));
  const AllSpeciesOwnersNames = AllSpeciesOwners.map(owner => owner.name);                         // Extract the names of the dog owners
  console.log("Names of the owners who have species as dogs ,cats and turtle:", AllSpeciesOwnersNames);
  
  
  
  //Q13 Display the record for species as dog and name as 'Snoopy'
  
  // Filter for records with species "dog" and name "Snoopy."
  const filteredRecords = persons.flatMap((person) =>
    person.animals.filter((animal) => animal.species === "dog" && animal.name === "Snoopy")
  );
  
  // Display the filtered records.
  console.log("Records for species 'dog' and name 'Snoopy':");
  filteredRecords.forEach((record) => {
    console.log(`Name: ${record.name}, Age: ${record.age}`);
  });
  
  
  
  //Q14 Sort all records based on name of owner in ascending and descending
  
  // Sort records based on owner's name in ascending order.
  const ascendingSortedRecords = persons.slice().sort((a, b) => a.name.localeCompare(b.name));
   // Display ascending sorted records.
  console.log("\nAscending Sorted Records by Owner's Name:");
  ascendingSortedRecords.forEach((person) => console.log(`Owner: ${person.name}`));
  
  // Sort records based on owner's name in descending order.
  const descendingSortedRecords = persons.slice().sort((a, b) => b.name.localeCompare(a.name));
  // Display descending sorted records.
  console.log("\nDescending Sorted Records by Owner's Name:");
  descendingSortedRecords.forEach((person) => console.log(`Owner: ${person.name}`));
  
  
  
  //Q15 Display list of all dogs whose name starts with 'S'
  
  // Get all dogs.
  const dogs = persons.flatMap((person) => person.animals.filter((animal) => animal.species === "dog"));
  // Filter the dogs to only include those with names starting with 'S'.
  const dogsWithNamesStartingWithS = dogs.filter((dog) => dog.name.startsWith('S'));
  // Display the names and ages of the dogs with names starting with 'S'.
  console.log("List of dogs with names starting with 'S':");
  dogsWithNamesStartingWithS.forEach((dog) => console.log(`Name: ${dog.name}, Age: ${dog.age}`));
  
  
  
  //Q16 Display list average ages of animal species.
  
    // Create an object to store the total age and count for each species.
    const speciesAges = {};
    // Iterate over each person and their animals to calculate the total age for each species.
    persons.forEach((person) => {
      person.animals.forEach((animal) => {
        if (!speciesAges[animal.species]) {
          speciesAges[animal.species] = { totalAge: 0, count: 0 };
        }
        speciesAges[animal.species].totalAge += animal.age;
        speciesAges[animal.species].count++;
      });
    });
    // Calculate and display the average age for each species.
    console.log("Average ages of animal species:");
    for (const species in speciesAges) {
      const averageAge = speciesAges[species].totalAge / speciesAges[species].count;
      console.log(`${species}: ${averageAge.toFixed(2)}`);
    }
  
  
  
  //Q17 Display average age of dogs.
  
  // Use flatMap to flatten the array of animals and filter for dogs.
  const dogAges = persons.flatMap((person) =>
  person.animals.filter((animal) => animal.species === "dog")
  );
  // Calculate the average age of dogs.
  const averageAgeOfDogs = dogAges.reduce((totalAge, dog) => totalAge + dog.age, 0) / dogAges.length;
  // Display the average age of dogs.
  console.log("Average age of dogs:", averageAgeOfDogs.toFixed(2));
  
  
  
  //Q18 Display sum of all ages of animals.
  
  // Use flatMap to flatten the array of animals and calculate the sum of their ages.
  const totalAgeOfAnimals = persons
  .flatMap((person) => person.animals)
  .reduce((sum, animal) => sum + animal.age, 0);
  // Display the sum of all ages of animals.
  console.log("Sum of all ages of animals:", totalAgeOfAnimals);
  
  
  
  //Q19 Display sum of all ages of animals whose species is turtle.
  
   // Use flatMap to first flatten the array of animals and filter for turtles.
   const turtleAges = persons
   .flatMap((person) => person.animals)
   .filter((animal) => animal.species === "turtle")
   .reduce((sum, turtle) => sum + turtle.age, 0);
  // Display the sum of all ages of turtles.
  console.log("Sum of all ages of turtles:", turtleAges);
  
  
  
  //Q20 Find list of animals and then sort on animal names.
  
  // Extract a list of animal names using flatMap.
  const animalNames = persons.flatMap((person) =>
  person.animals.map((animal) => animal.name)
  );
  // Sort the list of animal names in ascending order.
  animalNames.sort();
  // Display the sorted list of animal names.
  console.log("Sorted list of animal names:", animalNames);