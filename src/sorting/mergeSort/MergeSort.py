def MergeSort(arr):
  return _mergeSort(arr)

def _mergeSort(arr):
  length = len(arr)
  if (length <= 1):
    return arr

  mid = int(length / 2)

  lowArr = _mergeSort(arr[0:mid])
  highArr = _mergeSort(arr[mid:length])

  l = 0
  h = 0
  lLen = len(lowArr)
  hLen = len(highArr)
  sorted = []

  while (l < lLen and h < hLen):
    if (lowArr[l] < highArr[h]):
      # add from low
      sorted.append(lowArr[l])
      l += 1

    else:
      sorted.append(highArr[h])
      h += 1

  while (l < lLen):
    sorted.append(lowArr[l])
    l += 1

  while (h < hLen):
    sorted.append(highArr[h])
    h += 1

  return sorted
