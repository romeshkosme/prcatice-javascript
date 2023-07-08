const num = 1;

try {
    throw "Yolo"
} catch (error) {
    console.log("e---------------")
    if (error === "Golo") {
        console.log("-Golo")
    } else {
        console.log("else throw")
        throw error
    }
}