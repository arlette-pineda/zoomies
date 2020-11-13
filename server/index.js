const express = require('express');
const app = express();
const petfinderService = require('./petfinder-service');
const port = 3000;
const pfService = new petfinderService();

app.get('/dogs/:dogId', async (req, res) => {
  try {
    let animalResult = await pfService.getAnimal(req.params.dogId);
    return res.json(animalResult);
  } catch (error) {
    console.log(error)
  }
});

app.get('/dogBreeds', async (req, res) => {
  try {
    let dogBreeds = await pfService.getBreed();
    return res.json(dogBreeds);
  } catch (error) {
    console.log(error)
  }
});

app.get('/search', async (req, res) => {
  try {
    let breed = req.query.breed;
    let age = req.query.age;
    let size = req.query.size;
    let page = req.query.page;
    let limit = 20;
    let animalSearchResult = await pfService.getAnimals(breed, age, size, page, limit);
    return res.json(animalSearchResult);
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
