/*eslint-disable*/

export default function handleRespondeFromAPI(promise){
    return promise
    .then(() => {
return { stauts:200, body :"success"};


    })
    .catch ((err) => {
        return new Error();
    })

    .finally (() => {
        console.log("Got a response from the API");
    });
}
