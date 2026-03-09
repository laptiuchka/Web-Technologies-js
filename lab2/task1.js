function findExtremes(numbers) {
    if (numbers.length === 0) return "Array is empty";

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return {
        minElement: min,
        maxElement: max
    };
}


const statistics = [42, 17, 8, 94, 0, 23, 61, 5];


const extremes = findExtremes(statistics);
console.log(" Array Analysis ");
console.log("Numbers:", statistics);
console.log("Minimum value found:", extremes.minElement);
console.log("Maximum value found:", extremes.maxElement);



function comparePeopleByAge(person1, person2) {
    console.log(`\n Comparing ${person1.name} and ${person2.name} `);

    if (person1.age > person2.age) {
        return `${person1.name} (${person1.age}) is older than ${person2.name} (${person2.age}).`;
    } else if (person1.age < person2.age) {
        return `${person2.name} (${person2.age}) is older than ${person1.name} (${person1.age}).`;
    } else {
        return "Both individuals are of the same age.";
    }
}

const userA = {
    name: "Viktoria",
    age: 20,
    occupation: "Designer"
};

const userB = {
    name: "Max",
    age: 24,
    occupation: "Developer"
};

const ageComparison = comparePeopleByAge(userA, userB);
console.log(ageComparison);