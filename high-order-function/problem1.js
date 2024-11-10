//Problem for HOF ( higher order functions )
//Write a program to create a higher order function .


var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
    ]
    
    
    /*Q1 Write a HOF function to display average of all students.
    Hint : average(grades)('grade')
    o/p :Average of All Students 10.2.*/
    
    
      const average = (grades) => (grade) => {
        const total = grades.reduce((sum, student) => sum + student[grade], 0);
        const avg = total / grades.length;
        return `Average of All Students ${avg}`;
      };
      console.log(average(grades)('grade'));
    
    
    /*Q2: Write a HOF function to display List of Boys.
    Hint : getGender(grades)('sex')('M')
    o/p:List of Boys :
    [ { name: 'John', grade: 8, sex: 'M' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Donald', grade: 5, sex: 'M' } ]*/
    
    
      const getGender = (names) => (sex) => (value) => {
        return names.filter((name) => name[sex] === value);
      };  
      const listBoys = getGender(grades)('sex')('M');  
      console.log('List of Boys:');
      console.log(listBoys);
    
    
    /*Q3: Write a HOF function to display Average grade of Boys
    Hint : average(getGender(grades)('sex')('M'))('grade')
    o/p:Average grade of Boys - 7.*/
    
    
    // Higher-order function to calculate the average of a property in an array
      const average1 = (arr) => (sex) => {
        const filteredGrades = arr.map((name) => name[sex]);
        if (filteredGrades.length === 0) return 0;
        const sum = filteredGrades.reduce((acc, grade) => acc + grade, 0);
        return sum / filteredGrades.length;
      };  
      const boys = getGender(grades)('sex')('M');
      const averageGradeOfBoys = average1(boys)('grade');  
      console.log(`Average grade of Boys - ${averageGradeOfBoys}`);
    
    
    /*Q4: Write a HOF function to display List of Girls.
    Hint : getGender(grades)('sex')('F')
    o/p:List of Girls :
    [ { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' } ]*/
    
    
      const getGender1 = (names) => (sex) => (value) => {
        return names.filter((name) => name[sex] === value);
      };  
      const listGirls = getGender1(grades)('sex')('F');  
      console.log('List of Girls:');
      console.log(listGirls);
    
    
    /*Q5: Write a HOF function to display Average grade of Girls
    o/p:Average grade of Girls - 13.4.*/
    
    
    // Higher-order function to calculate the average of a property in an array
      const average2 = (arr) => (sex) => {
        const filteredGrades = arr.map((name) => name[sex]);
        if (filteredGrades.length === 0) return 0;
        const sum = filteredGrades.reduce((acc, grade) => acc + grade, 0);
        return sum / filteredGrades.length;
      };  
      const girls = getGender1(grades)('sex')('F');
      const averageGradeOfGirls = average2(girls)('grade');  
      console.log(`Average grade of Girls - ${averageGradeOfGirls}`);
    
    
    /*Q6 : Write a HOf function which will check from an object weather gender is M or F it return either true or false.
    Hint : isGender(property)(genderType)(object)
    eg: isGender('sex')('M')(obj)
    obj = { name: 'John', grade: 8, sex: 'M' } // true.*/
    
    
    const isGender = (property) => (genderType) => (obj) => obj[property] === genderType;
    
    const isMale = isGender('sex')('M');
    const isFemale = isGender('sex')('F');
    
    console.log(isMale(grades[0])); // true (John is Male)
    console.log(isFemale(grades[1])); // true (Sarah is Female)
    console.log(isMale(grades[1])); // false (Sarah is not Male)
    console.log(isFemale(grades[0])); // false (John is not Female)
    
    
    /*Q7 : Write a HOf function which will check from an object weather name starts v l4rlowith 'J' or not. It will check from an object weather /
    Hint : isGender(property)(genderType)(object)
    eg: isGender('sex')('M')(obj)
    obj = { name: 'John', grade: 8, sex: 'M' } // true.*/
    
    
    const startsWithJ = (property) => (obj) => obj[property].startsWith('J');
    
    const startsWithJCheck = startsWithJ('name');
    
    grades.forEach((student) => {
        if (startsWithJCheck(student)) {
            console.log(`${student.name} starts with 'J'`);
        } else {
            console.log(`${student.name} does not start with 'J'`);
        }
    });
    
    
    /*Q8 : Write a HOF function to display List of all students starting with J "
    Hint : getSpecific(grades)('name')('J')
    o/p: List of all students starting with J:
    [ { name: 'John', grade: 8, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' } ]*/
    
    
    const getSpecific = (array) => (property) => (startsWith) =>
      array.filter((obj) => obj[property].startsWith(startsWith));
    
    const filterNamesStartingWithJ = getSpecific(grades)('name')('J');
    
    console.log('List of all students starting with J:');
    console.log(filterNamesStartingWithJ);