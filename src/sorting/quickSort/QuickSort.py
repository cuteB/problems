# Export
# Worst case O(n^2)
# usually O(n*log(n)) with good pivot
def QuickSort(arr):
  #
  length = len(arr)

  if (len == 0):
    return arr

  return _quickSort(arr, 0, length - 1)

# helper function.
# Main swapping/sorting of quicksort
#   Use element at high as pivot.
#   Go through list from low -> high-1
#     if element is less that pivot -> swap with element at i
#     increment i,
#   At the end swap pivot with element at i. All elements less that it will
#   be before i and all elements bigger will be after i
def _partition(arr, low, high):
  i = low
  pivot = arr[high];

  for j in range(low, high): # don't need last element (its the pivot)
    if (arr[j] < pivot):
      # lower that pivot move over to side
      temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
      i += 1

  # move pivot to proper spot
  temp = arr[i]
  arr[i] = arr[high]
  arr[high] = temp

  return i

# recursion helper. keep calling _partition to sort both sides of the pivot
# then sort each side of the pivot until the indexes cross
def _quickSort(arr, low, high):
  if (low < high):
    p = _partition(arr, low, high)

    _quickSort(arr, low, p-1)
    _quickSort(arr, p+1, high)

  return arr
