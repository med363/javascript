const people = [
    {name:"amine", age:5},
    {name:"med",age:15}
]

const hasTeenager = people.some(
    (person) => person.age >=12
);

const hasChildren = people.some(
    (person) => person.age < 2
);

const isAmine = people.some(
    (person) => person.name === "amine"
)

console.log(hasTeenager);
console.log(hasChildren);
console.log(isAmine);