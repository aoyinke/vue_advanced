const food = [{ name: "apple", method: "煮了" }, { name: "banana", method: "吃了" }, { name: "watermenlon", method: "煮了" }, { name: "duck", method: "煮了" }]
const food1 = [{ name: "apple", method: "煮了" }, { name: "banana", method: "吃了" }, { name: "watermenlon", method: "煮了" }, { name: "duck", method: "煮了" }]

food.map((item) => {
    item.name = "顶顶顶顶顶"
})
food1.forEach((item) => {
    item.name = "dddddd"
})
console.log(food)
console.log(food1)