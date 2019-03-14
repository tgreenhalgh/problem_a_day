# how to think about the solution

When dealing with array problems, a common strategy is to compute results from subarrays and build up the solution from those results.

Given `[1, 2, 3, 4, 5]` and index `i`. There will be some elements before and after `i`.

To get the product of all the numbers except at `i`, multiply the elements before and the elements after `i`.

|    before    |  `i`  |    after     |
| :----------: | :---: | :----------: |
|              |   0   | (2)(3)(4)(5) |
|     (1)      |   1   |  (3)(4)(5)   |
|    (1)(2)    |   2   |    (4)(5)    |
|  (1)(2)(3)   |   3   |     (5)      |
| (1)(2)(3)(4) |   4   |              |


1. Make an array to hold the before elements with `1` as the first element : `[]`
   - The next items are the current value times the last item in the array
      - `[1, 1]` -> `[1, 1, 2]` -> `[1, 1, 2, 6]` -> `[1, 1, 2, 6, 24]`
      - We have the products of `[first 1, first 2, first 3, first 4]`

2. Make an array to hold the after elements with `1` as the first element : `[1]`
   - The next items are the current value times the last item in the array
      - `[1, 5]` -> `[1, 5, 20]` -> `[1, 5, 20, 60]` -> `[1, 5, 20, 60, 120]` 
      - We have the products of `[last 1, last 2, last 3, last 4]`

3. Now put the pieces together
   - Before array iterates forward, after array iterates backward
      - `[before[0] * after[4], before[1] * after[3], before[2] * after[2], before[3] * after[1], before[4] * after[0]]` 