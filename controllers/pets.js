const express = require('express')
// router will act like app has for us
const router = express.Router()
// bring in db
const db = require('../models')
const toy = require('../models/toy')

//control our routes

// this path is really localhost:8000/users/
router.get('/', (req, res)=> {
  // get all users
  db.pet.findAll()
  .then( allPets=> {
    res.render('allPets', { allPets })
  })

})

// this will be a user show page
router.get('/:id', (req, res)=> {
  // this will be a show page for a user
  db.pets.findOne({ 
    where: {
      id: req.params.id
    },
    include: [db.toy]
  })
  .then( toy=> {
    // we will get back a pets property
    console.log(pets.toy)
    // we will show all the animals
    res.render('petsShow', { pets })
  })
  // we will a have a form to make a new animal
})

router.post('/:id/addPet', (req, res)=> {
  db.user.findOne({ where: { id: req.params.id }})
  .then(user=> {
    //sequelize method
    user.createPet({
      name: req.body.name,
      species: req.body.species
    })
    .then((pet)=> {
      console.log(pet)
      res.redirect(`/users/${req.params.id}`)
    })
  })
})

// export the router to have access to it
module.exports = router