one: for (let i = 0; i < 6; i++) {
    console.log(i)
    two: for (let j = 10; j < 60; j+=10) {
        console.log(j)
        if (j===20) break one;
    }
}