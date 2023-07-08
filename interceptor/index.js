const ORIGINAL_FETCH = window.fetch;

window.fetch = async (...args) => {
    const UPDATED_REQUEST = updateRequest(args);
    
    const RESPONSE = await ORIGINAL_FETCH(...UPDATED_REQUEST);

    const UPDATED_RESPONSE = updateResponse(RESPONSE);

    return UPDATED_RESPONSE
}

function updateRequest(args) {

    args.push({
        method: "GET",
        headers: {
            "test": "test"
        }
    })

    return args;
}

function updateResponse(args) {
    console.log("response interceptor", args);

    return args.json();
}

fetch('https://dummyjson.com/products')
.then(console.log);