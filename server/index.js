const express = require('express');
const app = express();
const petfinderService = require('./petfinder-service');
const port = 3000;
const pfService = new petfinderService();


app.get('/api/health-check', (req, res, next) => {
  db.query(`select 'successfully connected' as "message"`)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});


app.get('/dogs/:dogId', async (req, res, next) => {
  try {
    let animalResult = await pfService.getAnimal(req.params.dogId);
    return res.json(animalResult);
  } catch (error) {
    next(error);
  }
});

app.get('/dogBreeds', async (req, res, next) => {
  try {
    let dogBreeds = await pfService.getBreed();
    return res.json(dogBreeds);
  } catch (error) {
    next(error);
  }
});

app.get('/search', async (req, res, next) => {
  try {
    let breed = req.query.breed;
    let age = req.query.age;
    let size = req.query.size;
    let page = req.query.page;
    let limit = 20;
    let animalSearchResult = await pfService.getAnimals(breed, age, size, page, limit);
    return res.json(animalSearchResult);
  } catch (error) {
    next(error);
  }
});

app.get('/errorTest', (req, res) => {
  throw new Error('I broke');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'an unexpected error occurred'
  });
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
