//-----------------------------------------
// Write an ES2015 Version of this function
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
//-----------------------------------------

function createInstructor(firstName, lastName) {
    return {firstName, lastName};
}

//-----------------------------------------
// Write an ES2015 Version of this object construction statement
//
// var favoriteNumber = 42;
//
// var instructor = {
//     firstName: "Colt"
//   }
//  
//   instructor[favoriteNumber] = "That is my favorite!"
//-----------------------------------------

var favoriteNumber = 42;

const instructor = {
    firstName : "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//-----------------------------------------
// Write an ES2015 Version of this object construction statement
//
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   } 
//-----------------------------------------

const inst = {
    firstName: "Colt",
    sayHi () {return "Hi!"},
    sayBye () {return this.firstName + " says bye!"}
}

//-------------------------------------------------------------------------------
// Write a function which generates an animal object. The function should accepts 3 arguments:
//
//         species: the species of animal (‘cat’, ‘dog’)
//         verb: a string used to name a function (‘bark’, ‘bleet’)
//         noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
//
// Use one or more of the object enhancements we’ve covered.
//-------------------------------------------------------------------------------

function createAnimal (species, func, sound) {
    return {
        species,
        [func]() {return sound}
    }

}