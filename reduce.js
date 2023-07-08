const USER = [
    {
        firstName: 'Tú',
        lastName: 'Ngọc',
        age: 21,
    },
    {
        firstName: 'One',
        lastName: 'Piece',
        age: 29,
    },
    {
        firstName: 'Ngọc',
        lastName: 'Saki',
        age: 38,
    },
]

const OUTPUT = USER.reduce((acc, curr) => {
    if (curr.age > 25) acc.push(curr.firstName)
    return acc
}, [])

console.log(OUTPUT)