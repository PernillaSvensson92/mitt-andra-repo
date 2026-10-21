// Array

const trees = ["Björk", "Ek", "Lönn"];

console.log(trees)

//Obect

const house =
{ rooms: 5,
  area: 145,
  color: "blue"
}

console.log(house)

//Object in Array

const food = [
  {id:1, food:"Pasta", aside:"Sallad"},
  {id:2, food:"Meat", aside:"potatoe"}
]

console.log(food[1])

console.log(food.find(foods => foods.id ===1).aside)