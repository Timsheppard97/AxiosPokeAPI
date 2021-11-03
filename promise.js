// const prom = new Promise((resolve, reject)=> { //promise functions are asynchronous 
//     if (true) {
//         resolve("Congrats")
//     } else {
//         reject("Boo")
//     }
// })
// console.log('before')
// //can run without a .catch() function but NEEDS to have a .then() function
// //utilization must be done inside the .then and .catch
// prom
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// console.log('after')

//Restful api - Representational State Transfer
/*
/models - index(displays a list of everything)
/models/:id - displays an individual model
/models/new - create a new model
create/post - /models = create
put/batch - /models/id = update
destroy - /models/id = delete
*/