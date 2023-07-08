function name() {
    try {
        throw "romesh error";
        return "Romesh";
    } catch (error) {
        console.log(error)
    } finally {
        return "Romesh";
    }
}

console.log(name())