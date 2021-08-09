//Piotrs Version
//Merge function takes multiple arrays and binds them into one orderly array

function merge(one, two) {
  let three = []; //Set empty array for organization
  let a = 0; //Set an i pointer for (one)
  let b = 0; //Set a j pointer for (two)

  while (a < one.length && b < two.length) {
    if (one[a] < two[b]) {
      three.push(one[a++]);
    } else {
      three.push(two[b++]);
    }
  }

  //Concatenate any remaining elements
  three.push(...one.slice(a), ...two.slice(b));

  return three;
}

console.log(`Merged: ${merge([1, 3, 5, 7, 9], [2, 4, 6, 8])}`);

//MERGE/SORT Brakes one array into

//smaller arrays all the way to one element
//and then resorts them to one ordered array
//Once a base case is reached

function mergeSort(array) {
  //Create mergeSort function passing array as parameter
  const half = array.length / 2; //creates variable half which takes parameter and divides it by 2
  //in this case that means it goes to middle of the array

  //BASE CASE or terminating case
  if (array.length < 2) {
    //if the array length is less than half
    return array; //return the array
  }

  const cut = array.splice(0, half); //create variable called cut which splices the array, start at 0 index
  //and performs the 'half' variable on it.  So basically its taking the 1st half of the array.
  return merge(mergeSort(cut), mergeSort(array)); //returning the merge function invoked with these two values:
  //mergeSort function passing 'cut' as parameter for first parameter, and
  //mergeSort function passing 'array' as parameter for the second parameter
  //creates the sub-arrays, merges them, and (merge function)determines their order
}

console.log(`MergeSorted: ${mergeSort([1, 3, 5, 7, 9, 2, 4, 6, 8])}`);

/*SO if I'm using this on an object per say, I would always think
of creating a new empty array for sorting */
