from MergeSort import MergeSort

def test_MergeSort_1():
  arr = [1,8,9,3,7,4,6,2,5]

  actual = MergeSort(arr)
  expected = [1,2,3,4,5,6,7,8,9]

  assert actual == expected

def test_MergeSort_2():
  arr = [9,8,7,6,5,4,3,2,1]

  actual = MergeSort(arr)
  expected = [1,2,3,4,5,6,7,8,9]

  assert actual == expected

def test_MergeSort_3():
  arr = [79, 457, 39, 74, 20, 74, 29, 68, 270, 1]

  actual = MergeSort(arr)
  expected = [1, 20, 29, 39, 68, 74, 74, 79, 270, 457]

  assert actual == expected
