let fetch = require("node-fetch")
let fs = require("fs").promises
let url = 'https://www.balldontlie.io/api/v1/players?query=1'


fetch(url)
.then(response => response.json())
.then(data => fs.writeFile("./data.json", JSON.stringify(data)))
.then(()=> console.log("Done"))
.catch(error=> console.error(error))

