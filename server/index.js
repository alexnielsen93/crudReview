//create-react-app
//in package.json added "main", "proxy", "nodemonConfig"


const express = require('express');

const AnimalCtrl = require('./controllers/Animal')

const app = express();
const port = 4321;





app.use(express.json())


app.get('/api/animals', AnimalCtrl.get)
app.post('/api/animals', AnimalCtrl.create)
app.put('/api/animals/:id', AnimalCtrl.update)

app.listen(port, ()=>{
  console.log(`listening at port ${port}`)
})