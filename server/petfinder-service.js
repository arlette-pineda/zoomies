require('dotenv/config');
var petfinder = require('@petfinder/petfinder-js');
var config = { apiKey: process.env.PF_API_KEY, secret: process.env.PF_SECRET };
var client = new petfinder.Client(config);
const Dog = require('./dog.js');
const Address = require('./address');
const Photos = require('./photos');
const Paging = require('./paging');
const SearchResult = require('./search-result');

class PetfinderService {
  constructor() {
    for (var key in client.http.interceptors.response) {
      console.log('response key', client.http.interceptors.response[key]);
      // delete client.http.interceptors[key];
    }
    client.http.interceptors.response.forEach(function (interceptor) {
      console.log('interceptor here', interceptor);
    });
    client.http.interceptors.response.eject(0);
    console.log('all interceptor manager here', client.http.interceptors);
    // client.http.interceptors.forEach(function testTwo(interceptor) {
    //   console.log('interceptor here', interceptor);
    // });
    client.http.interceptors.response.use(undefined, function test(err) {
      if (err.response.status === 401) {
        config.token = '';
        console.log('the error', err);
        delete client.http.defaults.headers.common.Authorization;
        console.log('check auth', client.http.defaults.headers.common.Authorization);
        // return client.http.request(err.config);
        console.log('err config', err.config);
      }
      return Promise.reject(err);
    });
  }

  async getAnimals(breed, age, size, page, limit) {
    const animalsResult = await client.animal.search({ type: 'dog', breed: breed, age: age, size: size, page: page, limit: limit });
    const paging = new Paging(animalsResult.data.pagination.total_pages, animalsResult.data.pagination.total_count);
    const animals = animalsResult.data.animals.map(animal => {
      let photos = {};
      if (animal.photos.length !== 0) {
        photos = new Photos(animal.photos[0].small, animal.photos[0].medium, animal.photos[0].large, animal.photos[0].full);
      }
      return new Dog(animal.id, animal.name, animal.breeds, animal.age, animal.size,
        animal.description, new Address(animal.contact.address.city, animal.contact.address.state), animal.gender, animal.coat,
        animal.colors, animal.tags, photos);
    }
    );
    return new SearchResult(paging, animals);
  }

  async getAnimal(id) {
    const animalResult = await client.animal.show(id);
    const animalData = animalResult.data.animal;
    return new Dog(animalData.id, animalData.name, animalData.breeds, animalData.age, animalData.size,
      animalData.description, new Address(animalData.contact.address.city, animalData.contact.address.state), animalData.gender, animalData.coat,
      animalData.colors, animalData.tags, new Photos(animalData.photos[0].small, animalData.photos[0].medium, animalData.photos[0].large, animalData.photos[0].full));
  }

  async getBreed() {
    console.log('the token', config.token);
    const breedResult = await client.animalData.breeds('dog');
    console.log('second token', config.token);
    const breedData = breedResult.data.breeds;
    client.http.defaults.headers.common.Authorization = 'giberrish string';
    // console.log('check auth gone', client.http.defaults.headers.common);
    // config.token = '';
    return breedData.map(breed => breed.name);
  }

}

module.exports = PetfinderService;

// (async function () {
//   try {
//   let calledResult = await getAnimals('pug', 'baby', 'small', 2, 10);
//   console.log('calledResult', calledResult);
//   } catch (e) {
//     console.log(e);
//   }
// })
// ();

// (async function () {
//   try {
//     let calledAnimalResult = await getAnimal(49476683);
//     console.log('calledAnimalResult', calledAnimalResult);
//   } catch (e){
//     console.log(e);
//   }
// })
// ();

// (async function () {
//   try {
//     let calledBreed = await getBreed('dog');
//     console.log('calledBreed', calledBreed);
//   } catch (e){
//     console.log(e);
//   }
// })
// ();
