/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, 
so you decided to take the opportunity to go for a short walk.

The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). 

You always walk only a single block for each letter (direction) and 
you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you 
will take you exactly ten minutes (you don't want to be early or late!) and will, 
of course, return you to your starting point. 
Return false otherwise.

Note: you will always receive a valid array containing a random 
assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).
*/


// Solution

function isValidWalk(walk) {
  let dx = 0
  let dy = 0
  let dt = walk.length
  
  for (i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}

// or

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}