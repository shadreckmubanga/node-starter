    // If statement 
// const amount = 9
// if(amount < 10){
//     console.log("Small amount")
// } else {
//     console.log("Big amount")
// }



      // Globals
// console.log("Welcome to node.js") 
// console.log(__dirname)

// setInterval ( () => {
//     console.log('Typing')
// }, 8000)

// const name = require('./names')
// console.log(name)


        // Built in modules...OS
// const os = require('os')
// const user = os.machine()
// console.log(user);


// console.log("The systems uptime is " +os.uptime(), "seconds")

// const currentos = {
//     name: os.type(),
//     release: os.release(),
//     totalem: os.totalmem(),
// }

// console.log(currentos)




      //path modules

// const path = require = ('path')

// console.log(path.valueOf)

// const filepath = path.valueOf('/content/', 'subfolder', 'test.txt')
// console.log(filepath)

     // synchronous methods for reading and writing files
// const {readFileSync, writeFileSync} = require('fs')
// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt' , 'utf8');
// console.log(first, second);

//writeFileSync('./content/result.txt', "Here is my result");


      //asynchrnous methods for reading and writing files.
// const {readFile, writeFile} = require('fs')
// readFile('./content/first.txt','utf8', (err, result) => {
//       if(err) {
//             console.log(err)
//             return
//       }
//       console.log(result)
// })


      // http modules 
//These are used to  create servers 
//const http = require('http');
// creating a server
// const server = http.createServer((req,res) => {
//       if(req.url === '/'){
//             res.end('WELCOME TO MY FIRST WEBSITE, MANSA GENERAL')
            
//       }
//       res.end(`
//       <h2>Opps<h2/>
//       <h2>Page you are looking for is not found<h2/>
//       `)
// })
//Set port where server will listen from
//server.listen(5000)



      //using an external module or package 
const _ = require('lodash')

const items = [1, [2, [3, [4, ]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);








      












