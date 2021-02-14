// access to database
const db = require('./models')

// firstName: DataTypes.STRING,
// lastName: DataTypes.STRING,
// age: DataTypes.INTEGER,
// email: DataTypes.STRING

// lets make some users
// db.user.create({
//     firstName: 'Aron',
//     lastName: 'Hernandez',
//     age: 29,
//     email: 'code@vim.org'
// })
// .then(newUser=> {
//     // make a pet associated with this user
//     // createASSOCIATEDMODELNAME()
//     // because we made an association, we get access to
//     // newUser.createBook({ title: 'The Hobbit'})
//     newUser.createPet({
//         name: 'Samson',
//         species: 'Dog'
//     })
//     .then(newAnimal=> {
//         console.log(newAnimal)
//     })
// })
//---------
// db.user.findOne({ where: {id: 2}})
// .then(user=> {
//     // another built in method getTABLEPLURAL()
//     // this will get all pets associated with that user
//     user.getPets()
//     .then(allPets=> {
//         console.log(allPets[0].name)
//     })
// })
//--------------
// db.pet.create({
//     name: 'Samson',
//     species: 'Dog',
//     userId: 2 
// })

//First, get a reference to a pet.
// db.pet.findOrCreate({
//     where: {
//       name: "BooBooo The MurderHornet",
//       species: "friendly Non-stinging Hornet"
//     }
//   }).then(function([pet, created]) {
//     // Second, get a reference to a toy.
//     db.toy.findOrCreate({
//       where: {type: "human", color: "James"}
//     }).then(function([toy, created]) {
//       // Finally, use the "addModel" method to attach one model to another model.
//       pet.addToy(toy).then(function(relationInfo) {
//         console.log(toy.type, "added to", pet.name);
//       });
//     });
//   });

//   db.toy.findOne({
//     where: {type: "ball"}
//   }).then(function(toy) {
//     toy.getPets().then(function(pets) {
//       console.log(pets.length, 'pet(s) love the', toy.color, toy.type)
//     });
//   });
//   db.toy.findOrCreate({
//     where: {type: "ball", color: "blue"}
//   }).then(function([toy, created]) {
//     toy.getPets().then(function(pets) {
//       // Check if their are any pets associated with this toy
//       if (pets.length > 0) {
//         pets.forEach(function(pet) {
//           console.log(pet.name, 'loves their', toy.color, toy.type);
//         });
//       } else {
//         // findOrCreate a Pet and add it to the toy
//         db.pet.findOrCreate({
//           where: {
//             name: "Friday",
//             species: "Aussie Shepherd"
//           }
//         }).then(function([pet, created]) {
//           toy.addPet(pet).then(function(relationInfo){
//             console.log(pet.name, 'has faved the', toy.color, toy.type, 'toy')
//           })
//         });
//       } // end of if statement
//     });
//   });
//   db.pet.findOne({
//     where: {name: "Friday"}
//   }).then(function(pet) {
//     pet.getToys().then(function(toys) {
//       toys.forEach(function(toy) {
//         console.log(pet.name, 'loves their', toy.color, toy.type);
//       });
//     });
//   });

// db.pet.findOne({
//     where: {
//       name: "Silly May"
//     },
//     include: [db.user, db.toy]
//   }).then(function(pet) {
//     pet.toys.forEach(function(toy) {
//       console.log('Brian \'s pet', pet.name, 'loves their', toy.color, toy.type)
//     })
//   })
// db.user.findByPk(1, { include: [db.pet] })
// .then(function(user) {
//   user.pets.forEach(function(pet) {
//     pet.getToys().then(function(toys) {
//       toys.forEach(function(toy) {
//         console.log(user.firstName + '\'s pet', pet.name, 'loves their', toy.color, toy.type)
//       })
//     })
//   })
// })