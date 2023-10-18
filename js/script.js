// splice() function
// at position 2, add 2 elements
// const fruits = ['Lemon', 'Banana', 'Pomelo', 'Dates'];
// // returns an array containing the removed items
// fruits.splice(2,0,'Hog Plum','Papaya');
// console.log(fruits);

// at position 2, remove two elements
// const fruits = ['Lemon', 'Banana', 'Pomelo', 'Dates'];
// // returns an array containing the removed items
// console.log(fruits.splice(2,2,'Orange','Dragon'));
// console.log(fruits);

// remove duplicates from an sorted array 
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
       let i = 0;
       for (let j = 1; j < nums.length; j++) {
           if (nums[j] !== nums[i]) { //  If the elements are not equal then copy the unique element by then to "i+1" position
               nums[++i] = nums[j];
           }
       }
       return i+1;
   };
   var res = removeDuplicates([1,2,4,4,8,10]);

   console.log(res);

