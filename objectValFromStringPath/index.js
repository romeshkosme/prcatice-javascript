function get(str, obj) {
    if (!str || str.length === 0) return;

    const excludeCharacters = ["[", "]", "."];

    const keys = [];

    for (let index = 0; index < str.length; index++) {
        if (!excludeCharacters.includes(str[index])) {
            keys.push(str[index])
        }
    }
    const res = keys.reduce((acc, curr) => {
        return acc[curr];
    }, obj);
    
    return res;
}

const obj = {
    a: {
        b: {
            c: [1,2,3]
        }
    }
}

console.log(get("a.b.c", obj));
console.log(get("a.b.c.0", obj));
console.log(get("a.b.c[1]", obj));
console.log(get(["a", "b", "c", "2"], obj));
console.log(get("a.b.c", obj));
console.log(get("a.c", obj));
