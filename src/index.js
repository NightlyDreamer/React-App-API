// => fetch(URL)=> promis(resolve).then((res) => { return res.json } ).then( (body) => {console.log(body)})

const getResource = async(url) => {
    const resolve = await fetch(url);
    
    if(!resolve.ok){
        throw new Error(`Could not fetch ${url}, received ${resolve.status}`)
    }

    return await resolve.json();  
};

getResource('https://swapi.co/api/people/123123123/')
.then((body) => {
    console.log (body);
})
.catch((err) => {
    console.log(err)
})