var fs = require('fs')

var pets = fs.readFile('pets.json', 'utf8',(err,data)=>{
  var objectPets = JSON.parse(data)
  var lengthOfObject = Object.keys(objectPets).length
  var subcommand = process.argv[2]
  var index = process.argv[3]
  var pet = objectPets[index]

  if(err){
    console.error(err)

  }else if(subcommand===undefined){
    console.log('Usage: node pets.js [read | create | update | destroy]')

  }else if(subcommand==='read'&&index===undefined){
    console.log(objectPets)
  }
    else if(subcommand==='read'&&index>=0&&index<lengthOfObject){
      console.log(pet)
    }
    else if(subcommand==='read'&&index<0||index>=lengthOfObject){
      console.log('Usage: node pets.js read INDEX')
  }
})