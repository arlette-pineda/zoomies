//DO NOT COMMIT KEY!!//

var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({ apiKey: "pfcNCEzO5yp3wukRwCGUw7M8PtRzs9Nn2q8NVwTc8jFdvWfpDk", secret: "8zklPdH0UsMGdMuhkvDMiGL0vJzvuoP7EyCsKA26" });
const Dog = require("./dog.js");
const Address = require("./address");
const Photos = require("./photos");

class PetfinderService {
  constructor() {}
  async getAnimals(breed, age, size, page, limit){
    let animalsResult = await client.animal.search({ type: 'dog', breed: breed, age: age, size: size, page: page, limit: limit });
    return animalsResult.data.animals.map(animal => new Dog(animal.id, animal.name, animal.breeds, animal.age, animal.size,
      animal.description, new Address(animal.contact.address.city, animal.contact.address.state), animal.gender, animal.coat,
      animal.colors, animal.tags, new Photos(animal.photos[0].small, animal.photos[0].medium, animal.photos[0].large, animal.photos[0].full)));
  }

  async getAnimal(id){
    let animalResult = await client.animal.show(id);
    let animalData = animalResult.data.animal;
    return new Dog(animalData.id, animalData.name, animalData.breeds, animalData.age, animalData.size,
      animalData.description, new Address(animalData.contact.address.city, animalData.contact.address.state), animalData.gender, animalData.coat,
      animalData.colors, animalData.tags, new Photos(animalData.photos[0].small, animalData.photos[0].medium, animalData.photos[0].large, animalData.photos[0].full));
  }

  async getBreed(breed){
    let breedResult = await client.animalData.breeds(breed);
    let breedData = breedResult.data.breeds;
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
