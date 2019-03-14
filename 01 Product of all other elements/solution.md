# how to think about the solution

When dealing with array problems, a common strategy is to compute results from subarrays and build up the solution from those results.

Given `[1, 2, 3, 4, 5]` and index `i`. There will be some elements before and after `i`.

|  `i`  | elems before | elems after |
| :---: | :----------: | :---------: |
|   0   |      0       |      4      |
|   1   |      1       |      3      |
|   2   |      2       |      2      |
|   3   |      3       |      1      |
|   4   |      4       |      0      |

To get the product of all the numbers except at `i`, multiply the elements before and the elements after `i`.

1. Make an array to hold the before elements : `[]`
   1. The first item in the array is just itself: `[1]`
   2. The next items are the current value times the last item in the array
      - `[1, 2]` -> `[1, 2, 6]` -> `[1, 2, 6, 24]` -> `[1, 2, 6, 24, 120]`
      - So we have the products of `[first 1, first 2, first 3, first 4, first 5]`

2. Make an array to hold the after elements : `[]`
   1. Reverse the initial array : `[5, 4, 3, 2, 1]`
   2. The first item in the array is just itself : `[5]`
   3. The next items are the current value times the last item in the array
      - `[5, 20]` -> `[5, 20, 60]` -> `[5, 20, 60, 120]` -> `[5, 20, 60, 120, 120]`
   4. Reverse the after elements array : `[120, 120, 60, 20, 5]`
      - So we have the products of `[last 5, last 4, last 3, last 2, last 1]`

3. Now put the pieces together
   1. When `i == 0`, get the product of the 4 elements after, or `after[i + 1]`
   2. When `i < arr.length - 1`, get the product of the `i - 1` elements before and and `i + 1` elements after `i`
   3. When `i == arr.length - 1`, get the product of the first 4, or `before[i - 1]`