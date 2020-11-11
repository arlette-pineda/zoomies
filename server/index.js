const express = require('express');
const app = express();
const petfinderService = require('./petfinder-service');
const port = 3000;

app.get('/animals/:animalId', async (req, res) => {
  try {
    let pfService = new petfinderService();
    let animalResult = await pfService.getAnimal(req.params.animalId);
    return res.json(animalResult);
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
