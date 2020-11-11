const express = require('express');
const app = express();
const petfinderService = require('./petfinder-service');
const port = 3000;

// app.get('/animals/:animalId', function (req, res) {
//   res.send('hello world')
// })

app.get('/animals/:animalId', async (req, res) => {
  try {
    let pet = petfinderService;
    let a = new pet();
    // console.log('req.params', req.params);
    let animalResult = await a.getAnimal(req.params.animalId);
    return res.json(animalResult);
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
