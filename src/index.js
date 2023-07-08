var jsonStringify = function(object) {
    if (object === null) return null+""
    if (typeof object === "string") return `"${object}"`
    if (typeof object !== "object" || object === null) return object+""
    let str = ""
    let count = 0;
    let objLen = Object.keys(object).length;
    if (Array.isArray(object)) {
        for (const item of object) {
            if (Array.isArray(item)) {
                str += `${jsonStringify(item)}`
            } else if (typeof item === "object" && item !== null) {
                str += `${jsonStringify(item)}`
            } else {
                str += `${typeof item === "string" ? `"${item}"` : item}`
            }
            if (count < objLen - 1) str = `${str},`
            count++;
        }
        str = `[${str}]`;
        return str
    }
    for (const key in object) {
        if (Array.isArray(object[key])) {
            str += `${typeof key === "string" ? `"${key}"` : key}:${jsonStringify(object[key])}`
        } else if (typeof object[key] === "object" && object[key] !== null) {
            str += `${typeof key === "string" ? `"${key}"` : key}:${jsonStringify(object[key])}`
        } else {
            str += `${typeof key === "string" ? `"${key}"` : key}:${typeof object[key] === "string" ? `"${object[key]}"` : object[key]}`
        }
        if (count < objLen - 1) str = `${str},`
        count++;
    }
    str = `{${str}}`
    return str;
};
// const a = {"y":1,"x":2};
// const a = {"a":"str","b":-12,"c":true,"d":null};
// const a = {"key":{"a":1,"b":[{},null,"Hello"]}}
// const a = {"b":[{},null,"Hello"]}
// const a = "true"
const a = {}
console.log(jsonStringify(a), JSON.stringify(a))
console.log(jsonStringify(a) === JSON.stringify(a))