const getResource = async (url) => {
    const res = await fetch(url) //ждём пока результат промиса не будет доступен
    const body = await res.json() //ждём пока результат промиса не будет доступен
    return body;
};

getResource('https://swapi.dev/api/people/1/')
    .then((body) => {
        console.log(body)
    });


// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         return res.json() //тут тело ответа может быть ещё не получено
//     })
//     .then((body) => {
//         console.log(body);
//     });