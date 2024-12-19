//  1) find the longest common substring 








// 2) find triplets with zero sum 
// function findTriplets(nums, target) {
//     nums.sort((a, b) => a - b); 
//     const result = [];
  
//     for (let i = 0; i < nums.length - 2; i++) {
//       if (i > 0 && nums[i] === nums[i - 1]) continue; 
  
//       let left = i + 1;
//       let right = nums.length - 1;
  
//       while (left < right) {
//         const sum = nums[i] + nums[left] + nums[right];
  
//         if (sum === target) {
//           result.push([nums[i], nums[left], nums[right]]);
//           left++;
//           right--;
  
          
//           while (left < right && nums[left] === nums[left - 1]) left++;
//           while (left < right && nums[right] === nums[right + 1]) right--;
//         } else if (sum < target) {
//           left++
//         } else {
//           right--; 
//         }
//       }
//     }
  
//     return result;
//   }
  
  
//   const nums = [-1, 0, 1, 2, -1, -4];
//   const target = 0;
//   const triplets = findTriplets(nums, target);
//   console.log("Triplets with zero sum:", triplets);




// 4) find all anagrams in a  string  
//  >>> 

// function findAnagrams(text, pattern) {
//     const result = [];
//     const patternLength = pattern.length;
//     const sortedPattern = pattern.split('').sort().join(''); 
  
//     for (let i = 0; i <= text.length - patternLength; i++) {
//       const substring = text.slice(i, i + patternLength); 
//       if (substring.split('').sort().join('') === sortedPattern) {
//         result.push(i); 
//       }
//     }
  
//     return result;
//   }
  
 
//   const text = "cbaebabacd";
//   const pattern = "abc";
//   const indices = findAnagrams(text, pattern);
//   console.log("Anagram Start Indices:", indices);




// 5 ) merge intervals 


// function mergeIntervals(intervals, newInterval) {
//     const result = [];
//     let i = 0;
  
    
//     while (i < intervals.length && intervals[i][1] < newInterval[0]) {
//       result.push(intervals[i]);
//       i++;
//     }
  
  
//     while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
//       newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
//       newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
//       i++;
//     }
  
    
//     result.push(newInterval);
  
    
//     while (i < intervals.length) {
//       result.push(intervals[i]);
//       i++;
//     }
  
//     return result;
//   }
  
 
//   const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
//   const newInterval = [0, 1];
//   const mergedIntervals = mergeIntervals(intervals, newInterval);
//   console.log("Merged Intervals:", mergedIntervals);





