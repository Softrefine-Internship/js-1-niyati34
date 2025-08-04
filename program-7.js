// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]
function removeDuplicates(array) {
  const unique = [];

  for (let i = 0; i < array.length; i++) {
    let duplicate = false;

    for (let j = 0; j < unique.length; j++) {
      if (
        array[i].title === unique[j].title &&
        array[i].author === unique[j].author
      ) {
        duplicate = true;
        break;
      }
    }

    if (!duplicate) {
      unique.push(array[i]);
    }
  }

  return unique;
}

let array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

console.log(removeDuplicates(array));
