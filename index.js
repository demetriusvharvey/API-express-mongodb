
require('./connection')
let app = require('./app')



app.get('/', (req, res) => {
    res.send({hello: 'World'})
})



app.listen(3000, () => {
  console.log("app listening on port 3000");
});