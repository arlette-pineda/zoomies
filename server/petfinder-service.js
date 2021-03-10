require('dotenv/config');
var petfinder = require('@petfinder/petfinder-js');
var config = { apiKey: process.env.PF_API_KEY, secret: process.env.PF_SECRET };
var client = new petfinder.Client(config);
const Dog = require('./dog.js');
const Address = require('./address');
const Photos = require('./photos');
const Paging = require('./paging');
const SearchResult = require('./search-result');
// const logger = require('./logger.js');
let retryCount = 0;

class PetfinderService {
  constructor() {
    client.http.interceptors.response.eject(0);
    client.http.interceptors.response.use(undefined, function tokenInterceptor(err) {
      if (err.response.status === 401) {
        retryCount += 1;
        if (retryCount >= 3) {
          return Promise.reject(err);
        }
        config.token = '';
        if (client.http.defaults.headers.common.Authorization) {
          delete client.http.defaults.headers.common.Authorization;
        }
        return client.authenticate()
          .then(resp => {
            retryCount = 0;
            config.token = resp.data.access_token;
            err.config.headers.Authorization = `Bearer ${config.token}`;
            return client.http.request(err.config);
          });
      }
      return Promise.reject(err);
    });
  }

  extractPhotos(animal) {
    // let photos = {};
    // if (animal.photos.length !== 0) {
    //   photos = new Photos(animal.photos[0].small, animal.photos[0].medium, animal.photos[0].large, animal.photos[0].full);
    // }
    // return photos;
    return animal.photos.map(photo => new Photos(photo.small, photo.medium, photo.large, photo.full));
  }

  async getAnimals(breed, age, size, page, limit) {
    // logger.debug(`This is the request breed:${breed}, age:${age}, size:${size}`);
    const animalsResult = await client.animal.search({ type: 'dog', breed: breed, age: age, size: size, page: page, limit: limit });
    // logger.debug(animalsResult);
    const paging = new Paging(animalsResult.data.pagination.total_pages, animalsResult.data.pagination.total_count);
    const animals = animalsResult.data.animals.map(animal => {
      const photosData = this.extractPhotos(animal);
      return new Dog(animal.id, animal.name, animal.breeds, animal.age, animal.size,
        animal.description, new Address(animal.contact.address.city, animal.contact.address.state), animal.gender, animal.coat,
        animal.colors, animal.tags, photosData, animal.url);
    }
    );
    return new SearchResult(paging, animals);
  }

  async getAnimal(id) {
    const animalResult = await client.animal.show(id);
    const animalData = animalResult.data.animal;
    const photosData = this.extractPhotos(animalData);
    return new Dog(animalData.id, animalData.name, animalData.breeds, animalData.age, animalData.size,
      animalData.description, new Address(animalData.contact.address.city, animalData.contact.address.state), animalData.gender, animalData.coat,
      animalData.colors, animalData.tags, photosData, animalData.url
      // new Photos(animalData.photos[0].small, animalData.photos[0].medium, animalData.photos[0].large, animalData.photos[0].full)
    );
  }

  async getBreed() {
    const breedResult = await client.animalData.breeds('dog');
    // logger.debug(breedResult);
    const breedData = breedResult.data.breeds;
    return breedData.map(breed => breed.name);
  }
}

module.exports = PetfinderService;
