// var myObject = {
//   name: 'Bradford',
//   games: ['Zelda', 'Horizon Zero Dawn', 'Pokemon'],
//   innerObject: {
//     data: 'all the data!',
//     secondInnerObject: {
//       secret: 'Bradford is a beautiful girl.'
//     }
//   }
// }
//
//
// console.log(myObject.name);
// console.log(myObject.games);
// console.log(myObject.innerObject.data);
// console.log(myObject.innerObject.secondInnerObject.secret);
//
// console.log(myObject['name']);
// console.log(myObject['innerObject']['data']);
//
// for (var i = 0; i < myObject.games.length; i++) {
//   console.log(myObject.games[i]);
// }




function zipArary(arrayOne, arrayTwo) {
  var combinedArray = [];

  for (var i = 0; i < arrayOne.length; i++) {
    combinedArray.push(arrayOne[i], arrayTwo[i]);
  }
  return combinedArray;
}

var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];

console.log(zipArary(firstArray, secondArray));
