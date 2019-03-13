# how to think about the solution

When dealing with array problems, a common strategy is to compute results from subarrays and build up the solution from those results.

Given `[1, 2, 3, 4, 5]` and index `i`.

- `i == 0` has 0 elements before `i` and 4 after.
- `i == 1` has 1 element  before `i` and 3 after.
- `i == 2` has 2 element  before `i` and 2 after.
- `i == 3` has 3 element  before `i` and 1 after.
- `i == 4` has 4 element  before `i` and 0 after.

